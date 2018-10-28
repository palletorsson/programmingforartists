
var elem = $('.anim'); 
var text = "accent accept . acceptable access accident . accidental accidentally accommodation. accompany according to account account for accurate accurately accuse achieve achievement acid acknowledge a couple acquire across act action active actively activity actor actress actual actually ad adapt add addition additional add on address add up add up t"
var textSplit = text.split("."); 

console.log(elem); 

for (var index = 0; index < textSplit.lenght; index++) {
	elem.append("<h1> "+textSplit[index]+" / </h1>"); 
}


$.each( textSplit, function( index, value ) {
  console.log( "index: "+ index+ " value: " + value );
});


$('button')
	.click(

		function() 
		{ 
			$('#13').html("You clicked!"); 
		}
		); 


