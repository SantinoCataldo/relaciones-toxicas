window.addEventListener("scroll", function () {
    let header = document.querySelector("nav");
    header.classList.toggle("scroll", window.scrollY > 50);
})
function cambioImg(anything) {
    document.getElementById('cambio').src = anything;
}
function cambio() {
    const boton = document.querySelector('.boton')
    const header = document.querySelector('header')
    const info = document.querySelector('.info')
    boton.classList.toggle('active')
    header.classList.toggle('active')
    info.classList.toggle('active')
}