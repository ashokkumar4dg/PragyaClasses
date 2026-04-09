import{a as e,g as t,i as n,l as r,n as i,o as a,r as o}from"./main-DPQfiBp-.js";var s=document.getElementById(`app`);window.handleContactSubmit=function(e){e.preventDefault();let n=e.target,r=n.querySelector(`#contactName`).value,i=n.querySelector(`#contactPhone`).value,o=n.querySelector(`#contactEmail`).value,s=n.querySelector(`#contactMsg`).value;a(`✅ आपका संदेश सफलतापूर्वक भेजा गया!`),n.reset();let c=`नमस्कार! मेरा नाम ${r} है।\n📱 ${i}\n✉️ ${o}\n\n${s}`;setTimeout(()=>{confirm(`क्या आप WhatsApp पर भी मैसेज भेजना चाहेंगे? (तुरंत जवाब मिलेगा)`)&&window.open(t(c),`_blank`)},1e3)},s.innerHTML=`
      ${n()}

      <div class="contact-page">
        <div class="container section">
          <div class="section-header">
            <div class="section-label">संपर्क करें</div>
            <h1 class="section-title">हमसे <span>बात करें</span></h1>
            <p class="section-desc">कोई भी सवाल हो — हम मदद के लिए तैयार हैं!</p>
          </div>

          <div class="contact-grid">
            <!-- Contact Info -->
            <div>
              <div class="contact-info-card reveal">
                <div class="contact-info-icon">📞</div>
                <div>
                  <h4 style="font-weight:600;margin-bottom:4px;">फ़ोन नंबर</h4>
                  <p style="color:var(--text-secondary);">
                    <a href="tel:+91${r.phone1}" style="color:var(--primary);font-weight:600;">${r.phone1}</a><br>
                    <a href="tel:+91${r.phone2}" style="color:var(--primary);font-weight:600;">${r.phone2}</a>
                  </p>
                </div>
              </div>

              <div class="contact-info-card reveal reveal-delay-1">
                <div class="contact-info-icon" style="background:var(--success-light);color:var(--success);">💬</div>
                <div>
                  <h4 style="font-weight:600;margin-bottom:4px;">WhatsApp</h4>
                  <p style="color:var(--text-secondary);font-size:0.88rem;">तुरंत जवाब के लिए WhatsApp करें</p>
                  <a href="${t()}" target="_blank" class="btn btn-whatsapp btn-sm" style="margin-top:8px;">
                    WhatsApp पर बात करें
                  </a>
                </div>
              </div>

              <div class="contact-info-card reveal reveal-delay-2">
                <div class="contact-info-icon" style="background:var(--info-light);color:var(--info);">✉️</div>
                <div>
                  <h4 style="font-weight:600;margin-bottom:4px;">ईमेल</h4>
                  <a href="mailto:${r.email}" style="color:var(--primary);font-size:0.9rem;">${r.email}</a>
                </div>
              </div>

              <div class="contact-info-card reveal reveal-delay-3">
                <div class="contact-info-icon" style="background:var(--warning-light);color:var(--warning);">📍</div>
                <div>
                  <h4 style="font-weight:600;margin-bottom:4px;">पता</h4>
                  <p style="color:var(--text-secondary);font-size:0.88rem;font-family:var(--font-hindi);line-height:1.6;">
                    ${r.address}
                  </p>
                </div>
              </div>

              <div class="contact-info-card reveal reveal-delay-4">
                <div class="contact-info-icon" style="background:var(--danger-light);color:var(--danger);">🕐</div>
                <div>
                  <h4 style="font-weight:600;margin-bottom:4px;">समय</h4>
                  <p style="color:var(--text-secondary);font-size:0.88rem;">
                    सोम - शनि: 9:00 AM - 8:00 PM<br>
                    रविवार: 10:00 AM - 5:00 PM
                  </p>
                </div>
              </div>
            </div>

            <!-- Contact Form -->
            <div class="contact-form-card reveal">
              <h3 style="font-size:1.2rem;margin-bottom:var(--space-xl);font-family:var(--font-hindi);">📩 हमें मैसेज भेजें</h3>
              <form onsubmit="handleContactSubmit(event)">
                <div class="form-group">
                  <label class="form-label" for="contactName">आपका नाम *</label>
                  <input type="text" id="contactName" class="form-input" placeholder="अपना नाम लिखें" required>
                </div>
                <div class="form-group">
                  <label class="form-label" for="contactPhone">मोबाइल नंबर *</label>
                  <div class="phone-input-group">
                    <span class="phone-prefix">+91</span>
                    <input type="tel" id="contactPhone" placeholder="98XXXXXXXX" required pattern="[0-9]{10}" maxlength="10" oninput="this.value=this.value.replace(/[^0-9]/g,'').slice(0,10)">
                  </div>
                </div>
                <div class="form-group">
                  <label class="form-label" for="contactEmail">ईमेल (वैकल्पिक)</label>
                  <input type="email" id="contactEmail" class="form-input" placeholder="email@example.com">
                </div>
                <div class="form-group">
                  <label class="form-label" for="contactMsg">आपका संदेश *</label>
                  <textarea id="contactMsg" class="form-input" placeholder="अपना सवाल या संदेश यहाँ लिखें..." required></textarea>
                </div>
                <button type="submit" class="btn btn-primary btn-lg btn-full">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                  संदेश भेजें
                </button>
              </form>
            </div>
          </div>

          <!-- Map -->
          <div style="margin-top:var(--space-3xl);border-radius:var(--radius-xl);overflow:hidden;box-shadow:var(--shadow-lg);" class="reveal">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.123!2d71.383!3d25.75!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDQ1JzAwLjAiTiA3McKwMjInNTguOCJF!5e0!3m2!1sen!2sin!4v1"
              width="100%" height="350" style="border:0;" allowfullscreen loading="lazy"
              title="Pragya Classes Barmer"></iframe>
          </div>
        </div>
      </div>
      ${o()}
      ${e()}
    `,i();