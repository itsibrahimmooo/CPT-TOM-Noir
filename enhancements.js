/* CPT TOM Compact V3. Preserve layout across locale switches; no accounts or payments. */
(function(){
'use strict';
const SOCIAL = Object.freeze({
  facebook:'https://www.facebook.com/Mohamed0Mahmoud0Mohamed?rdid=JMkt4RcbMH9lc3c1&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1LvU3iLMdf%2F#',
  instagram:'https://www.instagram.com/realltom?mdxt=MWxmcG5kMXVlczNxZg%3D%3D',
  tiktok:'https://www.tiktok.com/@realltom00?_r=1&_t=ZS-9AzmpaJ8pGv'
});
const labels={en:{contact:'CONNECT WITH THE COACH',title:'One tap to get started',whatsapp:'WHATSAPP',connectNav:'Connect',advisor:'FIND MY PLAN',advisorHint:'Two quick questions · optional',faq:'QUESTIONS & ANSWERS'},ar:{contact:'تواصل مع الكوتش',title:'ابدأ رحلتك بضغطة واحدة',whatsapp:'واتساب',connectNav:'تواصل',advisor:'ساعدني أختار باقتي',advisorHint:'سؤالين فقط · اختياري',faq:'الأسئلة الشائعة'}};
const icons={
 whatsapp:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.6 11.5a8.5 8.5 0 0 1-12.5 7.5L3.3 20l1.1-4.6A8.5 8.5 0 1 1 20.6 11.5Z"/><path d="M8.3 8.1c.3-.4.6-.4.9 0l1.1 1.5c.2.3.2.5 0 .8l-.5.6c.7 1.2 1.8 2.2 3.1 2.7l.7-.7c.3-.2.5-.3.8-.1l1.5.8c.4.2.5.6.3.9-.6 1.2-1.5 1.4-2.8.9-2.2-.9-4.1-2.6-5.1-4.8-.5-1.2-.5-2 0-2.6Z"/></svg>',
 instagram:'<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="3.7"/><circle cx="17.5" cy="6.7" r=".9" fill="currentColor" stroke="none"/></svg>',
 facebook:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.2 21v-7.7h2.6l.4-3.2h-3V8c0-.9.3-1.4 1.5-1.4H17V3.7c-.5-.1-1.5-.2-2.5-.2-2.6 0-4.4 1.6-4.4 4.6v2H7.5v3.2h2.6V21h4.1Z"/></svg>',
 tiktok:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 3.2h3.1c.1 2 1.3 3.4 3.2 3.5V10c-1.6.1-3.3-.6-4.6-1.5V16a5.3 5.3 0 1 1-5.3-5.3h.7v3.4l-.7-.1a2 2 0 1 0 2 2V3.2H15Z"/></svg>'
};
function addConnect(){
 const plans=document.getElementById('plans');
 if(!plans||document.getElementById('connect'))return;
 const box=document.createElement('section');box.id='connect';box.className='contact-strip';box.setAttribute('aria-label','Coach contact and social profiles');
 box.innerHTML=`<div class="contact-caption"><span class="contact-eyebrow" data-connect="contact">CONNECT WITH THE COACH</span><strong data-connect="title">One tap to get started</strong></div><div class="contact-actions"><a id="contactWhatsapp" class="contact-wa" href="https://wa.me/201028820336" target="_blank" rel="noopener noreferrer">${icons.whatsapp}<span data-connect="whatsapp">WHATSAPP</span></a><a class="social-tile instagram" href="${SOCIAL.instagram}" aria-label="Instagram | @realltom" title="Instagram" target="_blank" rel="noopener noreferrer">${icons.instagram}</a><a class="social-tile facebook" href="${SOCIAL.facebook}" aria-label="Facebook | Mohamed Mahmoud Mohamed" title="Facebook" target="_blank" rel="noopener noreferrer">${icons.facebook}</a><a class="social-tile tiktok" href="${SOCIAL.tiktok}" aria-label="TikTok | @realltom00" title="TikTok" target="_blank" rel="noopener noreferrer">${icons.tiktok}</a></div>`;
 plans.insertAdjacentElement('afterend',box);
 box.querySelector('#contactWhatsapp').addEventListener('click',function(){if(typeof whatsappUrl==='function')this.href=whatsappUrl();});
}
function foldOptional(){
 const advisor=document.getElementById('advisor');
 if(advisor&&!advisor.querySelector('.compact-accordion')){
  const wrap=advisor.querySelector('.advisor-wrap');
  if(wrap){const d=document.createElement('details');d.className='compact-accordion';d.innerHTML='<summary><span data-connect="advisor">FIND MY PLAN</span><small data-connect="advisorHint">Two quick questions · optional</small></summary>';d.appendChild(wrap);const host=document.createElement('div');host.className='container';host.appendChild(d);advisor.appendChild(host);}
 }
 const faq=document.getElementById('faq');
 if(faq&&!faq.querySelector('.faq-details')){
  const d=document.createElement('details');d.className='compact-accordion faq-details';d.innerHTML='<summary><span data-connect="faq">QUESTIONS & ANSWERS</span></summary>';
  const inner=document.createElement('div');inner.className='faq-inner';
  while(faq.firstChild)inner.appendChild(faq.firstChild);
  d.appendChild(inner);faq.appendChild(d);
 }
 const results=document.getElementById('results');if(results)results.remove();
 for(const link of document.querySelectorAll('a[href="#results"]'))link.href='#connect';
}
function locale(){const l=document.documentElement.lang==='ar'?'ar':'en';const dict=labels[l];
 for(const el of document.querySelectorAll('[data-connect]'))el.textContent=dict[el.dataset.connect]||'';
 for(const a of document.querySelectorAll('a[href="#connect"]'))a.textContent=dict.connectNav;
}
function scroll(){document.body.classList.toggle('page-scrolled',window.scrollY>290)}
function init(){addConnect();foldOptional();locale();scroll();
 const lang=document.getElementById('langToggle');if(lang)lang.addEventListener('click',locale);
 window.addEventListener('scroll',scroll,{passive:true});
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
