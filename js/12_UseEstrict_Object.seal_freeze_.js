// "use strict"; // Correr JS en modo estricto
// Objetos
const producto = {
    nombreProducto : "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}
// freeze() congela un objeto, es decir: impide que se le agreguen nuevas propiedades;
//Object.seal(): sella un objeto, previniendo que puedan añadirse nuevas propiedades al mismo, y marcando todas las propiedades existentes como no-configurables

Object.seal(producto); // .freeze .seal

producto.precio = 'NUEVO PRECIO';

delete producto.precio;

console.log(producto);
