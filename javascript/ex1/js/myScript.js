$('.button').click(function() {
    // 
    var num = $('.count').text()
    // c = 1
    var number = addNumber(num) 
    // number is 2
    $('.count').text(number);
    var elem  = $( this ); // 
    var onoff = elem.text();
    
    changeElem(onoff, elem); 
    changeElem(onoff, elem); 

}); 

function addNumber(num) {
    // konvertera till nummer
    num = parseInt(num); 
    // adder med 1
    var res = num + 1; 
    // ge tillbaka resultatet
    return res; 
  
} 
function changeElem(onoff, elem) {
    console.log(onoff)
    if ( onoff == 'off') {
        elem.css({backgroundColor:'green'});
        elem.text('on');
    }  else {
        elem.css({backgroundColor:'red'});
        elem.text('off');
    }
}