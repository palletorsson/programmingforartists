window.onload = function() {
  console.log("document");

};
var num = 0;
var hiddenBox = $( "#banner-message" );
hiddenBox.hide();

// by clicking the link the text will show
$( "#hack" ).hover(

    function() {
        hiddenBox.show();
        console.dir(document.body);
    }


);
$( "#click" ).click(
    function() {
        num++;
        hiddenBox.text(num);
    }

);
