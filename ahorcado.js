var boton=document.getElementById('btnveri');
var letraO=[];
var posLetraO=[];
var bandera=0;
var palabras;
var numPalabras;

function enviarTexto(){
  palabras=document.getElementById('veripalabra').value;
  arrayP=palabras.split('');
  numPalabras=palabras.length;
  console.log(arrayP);

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
      letraO[bandera]=arrayP[i];
      posLetraO[bandera]=i;
      bandera++;
    }
  }
}

var numCaja=letraO.length;
var cont=1;
var intentos=7;

function verificar(){
  var letra=document.getElementById('veri').value;
  document.getElementById('inputText').value=letra;
  for(i=0;i<letraO.length;i++){
    if(letra===letraO[i]){
      document.getElementById('d'+posLetraO[i]).value=letra;
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

  switch (intentos){
    case 6:
      const canva6 = document.getElementById("ahorcado");
      const ctx6 = canva6.getContext("2d");
      ctx6.lineWidth = 3;
      ctx6.strokeStyle = "#000";
      ctx6.beginPath();
      ctx6.arc(200,40,20,0,Math.PI*2,true); 
      ctx6.stroke();
      break;

    case 5:
      const canva5 = document.getElementById("ahorcado");
      const ctx5 = canva5.getContext("2d");
      ctx5.lineWidth = 3;
      ctx5.beginPath();
      ctx5.moveTo(200, 60);
      ctx5.lineTo(200, 110);
      ctx5.stroke();
      break;

    case 4:
      const canva4 = document.getElementById("ahorcado");
      const ctx4 = canva4.getContext("2d");
      ctx4.lineWidth = 3;
      ctx4.beginPath();
      ctx4.moveTo(200, 65);
      ctx4.lineTo(230, 90);
      ctx4.stroke();
      break;

    case 3:
      const canva3 = document.getElementById("ahorcado");
      const ctx3 = canva3.getContext("2d");
      ctx3.lineWidth = 3;
      ctx3.beginPath();
      ctx3.moveTo(200, 65);
      ctx3.lineTo(170, 90);
      ctx3.stroke();
      break;

    case 2:
      const canva2 = document.getElementById("ahorcado");
      const ctx2 = canva2.getContext("2d");
      ctx2.lineWidth = 3;
      ctx2.beginPath()
      ctx2.moveTo(200, 110);
      ctx2.lineTo(170, 140);
      ctx2.stroke();
      break;

    case 1:
      const canva1 = document.getElementById("ahorcado");
      const ctx1 = canva1.getContext("2d");
      ctx1.lineWidth = 3;
      ctx1.beginPath()
      ctx1.moveTo(200, 110);
      ctx1.lineTo(230, 140);
      ctx1.stroke();

      for(i=0;i<numPalabras;i++){
          document.getElementById('d'+i).value=arrayP[i];
      }

      document.getElementById('resultado').innerHTML = 'Perdiste estas Ahorcado';
      boton.disabled=true;
      break;

  }
}

var listaPalabras = ['FELICIDAD','ALEGRIA','TRISTEZA','DOLOR','TERNURA','RABIA','ALERGIA'];

function eligeUnapalabraAlAzar() {
    palabras = listaPalabras[Math.floor(Math.random() * listaPalabras.length)];
    numPalabras=palabras.length;
    arrayP= palabras.split("");
    
    for (i = 0; i < numPalabras; i++) {
        var caja = document.createElement("input");
        caja.setAttribute("type", "text");
        caja.setAttribute("id", "d" + i);
        caja.setAttribute("name", "d");
        caja.setAttribute("size", "2");
        document.body.appendChild(caja);
    }

    for (i = 0; i < numPalabras; i++) {
        letraO[bandera] = arrayP[i];
        posLetraO[bandera] = i;
        bandera++;
    }
}
