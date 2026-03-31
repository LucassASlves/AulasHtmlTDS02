console.log("Hello, World!");
 
const nome = "João"; // Recebeu um valor não pode ser alterado
let idade = 30; // Pode ser alterado
var sobrenome = "Silva"; // Escopo global
 
function multiplicar(x, y){ //função tradicional 
    return x * y; 
}
 //Arrow Function

 const multiplicar =() => {
    console.log(x*y);
    return 'O resultado da multiplicação é: " ${x*y};'
 }

 const raizQuadrada = (n) => Math.sqrt(n)

 const subtrair = (x, y) => x-y

 const potencia = (x, y) => x^y

 const dividir = (x, y) => {
    if (y != 0) {
        return x / y;
    }
    return "Denominador precisa ser diferente de zero";
 }    