import{f as e,o as t,u as n}from"./main-DPQfiBp-.js";var r=JSON.parse(localStorage.getItem(`user`)||`null`);(!r||r.role===`admin`)&&(window.location.href=`/login.html`);var i=document.getElementById(`app`),a=`overview`,o={coursesEnrolled:2,testsCompleted:8,avgScore:72,studyHours:45,recentTests:[{name:`हिंदी व्याकरण टेस्ट #5`,score:82,total:100,date:`07 Apr 2026`},{name:`अलंकार MCQ टेस्ट`,score:68,total:100,date:`04 Apr 2026`},{name:`समास प्रैक्टिस टेस्ट`,score:75,total:100,date:`01 Apr 2026`},{name:`रस पहचान टेस्ट`,score:90,total:100,date:`28 Mar 2026`}],topicStrength:{"उपसर्ग-प्रत्यय":85,समास:72,अलंकार:65,रस:90,छंद:55,संधि:78,"साहित्य इतिहास":70},weakTopics:[`छंद`,`अलंकार`]};function s(){return`
        <div class="dashboard-sidebar">
          ${[{id:`overview`,icon:`📊`,label:`ओवरव्यू`},{id:`courses`,icon:`📚`,label:`मेरे कोर्स`},{id:`tests`,icon:`📝`,label:`टेस्ट रिजल्ट`},{id:`notes`,icon:`📄`,label:`नोट्स`},{id:`doubts`,icon:`💬`,label:`डाउट्स`}].map(e=>`
            <div class="dashboard-sidebar-item ${a===e.id?`active`:``}" onclick="setSection('${e.id}')">
              <span>${e.icon}</span>
              <span>${e.label}</span>
            </div>
          `).join(``)}
          <div class="dashboard-sidebar-item" onclick="handleLogout()" style="color:var(--danger);margin-top:auto;">
            <span>🚪</span>
            <span>लॉगआउट</span>
          </div>
        </div>
      `}function c(){switch(a){case`overview`:return l();case`courses`:return u();case`tests`:return d();case`notes`:return f();case`doubts`:return p();default:return l()}}function l(){return`
        <!-- Welcome -->
        <div class="dashboard-welcome">
          <h2 style="font-family:var(--font-hindi);">🙏 नमस्कार, ${r.name}!</h2>
          <p>आज भी तैयारी जारी रखें — सफलता पास है!</p>
        </div>

        <!-- Stats -->
        <div class="dashboard-stats">
          <div class="dashboard-stat-card">
            <div class="icon" style="background:var(--accent-light);color:var(--accent);">📚</div>
            <div class="value">${o.coursesEnrolled}</div>
            <div class="label">कोर्स एनरोल</div>
          </div>
          <div class="dashboard-stat-card">
            <div class="icon" style="background:var(--success-light);color:var(--success);">📝</div>
            <div class="value">${o.testsCompleted}</div>
            <div class="label">टेस्ट पूरे</div>
          </div>
          <div class="dashboard-stat-card">
            <div class="icon" style="background:var(--info-light);color:var(--info);">📈</div>
            <div class="value">${o.avgScore}%</div>
            <div class="label">औसत स्कोर</div>
          </div>
          <div class="dashboard-stat-card">
            <div class="icon" style="background:var(--warning-light);color:var(--warning);">⏰</div>
            <div class="value">${o.studyHours}h</div>
            <div class="label">पढ़ाई के घंटे</div>
          </div>
        </div>

        <!-- Charts Row -->
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:var(--space-xl);margin-bottom:var(--space-xl);">
          <div class="card" style="padding:var(--space-xl);">
            <h4 style="margin-bottom:var(--space-lg);font-family:var(--font-hindi);">📊 Topic-wise Strength</h4>
            <canvas id="topicChart" height="250"></canvas>
          </div>
          <div class="card" style="padding:var(--space-xl);">
            <h4 style="margin-bottom:var(--space-lg);font-family:var(--font-hindi);">📈 Score Trend</h4>
            <canvas id="scoreChart" height="250"></canvas>
          </div>
        </div>

        <!-- AI Recommendation -->
        <div style="background:linear-gradient(135deg,#8B5CF6,#A78BFA);border-radius:var(--radius-lg);padding:var(--space-xl);color:white;margin-bottom:var(--space-xl);">
          <div style="display:flex;align-items:center;gap:var(--space-md);margin-bottom:var(--space-md);">
            <span style="font-size:1.5rem;">🤖</span>
            <h4 style="font-family:var(--font-hindi);">AI सुझाव — आगे क्या पढ़ें?</h4>
          </div>
          <div style="display:flex;gap:var(--space-md);flex-wrap:wrap;">
            ${o.weakTopics.map(e=>`
              <div style="background:rgba(255,255,255,0.15);padding:var(--space-md) var(--space-lg);border-radius:var(--radius-md);backdrop-filter:blur(10px);">
                <div style="font-weight:600;font-family:var(--font-hindi);">📌 ${e}</div>
                <div style="font-size:0.82rem;opacity:0.8;">कमज़ोर — अभ्यास करें</div>
              </div>
            `).join(``)}
          </div>
          <a href="/test-series.html" style="display:inline-block;margin-top:var(--space-md);background:white;color:#8B5CF6;padding:10px 24px;border-radius:var(--radius-md);font-weight:600;font-size:0.9rem;">प्रैक्टिस टेस्ट दें →</a>
        </div>

        <!-- Recent Tests -->
        <div class="dashboard-section">
          <div class="dashboard-section-header">
            <h3 class="dashboard-section-title" style="font-family:var(--font-hindi);">📝 हाल के टेस्ट रिज़ल्ट</h3>
            <button class="btn btn-ghost btn-sm" onclick="setSection('tests')">सभी देखें →</button>
          </div>
          <div style="display:flex;flex-direction:column;gap:var(--space-sm);">
            ${o.recentTests.map(e=>`
              <div class="card" style="padding:var(--space-md) var(--space-lg);display:flex;justify-content:space-between;align-items:center;">
                <div>
                  <div style="font-weight:600;font-family:var(--font-hindi);font-size:0.92rem;">${e.name}</div>
                  <div style="font-size:0.78rem;color:var(--text-secondary);">${e.date}</div>
                </div>
                <div style="display:flex;align-items:center;gap:var(--space-md);">
                  <div class="progress-bar" style="width:100px;height:6px;">
                    <div class="progress-fill" style="width:${e.score}%;background:${e.score>=75?`var(--success)`:e.score>=50?`var(--warning)`:`var(--danger)`}"></div>
                  </div>
                  <span style="font-weight:700;font-size:0.95rem;color:${e.score>=75?`var(--success)`:e.score>=50?`var(--warning)`:`var(--danger)`};">${e.score}%</span>
                </div>
              </div>
            `).join(``)}
          </div>
        </div>
      `}function u(){return`
        <h2 style="font-family:var(--font-hindi);margin-bottom:var(--space-xl);">📚 मेरे कोर्स</h2>
        <div style="display:flex;flex-direction:column;gap:var(--space-lg);">
          ${n.slice(0,2).map((e,t)=>`
            <div class="card" style="padding:var(--space-xl);display:flex;gap:var(--space-xl);align-items:center;">
              <div style="width:120px;height:80px;background:${e.gradient};border-radius:var(--radius-md);display:flex;align-items:center;justify-content:center;color:white;font-family:var(--font-hindi);font-size:0.8rem;text-align:center;padding:8px;flex-shrink:0;">${e.title.substring(0,20)}...</div>
              <div style="flex:1;">
                <h4 style="font-family:var(--font-hindi);margin-bottom:var(--space-sm);">${e.title}</h4>
                <div style="display:flex;align-items:center;gap:var(--space-md);margin-bottom:var(--space-sm);">
                  <span style="font-size:0.82rem;color:var(--text-secondary);">Progress: ${30+t*25}%</span>
                </div>
                <div class="progress-bar" style="height:8px;">
                  <div class="progress-fill" style="width:${30+t*25}%"></div>
                </div>
              </div>
              <a href="/test-series.html" class="btn btn-primary btn-sm">जारी रखें →</a>
            </div>
          `).join(``)}
        </div>
        <div style="text-align:center;margin-top:var(--space-2xl);padding:var(--space-xl);background:var(--primary-bg);border-radius:var(--radius-lg);">
          <p style="color:var(--text-secondary);margin-bottom:var(--space-md);font-family:var(--font-hindi);">और कोर्स जोड़ें?</p>
          <a href="/courses.html" class="btn btn-primary">नए कोर्स देखें →</a>
        </div>
      `}function d(){return`
        <h2 style="font-family:var(--font-hindi);margin-bottom:var(--space-xl);">📝 सभी टेस्ट रिज़ल्ट</h2>
        <div class="admin-table-container">
          <table class="admin-table">
            <thead>
              <tr>
                <th>टेस्ट का नाम</th>
                <th>स्कोर</th>
                <th>प्रतिशत</th>
                <th>तारीख</th>
              </tr>
            </thead>
            <tbody>
              ${o.recentTests.map(e=>`
                <tr>
                  <td style="font-family:var(--font-hindi);">${e.name}</td>
                  <td>${e.score}/${e.total}</td>
                  <td><span class="badge ${e.score>=75?`badge-success`:e.score>=50?`badge-warning`:`badge-danger`}">${e.score}%</span></td>
                  <td>${e.date}</td>
                </tr>
              `).join(``)}
            </tbody>
          </table>
        </div>
        <div style="text-align:center;margin-top:var(--space-xl);">
          <a href="/test-series.html" class="btn btn-primary">नया टेस्ट दें →</a>
        </div>
      `}function f(){return`
        <h2 style="font-family:var(--font-hindi);margin-bottom:var(--space-xl);">📄 मेरे नोट्स & डाउनलोड</h2>
        <div style="display:flex;flex-direction:column;gap:var(--space-md);">
          ${e.pdfs.map(e=>`
            <div class="resource-card">
              <div class="resource-icon pdf">📄</div>
              <div style="flex:1;">
                <h4 style="font-family:var(--font-hindi);font-size:0.95rem;margin-bottom:4px;">${e.title}</h4>
                <span style="font-size:0.8rem;color:var(--text-secondary);">📑 ${e.pages} पेज • 💾 ${e.size}</span>
              </div>
              <button class="btn btn-primary btn-sm" onclick="alert('📥 डाउनलोड शुरू! (Demo)')">📥 डाउनलोड</button>
            </div>
          `).join(``)}
        </div>
      `}function p(){return`
        <h2 style="font-family:var(--font-hindi);margin-bottom:var(--space-xl);">💬 मेरे डाउट्स</h2>
        
        <!-- Ask Doubt -->
        <div class="card" style="padding:var(--space-xl);margin-bottom:var(--space-xl);">
          <h4 style="font-family:var(--font-hindi);margin-bottom:var(--space-md);">🙋 नया डाउट पूछें</h4>
          <div style="display:flex;gap:var(--space-md);">
            <input type="text" class="form-input" placeholder="अपना सवाल यहाँ लिखें..." style="flex:1;" id="doubtInput">
            <button class="btn btn-primary" onclick="askDoubt()">भेजें</button>
          </div>
        </div>

        <!-- Doubts List -->
        <div class="qna-list">
          ${[{q:`उत्प्रेक्षा और उपमा अलंकार में क्या अंतर है?`,status:`resolved`,answer:`उपमा में "सा", "जैसा" आते हैं जबकि उत्प्रेक्षा में "मानो", "जानो", "जनु" आते हैं। उपमा में तुलना होती है, उत्प्रेक्षा में सम्भावना।`,date:`06 Apr 2026`},{q:`रीतिकाल को "श्रृंगार काल" क्यों कहा जाता है?`,status:`pending`,answer:``,date:`08 Apr 2026`}].map(e=>`
            <div class="qna-item ${e.status}">
              <div class="qna-question">${e.q}</div>
              ${e.answer?`<div class="qna-answer"><strong>👨‍🏫 उत्तर:</strong> ${e.answer}</div>`:`<div style="padding:var(--space-sm) var(--space-md);background:var(--warning-light);border-radius:var(--radius-sm);font-size:0.85rem;color:var(--warning);display:inline-block;">⏳ उत्तर की प्रतीक्षा...</div>`}
              <div class="qna-meta">
                <span>${e.date}</span>
                <span class="badge ${e.status===`resolved`?`badge-success`:`badge-warning`}">${e.status===`resolved`?`✅ हल किया`:`⏳ प्रतीक्षा`}</span>
              </div>
            </div>
          `).join(``)}
        </div>
      `}window.askDoubt=function(){let e=document.getElementById(`doubtInput`);e.value.trim()&&(t(`✅ आपका सवाल भेजा गया! जल्द उत्तर मिलेगा।`),e.value=``)},window.setSection=function(e){a=e,m()},window.handleLogout=function(){localStorage.removeItem(`user`),t(`👋 लॉगआउट सफल!`),setTimeout(()=>window.location.href=`/login.html`,500)};function m(){i.innerHTML=`
        <div class="dashboard">
          <nav class="navbar scrolled" style="background:var(--bg-card);">
            <div class="nav-container">
              <a href="/" class="nav-logo">
                <div class="nav-logo-icon">PC</div>
                <div class="nav-logo-text">
                  <span>प्रज्ञा क्लासेज</span>
                  <span>DASHBOARD</span>
                </div>
              </a>
              <div style="display:flex;align-items:center;gap:var(--space-md);">
                <span style="font-size:0.9rem;color:var(--text-secondary);">🙏 ${r.name}</span>
                <div style="width:36px;height:36px;background:var(--accent);border-radius:50%;display:flex;align-items:center;justify-content:center;color:white;font-weight:700;font-size:0.85rem;">${r.name.charAt(0)}</div>
              </div>
            </div>
          </nav>

          <div class="dashboard-grid">
            ${s()}
            <div class="dashboard-main">
              ${c()}
            </div>
          </div>
        </div>
      `,a===`overview`&&setTimeout(h,100)}function h(){let e=document.getElementById(`topicChart`);e&&new Chart(e,{type:`radar`,data:{labels:Object.keys(o.topicStrength),datasets:[{label:`आपका स्कोर`,data:Object.values(o.topicStrength),backgroundColor:`rgba(255, 107, 53, 0.15)`,borderColor:`#FF6B35`,borderWidth:2,pointBackgroundColor:`#FF6B35`,pointBorderColor:`#fff`,pointBorderWidth:2}]},options:{responsive:!0,maintainAspectRatio:!1,scales:{r:{beginAtZero:!0,max:100,ticks:{display:!1},grid:{color:`rgba(0,0,0,0.05)`},pointLabels:{font:{size:11,family:`Noto Sans Devanagari`}}}},plugins:{legend:{display:!1}}}});let t=document.getElementById(`scoreChart`);t&&new Chart(t,{type:`line`,data:{labels:[`टेस्ट 1`,`टेस्ट 2`,`टेस्ट 3`,`टेस्ट 4`,`टेस्ट 5`,`टेस्ट 6`,`टेस्ट 7`,`टेस्ट 8`],datasets:[{label:`आपका स्कोर`,data:[55,62,58,70,68,75,82,72],borderColor:`#FF6B35`,backgroundColor:`rgba(255, 107, 53, 0.1)`,borderWidth:3,fill:!0,tension:.4,pointBackgroundColor:`#FF6B35`,pointBorderColor:`#fff`,pointBorderWidth:2,pointRadius:5},{label:`कक्षा औसत`,data:[50,52,55,58,60,62,65,68],borderColor:`#94A3B8`,borderWidth:2,borderDash:[5,5],fill:!1,tension:.4,pointRadius:0}]},options:{responsive:!0,maintainAspectRatio:!1,scales:{y:{beginAtZero:!0,max:100,grid:{color:`rgba(0,0,0,0.05)`}},x:{grid:{display:!1},ticks:{font:{family:`Noto Sans Devanagari`}}}},plugins:{legend:{labels:{font:{family:`Noto Sans Devanagari`}}}}}})}m();