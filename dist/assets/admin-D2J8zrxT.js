import{c as e,o as t,t as n,u as r}from"./main-DPQfiBp-.js";JSON.parse(localStorage.getItem(`user`)||`null`)||(window.location.href=`/login.html`);var i=document.getElementById(`app`),a=`dashboard`,o=JSON.parse(JSON.stringify(r)),s=null,c={totalStudents:847,totalRevenue:124500,activeCourses:o.length,pendingDoubts:5},l=[{id:1,name:`राहुल शर्मा`,phone:`9876543210`,course:`संपूर्ण हिंदी व्याकरण`,joined:`03 Apr 2026`,status:`active`},{id:2,name:`प्रिया मेघवाल`,phone:`9876543211`,course:`स्कूल व्याख्याता टेस्ट-02`,joined:`01 Apr 2026`,status:`active`},{id:3,name:`विकास चौधरी`,phone:`9876543212`,course:`हिंदी साहित्य इतिहास`,joined:`28 Mar 2026`,status:`active`},{id:4,name:`सुनीता कुमारी`,phone:`9876543213`,course:`वरिष्ठ शिक्षक टेस्ट-01`,joined:`25 Mar 2026`,status:`inactive`}],u=[{id:1,student:`राहुल शर्मा`,question:`रीतिकाल को श्रृंगार काल क्यों कहते हैं?`,category:`साहित्य`,status:`pending`,date:`08 Apr 2026`},{id:2,student:`प्रिया मेघवाल`,question:`उत्प्रेक्षा और रूपक अलंकार में क्या फर्क है?`,category:`काव्यशास्त्र`,status:`pending`,date:`07 Apr 2026`},{id:3,student:`विकास चौधरी`,question:`द्विगु और बहुव्रीहि समास का अंतर बताएं?`,category:`व्याकरण`,status:`resolved`,date:`05 Apr 2026`,answer:`द्विगु में संख्यावाचक पूर्वपद होता है, बहुव्रीहि में दोनों पद मिलकर तीसरे अर्थ को प्रकट करते हैं।`}];function d(){return[{id:`dashboard`,icon:`📊`,label:`Dashboard`},{id:`courses`,icon:`📚`,label:`Courses`},{id:`students`,icon:`👥`,label:`Students`},{id:`doubts`,icon:`💬`,label:`Q&A Doubts`},{id:`offers`,icon:`🎁`,label:`Offers`},{id:`analytics`,icon:`📈`,label:`Analytics`}].map(e=>`
        <div class="admin-nav-item ${a===e.id?`active`:``}" onclick="setNav('${e.id}')">
          <span>${e.icon}</span>
          <span>${e.label}</span>
        </div>
      `).join(``)}function f(){switch(a){case`dashboard`:return p();case`courses`:return m();case`students`:return h();case`doubts`:return g();case`offers`:return _();case`analytics`:return v();default:return p()}}function p(){return`
        <div class="admin-header">
          <h1>📊 Dashboard</h1>
          <span style="color:var(--text-secondary);font-size:0.9rem;">आज: ${new Date().toLocaleDateString(`hi-IN`,{weekday:`long`,year:`numeric`,month:`long`,day:`numeric`})}</span>
        </div>

        <div class="dashboard-stats">
          <div class="dashboard-stat-card">
            <div class="icon" style="background:var(--accent-light);color:var(--accent);">👥</div>
            <div class="value">${c.totalStudents}</div>
            <div class="label">कुल विद्यार्थी</div>
          </div>
          <div class="dashboard-stat-card">
            <div class="icon" style="background:var(--success-light);color:var(--success);">💰</div>
            <div class="value">${n(c.totalRevenue)}</div>
            <div class="label">कुल राजस्व</div>
          </div>
          <div class="dashboard-stat-card">
            <div class="icon" style="background:var(--info-light);color:var(--info);">📚</div>
            <div class="value">${c.activeCourses}</div>
            <div class="label">एक्टिव कोर्स</div>
          </div>
          <div class="dashboard-stat-card" style="border:2px solid var(--warning);">
            <div class="icon" style="background:var(--warning-light);color:var(--warning);">💬</div>
            <div class="value">${c.pendingDoubts}</div>
            <div class="label">Pending Doubts</div>
          </div>
        </div>

        <!-- Recent Activity -->
        <div class="card" style="padding:var(--space-xl);">
          <h3 style="margin-bottom:var(--space-lg);font-family:var(--font-hindi);">🕐 Recent Activity</h3>
          <div style="display:flex;flex-direction:column;gap:var(--space-md);">
            <div style="display:flex;align-items:center;gap:var(--space-md);padding:var(--space-md);background:var(--bg-primary);border-radius:var(--radius-md);">
              <span>👤</span>
              <div style="flex:1;">
                <span style="font-weight:600;">राहुल शर्मा</span> ने <span style="color:var(--accent);">संपूर्ण हिंदी व्याकरण</span> कोर्स खरीदा
              </div>
              <span style="font-size:0.78rem;color:var(--text-muted);">2 घंटे पहले</span>
            </div>
            <div style="display:flex;align-items:center;gap:var(--space-md);padding:var(--space-md);background:var(--bg-primary);border-radius:var(--radius-md);">
              <span>💬</span>
              <div style="flex:1;">
                <span style="font-weight:600;">प्रिया मेघवाल</span> ने एक <span style="color:var(--warning);">doubt</span> पूछा
              </div>
              <span style="font-size:0.78rem;color:var(--text-muted);">5 घंटे पहले</span>
            </div>
            <div style="display:flex;align-items:center;gap:var(--space-md);padding:var(--space-md);background:var(--bg-primary);border-radius:var(--radius-md);">
              <span>📝</span>
              <div style="flex:1;">
                <span style="font-weight:600;">विकास चौधरी</span> ने <span style="color:var(--success);">टेस्ट #5</span> में 82% स्कोर किया
              </div>
              <span style="font-size:0.78rem;color:var(--text-muted);">1 दिन पहले</span>
            </div>
          </div>
        </div>
      `}function m(){return`
        <div class="admin-header">
          <h1>📚 Course Management</h1>
          <button class="btn btn-primary" onclick="openCourseForm()">+ नया कोर्स जोड़ें</button>
        </div>

        <div class="admin-table-container">
          <table class="admin-table">
            <thead>
              <tr>
                <th>कोर्स का नाम</th>
                <th>Category</th>
                <th>कीमत</th>
                <th>Discount</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              ${o.map(e=>`
                <tr>
                  <td style="font-family:var(--font-hindi);font-weight:600;max-width:250px;">${e.title}</td>
                  <td><span class="badge badge-primary">${e.category}</span></td>
                  <td>${n(e.price)}</td>
                  <td><span class="badge badge-success">${e.discount}% OFF</span></td>
                  <td><span class="badge badge-success">Active</span></td>
                  <td class="actions">
                    <button class="action-btn edit" onclick="editCourse(${e.id})" title="Edit">✏️</button>
                    <button class="action-btn delete" onclick="deleteCourse(${e.id})" title="Delete">🗑️</button>
                  </td>
                </tr>
              `).join(``)}
            </tbody>
          </table>
        </div>

        <!-- Course Form Modal -->
        <div class="modal-overlay" id="courseFormOverlay" onclick="closeCourseForm()"></div>
        <div class="modal" id="courseFormModal" style="max-width:600px;">
          <button class="modal-close" onclick="closeCourseForm()">✕</button>
          <h3 id="courseFormTitle" style="margin-bottom:var(--space-xl);font-family:var(--font-hindi);">नया कोर्स जोड़ें</h3>
          <form onsubmit="saveCourse(event)">
            <div class="form-group">
              <label class="form-label">कोर्स का नाम (Hindi) *</label>
              <input type="text" id="cfTitle" class="form-input" placeholder="जैसे: संपूर्ण हिंदी व्याकरण" required>
            </div>
            <div class="form-group">
              <label class="form-label">Description *</label>
              <textarea id="cfDesc" class="form-input" placeholder="कोर्स का विवरण..." required></textarea>
            </div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:var(--space-md);">
              <div class="form-group">
                <label class="form-label">कीमत (₹) *</label>
                <input type="number" id="cfPrice" class="form-input" placeholder="299" required>
              </div>
              <div class="form-group">
                <label class="form-label">Original Price (₹) *</label>
                <input type="number" id="cfOriginal" class="form-input" placeholder="3000" required>
              </div>
            </div>
            <div class="form-group">
              <label class="form-label">Category *</label>
              <select id="cfCategory" class="form-select" required>
                ${e.filter(e=>e.id!==`all`).map(e=>`<option value="${e.id}">${e.label}</option>`).join(``)}
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">Features (comma separated)</label>
              <input type="text" id="cfFeatures" class="form-input" placeholder="15 टेस्ट, 1650 प्रश्न, 5 बार">
            </div>
            <button type="submit" class="btn btn-primary btn-lg btn-full">💾 सेव करें</button>
          </form>
        </div>
      `}function h(){return`
        <div class="admin-header">
          <h1>👥 Student Management</h1>
          <span style="color:var(--text-secondary);">Total: ${l.length} students</span>
        </div>
        <div class="admin-table-container">
          <table class="admin-table">
            <thead>
              <tr><th>नाम</th><th>फ़ोन</th><th>कोर्स</th><th>Joined</th><th>Status</th></tr>
            </thead>
            <tbody>
              ${l.map(e=>`
                <tr>
                  <td style="font-weight:600;font-family:var(--font-hindi);">${e.name}</td>
                  <td>${e.phone}</td>
                  <td><span class="badge badge-primary" style="font-family:var(--font-hindi);">${e.course}</span></td>
                  <td>${e.joined}</td>
                  <td><span class="badge ${e.status===`active`?`badge-success`:`badge-warning`}">${e.status===`active`?`Active`:`Inactive`}</span></td>
                </tr>
              `).join(``)}
            </tbody>
          </table>
        </div>
      `}function g(){return`
        <div class="admin-header">
          <h1>💬 Q&A Doubt Panel</h1>
          <span class="badge badge-warning" style="font-size:0.9rem;padding:8px 16px;">⏳ ${u.filter(e=>e.status===`pending`).length} Pending</span>
        </div>
        <div class="qna-list">
          ${u.map(e=>`
            <div class="qna-item ${e.status}">
              <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:var(--space-sm);">
                <div>
                  <span style="font-weight:600;">${e.student}</span>
                  <span class="badge badge-primary" style="margin-left:8px;">${e.category}</span>
                </div>
                <span class="badge ${e.status===`resolved`?`badge-success`:`badge-warning`}">${e.status===`resolved`?`✅ Resolved`:`⏳ Pending`}</span>
              </div>
              <div class="qna-question" style="font-family:var(--font-hindi);">${e.question}</div>
              ${e.answer?`<div class="qna-answer"><strong>✅ आपका उत्तर:</strong> ${e.answer}</div>`:`
                <div style="margin-top:var(--space-md);display:flex;gap:var(--space-sm);">
                  <input type="text" class="form-input" placeholder="उत्तर लिखें..." id="reply-${e.id}" style="flex:1;padding:10px 14px;">
                  <button class="btn btn-primary btn-sm" onclick="replyDoubt(${e.id})">उत्तर दें</button>
                </div>
              `}
              <div class="qna-meta"><span>${e.date}</span></div>
            </div>
          `).join(``)}
        </div>
      `}function _(){return`
        <div class="admin-header">
          <h1>🎁 Offer Management</h1>
          <button class="btn btn-primary" onclick="showToast('Feature coming with Supabase integration!')">+ नया ऑफर बनाएं</button>
        </div>
        <div class="card" style="padding:var(--space-xl);">
          <h3 style="margin-bottom:var(--space-lg);font-family:var(--font-hindi);">📢 Active Offers</h3>
          <div style="padding:var(--space-lg);background:linear-gradient(135deg,var(--accent),#FF9A6C);border-radius:var(--radius-lg);color:white;margin-bottom:var(--space-lg);">
            <h4 style="font-family:var(--font-hindi);margin-bottom:var(--space-sm);">🎉 स्पेशल ऑफर</h4>
            <p style="opacity:0.9;font-size:0.9rem;">सभी ऑनलाइन टेस्ट सीरीज़ पर महाबचत ऑफर!</p>
            <p style="font-size:0.85rem;margin-top:var(--space-sm);">समाप्ति: 30 April 2026</p>
          </div>
          <p style="color:var(--text-secondary);font-size:0.9rem;font-family:var(--font-hindi);">
            💡 Supabase connect करने के बाद आप यहाँ से ऑफर create, edit और delete कर सकते हैं। Start/end date set karo, automatic banner website pe dikhega!
          </p>
        </div>
      `}function v(){return`
        <div class="admin-header"><h1>📈 Analytics</h1></div>
        <div class="dashboard-stats">
          <div class="dashboard-stat-card">
            <div class="icon" style="background:var(--accent-light);color:var(--accent);">📈</div>
            <div class="value">+23%</div>
            <div class="label">इस माह छात्र वृद्धि</div>
          </div>
          <div class="dashboard-stat-card">
            <div class="icon" style="background:var(--success-light);color:var(--success);">💰</div>
            <div class="value">${n(38500)}</div>
            <div class="label">इस माह राजस्व</div>
          </div>
          <div class="dashboard-stat-card">
            <div class="icon" style="background:var(--info-light);color:var(--info);">📝</div>
            <div class="value">142</div>
            <div class="label">टेस्ट attempts इस माह</div>
          </div>
          <div class="dashboard-stat-card">
            <div class="icon" style="background:var(--warning-light);color:var(--warning);">⭐</div>
            <div class="value">4.8</div>
            <div class="label">औसत रेटिंग</div>
          </div>
        </div>
        <div class="card" style="padding:var(--space-xl);">
          <h3 style="margin-bottom:var(--space-lg);font-family:var(--font-hindi);">🏆 Top Courses by Revenue</h3>
          ${o.slice(0,5).map((e,t)=>`
            <div style="display:flex;align-items:center;gap:var(--space-md);padding:var(--space-md) 0;${t<4?`border-bottom:1px solid var(--border-light);`:``}">
              <span style="font-weight:800;color:var(--accent);font-size:1.1rem;width:30px;">#${t+1}</span>
              <div style="flex:1;font-family:var(--font-hindi);font-weight:500;">${e.title}</div>
              <span style="font-weight:700;">${n(e.price*(Math.floor(Math.random()*50)+10))}</span>
            </div>
          `).join(``)}
        </div>
      `}window.openCourseForm=function(e=null){s=e,document.getElementById(`courseFormTitle`).textContent=e?`कोर्स एडिट करें`:`नया कोर्स जोड़ें`,e&&(document.getElementById(`cfTitle`).value=e.title,document.getElementById(`cfDesc`).value=e.description,document.getElementById(`cfPrice`).value=e.price,document.getElementById(`cfOriginal`).value=e.originalPrice,document.getElementById(`cfCategory`).value=e.category,document.getElementById(`cfFeatures`).value=e.features.join(`, `)),document.getElementById(`courseFormModal`).classList.add(`open`),document.getElementById(`courseFormOverlay`).classList.add(`open`)},window.closeCourseForm=function(){document.getElementById(`courseFormModal`).classList.remove(`open`),document.getElementById(`courseFormOverlay`).classList.remove(`open`),s=null},window.editCourse=function(e){let t=o.find(t=>t.id===e);t&&openCourseForm(t)},window.deleteCourse=function(e){confirm(`क्या आप इस कोर्स को हटाना चाहते हैं?`)&&(o=o.filter(t=>t.id!==e),t(`🗑️ कोर्स हटा दिया गया!`),y())},window.saveCourse=function(e){e.preventDefault();let n=parseInt(document.getElementById(`cfPrice`).value),r=parseInt(document.getElementById(`cfOriginal`).value),i={title:document.getElementById(`cfTitle`).value,description:document.getElementById(`cfDesc`).value,price:n,originalPrice:r,discount:Math.round((1-n/r)*100*100)/100,category:document.getElementById(`cfCategory`).value,features:document.getElementById(`cfFeatures`).value.split(`,`).map(e=>e.trim()).filter(Boolean),gradient:`linear-gradient(135deg, #1E3A5F, #2B4F7E)`,isNew:!0,isFeatured:!1};s?(Object.assign(s,i),t(`✅ कोर्स अपडेट किया गया!`)):(i.id=Date.now(),o.push(i),t(`✅ नया कोर्स जोड़ा गया!`)),closeCourseForm(),y()},window.replyDoubt=function(e){let n=document.getElementById(`reply-${e}`);if(!n||!n.value.trim())return;let r=u.find(t=>t.id===e);r&&(r.answer=n.value,r.status=`resolved`,t(`✅ उत्तर भेज दिया गया!`),y())},window.setNav=function(e){a=e,y()},window.handleLogout=function(){localStorage.removeItem(`user`),t(`👋 लॉगआउट सफल!`),setTimeout(()=>window.location.href=`/login.html`,500)};function y(){i.innerHTML=`
        <div class="admin-layout">
          <div class="admin-sidebar">
            <div class="admin-sidebar-logo">
              <div class="nav-logo-icon" style="width:36px;height:36px;font-size:0.9rem;">PC</div>
              <div>
                <div style="font-weight:700;font-size:0.95rem;">Admin Panel</div>
                <div style="font-size:0.7rem;opacity:0.5;">प्रज्ञा क्लासेज</div>
              </div>
            </div>
            ${d()}
            <div style="margin-top:auto;padding-top:var(--space-xl);border-top:1px solid rgba(255,255,255,0.1);">
              <div class="admin-nav-item" onclick="window.location.href='/'">
                <span>🌐</span><span>Website देखें</span>
              </div>
              <div class="admin-nav-item" onclick="handleLogout()" style="color:#EF4444;">
                <span>🚪</span><span>Logout</span>
              </div>
            </div>
          </div>
          <div class="admin-main">
            ${f()}
          </div>
        </div>
      `}y();