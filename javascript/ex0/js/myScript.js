var num = 0; 
var hiddenBox = $( "#banner-message" );    
hiddenBox.hide();

// by clicking the link the text will show 
$( "#hack" ).hover(
    
    function() {
        hiddenBox.show();
    }

);
$( "#click" ).click(
    function() {
        num++;
        hiddenBox.text(num); 
    }

);