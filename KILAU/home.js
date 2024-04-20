let awan1 = document.getElementById('pict1');
let awan2 = document.getElementById('pict2');
let tanah = document.getElementById('pict3');
let HiCha = document.getElementById('pict4');
let people1 = document.getElementById('pict5');
let people2 = document.getElementById('pict6');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    awan1.style.top = value * -1.5 + 'px';
    awan1.style.right = value * 1.5 + 'px';
    awan2.style.top = value * -1.5 + 'px';
    awan2.style.left = value * 1.5 + 'px';
    // tanah.style.bottom = value * 1.5 + 'px';
    // tanah.style.left = value * 1.5 + 'px';
    HiCha.style.top = value * -1.5 + 'px';
    // wel.style.left = value * 1.5 + 'px';
    // people1.style.top= value * -1.5 + 'px';
    people1.style.left = value * -1.5 + 'px';
    // people2.style.top = value * -1.5 + 'px';
    people2.style.left = value * 1.5 + 'px';
})