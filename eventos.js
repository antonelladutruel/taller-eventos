const boton = document.getElementsByClassName("boton")[0]; 
const div = document.getElementById("div1");

boton.addEventListener("click", function(event) {
    alert("Hola!");
    event.stopPropagation();
});

div.addEventListener("click", function() {
    alert("Hola! Soy el div");
});