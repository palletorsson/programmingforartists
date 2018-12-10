// lista alla ord med defintioner
var words = [
	{
		word: "förhandling", 
		def: "def of förhandling"
	}, 
	{
		word: "Brexit", 
		def: "def of brexit"
	},
]; 

for (var i = words.length - 1; i >= 0; i--) {
	$('*:contains('+words[i].word+')').each(function(){
	     if($(this).children().length < 1)  {
	          $(this).css("border","solid 2px red")
	          	.addClass("sellectMe")
	          	.attr("data-id",words[i].word)
	          	.attr("data-content",words[i].def)
	          }
	
	});	
}