document.querySelectorAll('.cmd button').forEach(b=>b.addEventListener('click',async()=>{
  const t=b.parentElement.querySelector('code').textContent;
  try{await navigator.clipboard.writeText(t);b.textContent='copiado';}catch{b.textContent='erro';}
  setTimeout(()=>b.textContent='copiar',1500);}));
const dlg=document.getElementById('lb'),big=dlg.querySelector('img');
document.querySelectorAll('figure button').forEach(b=>b.addEventListener('click',()=>{big.src=b.dataset.src;big.alt=b.dataset.alt;dlg.showModal();}));
dlg.addEventListener('click',()=>dlg.close());
const links=[...document.querySelectorAll('nav a[href^="#"]')];
document.querySelectorAll('main section').forEach(s=>new IntersectionObserver(es=>es.forEach(e=>{
  if(e.isIntersecting)links.forEach(l=>l.classList.toggle('on',l.getAttribute('href')==='#'+s.id));
}),{rootMargin:'-20% 0px -70% 0px'}).observe(s));
