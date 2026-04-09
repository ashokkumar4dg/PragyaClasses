import{_ as e,a as t,d as n,i as r,n as i,r as a,t as o,u as s}from"./main-DPQfiBp-.js";var c=document.getElementById(`app`),l=s.filter(e=>e.features.some(e=>e.includes(`टेस्ट`))),u={active:!1,questions:[],currentQ:0,answers:{},marked:new Set,timeLeft:0,timerId:null,startTime:null};function d(){c.innerHTML=`
        ${r()}
        <div class="courses-page">
          <div class="container section">
            <div class="section-header">
              <div class="section-label">टेस्ट सीरीज़</div>
              <h1 class="section-title">ऑनलाइन <span>टेस्ट सीरीज़</span></h1>
              <p class="section-desc">Timer-based MCQ test के साथ instant result, rank और topic-wise analysis</p>
            </div>

            <!-- Free Demo Test Banner -->
            <div style="background:linear-gradient(135deg,var(--success),#34D399);border-radius:var(--radius-xl);padding:var(--space-2xl);color:white;margin-bottom:var(--space-2xl);display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:var(--space-lg);">
              <div>
                <h3 style="font-size:1.3rem;font-family:var(--font-hindi);margin-bottom:var(--space-sm);">🎯 फ्री डेमो टेस्ट</h3>
                <p style="opacity:0.9;">15 प्रश्न | 15 मिनट | हिंदी व्याकरण & साहित्य | Instant Result</p>
              </div>
              <button class="btn btn-lg" style="background:white;color:var(--success);" onclick="startDemoTest()">
                अभी टेस्ट दें →
              </button>
            </div>

            <!-- Paid Test Series -->
            <div class="test-catalog">
              ${l.map((t,n)=>`
                <div class="test-card reveal reveal-delay-${n%4+1}">
                  <div class="test-card-header">
                    <div>
                      <h3 class="test-card-title">${t.title}</h3>
                      <p style="font-size:0.82rem;color:var(--text-secondary);margin-top:4px;">${t.description}</p>
                    </div>
                    ${t.isNew?`<span class="badge badge-danger">New</span>`:``}
                  </div>
                  <div class="test-card-stats">
                    ${t.features.slice(0,3).map(e=>{let t=e.split(` `);return`<div class="test-card-stat"><div class="stat-val">${t[0]}</div><div class="stat-lbl">${t.slice(1).join(` `)}</div></div>`}).join(``)}
                  </div>
                  <div class="test-card-footer">
                    <div class="course-card-price" style="margin:0;">
                      <span class="current">${o(t.price)}</span>
                      <span class="original">${o(t.originalPrice)}</span>
                      <span class="discount">${t.discount}% OFF</span>
                    </div>
                    <a href="${e(t.title,t.price)}" target="_blank" class="btn btn-primary btn-sm">खरीदें</a>
                  </div>
                </div>
              `).join(``)}
            </div>
          </div>
        </div>
        ${a()}
        ${t()}
      `,i()}window.startDemoTest=function(){u={active:!0,questions:[...n].sort(()=>Math.random()-.5).slice(0,15),currentQ:0,answers:{},marked:new Set,timeLeft:900,timerId:null,startTime:Date.now()},m(),f()};function f(){u.timerId=setInterval(()=>{u.timeLeft--,p(),u.timeLeft<=0&&(clearInterval(u.timerId),submitTest())},1e3)}function p(){let e=document.getElementById(`testTimer`);if(!e)return;let t=Math.floor(u.timeLeft/60),n=u.timeLeft%60;e.textContent=`${String(t).padStart(2,`0`)}:${String(n).padStart(2,`0`)}`,e.className=`test-timer`+(u.timeLeft<=60?` danger`:u.timeLeft<=300?` warning`:``)}function m(){let e=u.questions[u.currentQ],t=u.questions.length;c.innerHTML=`
        <div class="test-engine">
          <div class="test-header">
            <div>
              <h3 style="font-size:1rem;font-weight:700;">📝 फ्री डेमो टेस्ट — हिंदी व्याकरण & साहित्य</h3>
              <p style="font-size:0.8rem;color:var(--text-secondary);">${Object.keys(u.answers).length}/${t} answered</p>
            </div>
            <div style="display:flex;align-items:center;gap:var(--space-lg);">
              <div class="test-timer" id="testTimer">15:00</div>
              <button class="btn btn-primary btn-sm" onclick="submitTest()">सबमिट करें</button>
            </div>
          </div>

          <div class="test-body">
            <div class="test-question-area">
              <div class="test-question-number">
                प्रश्न ${u.currentQ+1} / ${t}
                ${u.marked.has(u.currentQ)?`<span class="badge badge-warning" style="margin-left:8px;">📌 Marked</span>`:``}
                <span class="badge badge-primary" style="margin-left:8px;">${e.topic}</span>
              </div>
              <div class="test-question-text">${e.question}</div>
              <div class="test-options">
                ${e.options.map((e,t)=>`
                  <div class="test-option ${u.answers[u.currentQ]===t?`selected`:``}" onclick="selectOption(${t})">
                    <div class="test-option-label">${String.fromCharCode(65+t)}</div>
                    <div>${e}</div>
                  </div>
                `).join(``)}
              </div>
              <div class="test-question-nav">
                <div style="display:flex;gap:var(--space-sm);">
                  <button class="btn btn-ghost btn-sm" onclick="navigateQ(${u.currentQ-1})" ${u.currentQ===0?`disabled style="opacity:0.4"`:``}>← पिछला</button>
                  <button class="btn btn-ghost btn-sm" onclick="toggleMark()" style="color:var(--warning);">📌 ${u.marked.has(u.currentQ)?`Unmark`:`Mark for Review`}</button>
                </div>
                <button class="btn btn-secondary btn-sm" onclick="navigateQ(${u.currentQ+1})" ${u.currentQ===t-1?`disabled style="opacity:0.4"`:``}>अगला →</button>
              </div>
            </div>

            <div class="test-sidebar" id="testSidebar">
              <div class="test-sidebar-title" onclick="document.getElementById('testSidebar').classList.toggle('expanded')">
                प्रश्न नेविगेशन ▼
              </div>
              <div class="test-question-grid">
                ${u.questions.map((e,t)=>`
                  <button class="test-q-btn ${t===u.currentQ?`current`:``} ${u.answers[t]===void 0?``:`answered`} ${u.marked.has(t)?`marked`:``}" onclick="navigateQ(${t})">${t+1}</button>
                `).join(``)}
              </div>
              <div class="test-legend">
                <div class="test-legend-item"><div class="test-legend-dot" style="background:var(--primary);"></div> वर्तमान</div>
                <div class="test-legend-item"><div class="test-legend-dot" style="background:var(--success);"></div> उत्तर दिया</div>
                <div class="test-legend-item"><div class="test-legend-dot" style="background:var(--warning);"></div> मार्क किया</div>
                <div class="test-legend-item"><div class="test-legend-dot" style="background:var(--border-light);"></div> छोड़ा</div>
              </div>
            </div>
          </div>
        </div>
      `,p()}window.selectOption=function(e){u.answers[u.currentQ]=e,m()},window.navigateQ=function(e){e<0||e>=u.questions.length||(u.currentQ=e,m())},window.toggleMark=function(){u.marked.has(u.currentQ)?u.marked.delete(u.currentQ):u.marked.add(u.currentQ),m()},window.submitTest=function(){confirm(`क्या आप टेस्ट सबमिट करना चाहते हैं?`)&&(clearInterval(u.timerId),h(Math.round((Date.now()-u.startTime)/1e3)))};function h(e){let t=0,n=0,o=0,s={};u.questions.forEach((e,r)=>{s[e.topic]||(s[e.topic]={correct:0,total:0}),s[e.topic].total++,u.answers[r]===void 0?o++:u.answers[r]===e.correct?(t++,s[e.topic].correct++):n++});let l=u.questions.length,d=Math.round(t/l*100),f=Math.floor(Math.random()*50)+1,p=2*Math.PI*75,m=p-d/100*p,h=Math.floor(e/60),g=e%60,_=d>=70?`var(--success)`:d>=40?`var(--warning)`:`var(--danger)`;c.innerHTML=`
        ${r()}
        <div class="result-page section">
          <div class="container">
            <div class="result-card animate-scale-in">
              <div style="font-size:3rem;margin-bottom:var(--space-md);">${d>=70?`🎉`:d>=40?`👍`:`💪`}</div>
              <h2 style="font-size:1.5rem;margin-bottom:var(--space-sm);font-family:var(--font-hindi);">
                ${d>=70?`शानदार प्रदर्शन!`:d>=40?`अच्छा प्रयास!`:`और मेहनत करें!`}
              </h2>

              <div class="result-score-ring">
                <svg viewBox="0 0 170 170">
                  <circle class="bg-ring" cx="85" cy="85" r="75"/>
                  <circle class="score-ring" cx="85" cy="85" r="75" stroke="${_}" stroke-dasharray="${p}" stroke-dashoffset="${m}" style="transition:stroke-dashoffset 1.5s ease;"/>
                </svg>
                <div class="result-score-text">
                  <div class="score">${d}%</div>
                  <div class="total">${t}/${l}</div>
                </div>
              </div>

              <div class="result-breakdown">
                <div class="result-breakdown-item" style="background:var(--success-light);">
                  <div class="value" style="color:var(--success);">${t}</div>
                  <div class="label">सही ✅</div>
                </div>
                <div class="result-breakdown-item" style="background:var(--danger-light);">
                  <div class="value" style="color:var(--danger);">${n}</div>
                  <div class="label">गलत ❌</div>
                </div>
                <div class="result-breakdown-item" style="background:var(--warning-light);">
                  <div class="value" style="color:var(--warning);">${o}</div>
                  <div class="label">छोड़ा ⏭️</div>
                </div>
              </div>

              <div style="display:flex;justify-content:space-around;margin-bottom:var(--space-xl);padding:var(--space-md);background:var(--bg-primary);border-radius:var(--radius-md);">
                <div class="text-center"><div style="font-weight:700;font-size:1.1rem;">Rank #${f}</div><div style="font-size:0.78rem;color:var(--text-secondary);">आपकी रैंक</div></div>
                <div class="text-center"><div style="font-weight:700;font-size:1.1rem;">${h}:${String(g).padStart(2,`0`)}</div><div style="font-size:0.78rem;color:var(--text-secondary);">समय लिया</div></div>
              </div>

              <!-- Topic-wise Analysis -->
              <h4 style="text-align:left;margin-bottom:var(--space-md);font-family:var(--font-hindi);">📊 Topic-wise Analysis</h4>
              <div style="margin-bottom:var(--space-xl);">
                ${Object.entries(s).map(([e,t])=>{let n=Math.round(t.correct/t.total*100);return`
                    <div style="margin-bottom:var(--space-md);">
                      <div style="display:flex;justify-content:space-between;margin-bottom:4px;font-size:0.85rem;">
                        <span style="font-family:var(--font-hindi);">${e}</span>
                        <span style="font-weight:600;">${t.correct}/${t.total} (${n}%)</span>
                      </div>
                      <div class="progress-bar">
                        <div class="progress-fill" style="width:${n}%;background:${n>=70?`var(--success)`:n>=40?`var(--warning)`:`var(--danger)`}"></div>
                      </div>
                    </div>
                  `}).join(``)}
              </div>

              <!-- Show Answers -->
              <details style="text-align:left;margin-bottom:var(--space-xl);">
                <summary style="cursor:pointer;font-weight:600;padding:var(--space-md);background:var(--bg-primary);border-radius:var(--radius-md);font-family:var(--font-hindi);">📋 सभी उत्तर देखें</summary>
                <div style="padding:var(--space-md);">
                  ${u.questions.map((e,t)=>{let n=u.answers[t],r=n===e.correct,i=n===void 0;return`
                      <div style="padding:var(--space-md);margin-bottom:var(--space-sm);border-left:4px solid ${i?`var(--warning)`:r?`var(--success)`:`var(--danger)`};background:var(--bg-primary);border-radius:0 var(--radius-sm) var(--radius-sm) 0;">
                        <div style="font-weight:600;font-family:var(--font-hindi);margin-bottom:4px;">Q${t+1}. ${e.question}</div>
                        <div style="font-size:0.85rem;color:var(--success);">✅ सही उत्तर: ${e.options[e.correct]}</div>
                        ${!i&&!r?`<div style="font-size:0.85rem;color:var(--danger);">❌ आपका उत्तर: ${e.options[n]}</div>`:``}
                        ${i?`<div style="font-size:0.85rem;color:var(--warning);">⏭️ छोड़ दिया</div>`:``}
                        <div style="font-size:0.82rem;color:var(--text-secondary);margin-top:4px;font-family:var(--font-hindi);">💡 ${e.explanation}</div>
                      </div>
                    `}).join(``)}
                </div>
              </details>

              <div style="display:flex;gap:var(--space-md);flex-wrap:wrap;">
                <button class="btn btn-primary" onclick="startDemoTest()">🔄 दोबारा टेस्ट दें</button>
                <a href="/courses.html" class="btn btn-secondary">📚 Full Course खरीदें</a>
                <a href="/test-series.html" class="btn btn-outline" onclick="location.reload()">← वापस जाएँ</a>
              </div>
            </div>
          </div>
        </div>
        ${a()}
      `,i()}d();