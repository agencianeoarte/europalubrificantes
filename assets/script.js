(() => {
  'use strict';
  const config = window.EUROPA_CONFIG;
  const whatsappURL = text => `https://wa.me/${config.whatsapp}?text=${encodeURIComponent(text)}`;
  document.querySelectorAll('[data-whatsapp]').forEach(a => { a.href=whatsappURL(config.defaultMessage);a.target='_blank';a.rel='noopener'; });
  const toggle=document.querySelector('.menu-toggle'),menu=document.getElementById('menu');
  function closeMenu(){menu.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Abrir menu');}
  toggle.addEventListener('click',()=>{const open=menu.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Fechar menu':'Abrir menu');});
  menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
  document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu();});
  document.getElementById('year').textContent=new Date().getFullYear();
  const form=document.getElementById('contact-form');
  document.querySelectorAll('[data-service]').forEach(a=>a.addEventListener('click',()=>{form.elements.service.value=a.dataset.service;}));
  form.addEventListener('submit',e=>{e.preventDefault();if(!form.reportValidity())return;const f=new FormData(form);const text=`Olá, Europa Lubrificantes!\n\nMeu nome é ${f.get('name').trim()}.\nVeículo e ano: ${f.get('vehicle').trim()||'A informar'}\nProduto/serviço: ${f.get('service')}\nMensagem: ${f.get('message').trim()||'Gostaria de consultar a disponibilidade.'}`;window.open(whatsappURL(text),'_blank','noopener');});
  const box=document.getElementById('lightbox');let trigger;
  document.querySelectorAll('[data-image]').forEach(b=>b.addEventListener('click',()=>{trigger=b;box.querySelector('img').src=b.dataset.image;box.querySelector('img').alt=b.dataset.caption;box.querySelector('p').textContent=b.dataset.caption;box.showModal();}));
  box.querySelector('button').addEventListener('click',()=>box.close());
  box.addEventListener('click',e=>{if(e.target===box){const r=box.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)box.close();}});
  box.addEventListener('close',()=>{if(trigger)trigger.focus();});
  if('IntersectionObserver' in window&&!window.matchMedia('(prefers-reduced-motion: reduce)').matches){document.documentElement.classList.add('has-reveal');const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target);}}),{threshold:.08});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));}
})();
