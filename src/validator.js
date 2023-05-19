const validator = {
  isValid: function (tarjeta) {
    //  split divide un divide un objeto de tipo String en un array
    const tarjetaArray = tarjeta.split("");
    // reverse invierte el orden de los elementos de un array  El primer elemento pasa a ser el último y el último pasa a ser el primero.
    //se une a los elementos de una matriz en una cadena, y devuelve la cadena
    const tarjetaReverse = tarjetaArray.reverse().join();
    const arrayN = tarjetaReverse.split(",");
    //doble cada segundo digito
    //arreglos para almacenar digitos pares e inpares
    const par = [];
    let retorno;
    let vsuma = 0;
    let sumpares = 0;
    let sumimpares = 0;
  
    // en este caso lo que hace un for es recorrer un elemento array el elemnto if es si la condicion es verdadera else si la condicion falsa
    for (let i = 0; i < arrayN.length; i++) {
      if ((i % 2) === 0) {// 
        sumimpares = sumimpares + parseInt((arrayN[i])); 
      }
      else {
        par.push(arrayN[i]);//push añade uno o más elementos al final de un array y devuelve la nueva longitud del array.
      }
    }
    //aqui creo la funcion de el siguiente paso de luhn que es la cual separa a los que ocupan segunda posicion y los multiplicara por dos, en este caso
    //se pone una condicion que dicta que el numero en posicion par sera multiplicado por dos
    for (let i = 0; i < par.length; i++) {
      const multi = parseInt(par[i]) * 2;
      if (10 <= multi) {
        const cadena = multi.toString();
        const n1 = parseInt(cadena[0]);
        const n2 = parseInt(cadena[1]);
        sumpares = sumpares + (n1 + n2);
      }
      else {
        sumpares = sumpares + (parseInt(par[i]) * 2);
      }
    }
 
    
    vsuma = sumpares + sumimpares;
  
    if ((vsuma % 10) === 0) {
      retorno= true;
    }
    else {
      retorno=  false;
    }
    return retorno;
  },
  maskify: (arrayN) => {
    return arrayN.slice(0, -4).replace(/./g, "#") + arrayN.slice(-4);
  },



};

export default validator;