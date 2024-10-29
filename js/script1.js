
const navChange = () => {


    if (window.innerHeight * 0.20 < window.scrollY) {
        document.querySelector("nav").classList.add("fondoNav")

    } else {
        document.querySelector("nav").classList.remove("fondoNav")


    }
}




let video = document.querySelector('video');
let tiempoActual;

let tiempoVideo = document.getElementById('tiempoVideo');
tiempoVideo.textContent = 'Duracion video 04:41';

const reproducir = () => {
    video.play()

    tiempoActual = setInterval(() => {
        tiempoVideo.textContent = "00:" + video.currentTime.toFixed(0)
    }, 1000)

}
const pausar = () => {
    video.pause()
    clearInterval(tiempoActual)
}



