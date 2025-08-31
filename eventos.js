document.addEventListener("DOMContentLoaded", function (event) {
    const boton = document.getElementById("btnSaludar");
    boton.addEventListener("click", function () {
        event.stopPropagation();
        alert("Hola!");

    });
});

document.addEventListener("DOMContentLoaded", function(event) {
    const div = document.getElementById("section");
    section.addEventListener("click", function(){
        event.stopPropagation();
        alert("Hola! Soy el div");
    })
})