
// selection du node HTML
let htmlElt = document.querySelector('html');
// recuperation valeur saisie
let bgColor = document.getElementById('bgtheme');

if(localStorage.getItem('bgtheme')){
    updateBg();
}else{
    setBg();
}

function setBg(){
    localStorage.setItem('bgtheme', bgColor.value);
    updateBg();
}


function updateBg(){
    let bg = localStorage.getItem('bgtheme');
    htmlElt.style.backgroundColor = '#' + bg;
    bgColor.value = bg;
}

bgColor.addEventListener('change', setBg);