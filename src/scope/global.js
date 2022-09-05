//variebles

var a; //declarando
var b = 'b'; // declaramos / asignamos
b = 'bb'; // reasignacion
var a = 'aa'; // redeclaracion

// Global Scope
var fruit = 'Apple'; // global

function bestFruit() {
    console.log(fruit);
}
bestFruit();

function countries() {
    country = 'Colombia'; //se esta declarando como global, si se declarara como var country = 'Colombia' quedaria declarada como local.
    console.log(country);
}
countries();
console.log(country);