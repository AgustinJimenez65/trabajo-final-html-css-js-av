const navChange = () => {


    if (window.innerHeight * 0.20 < window.scrollY) {
        document.querySelector("nav").classList.add("fondoNav")

    } else {
        document.querySelector("nav").classList.remove("fondoNav")


    }
}






const arrastreImg = (e) => {
    let data = e.target.id;
    e.dataTransfer.setData("Text", data)
}


let zonaDestino = document.querySelector(".zona-destino")

zonaDestino.addEventListener("dragover", (event) => {
    event.preventDefault();
})

zonaDestino.addEventListener("drop", (event) => {
    let contenido = event.dataTransfer.getData("Text");

    let imagen = document.getElementById(contenido);
    console.dir(imagen)
    event.target.innerHTML = `<img src=${imagen.src}>`

})




let zonaDestino2 = document.querySelector(".zona-destino2")

zonaDestino2.addEventListener("dragover", (event) => {
    event.preventDefault();
})

zonaDestino2.addEventListener("drop", (event) => {
    let contenido = event.dataTransfer.getData("Text");

    let imagen = document.getElementById(contenido);
    console.dir(imagen)
    event.target.innerHTML = `<img src=${imagen.src}>`

})




let zonaDestino3 = document.querySelector(".zona-destino3")

zonaDestino3.addEventListener("dragover", (event) => {
    event.preventDefault();
})

zonaDestino3.addEventListener("drop", (event) => {
    let contenido = event.dataTransfer.getData("Text");

    let imagen = document.getElementById(contenido);
    console.dir(imagen)
    event.target.innerHTML = `<img src=${imagen.src}>`

})


function reinicio() {
    window.location.reload();
}






