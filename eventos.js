document.addEventListener("DOMContentLoaded", function () {
    const boton = document.getElementById("btnSaludar");
    boton.addEventListener("click", function () {
        alert("Hola!");

    });
});

document.addEventListener("DOMContentLoaded", function() {
    const div = document.gerElementById("section");
    section.addEvenListener("click", function(){
        alert("Hola! Soy el div");
    })
})