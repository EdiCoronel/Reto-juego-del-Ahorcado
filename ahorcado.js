var boton=document.getElementById('btnveri');
var letras=[];
var posicion=[];
var bandera=0;
var palabras;
var numPalabras;

//Colocar palabra o que sea una al azar

function enviarTexto(){
  palabras=document.getElementById('veriPalabra').value;
  arrayPalabras=palabras.split('');
  numPalabras=palabras.length;
  console.log(arrayPalabras);
  document.getElementById('veriPalabra').value=''

  if (numPalabras == 0) {
    eligeUnapalabraAlAzar();
  }

  else {
    for(i=0;i<numPalabras;i++){
      var caja= document.createElement('input');
      caja.setAttribute('type','text');
      caja.setAttribute('id','d'+i);
      caja.setAttribute('name','d');
      caja.setAttribute('size','2');
      document.body.appendChild(caja);
    }

    for(i=0;i<numPalabras;i++){
      letras[bandera]=arrayPalabras[i];
      posicion[bandera]=i;
      bandera++;
    }
  }
}

var numCaja=letras.length;
var cont=1;
var intentos=7;

// Verificar letra por letra

function verificar(){
  var letra=document.getElementById('veri').value;
  document.getElementById('inputText').value=letra;
  for(i=0;i<letras.length;i++){
    if(letra===letras[i]){
      document.getElementById('d'+posicion[i]).value=letra;
      document.getElementById('veri').value='';
      cont++;
      numCaja--;
    }
  }

  console.log(numCaja); 
  console.log(numPalabras);

  if(cont!=1){
    cont=1;
  }
  else {
    document.getElementById('veri').value='';
    intentos--;
    document.getElementById('inputNum').value=intentos-1;
  }

  if((numCaja + numPalabras) == 0){
    document.getElementById('resultado').innerHTML = 'Has Ganado';
    boton.disabled=true;
  }

  dibujarMuñeco(intentos);
}

var listaPalabras = ['CIENCIA','ALEGRIA','FIESTA','DOLOR','RABIA','ALERGIA'];

// Cuando no se coloca una palabra se elige una al azar de la libreria

function eligeUnapalabraAlAzar() {
    palabras = listaPalabras[Math.floor(Math.random() * listaPalabras.length)];
    numPalabras=palabras.length;
    arrayPalabras= palabras.split("");
    
    for (i = 0; i < numPalabras; i++) {
        var caja = document.createElement("input");
        caja.setAttribute("type", "text");
        caja.setAttribute("id", "d" + i);
        caja.setAttribute("name", "d");
        caja.setAttribute("size", "2");
        document.body.appendChild(caja);
    }

    for (i = 0; i < numPalabras; i++) {
        letras[bandera] = arrayPalabras[i];
        posicion[bandera] = i;
        bandera++;
    }
}

//Validar en el input solo una letra y mayuscula

function validar(e) {
  tecla = (document.all) ? e.keyCode : e.which;
  if (tecla == 8) {
      return true;
  }
  patron = /[A-Z]{1}/;
  tecla_final = String.fromCharCode(tecla);
  return patron.test(tecla_final);
}

//Validar en el input palabras solo en Mayuscula

function validar1(e) {
  tecla = (document.all) ? e.keyCode : e.which;
  if (tecla == 8) {
      return true;
  }
  patron = /[A-Z]/g;
  tecla_final = String.fromCharCode(tecla);
  return patron.test(tecla_final);
}

//Dibujar el ahorcado al fallar en la comparacion de las letras

function dibujarMuñeco(intentos){
  const muñeco = intentos
  const dibujoAhorcado = {

      6 : function cabeza() {
          const canva6 = document.getElementById("ahorcado");
          const ctx6 = canva6.getContext("2d");
          ctx6.lineWidth = 3;
          ctx6.strokeStyle = "#000";
          ctx6.beginPath();
          ctx6.arc(200,40,20,0,Math.PI*2,true); 
          ctx6.stroke();
      },
  
      5 : function cuerpo() {
          const canva5 = document.getElementById("ahorcado");
          const ctx5 = canva5.getContext("2d");
          ctx5.lineWidth = 3;
          ctx5.beginPath();
          ctx5.moveTo(200, 60);
          ctx5.lineTo(200, 110);
          ctx5.stroke();
      },
          
          
      4 : function brazoDerecho() {
          const canva4 = document.getElementById("ahorcado");
          const ctx4 = canva4.getContext("2d");
          ctx4.lineWidth = 3;
          ctx4.beginPath();
          ctx4.moveTo(200, 65);
          ctx4.lineTo(230, 90);
          ctx4.stroke();
      },
          
      3 : function brazoIzquierdo() {
          const canva3 = document.getElementById("ahorcado");
          const ctx3 = canva3.getContext("2d");
          ctx3.lineWidth = 3;
          ctx3.beginPath();
          ctx3.moveTo(200, 65);
          ctx3.lineTo(170, 90);
          ctx3.stroke();
      },
          
      2 : function piernaDerecha() {
          const canva2 = document.getElementById("ahorcado");
          const ctx2 = canva2.getContext("2d");
          ctx2.lineWidth = 3;
          ctx2.beginPath()
          ctx2.moveTo(200, 110);
          ctx2.lineTo(170, 140);
          ctx2.stroke();
      },
      
      1 : function piernaIzquierda() {
          const canva1 = document.getElementById("ahorcado");
          const ctx1 = canva1.getContext("2d");
          ctx1.lineWidth = 3;
          ctx1.beginPath()
          ctx1.moveTo(200, 110);
          ctx1.lineTo(230, 140);
          ctx1.stroke();
  
          for(i=0;i<numPalabras;i++){
              document.getElementById('d'+i).value=arrayPalabras[i];
          }
  
          document.getElementById('resultado').innerHTML = 'Perdiste estas Ahorcado';
          boton.disabled=true;
  
      }
  }
  const ahorcado = dibujoAhorcado[muñeco]
  dibujoAhorcado[muñeco]()
}