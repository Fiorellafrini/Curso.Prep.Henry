// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
 //1
  //var matriz = []
 // for (var key in objeto) {
  //  matriz.push ([key,objeto[key]])
  //}
  //return matriz

  //2
 // return Object.keys(objeto).map((key) => {
 //return [key,objeto[key]]
  //})

  //3
return Object.entries(objeto)
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí

 var caracter={}
   for (var i=0; i< string.length;i++){
     if( !caracter [string[i]]){
     caracter[string[i]]=0
    }
     caracter[string[i]]+=1
    }
  
  return caracter
}

 //var caracter = { }
 //  for (var i=0 ;i <string.length;i++){
 //   if (string[i] in caracter){
 //     caracter[string[i]]+=1
 //   }else{
 //     caracter[string[i]]=1
 //   }
// }
// return caracter
//}
function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var mayúsculas=''
  var miniscula=''

  for(var i=0; i< s.length; i++){
    if(s[i] !== s[i].toUpperCase()){
     miniscula += s[i]
    }else{
      mayúsculas+= s[i]
    }
  }
     return mayúsculas + miniscula 
}



function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  
//  var FraseInvertida = str.split(' ').map(function(palabra){
 //   return palabra.split('').reverse().join('')
 // }).join(' ')

  //return FraseInvertida
  
  var fraseEntera= str.split(' ').map(function(palabras){
    return palabras.split('').reverse().join('')
   }).join(' ')
 return fraseEntera
}
function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
var NumeroString= numero.toString()
    if(NumeroString===NumeroString. split('').reverse().join('')){
    return 'Es capicua'
  }else{
    return 'No es capicua'
  }
}



function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
 var CadenaModificada= ''
   for (var i=0;i<cadena.length;i++){
   if(cadena[i] === 'a' ||cadena[i] ==='b'||cadena[i]=== 'c')continue
   else{
     CadenaModificada+=cadena[i]
    }
  }
 return CadenaModificada
}
function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  //var arr = [];
   //for (var i=0; i<arr.length;i++){
   //  arr.toLowerCase.sort()
   //  if(arr[i].length < arr[i].length)
   //  return 1
     
   //  (arr[i].length >arr[i].length)
   //  return 1+


    return arr.sort(function(a,b){
    return a.length - b.length;
    });
   

//return arr.sort((a,b) => a.length - b.length)
}
    



function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var NuevoArray=[]
    for (var i =0; i <arreglo1.length ;  i++){
      for (var r =0; r <arreglo2.length ; r++){
      if(arreglo1[i]===arreglo2[r]){
  
        NuevoArray.push(arreglo1[i])
      }
    }
  } 
  return NuevoArray
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

