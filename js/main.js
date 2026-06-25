/* ==========================================
   MENÚ LATERAL
========================================== */

const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const sideMenu = document.getElementById("side-menu");
const overlay = document.getElementById("overlay");

menuBtn.addEventListener("click", () => {

    sideMenu.classList.add("active");
    overlay.classList.add("active");

});

closeBtn.addEventListener("click", () => {

    sideMenu.classList.remove("active");
    overlay.classList.remove("active");

});

overlay.addEventListener("click", () => {

    sideMenu.classList.remove("active");
    overlay.classList.remove("active");

});

/* ==========================================
   GALERÍA DE IMÁGENES
========================================== */

const images = document.querySelectorAll(".producto-img");

const modal = document.getElementById("image-modal");
const modalImg = document.getElementById("modal-img");
const closeModal = document.getElementById("close-modal");

if(modal && modalImg && closeModal){

    images.forEach(image => {

        image.addEventListener("click", () => {

            modal.classList.add("active");

            modalImg.src = image.src;
            modalImg.alt = image.alt;

        });

    });

    closeModal.addEventListener("click", () => {

        modal.classList.remove("active");

    });

    modal.addEventListener("click", (e) => {

        if(e.target === modal){

            modal.classList.remove("active");

        }

    });

    document.addEventListener("keydown", (e) => {

        if(e.key === "Escape"){

            modal.classList.remove("active");

        }

    });

}

/* ==========================================
   FILTRAR PRODUCTOS POR COLECCIÓN
========================================== */

const colecciones = document.querySelectorAll(".coleccion");
const productos = document.querySelectorAll(".producto");

colecciones.forEach(coleccion => {

    coleccion.addEventListener("click", () => {

        const categoria = coleccion.dataset.coleccion;

        productos.forEach(producto => {

            if(producto.dataset.coleccion === categoria){

                producto.style.display = "block";

            }else{

                producto.style.display = "none";

            }

        });

        const seccionProductos =
        document.getElementById("productos");

        if(seccionProductos){

            seccionProductos.scrollIntoView({
                behavior:"smooth"
            });

        }

    });

});

/* ==========================================
   MOSTRAR TODOS LOS PRODUCTOS
========================================== */

const mostrarTodos =
document.getElementById("mostrar-todos");

if(mostrarTodos){

    mostrarTodos.addEventListener("click", () => {

        productos.forEach(producto => {

            producto.style.display = "block";

        });

    });

}

/* ==========================================
   SLIDER SOBRE PRAGUEIRA
========================================== */

const sobreSlider = document.getElementById("sobre-slider");

if(sobreSlider){

    const imagenes = [

        "img/PLAYA.JPG",
        "img/CASITA.JPG",
        

    ];

    let indice = 0;

    document.querySelector(".next").addEventListener("click", ()=>{

        indice++;

        if(indice >= imagenes.length){

            indice = 0;

        }

        sobreSlider.src = imagenes[indice];

    });

    document.querySelector(".prev").addEventListener("click", ()=>{

        indice--;

        if(indice < 0){

            indice = imagenes.length - 1;

        }

        sobreSlider.src = imagenes[indice];

    });

}