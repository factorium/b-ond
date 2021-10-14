jQuery(function ($) {

  $('.mail-choice').change(function() {
    if($(this).is(":checked")) {
        $(this).parent().addClass('selected-bg');
      } else {
    $(this).parent().removeClass('selected-bg');
      }
  });

const colorInput = document.getElementById("Main2Calendar");

colorInput.addEventListener("input", (e) => {
 document.body.style.setProperty("--button-color", e.target.value);
});

$('.inbox-calendar').click(function(){
  $('.calendar-container').toggleClass('calendar-show');
  $('.inbox-container').toggleClass('hide');
  $('.mail-detail').toggleClass('hide'); 
});

});

function mostrar1(){

  document.getElementById("sla1").style.display="none"
  document.getElementById("sla2").style.display="block"

}

function mostrar2(){

  document.getElementById("sla1").style.display="block"
  document.getElementById("sla2").style.display="none"

}