function fruits() {
    if(true){
        var fruit1 = 'Apple'; //function scope
        let fruit2 = 'Kiwi'; // block scope
        const fruit3 = 'Banana'; // block scope

        console.log(fruit1); // se imprime
        console.log(fruit2); // se imprime
        console.log(fruit3); // se imprime
    }
    console.log(fruit1); // se imprime dado que su variable esta declarada como function scope
    console.log(fruit2); // NO se imprime
    console.log(fruit3); // NO se imprime
}
fruits();

// Al intentar llamar fuera del alcance de bloque a las variables declaradas con let o const, tenemos un error, mientras que la variable declarada con var es accedida sin problemas. Esto puede ocasionar un error lógico ya que no estamos protegiendo a la variable fruit1 (declarada con var), para que solo sea accedida dentro de su bloque, esta puede ser accedida y alterada por otra función y nos puede llevar tiempo encontrar cuál es el problema. 😥
// .
// Los programadores usualmente no somos muy creativos para nombrar variables, por lo que es común que podamos nombrar en otra función una variable llamada fruit1 (pensando que esta solo va a existir en el ámbito local de la función) y allí cometer el error lógico. 🥵
// .
// No es recomendable usar var 🙅🏻‍♂️ a medida que vayas practicando notarás que con let y const tienes más control sobre las variables que declares. 👌🏻