const $=s=>document.querySelector(s);
/* ---------- DATA (yahan se content badlein) ---------- */
const WA="13106223489";
const SV=[["Video editing","Reels, ads and brand films cut to hold attention."],["Scripting","Hooks and scripts written for your audience."],["Web development","Fast, responsive websites and online stores."],["Graphic design","Logos, social creatives and brand kits."],["Meta ads","Targeting, creatives and tracking that you can measure."]];
const D={
"Search engine optimization":[["Growth","29,000",["10 keywords researched","Website and technical SEO audit","On-page SEO up to 25 pages","Link building on 50 websites","1 blog post (up to 1,000 words)","Google Business setup and 5 images","Monthly report"]],["Booster","44,000",["25 keywords researched","Technical and content SEO audit","On-page SEO up to 50 pages","Link building on 75 websites","2 blog posts (up to 2,000 words)","Google Business setup and 10 images","Monthly report with recommendations"],1]],
"Social media management":[["Growth","45,000",["Social media audit","4 platforms of your choice","Strategy development","12 image posts each month","2 animated or video posts","Content writing","Inbox monitoring and reporting"]],["Booster","75,000",["Social media audit","All platforms included","Strategy development","16 image posts each month","4 animated or video posts","Content writing","Comment and inbox management, full reporting"],1]],
"Performance marketing":[["Growth","30,000",["6 ad creatives (static or carousel)","Facebook and Instagram","2 basic GIF ads","Ad copywriting","Audience targeting strategy","Campaign launch and Meta Pixel setup"]],["Booster","50,000",["12 ad creatives (static or carousel)","Facebook, Instagram, Google and TikTok","2 animated video ads (15 sec)","4 basic GIF ads","Retargeting and A/B testing","Conversion tracking and monthly report"],1]],
"Website development":[["Business website","3,500",["Choose from our templates","Up to 10 pages","Contact form for leads","10 email accounts","5 GB hosting","CMS included, no setup charges"]],["Store starter","5,500",["Cloud-based store","Up to 100 products","Setup charge: Rs. 35,000","Admin panel included"]],["Store growth","9,500",["Custom design","Up to 500 products","Setup charge: Rs. 75,000","Admin panel included"],1],["Store booster","12,000",["Custom design and features","Up to 2,000 products","Setup charge: Rs. 100,000","Admin panel included"]]]};
const WORKS=[["Brand film","Video","Brand film for a Lahore retail brand"],["Reels campaign","Video","30-day Reels series with scripted hooks"],["Online store","Web","Custom store with 500 products"],["Business website","Web","10-page lead generation website"],["Brand kit","Design","Logo, colors and social templates"],["Meta ads funnel","Ads","Prospecting and retargeting campaign"]];
const POSTS=[["How often should you post on social media?","Social","Frequency matters less than a clear, repeatable plan."],["Why Meta ads need 3 months to work","Ads","Testing creatives and audiences takes time and budget."],["5 things every business website needs","Web","Speed, clear offer, trust signals, lead form and mobile layout."],["SEO basics for small businesses","SEO","Start with keywords, page titles and Google Business."]];
const TEAM=[["Hadi","Founder and Creative Lead"],["Team member","Video editor"],["Team member","Web developer"],["Team member","Meta ads specialist"]];
const JOBS=[["Video editor","Full time or part time, Lahore or remote"],["Scriptwriter","Part time, remote"],["Meta ads specialist","Full time, Lahore"],["Web developer","Full time, Lahore or remote"]];
let cur='PKR';const RATE=280; /* USD rate: apni real USD pricing yahan set karein */
const m=n=>cur==='PKR'?'Rs. '+n:'$'+Math.round(+n.replace(/,/g,'')/RATE).toLocaleString('en-US');
const PD={home:["Artivex Media | Video Editing, Web Development & Meta Ads Agency","Artivex Media is a creative digital agency for video editing, scripting, web development, graphic design, SEO and Meta ads. One team, one monthly plan."],
services:["Services & Pricing | Video Editing, SEO, Meta Ads, Web Development","See monthly plans for SEO, social media management, Meta ads and website development, from business sites to e-commerce stores."],
portfolio:["Portfolio | Video, Web, Design & Ads Projects | Artivex Media","Explore Artivex Media projects: brand films, Reels campaigns, e-commerce stores, business websites, brand kits and Meta ads funnels."],
blogs:["Blog | Marketing, Content & Web Tips | Artivex Media","Practical guides on social media, Meta ads, SEO and website design for small businesses from the Artivex Media team."],
team:["Our Team | Artivex Media","Meet the editors, writers, developers, designers and ad specialists behind Artivex Media."],
career:["Careers | Video Editor, Developer, Ads Specialist Jobs | Artivex Media","Join Artivex Media. Open roles for video editors, scriptwriters, Meta ads specialists and web developers."],
contact:["Contact Artivex Media | Book a Meeting or Message on WhatsApp","Contact Artivex Media at (310) 622-3489, by email or on WhatsApp. Send your details and we reply within one working day."]};
/* ---------- RENDER ---------- */
document.querySelectorAll('.svcs').forEach(e=>e.innerHTML=SV.map(([a,b])=>`<div class="col-sm-6 col-lg"><div class="svc"><h3>${a}</h3><p>${b}</p></div></div>`).join(''));
const tabs=$('#tabs'),plans=$('#plans');
function show(k){[...tabs.children].forEach(b=>b.classList.toggle('on',b.textContent===k));const l=D[k],c=l.length>2?'col-md-6 col-xl-3':'col-md-6 col-xl-5';
plans.innerHTML=l.map(p=>`<div class="${c}"><div class="plan${p[3]?' hot':''}"><h3>${p[0]}${p[3]?'<span class="tag">Most chosen</span>':''}</h3><div class="price">${m(p[1])} <small>/ month</small></div><ul>${p[2].map(f=>`<li>${f.replace(/Rs\. ([\d,]+)/g,(_,n)=>m(n))}</li>`).join('')}</ul><a class="btn ${p[3]?'btn-gold':'btn-line'}" href="#/contact">Get started</a></div></div>`).join('')}
Object.keys(D).forEach(k=>{const b=document.createElement('button');b.type='button';b.textContent=k;b.onclick=()=>show(k);tabs.appendChild(b)});show(Object.keys(D)[0]);
const cat=['All',...new Set(WORKS.map(w=>w[1]))];
$('#fl').innerHTML=cat.map((c,i)=>`<button class="${i?'':'on'}">${c}</button>`).join('');
$('#works').innerHTML=WORKS.map(([t,c,d])=>`<div class="col-md-6 col-lg-4 work" data-c="${c}"><a href="#" class="card2"><div class="thumb">${t[0]}</div><div class="body"><span class="meta">${c}</span><h3>${t}</h3><p>${d}</p></div></a></div>`).join('');
$('#fl').onclick=e=>{if(e.target.tagName!=='BUTTON')return;[...$('#fl').children].forEach(b=>b.classList.toggle('on',b===e.target));document.querySelectorAll('.work').forEach(w=>w.hidden=e.target.textContent!=='All'&&w.dataset.c!==e.target.textContent)};
$('#posts').innerHTML=POSTS.map(([t,c,d])=>`<div class="col-md-6"><a href="#" class="card2"><div class="thumb">${c}</div><div class="body"><span class="meta">${c}</span><h3>${t}</h3><p>${d}</p></div></a></div>`).join('');
$('#people').innerHTML=TEAM.map(([n,r])=>`<div class="col-6 col-lg-3"><div class="card2"><div class="avatar">${n[0]}</div><div class="body"><h3>${n}</h3><p>${r}</p></div></div></div>`).join('');
$('#jobs').innerHTML=JOBS.map(([t,d])=>`<div class="job"><div><h3>${t}</h3><p>${d}</p></div><a class="btn btn-line" href="mailto:hello@artivexmedia.com?subject=${encodeURIComponent('Application: '+t)}">Apply</a></div>`).join('');
/* ---------- ROUTER ---------- */
function route(){
  let p=(location.hash.replace(/^#\/?/,'')||'home');if(!$('#'+p)||!$('#'+p).classList.contains('page'))p='home';
  document.querySelectorAll('.page').forEach(x=>x.classList.toggle('on',x.id===p));
  document.querySelectorAll('.nav-link[data-p]').forEach(a=>a.classList.toggle('act',a.dataset.p.split(' ').includes(p)));
  $('#cta').hidden=p==='contact';
  const d=PD[p]||PD.home;document.title=d[0];$('meta[name=description]').content=d[1];$('meta[property="og:title"]').content=d[0];$('meta[property="og:description"]').content=d[1];
  window.scrollTo(0,0);
  const n=$('#nav');if(n.classList.contains('show'))bootstrap.Collapse.getOrCreateInstance(n).hide();
}
addEventListener('hashchange',route);route();
/* ---------- HOME VIDEO SOUND ---------- */
const v=$('#vid'),s=$('#snd');s.onclick=()=>{v.muted=!v.muted;if(!v.muted){v.currentTime=0;v.play()}s.textContent=v.muted?'Sound on':'Mute'};
/* ---------- CONTACT FORM -> WhatsApp (310) 622-3489 ---------- */
$('#cf').addEventListener('submit',e=>{e.preventDefault();const f=new FormData(e.target);
const m=`*New enquiry - Artivex Media*\nName: ${f.get('name')}\nPhone: ${f.get('phone')}\nEmail: ${f.get('email')}\nService: ${f.get('service')}\nMessage: ${f.get('message')}`;
window.open(`https://wa.me/${WA}?text=${encodeURIComponent(m)}`,'_blank');$('#ok').hidden=false});
/* ---------- FAQ, REVIEWS, SEO SCHEMA ---------- */
const FAQ=[["What services does Artivex Media offer?","We offer video editing, scriptwriting, web development, graphic design, SEO, social media management and Meta ads management from one team."],
["How long does it take to see results?","Growth is not a one-week trick. Most brands see a clear picture of what works in 3 to 6 months of consistent publishing, testing and improving."],
["Do you work with businesses in the United States?","Yes. We work remotely with brands in the US and beyond. Call or message us on WhatsApp at (310) 622-3489."],
["What do your prices include?","Each plan lists its deliverables. Taxes are extra, and payment gateway and SMS costs are not included in e-commerce plans."],
["How do I get started?","Use the contact form to book a meeting. Your details open in WhatsApp, and we reply within one working day."]];
$('#faq').innerHTML=FAQ.map(([q,a])=>`<details><summary>${q}</summary><p>${a}</p></details>`).join('');
$('#quotes').innerHTML=[["One team now runs our reels and our ads. No more chasing five freelancers.","Client name","Retail brand"],["The monthly report finally shows where our ad budget goes.","Client name","E-commerce store"],["Our new website loads fast and the contact form brings real leads.","Client name","Local service business"]].map(([t,n,r])=>`<figure class="quote"><div class="stars" aria-label="5 stars">★★★★★</div><p class="mt-2">${t}</p><small>${n}, ${r}</small></figure>`).join('');
const ld=document.createElement('script');ld.type='application/ld+json';ld.textContent=JSON.stringify({"@context":"https://schema.org","@type":"FAQPage",mainEntity:FAQ.map(([q,a])=>({"@type":"Question",name:q,acceptedAnswer:{"@type":"Answer",text:a}}))});document.head.appendChild(ld);
/* ---------- EXTRA INTERACTIONS ---------- */
$('#cur').onclick=e=>{if(e.target.tagName!=='BUTTON')return;cur=e.target.textContent;[...$('#cur').children].forEach(b=>b.classList.toggle('on',b===e.target));show(tabs.querySelector('.on').textContent)};
$('#em').onclick=()=>{const c=$('#cf');if(!c.reportValidity())return;const f=new FormData(c);location.href='mailto:hello@artivexmedia.com?subject='+encodeURIComponent('Enquiry from '+f.get('name'))+'&body='+encodeURIComponent(`Name: ${f.get('name')}\nPhone: ${f.get('phone')}\nEmail: ${f.get('email')}\nService: ${f.get('service')}\n\n${f.get('message')}`)};
const io=new IntersectionObserver(es=>es.forEach(x=>{if(!x.isIntersecting)return;const e=x.target;e.classList.add('in');io.unobserve(e);setTimeout(()=>{e.style.transitionDelay=''},1100);const n=+e.dataset.n;if(n){const t0=performance.now(),run=t=>{const k=Math.min((t-t0)/1200,1);e.textContent=Math.round(n*(1-Math.pow(1-k,3)))+(e.dataset.s||'');if(k<1)requestAnimationFrame(run)};requestAnimationFrame(run)}}),{threshold:.15});
document.querySelectorAll('.svc,.step,.quote,.card2,.job,.stat,details,.promise .plan,.stage~*').forEach((e,i)=>{e.classList.add('rv');e.style.transitionDelay=(i%4)*80+'ms';io.observe(e)});
document.querySelectorAll('.stat b[data-n]').forEach(b=>io.observe(b));
addEventListener('scroll',()=>{const h=document.documentElement;$('#bar').style.width=(h.scrollTop/(h.scrollHeight-h.clientHeight||1)*100)+'%';$('.navbar').classList.toggle('sc',h.scrollTop>10)},{passive:true});
