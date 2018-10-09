// 1. skapa variable "hello world" och kör programmet
var helloworld = "hello world"; 
console.log(helloworld); 
// när vi skapar en variabel i Javascript använder vi 
// nyckelordet - var
// alla statments avslutat med semikolon - ; 
// console.log() är ekvinialet med python print(); 
// --> gå till terminalen och kör programmet med node javascript_intro.js

// 2. skapa och initiera variabler - "hello", 4, 2.3 - dynamiskt typat
var num1 = 4; 
var num2 = 2.3; 
var sum = num2 + num1; 
console.log("Summan av " + num1 + " och " + num2 +" är " + sum + ".") 

// vi kan 
// 3. definiera en funktion som tar argument och returnerar ett värde
function multiplyNumber(a, b, c) { 
    sum = a * b * c;  
    return sum; 
} 

// 5. använd funktionen och skriv ut dess värd
var sum = multiplyNumber(2, 3, 4); 
console.log("Produkten är av talen är " + sum + ".") 

// 4. Gör en funktion med villkorligt flöde - if, else if, else

function isItMonday() { 
    var today = new Date();
    var day = today.getDay(); 
    if (day == 1) {
        console.log("Hooray, It is Monday!")
    } else if (day == 6) {
        console.log("Ok, but is Friday!")
    } else {
        console.log("Sorry, it's not Monday.")
    }
} 

isItMonday()

// 5. Skapa lista en lista av slumptal med en while loop
var index = 0; 
var myList = []; 
while (index < 100) {
    myList[index] = Math.floor(Math.random() * 1000); 
    index++; 
}
console.log(myList); 

// 6. Sortera listan
mySortedList = myList.sort((a, b) => a - b); 
console.log(mySortedList); 

// 6. Läs varanat nummer i listan med for-loop
for (i = 0; i < mySortedList.length; i=i+2) {
    console.log("Index: " + i + " har värdet " +  mySortedList[i] + "."); 
}

// 7. Skapa ett objekt - allt i javascript är objekt
myObject = {
            planets: 
            [ 
                {
                    name: "Earth",
                    index: 3, 
                    size: 234,
                    postions: {
                        x: 13421,
                        y: 437329, 
                        z: 233397,
                    }
                },
                {
                    name: "Mars",
                    index: 4, 
                    size: 2345,
                    postions: {
                        x: 342221,
                        y: 3787329, 
                        z: 3387397,
                    }
                },
             
            ],
            getDubbleSize: function(size) { return size * 2 } 
        }

// 8. Ta ut element ur objektet.
console.log(myObject.planets[0].name); 
console.log(myObject.getDubbleSize(myObject.planets[0].size)); 