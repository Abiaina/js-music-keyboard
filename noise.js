// clicks on sound
$(document).ready(function() {
  $('button.noteC').click(function(){
    $('#cAudio')[0].load();
    $('#cAudio')[0].play();

  });

  $('button.noteD').click(function(){
    $('#dAudio')[0].load();
    $('#dAudio')[0].play();
  });

  $('button.noteE').click(function(){
    $('#eAudio')[0].load();
    $('#eAudio')[0].play();
  });

  $('button.noteF').click(function(){
    $('#fAudio')[0].load();
    $('#fAudio')[0].play();
  });

  $('button.noteG').click(function(){
    $('#gAudio')[0].load();
    $('#gAudio')[0].play();
  });

  $('button.noteA').click(function(){
    $('#aAudio')[0].load();
    $('#aAudio')[0].play();
  });

  $('button.noteB').click(function(){
    $('#bAudio')[0].load();
    $('#bAudio')[0].play();
  });

  //plays when enter notes from key board
  $('body').keydown(function(event){
    if (event.keyCode === 65) {
      $('#aAudio')[0].load();
      $('#aAudio')[0].play();
    } else if(event.keyCode === 66) {
      $('#bAudio')[0].load();
      $('#bAudio')[0].play();
    } else if(event.keyCode === 67) {
      $('#cAudio')[0].load();
      $('#cAudio')[0].play();
    } else if(event.keyCode === 68) {
      $('#dAudio')[0].load();
      $('#dAudio')[0].play();
    } else if(event.keyCode === 69) {
      $('#eAudio')[0].load();
      $('#eAudio')[0].play();
    } else if(event.keyCode === 70) {
      $('#fAudio')[0].load();
      $('#fAudio')[0].play();
    } else if(event.keyCode === 71){
      $('#gAudio')[0].load();
      $('#gAudio')[0].play();
    } else {
      $('#cAudio')[0].load();
      $('#dAudio')[0].load();
      $('#gAudio')[0].load();

      $('#cAudio')[0].play();
      $('#dAudio')[0].play();
      $('#gAudio')[0].play();
    }
  });
});
