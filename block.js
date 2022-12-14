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

// Al intentar llamar fuera del alcance de bloque a las variables declaradas con let o const, tenemos un error, mientras que la variable declarada con var es accedida sin problemas. Esto puede ocasionar un error l贸gico ya que no estamos protegiendo a la variable fruit1 (declarada con var), para que solo sea accedida dentro de su bloque, esta puede ser accedida y alterada por otra funci贸n y nos puede llevar tiempo encontrar cu谩l es el problema. 馃槬
// .
// Los programadores usualmente no somos muy creativos para nombrar variables, por lo que es com煤n que podamos nombrar en otra funci贸n una variable llamada fruit1 (pensando que esta solo va a existir en el 谩mbito local de la funci贸n) y all铆 cometer el error l贸gico. 馃サ
// .
// No es recomendable usar var 馃檯馃徎鈥嶁檪锔? a medida que vayas practicando notar谩s que con let y const tienes m谩s control sobre las variables que declares. 馃憣馃徎