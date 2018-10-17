var sentence = ""; 
var lexicon = new RiLexicon();
var words = ""; 
var wittgenstein = new RiString("The human body is the best picture of the human soul")
words = wittgenstein.words(); 
var pos = wittgenstein.pos();   
function setup() {
    createCanvas(1000,800);
    textSize(24);
    noStroke();
}

function draw() {
    background(255);
    text(sentence, 50, 300);
}

function keyReleased() {      
  sentence = ""; 
  for (var i=0; i < words.length; i++) {
        if (pos[i] == 'nn') {
            var lex = lexicon.randomWord(pos[i]); 
            sentence = sentence + " " + lex; 
        } else {
            sentence = sentence + " " + words[i];
        } 
    }
}
