-- =========================================
-- PRAGYA CLASSES BMR — Supabase Database Schema
-- Run this in your Supabase SQL Editor
-- =========================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ==============================
-- 1. PROFILES (extends auth.users)
-- ==============================
CREATE TABLE profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT NOT NULL,
  phone TEXT,
  role TEXT NOT NULL DEFAULT 'student' CHECK (role IN ('student', 'admin')),
  avatar_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Auto-create profile on user signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name, phone, role)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'full_name', 'Student'),
    COALESCE(NEW.raw_user_meta_data->>'phone', ''),
    'student'
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- ==============================
-- 2. COURSES
-- ==============================
CREATE TABLE courses (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  title_en TEXT,
  description TEXT,
  category TEXT NOT NULL,
  price INTEGER NOT NULL,
  original_price INTEGER,
  discount_percent DECIMAL(5,2),
  features TEXT[], -- array of feature strings
  thumbnail_url TEXT,
  gradient TEXT DEFAULT 'linear-gradient(135deg, #1E3A5F, #2B4F7E)',
  is_new BOOLEAN DEFAULT FALSE,
  is_featured BOOLEAN DEFAULT FALSE,
  is_published BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ==============================
-- 3. TEST SERIES
-- ==============================
CREATE TABLE test_series (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  category TEXT NOT NULL,
  price INTEGER DEFAULT 0,
  original_price INTEGER,
  discount_percent DECIMAL(5,2),
  total_questions INTEGER DEFAULT 0,
  duration_minutes INTEGER DEFAULT 30,
  attempts_allowed INTEGER DEFAULT 5,
  is_free BOOLEAN DEFAULT FALSE,
  is_published BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ==============================
-- 4. QUESTIONS
-- ==============================
CREATE TABLE questions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  test_series_id UUID REFERENCES test_series(id) ON DELETE CASCADE,
  question_text TEXT NOT NULL,
  option_a TEXT NOT NULL,
  option_b TEXT NOT NULL,
  option_c TEXT NOT NULL,
  option_d TEXT NOT NULL,
  correct_option INTEGER NOT NULL CHECK (correct_option BETWEEN 0 AND 3),
  topic TEXT,
  explanation TEXT,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ==============================
-- 5. ENROLLMENTS
-- ==============================
CREATE TABLE enrollments (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  course_id UUID REFERENCES courses(id) ON DELETE CASCADE,
  payment_method TEXT DEFAULT 'whatsapp',
  payment_amount INTEGER,
  enrolled_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, course_id)
);

-- ==============================
-- 6. TEST RESULTS
-- ==============================
CREATE TABLE test_results (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  test_series_id UUID REFERENCES test_series(id) ON DELETE CASCADE,
  score INTEGER NOT NULL,
  total INTEGER NOT NULL,
  percentage DECIMAL(5,2),
  time_taken_seconds INTEGER,
  answers_json JSONB, -- {question_id: selected_option}
  completed_at TIMESTAMPTZ DEFAULT NOW()
);

-- ==============================
-- 7. DOUBTS (Q&A)
-- ==============================
CREATE TABLE doubts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  question_text TEXT NOT NULL,
  image_url TEXT,
  category TEXT,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'resolved')),
  admin_reply TEXT,
  replied_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ==============================
-- 8. CONTACT MESSAGES
-- ==============================
CREATE TABLE contact_messages (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  phone TEXT,
  email TEXT,
  message TEXT NOT NULL,
  is_read BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ==============================
-- 9. SPECIAL OFFERS
-- ==============================
CREATE TABLE offers (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  description TEXT,
  discount_text TEXT,
  start_date TIMESTAMPTZ,
  end_date TIMESTAMPTZ,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ==============================
-- 10. FREE RESOURCES
-- ==============================
CREATE TABLE resources (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('video', 'pdf', 'test')),
  category TEXT,
  url TEXT, -- YouTube URL or external link
  file_url TEXT, -- Supabase Storage URL for PDFs
  file_size TEXT,
  page_count INTEGER,
  duration TEXT, -- for videos
  is_published BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ==============================
-- ROW LEVEL SECURITY (RLS)
-- ==============================

-- Enable RLS on all tables
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE test_series ENABLE ROW LEVEL SECURITY;
ALTER TABLE questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE enrollments ENABLE ROW LEVEL SECURITY;
ALTER TABLE test_results ENABLE ROW LEVEL SECURITY;
ALTER TABLE doubts ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE offers ENABLE ROW LEVEL SECURITY;
ALTER TABLE resources ENABLE ROW LEVEL SECURITY;

-- Profiles: users can read their own, admins can read all
CREATE POLICY "Users can view own profile" ON profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can update own profile" ON profiles FOR UPDATE USING (auth.uid() = id);
CREATE POLICY "Admins can view all profiles" ON profiles FOR SELECT USING (
  EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
);

-- Courses: everyone can read published, admins can CRUD
CREATE POLICY "Anyone can view published courses" ON courses FOR SELECT USING (is_published = TRUE);
CREATE POLICY "Admins can manage courses" ON courses FOR ALL USING (
  EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
);

-- Test Series: everyone can read published
CREATE POLICY "Anyone can view published tests" ON test_series FOR SELECT USING (is_published = TRUE);
CREATE POLICY "Admins can manage tests" ON test_series FOR ALL USING (
  EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
);

-- Questions: enrolled users or free tests
CREATE POLICY "Users can view questions" ON questions FOR SELECT USING (TRUE);
CREATE POLICY "Admins can manage questions" ON questions FOR ALL USING (
  EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
);

-- Enrollments: users see own, admins see all
CREATE POLICY "Users can view own enrollments" ON enrollments FOR SELECT USING (user_id = auth.uid());
CREATE POLICY "Admins can manage enrollments" ON enrollments FOR ALL USING (
  EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
);

-- Test Results: users see own, admins see all
CREATE POLICY "Users can view own results" ON test_results FOR SELECT USING (user_id = auth.uid());
CREATE POLICY "Users can insert own results" ON test_results FOR INSERT WITH CHECK (user_id = auth.uid());
CREATE POLICY "Admins can view all results" ON test_results FOR SELECT USING (
  EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
);

-- Doubts: users see own, admins see all
CREATE POLICY "Users can view own doubts" ON doubts FOR SELECT USING (user_id = auth.uid());
CREATE POLICY "Users can create doubts" ON doubts FOR INSERT WITH CHECK (user_id = auth.uid());
CREATE POLICY "Admins can manage doubts" ON doubts FOR ALL USING (
  EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
);

-- Contact: anyone can insert, admins can read
CREATE POLICY "Anyone can send contact message" ON contact_messages FOR INSERT WITH CHECK (TRUE);
CREATE POLICY "Admins can view messages" ON contact_messages FOR SELECT USING (
  EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
);

-- Offers: everyone can read active
CREATE POLICY "Anyone can view active offers" ON offers FOR SELECT USING (is_active = TRUE);
CREATE POLICY "Admins can manage offers" ON offers FOR ALL USING (
  EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
);

-- Resources: everyone can read published
CREATE POLICY "Anyone can view published resources" ON resources FOR SELECT USING (is_published = TRUE);
CREATE POLICY "Admins can manage resources" ON resources FOR ALL USING (
  EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
);

-- ==============================
-- ENABLE REALTIME for Q&A
-- ==============================
ALTER PUBLICATION supabase_realtime ADD TABLE doubts;
