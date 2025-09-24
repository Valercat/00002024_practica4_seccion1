var variable1;
let variable2;
const variable3 = 2;
// contener letras, números, 0$
var $jquery, _private;
//empezar por números o contener espacios
var 50cent = 1, esto no vale = 1;
// Son case sensitive
var variable = 2, VARIABLE = 2;
// Mayoritariamente se usa camelCase, pero también se usa snake_case
var camelCase = 2, snake_case = 2;
// Se recomienda declarar una variable por línea
var camelCase = 2;
var snake_case = 3;

var miVariable;
let miotraVariable;
miVariable = 2;
mi0traVariable = 2;
var miVariable = 42;
let miotraVariable = miVariable;
// var nos permite acceder a una variable antes de inicializarla
console.log(miVariable); //undefined
var miVariable = 2;
console.log(miVariable); //2
// let en cambio...
console.log(mi0traVariable); //Uncaught ReferenceError: miotraVariable is not defined
let miotraVariable = 2;
console.log(mi0traVariable);
const estoNoDaraProblemas = 42;
// Una variable declarada con const, no puede cambiar su valor.
// Por tanto, siempre ha de ser inicializada en su declaración
const estoVaAFallar; // Uncaught SyntaxError: Missing initializer in const declaration
const estoTambien Fallara = 2;
estoTambien Fallara = 3; // Uncaught TypeError: Assignment to constant variable.

// como obtener el tipo de una variable
typeof variable;
// comprobar el tipo de una variable
variable instanceof Clase;
// undefined
typeof undefined;
typeof estaVariableQueNoHeInicializadoAun;
// object
typeof null;
typeof { key: 2 };
typeof [15, 4];
typeof new Date();
// boolean
typeof true;
typeof false;
typeof new Boolean(true);
// string
typeof "hola";
// function
typeof function (){};
// number
typeof 1;
typeof 1.3;
typeof NaN;
typeof Infinity;
// symbol
typeof Symbol();
typeof Symbol("mi simbolo");

// operador suma
const suma = 1 + 2; // 3
// operador resta
const resta = 3 -2; // 1
// operador producto
const producto = 24; // 8
// operador division
const division = 9 / 3; // 3
// operador potencia
const potencia = 3 ** 2; // 9
// operador modulo u operador resto
const modulo = 8% 3; // 2

const concatenarStrings = "Hola" + " " + "mundo" + "!" ;
// Y aunque esto puede ser util...
const sumaStringYNumero = 1 + "1"
// Pueden ocurrir cosas como esta
const banana = "b" + "a" + +"a" + "a"


// Las operaciones aritmeticas van de izquierda a derecha en js.
// El operador de exponenciación es el único que va de derecha a izquierda
// Los operadores aritmeticos tienen el siguiente orden de prioridad:
// () > * >/ > %> + > -
const expresion1 = (3 + 7) * 10 // 100
const expresion2 = 3 + 7 * 10 //73
const expresion3 = 2 ** 3 ** 2;//512
// Al igual que en las matemáticas u otros lenguajes de programación,
// el orden importa. Estos operadores son los que más prioridad tienen
let inicio = +5; // también podría ser negativo
const sumaYAsigna = ++inicio;
// 6
const asignaYSuma = inicio++;
// 6
const restaYAsigna = --inicio;
// 5
const asignaYResta = inicio--;
// 5
console.log(inicio);
let x = 1 ; // El operador de asignación es el que menos prioridad
let y = 2
let z = 3
x = y; // x vale 2, y vale 2, x iguala a y
x += z; // x vale 5, z vale 3, x vale x + z
x *= y; // x vale 10, y vale 2, x vale x * y
x /= y; // x vale 5, y vale 2, x vale x / y
x %= x; // x vale 0, x vale x % x y su reciduo es 0

// Los operadores lógicos también siguen las normas de la precendencia de operadores.
// Casi todos van de izquierda a derecha, exceptuando el operador NOT, que va de derecha a izquierda
const masFalsoQueSalvame = true;
// El operador AND tiene más prioridad que el operador OR
const cherto = true && true;
let noECherto = false && true;
noECherto = false && false;
noECherto = true && false;

let cherto = true || true;
eCherto = false || false;
eCherto = true || false;
const noECherto = false||false;

// Los operadores de comparación también van de izquierda a derecha
const mayorQue = 100 > 50;
const menorQue = 50 < 100;
const mayor0IgualQue = 100 >= 100;
const menorO0IgualQue = 100 <= 100;
const igual0Casi = 100 == "100";
const igualYDelMismoTipo = 100 === 100;
const noIgual = 100 !== "100";
// Más ejemplos de esto:
1 == '1' // verdadero
1 === '1' // falso
false == 0 // verdadero
false === 0 // falso
'' == 0 // verdadero
''=== 0 //falso

/* IF... ELSE
if (-algo verdadero-) {
-ejecutaremos este código-
} else {
-Si lo anterior no era verdadero, se ejecutara este código-
}; */
if (true) {
console.log("true, por eso me ejecuto");
} else {
console.log("false, por eso me ejecuto");
}
// Podemos poner condiciones intermedias
const miNumero = prompt("¿Qué número estoy pensando?")
if (miNumero < 5) {
alert("miNumero es bastante pequeño");
} else if (miNumero > 5) {
alert("vaya, miNumero se ha pasado");
} else {
alert("imiNumero es 5!");
}

/* switch
switch(expresión) {
case n:
//Código
break;
default:
//Código
}
*/
let numero = prompt("¿Qué número estoy pensando?")
switch(numero) {
case "5":
alert("¡Número correcto!");
break;
case "4":
case "6":
alert("¡Casi aciertas!");
break;
default:
alert("Frío, frío")
}

/* while
while (<Condición>) {
<instrucciones>
};
*/
let edad = prompt("¿Cuantos años tienes?"),
while (edad <= 18) {
alert("Eres demasiado joven lo siento");
edad = prompt("¿Cuantos años tienes?", 0)
};

/* for
for (<expresión inicial>; <condición>; <expresión que actualiza>) {
<instrucciones>
};
*/
for (let i = 0; i < 10; i += 1){
console.log(i)
}
// a veces nos olvidamos de que también existe la resta
for (let i = 10 ; i > 0 ; i = 1){
console.log(i)
}
// las expresiones en for no tienen por qué ser individuales
for (let i = 10, j = 0; i > j; i = 1) {
console.log(i, j)
}


