// escribe tu respuesta acá
function imprimirArreglo(arreglo) {
    for (let i = 0;; i++) {
        if (arreglo(i) >=4) {
            break;
        }
        console.log(arreglo(i));
    }
}
// código de prueba
console.log(imprimirArreglo(1, "Hola", 2, "Mundo"))
// 1
// Hola
// 2
// Mundo