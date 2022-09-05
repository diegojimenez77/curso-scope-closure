function greeting() {
    let userName = 'Ana'
    console.log(userName);

    if (userName === 'Ana') {
        console.log(`Hello ${userName}!`); // (las `` template streams permite pasar variables sin tener que concatenarlas)
    }
}

greeting();
console.log(userName); // esta linea no funciona debido a que userName esta declarado como una variable local en al funcion greeting

