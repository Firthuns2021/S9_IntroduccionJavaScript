// Array Methods

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500 },
    { nombre: 'Televisión 50 Pulgadas', precio: 700 },
    { nombre: 'Tablet', precio: 300 },
    { nombre: 'Audifonos', precio: 200 },
    { nombre: 'Teclado', precio: 50 },
    { nombre: 'Celular', precio: 500},
    { nombre: 'Bocinas', precio: 300},
    { nombre: 'Laptop', precio: 800}
];

// forEach
meses.forEach(function(mes) {
    if(mes == 'Marzo') {
        console.log('Marzo si existe');
    }
});

// Includes
let resultado = meses.includes('Diciembre');

// Some ideal para arreglo de objetos
resultado = carrito.some(function(producto) {
    return producto.nombre === 'Celular PRO'
})
console.log('some',resultado);
// Reduce
resultado = carrito.reduce(function(total, producto) {
    return total + producto.precio
}, 0);
console.log('Reduce',resultado);

// Filter: hace un filtrado dentro dentro de la función
resultado = carrito.filter(function(producto) {
    return producto.precio > 400
});
console.log('Filter',resultado);
resultado = carrito.filter(function(producto) {
    return producto.nombre !== 'Celular'
});

console.log('Filter',resultado);


