$(document).ready(function() {



  var showing = 0;
  var embedcodes = ['Burkenator','BrntO_Zeke','Cduval91','Creeeeg','DigitalDisorder','EskimoBobberton','Gamer_5005','Jchugs','Megaman320','Melkor','PainlessRisk'];
  var divArray = $('.videoDiv').get();
  
  //Default Video Sizes
  var widthVideo = 640;
  var heightVideo = 360;


  $('input').on('change', function(){
	  
	  
      var clickedNum = $( "input" ).index( this )
      var currentDiv = $('.videoDiv').eq(clickedNum);
	  var currentDivContent = $('.card-block').eq(clickedNum);
	  var userName = $('h2').eq(clickedNum);
	  
	  //Build iframe code using pre-determined resolution and embed-codes set at top
      var stringConstructor = '<iframe class="videoFrame" src="https://beam.pro/embed/player/' + embedcodes[clickedNum] + '" style="width:' + widthVideo + ';height:' + heightVideo + ';"></iframe>';
	  
      if(this.checked){
        currentDiv.show();
        currentDivContent.html(stringConstructor);
		userName.html(embedcodes[clickedNum]);
      }
      else{
        currentDiv.hide();
        currentDivContent.html("");
		userName.html("");
      }
    });
	
	
	
	
});

