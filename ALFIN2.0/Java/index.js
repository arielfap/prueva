class tarea2 {
  calcularSumaDivisores(n) {
    let suma = 0, i = 0
    let divi = []
    for (i = 1; i <= n / 2; i++) {
      if (n % i == 0) {
        suma += i
        divi.push(i);


      }
    }
    suma += n;
    divi.push(n);
    return { suma, divi };
  }
  // ejercicio 1
  divisores() {
    let n = 0, resp, resultado = 0
    n = document.getElementById("n").value;
    n = parseInt(n);
    resultado = this.calcularSumaDivisores(n);
    resp = document.getElementById("resp");

    resp.innerHTML += `La suma de los divisores es: ${resultado.suma}<br>Sus divisores son: ${resultado.divi} `

  }
  // ejercicio 2
  esPerfecto() {
    let n = 0, resp, resultado = 0
    n = document.getElementById("n").value;
    n = parseInt(n);
    resultado = this.calcularSumaDivisores(n);
    resp = document.getElementById("resp");
    if (resultado.suma == 2 * n) {
      resp.innerHTML = `${n} es un número perfecto`
    } else {
      resp.innerHTML = `${n} no es un número perfecto`
    }
  }
  //ejercicio 3
  primo1(n) {
    let divisor = 0;
    for (let i = 1; i <= n; i++) {
      if (n % i == 0) {
        divisor += i;
      }
    }
    return divisor;
  }
  primo() {
    let n = 0, resp, divisor = 0;
    n = document.getElementById("n").value;
    resp = document.getElementById("resp");
    n = parseInt(n);
    divisor = this.primo1(n);
    if (divisor == n + 1) {
      resp.innerHTML = `${n} es un número primo`;
    } else {
      resp.innerHTML = `${n} no es un número primo`;
    }
  }
  //ejercicio 4
  calcularprimogemelo(numero) {
    let divisor = 0;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
      if (numero % i === 0) {
        return false;
      }
    }
    return true;
  }
  primogemelo() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let resp = document.getElementById("resp")
    if (this.calcularprimogemelo(parseInt(num1)) && this.calcularprimogemelo(parseInt(num2))) {
      resp.innerHTML = ` ${num1} y ${num2} Son numeros primos gemelos`;
    }
    else {
      resp.innerHTML = `${num1} y ${num2} No son numeros primos gemelos`;
    }
  }
  // ejercicio 5
  concat(palabra1, palabra2) {
    let resultado = 0
    resultado = palabra1 + " " + palabra2
    return resultado
  }
  concatenar() {
    let palabra1 = 0, palabra2 = 0, resp, resul = 0
    palabra1 = document.getElementById("palabra1").value
    palabra2 = document.getElementById("palabra2").value
    resp = document.getElementById("resp")
    resul = this.concat(palabra1, palabra2)
    resp.innerHTML = resul
  }
  buscadena(cadena1, cadena) {
    let i = 0
    for (i = 0; i <= cadena1.length - cadena.length; i++) {
      if (cadena1.toLowerCase().substring(i, i + cadena.length) == cadena.toLowerCase()) {
        return i
      }

    }
    return -1

  }
  // ejercicio 6
  buscarsubcadena() {
    let cadena1 = "", cadena = "", resp, resul = 0
    cadena1 = document.getElementById("palabra1").value
    cadena = document.getElementById("palabra2").value
    resul = this.buscadena(cadena1, cadena)
    resp = document.getElementById("resp")
    if (resul !== -1) {
      resp.innerHTML = `La palabra a buscar: ${cadena}; fue encontrada en la posición: ${resul}.`
    } else {
      resp.innerHTML = `La palabra a buscar: ${cadena}; no fue encontrada en la cadena principal.`
    }
  }
  // ejercicio 7

  incadena(palabra1, palabra2) {
    let re = 0
    re = palabra1.indexOf(palabra2)
    return re
  }
  insertarsubcadena() {
    let palabra1 = "", palabra2 = "", resul = 0, resp
    palabra1 = document.getElementById("palabra1").value
    palabra2 = document.getElementById("palabra2").value
    resp = document.getElementById("resp")
    resul = this.buscadena(palabra1, palabra2)
    // resp.innerHTML = `La palabra anterior era: ${palabra1}; La nueva palabra es: ${palabra2}.`
    if (resul === -1) {
      palabra1 += `${palabra2}`
      resp.innerHTML = `Se ha agregado la subcadena "${palabra2}" a "${palabra1}".`
    } else {
      alert('Ya existe esa palabra')
    }

  }
  // ejercicio 8
  deletesubcadena(palabra1, palabra2) {
    let res = 0
    res = palabra1.replace(palabra2, "")
    return res
  }

  eliminarsubcadena() {
    let palabra1 = "", palabra2 = "", resul = 0, resp
    palabra1 = document.getElementById("palabra1").value
    palabra2 = document.getElementById("palabra2").value
    resp = document.getElementById("resp")
    resul = this.deletesubcadena(palabra1, palabra2)
    resp.innerHTML = resul
  }
  // ejericio 9
  convertirACadena(arreglo, separador) {
    let resultado = arreglo.join("");
    return resultado;
  }

  convertirArregloACadena() {
    let palabra1 = [], palabra2 = " ", resul = 0, resp;

    palabra1 = document.getElementById("palabra1").value.split(';');
    palabra2 = ";";
    resp = document.getElementById("resp");
    resul = this.convertirACadena(palabra1, palabra2);
    resp.innerHTML = `EL arreglo ahora es es una cadena es ${resul}`;
  }
  // ejercicio 10
  mayorEncontrado(arreglo) {
    let mayor = parseFloat(arreglo[0]);

    for (let i = 1; i < arreglo.length; i++) {
      let numActual = parseFloat(arreglo[i]);
      if (!isNaN(numActual) && numActual > mayor) {
        mayor = numActual;
      }
    }
    return mayor;
  }
  mayorArreglo() {
    let arreglo = document.getElementById("arreglo").value;
    let resp = document.getElementById("resp");

    arreglo = arreglo.split(";");
    let mayor = this.mayorEncontrado(arreglo);

    resp.innerHTML = arreglo = [`${arreglo.join(", ")}`];
    resp.innerHTML += `<br> Mayor del arreglo: ${mayor}`;
  }


  // ejercicio11
  isbuscaArreglo(arreglo, buscado) {
    let pos = 0, enc = false
    while (pos < arreglo.length && enc == false) {
      if (arreglo[pos] == buscado) {
        enc = true
      } else {
        pos++
      }
    }
    if (enc == true) {
      return pos
    } else {
      return -1
    }
  }
  buscarArreglo() {

    let arreglo = document.getElementById("numeros").value
    arreglo = arreglo.split(";")
    let buscado = document.getElementById("buscado").value
    let resp = document.getElementById("respuesta")
    let posi = this.isbuscaArreglo(arreglo, buscado)
    if (posi >= 0) {
      resp.innerHTML = `${buscado} se encontró en la posicion:${posi} del arreglo`
    } else {
      resp.innerHTML = `${buscado} No se encontró en el arreglo`
    }


  }
  // ejercicio 12

  insertar(array,numero,posicion){
    if (posicion >= 0 && posicion <= array.length) {
      array.splice(posicion, 0, numero);
           return array
    }else{
      return null
    }  
   }
   index(){
       let array=[1,2,3,4,5]
       let numero,posi,resp=document.getElementById("resp")
       numero=document.getElementById("num").value
       posi=document.getElementById("pos").value
       let nuvarray=this.insertar(array,numero,posi)
       if (nuvarray!==null ){
         resp.innerHTML=`el nuevo numero insertado es:${numero} y se encuentra en la posicion:${posi}`
         resp.innerHTML+=` su insercion es:[${nuvarray}]`
       }else{
         resp.innerHTML=`la posicion especificada esta fuera del rango`
       }
   }
  // ejercicio 13
 
  eliminar(pos,arreglo){
    if (pos >= 0 &&pos <= arreglo.length){
      arreglo.splice(pos,1)
      return arreglo
    }else{
      return null
    }
  }
  index2(){
    let resp=document.getElementById("resp")
    let arreglo=[1,2,3,4,5]
    let pose=document.getElementById("pose").value
    let nuarreglo=this.eliminar(pose,arreglo)
    if(nuarreglo!==null){
        resp.innerHTML=`numero del arreglo eliminado es,${nuarreglo}`
    }else{
        resp.innerHTML=`la posicion especiicada esta fuera del rango`
    }
  }
  // ejercicio 14
  cadena_array(cadena) {
    return cadena.split(``)
  }
  index3() {
    let resp = document.getElementById("resp")
    let cade = document.getElementById("cadena").value
    let arraynu = this.cadena_array(cade)
    resp.innerHTML = [`${arraynu.join(",")}`]
  }
  // ejericicio 15
  calbase10a2(n) {
    let res = "";

    if (isNaN(n) || n < 0 || Math.floor(n) !== n) {
      return "Número no válido";
    }

    if (n === 0) {
      return "0";
    }

    while (n > 0) {
      res = (n % 2) + res;
      n = Math.floor(n / 2);
    }

    return res;
  }

  base10a2() {
    let n = 0, resultado = 0, resp;

    n = document.getElementById("n").value;
    n = parseInt(n);

    resp = document.getElementById("resp");
    resultado = this.calbase10a2(n);
    resp.innerHTML = `La transformación de base 10 a 2 es: ${resultado}`;
  }
  // ejercicio 16
  calbase10a8(n) {
    let res = "";

    if (isNaN(n) || n < 0 || Math.floor(n) !== n) {
      return "Número no válido";
    }

    if (n === 0) {
      return "0";
    }

    while (n > 0) {
      res = (n % 8) + res;
      n = Math.floor(n / 8);
    }

    return res;
  }

  base10a8() {
    let n = 0, resultado = 0, resp;

    n = document.getElementById("n").value;
    n = parseInt(n);

    resp = document.getElementById("resp");
    resultado = this.calbase10a8(n);
    resp.innerHTML = `La transformación de base 10 a 8 es: ${resultado}`;
  }
  // ejercicio 17
  calbase10a16(n) {
    let res = "";

    if (isNaN(n) || n < 0 || Math.floor(n) !== n) {
      return "Número no válido";
    }

    if (n === 0) {
      return "0";
    }

    while (n > 0) {
      res = (n % 16) + res;
      n = Math.floor(n / 16);
    }

    return res;
  }

  base10a16() {
    let n = 0, resultado = 0, resp;

    n = document.getElementById("n").value;
    n = parseInt(n);

    resp = document.getElementById("resp");
    resultado = this.calbase10a16(n);
    resp.innerHTML = `La transformación de base 10 a 16 es: ${resultado}`;
  }
  // ejercicio 18
  calbase2a10(n) {
    let res = 0;
    for (let i = 0; i < n.length; i++) {
      res = res * 2 + parseInt(n[i]);
    }
    return res;
  }

  base2a10() {
    let n = 0, resultado = 0, resp;

    n = document.getElementById("n").value;

    resp = document.getElementById("resp");
    resultado = this.calbase2a10(n);
    resp.innerHTML = `La transformación de base 2 a 10 es: ${resultado}`;
  }
  // ejericicio 19
  calbase2a8(n) {
    while (n.length % 3 !== 0) {
      n = "0" + n;
    }


    let res = 0, re = 0, r = 0
    for (let i = 0; i < n.length; i += 3) {
      r = n.substr(i, 3);
      re = parseInt(r, 2);
      res += re.toString(8);
    }
    return res
  }

  base2a8() {
    let n = "", resultado = 0, resp;

    n = document.getElementById("n").value;

    resp = document.getElementById("resp");
    resultado = this.calbase2a8(n);
    resp.innerHTML = `La transformación de base 2 a 8 es: ${resultado}`;
  }
  // ejercicio 20
  // no funciona

  Base_2_a_base_16(bin_num){
    if (!/^[01]+$/.test(bin_num)) {
     return"Ingrese un numero binario valido"
    } 
    let denumber=parseInt(bin_num,2)
    let hexade=denumber.toString(16)
    return hexade
   }
   ejercicio20(){
     let numbin=document.getElementById("num1").value, resp=document.getElementById("resp")
     let resultado=this.Base_2_a_base_16(numbin)
     resp.innerText=`El número hexadecimal equivalente de ${numbin} es =${resultado} `
   }  
}


let ope = new tarea2()
