import{_ as e,a as t,c as n,i as r,n as i,r as a,t as o,u as s}from"./main-DPQfiBp-.js";var c=document.getElementById(`app`),l=`all`,u=``;function d(){return s.filter(e=>{let t=l===`all`||e.category===l,n=!u||e.title.includes(u)||e.titleEn.toLowerCase().includes(u.toLowerCase())||e.description.includes(u);return t&&n})}function f(){let t=d();document.getElementById(`coursesGrid`).innerHTML=t.length>0?t.map((t,n)=>`
        <div class="course-card reveal revealed" style="animation-delay:${n*.05}s">
          <div class="course-card-image" style="background:${t.gradient}">
            ${t.isNew?`<span class="course-card-new">New</span>`:``}
            <span class="course-card-badge">${t.discount}% OFF</span>
            <h3>${t.title}</h3>
          </div>
          <div class="course-card-body">
            <p class="course-card-title">${t.description}</p>
            <div class="course-card-features">
              ${t.features.map(e=>`<span class="feature-tag">${e}</span>`).join(``)}
            </div>
            <div class="course-card-price">
              <span class="current">${o(t.price)}</span>
              <span class="original">${o(t.originalPrice)}</span>
              <span class="discount">${t.discount}% OFF</span>
            </div>
            <div class="course-card-actions">
              <a href="${e(t.title,t.price)}" target="_blank" class="btn btn-primary btn-sm" style="flex:2;">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/></svg>
                WhatsApp से खरीदें
              </a>
              <button class="btn btn-outline btn-sm" onclick="showCourseDetail(${t.id})">विवरण</button>
            </div>
          </div>
        </div>
      `).join(``):`
        <div class="empty-state" style="grid-column:1/-1;">
          <div style="font-size:4rem;margin-bottom:var(--space-md);">🔍</div>
          <h3>कोई कोर्स नहीं मिला</h3>
          <p>कृपया अन्य फ़िल्टर या खोज शब्द आज़माएँ</p>
        </div>
      `,document.getElementById(`courseCount`).textContent=`${t.length} कोर्स`}window.setCategory=function(e){l=e,document.querySelectorAll(`.tab`).forEach(t=>t.classList.toggle(`active`,t.dataset.cat===e)),f()},window.handleSearch=function(e){u=e,f()},window.showCourseDetail=function(t){let n=s.find(e=>e.id===t);if(!n)return;let r=document.getElementById(`courseModal`),i=document.getElementById(`courseOverlay`);document.getElementById(`modalContent`).innerHTML=`
        <div style="background:${n.gradient};padding:var(--space-2xl);border-radius:var(--radius-lg);color:white;margin-bottom:var(--space-xl);">
          <h2 style="font-family:var(--font-hindi);font-size:1.5rem;margin-bottom:var(--space-sm);">${n.title}</h2>
          ${n.isNew?`<span class="badge badge-danger" style="background:var(--danger);color:white;">New</span>`:``}
        </div>
        <p style="color:var(--text-secondary);line-height:1.7;margin-bottom:var(--space-xl);font-family:var(--font-hindi);">${n.description}</p>
        <h4 style="margin-bottom:var(--space-md);">विशेषताएँ:</h4>
        <div style="display:flex;flex-wrap:wrap;gap:var(--space-sm);margin-bottom:var(--space-xl);">
          ${n.features.map(e=>`<span class="badge badge-primary">✅ ${e}</span>`).join(``)}
        </div>
        <div style="display:flex;align-items:baseline;gap:var(--space-md);margin-bottom:var(--space-xl);">
          <span style="font-size:2rem;font-weight:800;color:var(--primary);">${o(n.price)}</span>
          <span style="font-size:1.1rem;text-decoration:line-through;color:var(--text-muted);">${o(n.originalPrice)}</span>
          <span class="badge badge-success">${n.discount}% OFF</span>
        </div>
        <a href="${e(n.title,n.price)}" target="_blank" class="btn btn-whatsapp btn-lg btn-full">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/></svg>
          WhatsApp पर खरीदें — ${o(n.price)}
        </a>
      `,r.classList.add(`open`),i.classList.add(`open`)},window.closeModal=function(){document.getElementById(`courseModal`).classList.remove(`open`),document.getElementById(`courseOverlay`).classList.remove(`open`)},c.innerHTML=`
      ${r()}
      
      <div class="courses-page">
        <div class="container section">
          <div class="section-header">
            <div class="section-label">सभी कोर्स</div>
            <h1 class="section-title">हमारे <span>कोर्स</span></h1>
            <p class="section-desc">सभी प्रतियोगी परीक्षाओं के लिए हिंदी विषय के विशेषज्ञ कोर्स</p>
          </div>

          <!-- Search -->
          <div class="search-bar" style="margin-bottom:var(--space-xl);">
            <svg class="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            <input type="text" placeholder="कोर्स खोजें... (e.g. व्याकरण, स्कूल व्याख्याता)" oninput="handleSearch(this.value)" id="searchInput">
          </div>

          <!-- Category Tabs -->
          <div class="courses-filters">
            <div class="tabs">
              ${n.map(e=>`
                <button class="tab ${e.id===`all`?`active`:``}" data-cat="${e.id}" onclick="setCategory('${e.id}')">${e.label}</button>
              `).join(``)}
            </div>
            <span id="courseCount" style="color:var(--text-secondary);font-size:0.9rem;">${s.length} कोर्स</span>
          </div>

          <!-- Courses Grid -->
          <div class="courses-grid" id="coursesGrid"></div>
        </div>
      </div>

      <!-- Course Detail Modal -->
      <div class="modal-overlay" id="courseOverlay" onclick="closeModal()"></div>
      <div class="modal" id="courseModal">
        <button class="modal-close" onclick="closeModal()">✕</button>
        <div id="modalContent"></div>
      </div>

      ${a()}
      ${t()}
    `,i(),f();