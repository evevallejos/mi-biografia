const elementos = document.querySelectorAll(".aparecer");

function mostrarElementos(){

const alturaPantalla = window.innerHeight;

elementos.forEach(elemento => {

const distancia = elemento.getBoundingClientRect().top;

if(distancia < alturaPantalla - 100){
elemento.classList.add("visible");
}

});

}

window.addEventListener("scroll", mostrarElementos);

mostrarElementos();