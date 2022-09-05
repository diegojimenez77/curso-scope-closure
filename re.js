var firstName; // solo declarada la variable aun no inicializada hasta este momento esta como Undefined
firstName = 'Oscar'; // variable inicializada
console.log(firstName);

var lastName = "David"; // Declarar y asignar
lastName = 'Ana'; // reinicializando variable o REASIGNANDO
console.log(lastName);

var secondName = 'David'; // Declarar y asignar
var secondName = 'Ana'; // Re-Declarar y Re-inicializar o REASIGNANDO
console.log(secondName);

// Let
let fruit = 'Apple'; // declarar y asignar
fruit = 'Kiwi'; //reasignar
console.log(fruit);
let fruit = 'Banana';
console.log(fruit);

// Const
const animal = 'dog'; // declarar y asignar
const animal = 'cat'; //reasignar
console.log(animal);

const vehicles = [];
vehicles.push("Bora");
console.log(vehicles);

vehicles.pop();
console.log(vehicles);

// Se introdujeron en ECMAScript 6 y tienen las siguientes características:

// var:

// se puede acceder desde cualquier lugar del scope (es global)
// se puede redeclarar
// se puede reasignar
// let:

// esta limitada por el scope donde es declarada
// NO se puede redeclarar en el mismo scope
// se puede reasignar
// const:

// esta limitada por el scope donde es declarada
// NO se puede redeclarar en el mismo scope
// NO se puede reasignar
// Nota: se pueden utilizar métodos como push o pop para los arrays debido a que los métodos hacen referencia a la constante declarada y no la están redeclarando o reasignando.