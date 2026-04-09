import{a as e,f as t,i as n,l as r,n as i,r as a}from"./main-DPQfiBp-.js";var o=document.getElementById(`app`),s=`pdfs`;function c(){let e=document.getElementById(`resourceContent`);e&&(s===`pdfs`?e.innerHTML=`
          <div style="display:flex;flex-direction:column;gap:var(--space-md);">
            ${t.pdfs.map((e,t)=>`
              <div class="resource-card reveal revealed" style="animation-delay:${t*.05}s">
                <div class="resource-icon pdf">📄</div>
                <div style="flex:1;">
                  <h4 style="font-family:var(--font-hindi);font-size:0.95rem;margin-bottom:4px;">${e.title}</h4>
                  <div style="display:flex;gap:var(--space-md);font-size:0.8rem;color:var(--text-secondary);">
                    <span>📑 ${e.pages} पेज</span>
                    <span>💾 ${e.size}</span>
                    <span class="badge badge-primary">${e.topic}</span>
                  </div>
                </div>
                <button class="btn btn-primary btn-sm" onclick="alert('📥 PDF डाउनलोड शुरू! (Demo Mode)')">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                  डाउनलोड
                </button>
              </div>
            `).join(``)}
          </div>
        `:s===`videos`?e.innerHTML=`
          <div style="display:flex;flex-direction:column;gap:var(--space-md);">
            ${t.videos.map((e,t)=>`
              <div class="resource-card reveal revealed" style="animation-delay:${t*.05}s">
                <div class="resource-icon video">🎥</div>
                <div style="flex:1;">
                  <h4 style="font-family:var(--font-hindi);font-size:0.95rem;margin-bottom:4px;">${e.title}</h4>
                  <div style="font-size:0.8rem;color:var(--text-secondary);">
                    <span>⏱️ ${e.duration}</span>
                    <span class="badge badge-primary" style="margin-left:8px;">${e.topic}</span>
                  </div>
                </div>
                <a href="${r.youtube}" target="_blank" class="btn btn-sm" style="background:red;color:white;">▶ देखें</a>
              </div>
            `).join(``)}
            <div style="text-align:center;margin-top:var(--space-xl);">
              <a href="${r.youtube}" target="_blank" class="btn btn-lg" style="background:red;color:white;">
                YouTube पर 7000+ Videos देखें →
              </a>
            </div>
          </div>
        `:e.innerHTML=`
          <div style="background:linear-gradient(135deg,var(--success),#34D399);border-radius:var(--radius-xl);padding:var(--space-2xl);color:white;text-align:center;">
            <div style="font-size:3rem;margin-bottom:var(--space-md);">🎯</div>
            <h3 style="font-size:1.3rem;margin-bottom:var(--space-sm);font-family:var(--font-hindi);">फ्री डेमो टेस्ट उपलब्ध!</h3>
            <p style="opacity:0.9;margin-bottom:var(--space-xl);">15 प्रश्न | 15 मिनट | हिंदी व्याकरण & साहित्य | Instant Result</p>
            <a href="/test-series.html" class="btn btn-lg" style="background:white;color:var(--success);">अभी टेस्ट दें →</a>
          </div>
        `)}window.setTab=function(e){s=e,document.querySelectorAll(`.tab`).forEach(t=>t.classList.toggle(`active`,t.dataset.tab===e)),c()},o.innerHTML=`
      ${n()}
      <div class="resources-page">
        <div class="container section">
          <div class="section-header">
            <div class="section-label">फ्री रिसोर्सेज</div>
            <h1 class="section-title">फ्री <span>स्टडी मटेरियल</span></h1>
            <p class="section-desc">फ्री नोट्स, वीडियो और टेस्ट — अपनी तैयारी शुरू करें</p>
          </div>

          <div class="tabs" style="margin-bottom:var(--space-2xl);max-width:400px;margin-left:auto;margin-right:auto;">
            <button class="tab active" data-tab="pdfs" onclick="setTab('pdfs')">📄 PDF नोट्स</button>
            <button class="tab" data-tab="videos" onclick="setTab('videos')">🎥 वीडियो</button>
            <button class="tab" data-tab="tests" onclick="setTab('tests')">📝 फ्री टेस्ट</button>
          </div>

          <div id="resourceContent"></div>

          <!-- CTA -->
          <div style="text-align:center;margin-top:var(--space-3xl);padding:var(--space-2xl);background:var(--primary-bg);border-radius:var(--radius-xl);">
            <h3 style="font-family:var(--font-hindi);margin-bottom:var(--space-sm);">🔓 पूरा एक्सेस चाहिए?</h3>
            <p style="color:var(--text-secondary);margin-bottom:var(--space-lg);">Register करके सभी premium नोट्स, वीडियो और टेस्ट unlock करें!</p>
            <a href="/login.html" class="btn btn-primary btn-lg">फ्री में Register करें</a>
          </div>
        </div>
      </div>
      ${a()}
      ${e()}
    `,i(),c();