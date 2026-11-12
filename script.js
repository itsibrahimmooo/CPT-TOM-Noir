'use strict';

/* CPT TOM NOIR - public static front end.
 * Set the coach's confirmed international WhatsApp number here, digits only, no +.
 * An empty number intentionally opens WhatsApp's recipient picker rather than guessing.
 */
const CPT_CONFIG = Object.freeze({ whatsappNumber: '' });
const MEMBERSHIPS = Object.freeze([
  { months: 1, options: { 3: { sessions: 12, original: 2100, price: 1260 }, 4: { sessions: 16, original: 2500, price: 1500 } } },
  { months: 2, options: { 3: { sessions: 24, original: 3400, price: 2040 }, 4: { sessions: 32, original: 4000, price: 2400 } } },
  { months: 3, options: { 3: { sessions: 36, original: 4500, price: 2700 }, 4: { sessions: 48, original: 5200, price: 3120 } } },
  { months: 5, options: { 3: { sessions: 60, original: 6500, price: 3900 }, 4: { sessions: 80, original: 7500, price: 4500 } } },
]);
const copy = {
  en: {
    navPlans:'Training plans',navResults:'Results',navAbout:'About',navFaq:'FAQ',joinNow:'JOIN NOW',heroEyebrow:'BUILT ON DISCIPLINE',heroHeadline:'BUILD YOUR BODY.',heroSub:'STRENGTH • DISCIPLINE • PROGRESS',heroCopy:'Training is personal. Your plan should be too. Find the schedule that fits your goals and start building consistency.',choosePlan:'CHOOSE YOUR PLAN',howItWorks:'HOW IT WORKS',featureTrain:'TRAINING PLANS',featureTrainDesc:'A clear approach to your training schedule.',featureCalendar:'CLASS CALENDAR',featureCalendarDesc:'Choose sessions that fit your routine.',featureProgress:'PROGRESS TRACKING',featureProgressDesc:'Stay focused on measurable progress.',featureBody:'BODY ANALYSIS',featureBodyDesc:'Discuss your InBody report with your coach.',plansKicker:'THE RIGHT PLAN. YOUR PACE.',plansTitle:'TRAINING PLANS',plansIntro:'Pick your membership duration, then your training frequency. The price updates instantly.',frequencyLabel:'SESSIONS PER WEEK',threeWeekly:'3 / WEEK',fourWeekly:'4 / WEEK',yourSelection:'YOUR SELECTION',totalPrice:'TOTAL PLAN PRICE',currencyNote:'Currency not specified on original site. Confirm with coach.',joinOnWhatsApp:'ENQUIRE ON WHATSAPP',priceDisclaimer:'Prices and session counts are copied from the referenced site; availability, service terms and currency must be confirmed with the coach.',smartKicker:'SMART PLAN FINDER',advisorTitle:'NOT SURE WHERE TO START?',advisorDesc:'Two quick answers. One helpful starting point. No account, no long forms, no guesswork disguised as artificial intelligence.',advisorNote:'Rule-based suggestion, not a medical or fitness assessment.',goalLabel:'WHAT IS YOUR MAIN GOAL?',goalStrength:'Build strength',goalMuscle:'Build muscle',goalGeneral:'General fitness',daysLabel:'HOW OFTEN CAN YOU TRAIN?',threeDays:'3 sessions / week',fourDays:'4 sessions / week',findPlan:'FIND MY STARTING PLAN',processKicker:'SIMPLE FROM DAY ONE',processTitle:'HOW IT WORKS',processIntro:'Three steps. No unnecessary sign-up barriers.',stepOne:'PICK A MEMBERSHIP',stepOneDesc:'Choose a duration and weekly training frequency.',stepTwo:'CONTACT THE COACH',stepTwoDesc:'Send your selected plan in a prewritten WhatsApp message.',stepThree:'CONFIRM & BEGIN',stepThreeDesc:'Confirm details, payment method and any requested InBody report directly with your coach.',resultsKicker:'PROGRESS OVER PROMISES',resultsTitle:'CONSISTENCY IS THE REAL FLEX.',resultsDesc:'Real client stories deserve real evidence. Verified progress photos and testimonials can be added here after the coach approves them.',startJourney:'START YOUR JOURNEY',aboutKicker:'THE PERSON BEHIND THE PLAN',aboutTitle:'MEET CPT TOM.',aboutCopy:'A better training journey starts with a clear plan and direct communication. Browse the available memberships and talk to the coach about the right next step for you.',aboutPointA:'CLEAR OPTIONS',aboutPointB:'DIRECT CONTACT',aboutPointC:'YOUR PACE',explorePlans:'EXPLORE PLANS',faqKicker:'GOOD TO KNOW',faqTitle:'FREQUENTLY ASKED QUESTIONS',q1:'How many sessions are included?',a1:'The displayed plans include 12 or 16 sessions per month, with corresponding totals for longer memberships.',q2:'How do I complete my subscription?',a2:'Choose a plan and send a WhatsApp enquiry. The coach confirms availability, payment details and the subscription.',q3:'Do I need an InBody scan?',a3:'The original site requests an InBody report. Ask the coach when it is needed and send personal health details privately, not through this public webpage.',q4:'Is training online or in person?',a4:'The original listing does not specify this. Confirm format, location and schedule directly with the coach before paying.',footerTag:'BUILD YOUR BODY. BUILD YOUR DISCIPLINE.',copyPlan:'COPY PLAN MESSAGE',footerRights:'All rights reserved.',mobileSelected:'SELECTED PLAN',selected:'SELECTED',ourPick:'OUR PICK',month:'MONTH',months:'MONTHS',sessions:'SESSIONS',perSession:'per session',saved:'40% OFF',approxWeekly:'sessions per week',recommendation:'A practical starting option',recommendationDetail:'A 3-month membership gives you time to build a routine. This is a simple schedule-based suggestion, not a guarantee of results.',useRecommendation:'VIEW RECOMMENDED PLAN',toastCopy:'Plan message copied.',toastManual:'Copy the message from your browser.',coachNumberMissing:'WhatsApp will ask you to choose a contact because the coach\'s international number has not been configured yet.',chatIntro:'Hello CPT TOM, I would like to ask about this membership:',chatMonths:'Duration',chatSessions:'Total sessions',chatFreq:'Approx. frequency',chatPrice:'Listed price',chatCurrency:'Currency: please confirm',chatEnd:'Please confirm availability, training format and payment details.',title:'CPT TOM | BUILD YOUR BODY'
  },
  ar: {
    navPlans:'الباقات',navResults:'النتائج',navAbout:'عن الكوتش',navFaq:'الأسئلة الشائعة',joinNow:'اشترك الآن',heroEyebrow:'القوة تبدأ بالالتزام',heroHeadline:'ابنِ أفضل نسخة منك',heroSub:'قوة • انضباط • تقدم',heroCopy:'كل رحلة تدريب تحتاج خطة واضحة. اختر عدد الحصص والمدة المناسبة لروتينك وابدأ بخطوة عملية.',choosePlan:'اختر باقتك',howItWorks:'طريقة الاشتراك',featureTrain:'برامج التدريب',featureTrainDesc:'اختيارات واضحة لتنظيم التدريب.',featureCalendar:'جدول الحصص',featureCalendarDesc:'حصص تتناسب مع وقتك.',featureProgress:'متابعة التقدم',featureProgressDesc:'ركّز على تقدم قابل للقياس.',featureBody:'تحليل الجسم',featureBodyDesc:'ناقش تقرير InBody مع الكوتش.',plansKicker:'اختيارك. وتيرتك.',plansTitle:'باقات التدريب',plansIntro:'حدد مدة الاشتراك وعدد الحصص الأسبوعية، وشوف السعر يتغير فورًا.',frequencyLabel:'عدد الحصص في الأسبوع',threeWeekly:'٣ / أسبوع',fourWeekly:'٤ / أسبوع',yourSelection:'الباقة المختارة',totalPrice:'إجمالي سعر الباقة',currencyNote:'العملة غير مذكورة في الموقع الأصلي. أكّدها مع الكوتش.',joinOnWhatsApp:'استفسر عبر واتساب',priceDisclaimer:'الأسعار وأعداد الحصص من الموقع المرجعي. أكّد العملة والتوافر وتفاصيل الخدمة مع الكوتش قبل الدفع.',smartKicker:'مساعد اختيار الباقة',advisorTitle:'مش عارف تبدأ منين؟',advisorDesc:'سؤالين فقط لاختيار بداية مناسبة لجدولك. من غير حساب جديد أو نموذج طويل أو ادعاءات ذكاء اصطناعي فارغة.',advisorNote:'اقتراح بناءً على عدد الحصص، وليس تقييمًا صحيًا أو تدريبياً.',goalLabel:'إيه هدفك الأساسي؟',goalStrength:'زيادة القوة',goalMuscle:'بناء العضلات',goalGeneral:'لياقة عامة',daysLabel:'تقدر تتمرن كام مرة؟',threeDays:'٣ حصص أسبوعيًا',fourDays:'٤ حصص أسبوعيًا',findPlan:'رشح لي باقة',processKicker:'بداية بسيطة',processTitle:'طريقة الاشتراك',processIntro:'ثلاث خطوات من غير تعقيد.',stepOne:'اختار الباقة',stepOneDesc:'حدد المدة وعدد الحصص المناسبين لك.',stepTwo:'تواصل مع الكوتش',stepTwoDesc:'ابعت تفاصيل الباقة في رسالة واتساب جاهزة.',stepThree:'أكّد وابدأ',stepThreeDesc:'اتفق على التوافر والدفع وأي تقرير InBody مطلوب.',resultsKicker:'التقدم أهم من الوعود',resultsTitle:'الاستمرارية تصنع الفارق.',resultsDesc:'قصص النجاح لازم تكون حقيقية وموثقة. نقدر نضيف صور وتجارب عملاء بموافقتهم بعد توفيرها من الكوتش.',startJourney:'ابدأ رحلتك',aboutKicker:'الشخص وراء الخطة',aboutTitle:'تعرّف على CPT TOM',aboutCopy:'رحلة التدريب الأفضل تبدأ بخطة واضحة وتواصل مباشر. استعرض الباقات وتحدث مع الكوتش عن الخطوة الأنسب لك.',aboutPointA:'خيارات واضحة',aboutPointB:'تواصل مباشر',aboutPointC:'حسب وقتك',explorePlans:'استعرض الباقات',faqKicker:'معلومات تهمك',faqTitle:'الأسئلة الشائعة',q1:'كم حصة في كل اشتراك؟',a1:'الباقات المعروضة تشمل ١٢ أو ١٦ حصة لكل شهر، مع إجمالي الحصص المقابل للاشتراكات الأطول.',q2:'إزاي أكمّل الاشتراك؟',a2:'اختار باقتك وابعت استفسار واتساب. الكوتش يؤكد التوافر وطريقة الدفع والاشتراك.',q3:'هل محتاج تقرير InBody؟',a3:'الموقع الأصلي بيطلب تقرير InBody. اسأل الكوتش إمتى يحتاجه، وابعت بياناتك الصحية بشكل خاص وليس عبر صفحة عامة.',q4:'التدريب أونلاين ولا حضوري؟',a4:'الموقع الأصلي لا يحدد ده. اتأكد من نظام التدريب والمكان والمواعيد مباشرة قبل الدفع.',footerTag:'ابنِ جسمك. ابنِ انضباطك.',copyPlan:'انسخ رسالة الباقة',footerRights:'جميع الحقوق محفوظة.',mobileSelected:'الباقة المختارة',selected:'المحدد',ourPick:'ترشيحنا',month:'شهر',months:'شهور',sessions:'حصة',perSession:'للحصة',saved:'خصم ٤٠٪',approxWeekly:'حصص أسبوعيًا',recommendation:'اقتراح مناسب كبداية',recommendationDetail:'باقة الثلاثة شهور بتديك فرصة تبني روتين ثابت. الترشيح مبني على جدولك فقط، ومش ضمان لنتيجة معينة.',useRecommendation:'عرض الباقة المقترحة',toastCopy:'تم نسخ رسالة الباقة.',toastManual:'انسخ الرسالة من المتصفح.',coachNumberMissing:'واتساب هيطلب منك اختيار جهة اتصال لأن رقم الكوتش الدولي لم يُضبط بعد.',chatIntro:'أهلًا كابتن توم، عايز أستفسر عن الباقة دي:',chatMonths:'المدة',chatSessions:'إجمالي الحصص',chatFreq:'المعدل التقريبي',chatPrice:'السعر المعروض',chatCurrency:'العملة: يرجى التأكيد',chatEnd:'ممكن تأكد لي التوافر ونظام التدريب وتفاصيل الدفع؟',title:'CPT TOM | ابنِ أفضل نسخة منك'
  }
};
function getSavedLanguage() { try { return localStorage.getItem('cpt-lang') === 'ar' ? 'ar' : 'en'; } catch { return 'en'; } }
const state = { lang: getSavedLanguage(), months: 3, frequency: 3 };
const $ = (id) => document.getElementById(id);
const t = (key) => copy[state.lang][key] || key;
const formatNumber = (num) => Number(num).toLocaleString(state.lang === 'ar' ? 'ar-EG' : 'en-US');
function currentPlan() {
  const membership = MEMBERSHIPS.find((p) => p.months === state.months);
  if (!membership || !membership.options[state.frequency]) throw new Error('Invalid membership selection');
  return { months: membership.months, frequency: state.frequency, ...membership.options[state.frequency] };
}
function durationText(months) {
  return state.lang === 'ar' ? `${formatNumber(months)} ${months === 1 ? t('month') : t('months')}` : `${months} ${months === 1 ? t('month') : t('months')}`;
}
function planMessage() {
  const p = currentPlan();
  return [t('chatIntro'), `${t('chatMonths')}: ${durationText(p.months)}`, `${t('chatSessions')}: ${formatNumber(p.sessions)}`, `${t('chatFreq')}: ${formatNumber(p.frequency)} ${t('approxWeekly')}`, `${t('chatPrice')}: ${formatNumber(p.price)}`, t('chatCurrency'), '', t('chatEnd')].join('\n');
}
function renderPlans() {
  const root = $('planCards');
  root.replaceChildren();
  for (const plan of MEMBERSHIPS) {
    const option = plan.options[state.frequency];
    const active = plan.months === state.months;
    const el = document.createElement('button');
    el.type = 'button';
    el.className = `pricing-card${active ? ' is-selected' : ''}`;
    el.dataset.months = String(plan.months);
    el.setAttribute('aria-pressed', String(active));
    el.setAttribute('aria-label', `${durationText(plan.months)}, ${formatNumber(option.sessions)} ${t('sessions')}, ${formatNumber(option.price)}`);
    el.innerHTML = `${plan.months === 3 ? `<span class="plan-badge">${t('ourPick')}</span>` : ''}<h3>${durationText(plan.months)}</h3><div class="card-sessions">${formatNumber(option.sessions)} ${t('sessions')}</div><div class="card-old">${formatNumber(option.original)}</div><div class="card-price">${formatNumber(option.price)}</div><div class="card-price-label">${formatNumber(Math.round(option.price / option.sessions * 100) / 100)} / ${t('perSession')}</div><span class="card-save">${t('saved')}</span>`;
    el.addEventListener('click', () => { state.months = plan.months; renderPlans(); });
    root.appendChild(el);
  }
  document.querySelectorAll('.frequency-btn').forEach(btn => {
    const active = Number(btn.dataset.frequency) === state.frequency;
    btn.classList.toggle('is-active', active);
    btn.setAttribute('aria-pressed', String(active));
  });
  const p = currentPlan();
  $('summaryPlan').textContent = durationText(p.months);
  $('summaryDescription').textContent = `${formatNumber(p.sessions)} ${t('sessions')} • ${formatNumber(p.frequency)} ${t('approxWeekly')}`;
  $('summaryPrice').textContent = formatNumber(p.price);
  $('stickyPrice').textContent = formatNumber(p.price);
}
function applyLanguage(lang) {
  state.lang = lang === 'ar' ? 'ar' : 'en';
  document.documentElement.lang = state.lang;
  document.documentElement.dir = state.lang === 'ar' ? 'rtl' : 'ltr';
  document.title = t('title');
  document.querySelectorAll('[data-t]').forEach(node => { node.textContent = t(node.dataset.t); });
  const tagline = document.querySelector('.hero-statement');
  tagline.replaceChildren();
  t('heroSub').split('•').forEach((word,index) => {
    if (index) tagline.appendChild(document.createElement('i'));
    const span = document.createElement('span');
    span.textContent = word.trim();
    tagline.appendChild(span);
  });
  $('langToggle').innerHTML = `${state.lang === 'ar' ? 'EN' : 'AR'} <span class="chevron">⌄</span>`;
  $('langToggle').setAttribute('aria-label', state.lang === 'ar' ? 'Switch to English' : 'التغيير للعربية');
  renderPlans();
  const result = $('recommendation');
  if (!result.hidden) showRecommendation();
  try { localStorage.setItem('cpt-lang', state.lang); } catch { /* local privacy mode */ }
}
function whatsappUrl() {
  const digits = CPT_CONFIG.whatsappNumber.trim();
  if (digits && !/^\d{8,15}$/.test(digits)) throw new Error('Invalid WhatsApp number in configuration');
  return `https://wa.me/${digits ? digits : ''}?text=${encodeURIComponent(planMessage())}`;
}
let toastTimeout;
function notify(message) {
  const toast = $('toast');
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove('show'), 4500);
}
function sendWhatsApp() {
  if (!CPT_CONFIG.whatsappNumber) notify(t('coachNumberMissing'));
  const link = document.createElement('a');
  link.href = whatsappUrl();
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.click();
}
function showRecommendation() {
  const dayCount = Number($('daysSelect').value) === 4 ? 4 : 3;
  const goal = $('goalSelect').value;
  const goalReason = {
    strength: state.lang === 'ar' ? 'ابدأ بالتركيز على تدريبات القوة وتنظيم الزيادة التدريجية في الأحمال مع الكوتش.' : 'Discuss a strength-focused routine and gradual progression with your coach.',
    muscle: state.lang === 'ar' ? 'استمرارية التدريب والتغذية المناسبة جزء مهم من هدف بناء العضلات.' : 'Consistent training and suitable nutrition can support a muscle-building goal.',
    general: state.lang === 'ar' ? 'اختار جدول تقدر تلتزم به بشكل مستمر لتحسين اللياقة العامة.' : 'Choose a frequency you can maintain for general fitness.'
  }[goal] || '';
  const result = $('recommendation');
  result.hidden = false;
  result.replaceChildren();
  const label = document.createElement('strong');
  label.textContent = `${t('recommendation')}: ${durationText(3)} • ${formatNumber(dayCount === 4 ? 48 : 36)} ${t('sessions')}`;
  const desc = document.createElement('p');
  desc.textContent = `${t('recommendationDetail')} ${goalReason}`;
  desc.style.margin = '8px 0';
  const btn = document.createElement('button');
  btn.textContent = t('useRecommendation');
  btn.type = 'button';
  btn.addEventListener('click', () => { state.months = 3; state.frequency = dayCount; renderPlans(); $('plans').scrollIntoView({behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'}); });
  result.append(label,desc,btn);
}
async function copyMessage() {
  const msg = planMessage();
  try {
    if (navigator.clipboard?.writeText) await navigator.clipboard.writeText(msg);
    else {
      const field = document.createElement('textarea');
      field.value = msg;
      field.style.position = 'fixed'; field.style.left = '-9999px';
      document.body.appendChild(field);field.select();
      if (!document.execCommand('copy')) throw new Error('copy unavailable');
      field.remove();
    }
    notify(t('toastCopy'));
  } catch { notify(t('toastManual')); window.prompt(t('copyPlan'),msg); }
}
function boot() {
  $('year').textContent = String(new Date().getFullYear());
  applyLanguage(state.lang);
  document.querySelectorAll('.frequency-btn').forEach(btn => btn.addEventListener('click', () => { state.frequency = Number(btn.dataset.frequency); renderPlans(); }));
  $('langToggle').addEventListener('click', () => applyLanguage(state.lang === 'en' ? 'ar' : 'en'));
  $('joinSelected').addEventListener('click', sendWhatsApp);
  $('mobileJoin').addEventListener('click', sendWhatsApp);
  $('copyPlan').addEventListener('click', copyMessage);
  $('getRecommendation').addEventListener('click', showRecommendation);
  $('menuToggle').addEventListener('click', () => {
    const open = $('mobileMenu').hasAttribute('hidden');
    $('mobileMenu').toggleAttribute('hidden', !open);
    $('menuToggle').setAttribute('aria-expanded', String(open));
  });
  document.querySelectorAll('.mobile-nav a').forEach(link => link.addEventListener('click', () => {
    $('mobileMenu').hidden = true;
    $('menuToggle').setAttribute('aria-expanded','false');
  }));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') { $('mobileMenu').hidden = true; $('menuToggle').setAttribute('aria-expanded','false'); } });
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const obs = new IntersectionObserver((entries, observer) => entries.forEach(entry => {
      if (entry.isIntersecting) {entry.target.classList.add('visible');observer.unobserve(entry.target);}
    }), { threshold: .08 });
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
  } else document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
}
if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded',boot);
  else boot();
}
if (typeof module !== 'undefined' && module.exports) module.exports = { MEMBERSHIPS, currentPlan, state, copy, whatsappUrl, planMessage };
