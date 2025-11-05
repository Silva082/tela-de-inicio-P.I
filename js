let count = 1;

function initCarousel(){
  // se algum radio já estiver marcado, sincroniza o contador
  for(let i=1;i<=4;i++){
    const r = document.getElementById('radio'+i);
    if(r && r.checked){ count = i; break; }
  }
  // se nenhum marcado, marca o primeiro
  if(!document.getElementById('radio'+count) || !document.getElementById('radio'+count).checked){
    const first = document.getElementById('radio1');
    if(first) first.checked = true;
    count = 1;
  }

  // inicia autoplay
  setInterval(nextImage, 2000);
}

function nextImage(){
    count++;
    if(count>4){
        count = 1;
    }
    const r = document.getElementById("radio"+count);
    if (r) r.checked = true;
}

if (document.readyState === 'loading'){
  document.addEventListener('DOMContentLoaded', initCarousel);
} else {
  initCarousel();
}
