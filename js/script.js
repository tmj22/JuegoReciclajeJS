
alert("PON CADA OBJETO EN EL CONTENEDOR QUE LE CORRESPONDA");

var correcto = 0;
var audio = document.createElement('audio');
audio.controls = true;
audio.volume = 0.3;

function drag(ev){
  ev.dataTransfer.setData('text',ev.target.id);
  $('#mensaje').animate({ opacity: 0 },500);
  audio.src = 'audio/grab.mp3';
  audio.currentTime = 0.5;
  audio.play();

}

function allowDrop(ev){
  ev.preventDefault();
}

function drop(contenedor,ev){
  ev.preventDefault();
  var idobjeto = ev.dataTransfer.getData('text');
  var basura = document.getElementById(idobjeto);
  var tipobasura = document.getElementById(idobjeto).name;
  var contenedor = contenedor.getAttribute("id");
  if (tipobasura == contenedor) {
    audio.src = 'audio/right.mp3';
    audio.play();
    basura.remove();
    correcto = correcto+1;

    if (correcto < 5) {
        $('#mensaje').html("CORRECTO!").animate({ opacity: 1 },400);
    }
    if (correcto == 5) {
        $('#mensaje').html("YA SOLO QUEDA UNO!").animate({ opacity: 1 },400);
    }

  }else {
    $('#mensaje').html("ESO ES "+tipobasura+" !!").animate({ opacity: 1 },400);
    audio.src = 'audio/wrong.mp3';
    audio.play();

  }
check();
}

function check(){

if (correcto == 6) {
$('#mensaje').html("¡HAS RECICLADO TODOS LOS OBJETOS!").animate({ opacity: 1 },400);
audio.volume = 0.5;
audio.src = 'audio/aplausos.mp3';
audio.play();
$('.contenedores').remove();
$('#mensaje').append('<img src="img/confeti.gif">');

}

}
