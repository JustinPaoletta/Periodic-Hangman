let audio = new Audio("Click2-Sebastian.mp3");
let lose = new Audio("https://www.soundjay.com/misc/sounds/fail-trombone-03.mp3");
let win = new Audio("The Steve Miller Band - Jungle Love.mp3")


function playAgain(){
        location.reload();
}

let words=[
    "hydrogen", "helium", "lithium", "beryllium", "boron", "carbon", "nitrogen", "oxygen",
    "flourine", "neon", "sodium", "magnesium", "aluminum", "silicon", "phosphorus", "sulfur",
    "chlorine", "argon", "potassium", "calcium", "scandium" , "titanium", "vanadium", "chromium",
    "manganese", "iron", "cobalt", "nickel", "copper", "zinc", "gallium", "germanium", "arsenic", 
    "selenium", "bromine", "krypton", "rubidium", "strontium", "yttrium", "zirconium", "niobium",
    "molybdenum", "technetium", "ruthenium", "rhodium", "palladium", "silver", "cadmium", "indium",
    "tin", "antimony", "tellurium", "iodine", "xenon", "cesium", "Barium", "lanthanum", "cerium",
    "praseodymium", "neodymium", "promethium", "samarium", "europium", "gadolinium", "terbium",
    "dysprosium", "holmium", "erbium", "thulium", "ytterbium", "lutetium", "hafnium", "tantalum",
    "tungsten", "rhenium", "osmium", "iridium", "platinum", "gold", "mercury", "thallium", 
    "lead", "bismuth", "polonium", "astatine", "radon", "francium", "radium", "actinium",
    "thorium", "protactinium", "uranium", "neptunium", "plutonium", "americium", "curium",
    "berkelium", "californium", "einsteinium", "fermium", "medelevium", "nobelium", "lawrencium",
    "rutherfordium", "dubnium", "seaborgium", "bohrium", "hassium", "meitnerium", "darmstadtium",
    "roentgenium", "copernicium", "nihonium", "flerovium", "moscovium", "livermorium", "tennessine",
    "oganesson"
]

var word = words[Math.floor(Math.random() * words.length)];

console.log(word);

var blanks = word.length;

word = word.split('');



console.log(blanks);

let element = document.getElementById("blanks");

let letter1 = document.createElement("p");
let letter2 = document.createElement('p');
let letter3 = document.createElement("p");
let letter4 = document.createElement('p');
let letter5 = document.createElement("p");
let letter6 = document.createElement('p');
let letter7 = document.createElement("p");
let letter8 = document.createElement('p');
let letter9 = document.createElement("p");
let letter10 = document.createElement('p');
let letter11 = document.createElement('p');
let letter12 = document.createElement("p");
let letter13 = document.createElement('p');

let wrong = 0;

function myBlanks(){

if (blanks == 13){
        document.getElementById('blanks').style.width = "95vw";
        element.appendChild(letter1);
        element.appendChild(letter2);
        element.appendChild(letter3);
        element.appendChild(letter4);
        element.appendChild(letter5);
        element.appendChild(letter6);
        element.appendChild(letter7);
        element.appendChild(letter8);
        element.appendChild(letter9);
        element.appendChild(letter10);
        element.appendChild(letter11);
        element.appendChild(letter12);
        element.appendChild(letter13);
                if(letter1.innerHTML !== '' && letter2.innerHTML !== '' && letter3.innerHTML !== '' && letter4.innerHTML !== '' && letter5.innerHTML !== '' 
                && letter6.innerHTML !== '' && letter7.innerHTML !== '' && letter8.innerHTML !== '' && letter9.innerHTML !== '' && letter10.innerHTML !== ''
                && letter11.innerHTML !== '' && letter12.innerHTML !== '' && letter13.innerHTML !== ''){
                document.getElementById("againwin").style.visibility = 'visible';
                document.getElementById("grid-container").style.visibility = 'hidden';
                win.play();
                }
        } else if (blanks == 12){
        document.getElementById('blanks').style.width = "88vw";
        element.appendChild(letter1);
        element.appendChild(letter2);
        element.appendChild(letter3);
        element.appendChild(letter4);
        element.appendChild(letter5);
        element.appendChild(letter6);
        element.appendChild(letter7);
        element.appendChild(letter8);
        element.appendChild(letter9);
        element.appendChild(letter10);
        element.appendChild(letter11);
        element.appendChild(letter12);
                if(letter1.innerHTML !== '' && letter2.innerHTML !== '' && letter3.innerHTML !== '' && letter4.innerHTML !== '' && letter5.innerHTML !== '' 
                && letter6.innerHTML !== '' && letter7.innerHTML !== '' && letter8.innerHTML !== '' && letter9.innerHTML !== '' && letter10.innerHTML !== ''
                && letter11.innerHTML !== '' && letter12.innerHTML !== ''){
                document.getElementById("againwin").style.visibility = 'visible';
                document.getElementById("grid-container").style.visibility = 'hidden';
                win.play();
                }
        } else if (blanks == 11){
        document.getElementById('blanks').style.width = "81vw";
        element.appendChild(letter1);
        element.appendChild(letter2);
        element.appendChild(letter3);
        element.appendChild(letter4);
        element.appendChild(letter5);
        element.appendChild(letter6);
        element.appendChild(letter7);
        element.appendChild(letter8);
        element.appendChild(letter9);
        element.appendChild(letter10);
        element.appendChild(letter11);
                if(letter1.innerHTML !== '' && letter2.innerHTML !== '' && letter3.innerHTML !== '' && letter4.innerHTML !== '' && letter5.innerHTML !== '' 
                && letter6.innerHTML !== '' && letter7.innerHTML !== '' && letter8.innerHTML !== '' && letter9.innerHTML !== '' && letter10.innerHTML !== ''
                && letter11.innerHTML !== '' ){
                document.getElementById("againwin").style.visibility = 'visible';
                document.getElementById("grid-container").style.visibility = 'hidden';
                win.play();                
                }
        } else if (blanks == 10){
        document.getElementById('blanks').style.width = "75vw";
        element.appendChild(letter1);
        element.appendChild(letter2);
        element.appendChild(letter3);
        element.appendChild(letter4);
        element.appendChild(letter5);
        element.appendChild(letter6);
        element.appendChild(letter7);
        element.appendChild(letter8);
        element.appendChild(letter9);
        element.appendChild(letter10);
        if(letter1.innerHTML !== '' && letter2.innerHTML !== '' && letter3.innerHTML !== '' && letter4.innerHTML !== '' && letter5.innerHTML !== '' 
        && letter6.innerHTML !== '' && letter7.innerHTML !== '' && letter8.innerHTML !== '' && letter9.innerHTML !== '' && letter10.innerHTML !== ''){
        document.getElementById("againwin").style.visibility = 'visible';
        document.getElementById("grid-container").style.visibility = 'hidden';
        win.play();                
        }
        } else if (blanks == 9){
        document.getElementById('blanks').style.width = "68vw";
        element.appendChild(letter1);
        element.appendChild(letter2);
        element.appendChild(letter3);
        element.appendChild(letter4);
        element.appendChild(letter5);
        element.appendChild(letter6);
        element.appendChild(letter7);
        element.appendChild(letter8);
        element.appendChild(letter9);
        if(letter1.innerHTML !== '' && letter2.innerHTML !== '' && letter3.innerHTML !== '' && letter4.innerHTML !== '' && letter5.innerHTML !== '' 
        && letter6.innerHTML !== '' && letter7.innerHTML !== '' && letter8.innerHTML !== '' && letter9.innerHTML !== ''){
        document.getElementById("againwin").style.visibility = 'visible';
        document.getElementById("grid-container").style.visibility = 'hidden';
        win.play();               
        }
        } else if (blanks == 8){
        document.getElementById('blanks').style.width = "60vw";
        element.appendChild(letter1);
        element.appendChild(letter2);
        element.appendChild(letter3);
        element.appendChild(letter4);
        element.appendChild(letter5);
        element.appendChild(letter6);
        element.appendChild(letter7);
        element.appendChild(letter8);
        if(letter1.innerHTML !== '' && letter2.innerHTML !== '' && letter3.innerHTML !== '' && letter4.innerHTML !== '' && letter5.innerHTML !== '' 
        && letter6.innerHTML !== '' && letter7.innerHTML !== '' && letter8.innerHTML !== ''){
        document.getElementById("againwin").style.visibility = 'visible';
        document.getElementById("grid-container").style.visibility = 'hidden';
        win.play();                
        }
        } else if (blanks == 7){
        document.getElementById('blanks').style.width = "52vw";
        element.appendChild(letter1);
        element.appendChild(letter2);
        element.appendChild(letter3);
        element.appendChild(letter4);
        element.appendChild(letter5);
        element.appendChild(letter6);
        element.appendChild(letter7);
        if(letter1.innerHTML !== '' && letter2.innerHTML !== '' && letter3.innerHTML !== '' && letter4.innerHTML !== '' && letter5.innerHTML !== '' 
        && letter6.innerHTML !== '' && letter7.innerHTML !== ''){
        document.getElementById("againwin").style.visibility = 'visible';
        document.getElementById("grid-container").style.visibility = 'hidden';
        win.play();                
        }
        } else if (blanks == 6){
        document.getElementById('blanks').style.width = "45vw";
        element.appendChild(letter1);
        element.appendChild(letter2);
        element.appendChild(letter3);
        element.appendChild(letter4);
        element.appendChild(letter5);
        element.appendChild(letter6);
        if(letter1.innerHTML !== '' && letter2.innerHTML !== '' && letter3.innerHTML !== '' && letter4.innerHTML !== '' && letter5.innerHTML !== '' 
        && letter6.innerHTML !== ''){
        document.getElementById("againwin").style.visibility = 'visible';
        document.getElementById("grid-container").style.visibility = 'hidden';
        win.play();                
        }
        } else if (blanks == 5){
        document.getElementById('blanks').style.width = "38vw";
        element.appendChild(letter1);
        element.appendChild(letter2);
        element.appendChild(letter3);
        element.appendChild(letter4);
        element.appendChild(letter5);
        if(letter1.innerHTML !== '' && letter2.innerHTML !== '' && letter3.innerHTML !== '' && letter4.innerHTML !== '' && letter5.innerHTML !== '' ){
        document.getElementById("againwin").style.visibility = 'visible';
        document.getElementById("grid-container").style.visibility = 'hidden';
        win.play();                
        }
        } else if (blanks == 4){
        document.getElementById('blanks').style.width = "31vw";
        element.appendChild(letter1);
        element.appendChild(letter2);
        element.appendChild(letter3);
        element.appendChild(letter4);
        if(letter1.innerHTML !== '' && letter2.innerHTML !== '' && letter3.innerHTML !== '' && letter4.innerHTML !== ''){
        document.getElementById("againwin").style.visibility = 'visible';
        document.getElementById("grid-container").style.visibility = 'hidden';
        win.play();                
        }
        } else if (blanks == 3){
        document.getElementById('blanks').style.width = "24vw";
        element.appendChild(letter1);
        element.appendChild(letter2);
        element.appendChild(letter3);
        if(letter1.innerHTML !== '' && letter2.innerHTML !== '' && letter3.innerHTML !== ''){
        document.getElementById("againwin").style.visibility = 'visible';
        document.getElementById("grid-container").style.visibility = 'hidden';
        win.play();                
        }
        } else {
        element.appendChild(letter1);
        element.appendChild(letter2);
        if(letter1.innerHTML !== '' && letter2.innerHTML !== ''){
                win.play();                }
        };

};

myBlanks();

this.word[0].toUpperCase();


function disableButtonA() {
        audio.play();
        document.getElementById("one").disabled = true;
        document.getElementById("one").innerHTML = "A";
        document.getElementById("one").style.color = "black";
        


        if (word[0] == 'a'){
                let letterone = document.createTextNode(word[0]);
                letter1.appendChild(letterone);

        }  
        
        if (word[1] == 'a'){
                var lettertwo = document.createTextNode(word[1]);
                letter2.appendChild(lettertwo); 
        }  
        
        if (word[2] == 'a'){
                var letterthree = document.createTextNode(word[2]);
                letter3.appendChild(letterthree); 
        }  
        
        if (word[3] == 'a'){
                var letterfour = document.createTextNode(word[3]);
                letter4.appendChild(letterfour); 
        }

        if (word[4] == 'a'){
                var letterfive = document.createTextNode(word[4]);
                letter5.appendChild(letterfive); 
        }

        if (word[5] == 'a'){
                var lettersix = document.createTextNode(word[5]);
                letter6.appendChild(lettersix); 
        }

        if (word[6] == 'a'){
                var letterseven = document.createTextNode(word[6]);
                letter7.appendChild(letterseven); 
        }

        if (word[7] == 'a'){
                var lettereight = document.createTextNode(word[7]);
                letter8.appendChild(lettereight); 
        }

        if (word[8] == 'a'){
                var letternine = document.createTextNode(word[8]);
                letter9.appendChild(letternine); 
        }

        if (word[9] == 'a'){
                var letterten = document.createTextNode(word[9]);
                letter10.appendChild(letterten); 
        } 

        if (word[10] == 'a'){
                var lettereleven = document.createTextNode(word[10]);
                letter11.appendChild(lettereleven); 
        }

        if (word[11] == 'a'){
                var lettertwelve = document.createTextNode(word[11]);
                letter12.appendChild(lettertwelve); 
        }

        if (word[12] == 'a'){
                var letterthirteen = document.createTextNode(word[12]);
                letter13.appendChild(letterthirteen); 
        } 

        if (word[0] !== 'a' && word[1] !== 'a' && word[2] !== 'a' && word[3] !== 'a' && word[4] !== 'a' 
        && word[5] !== 'a' && word[6] !== 'a' && word[7] !== 'a' && word[8] !== 'a' && word[9] !== 'a'
        && word[10] !== 'a'  && word[11] !== 'a'  && word[12] !== 'a'){
                wrong = wrong + 1;
                console.log(wrong);
                incorrect();
        }
        myBlanks();

       
};


function disableButtonB() {
        audio.play();
        document.getElementById("two").disabled = true;
        document.getElementById("two").innerHTML = "B";
        document.getElementById("two").style.color = "black";


        if (word[0] == 'b'){
                var letterone = document.createTextNode(word[0]);
                letter1.appendChild(letterone);       
        }  
        
        if (word[1] == 'b'){
                var lettertwo = document.createTextNode(word[1]);
                letter2.appendChild(lettertwo); 
        }  
        
        if (word[2] == 'b'){
                var letterthree = document.createTextNode(word[2]);
                letter3.appendChild(letterthree); 
        }  
        
        if (word[3] == 'b'){
                var letterfour = document.createTextNode(word[3]);
                letter4.appendChild(letterfour); 
        }

        if (word[4] == 'b'){
                var letterfive = document.createTextNode(word[4]);
                letter5.appendChild(letterfive); 
        }

        if (word[5] == 'b'){
                var lettersix = document.createTextNode(word[5]);
                letter6.appendChild(lettersix); 
        }

        if (word[6] == 'b'){
                var letterseven = document.createTextNode(word[6]);
                letter7.appendChild(letterseven); 
        }

        if (word[7] == 'b'){
                var lettereight = document.createTextNode(word[7]);
                letter8.appendChild(lettereight); 
        }

        if (word[8] == 'b'){
                var letternine = document.createTextNode(word[8]);
                letter9.appendChild(letternine); 
        }

        if (word[9] == 'b'){
                var letterten = document.createTextNode(word[9]);
                letter10.appendChild(letterten); 
        } 

        if (word[10] == 'b'){
                var lettereleven = document.createTextNode(word[10]);
                letter11.appendChild(lettereleven); 
        }

        if (word[11] == 'b'){
                var lettertwelve = document.createTextNode(word[11]);
                letter12.appendChild(lettertwelve); 
        }

        if (word[12] == 'b'){
                var letterthirteen = document.createTextNode(word[12]);
                letter13.appendChild(letterthirteen); 
        } 

        if (word[0] !== 'b' && word[1] !== 'b' && word[2] !== 'b' && word[3] !== 'b' && word[4] !== 'b' 
        && word[5] !== 'b' && word[6] !== 'b' && word[7] !== 'b' && word[8] !== 'b' && word[9] !== 'b'
        && word[10] !== 'b'  && word[11] !== 'b'  && word[12] !== 'b'){
                wrong = wrong + 1;
                console.log(wrong);
                incorrect();
        }
        myBlanks();
};


function disableButtonC() {
        audio.play();
        document.getElementById("three").disabled = true;
        document.getElementById("three").innerHTML = "C";
        document.getElementById("three").style.color = "black";


        if (word[0] == 'c'){
                var letterone = document.createTextNode(word[0]);
                letter1.appendChild(letterone);       
        }  
        
        if (word[1] == 'c'){
                var lettertwo = document.createTextNode(word[1]);
                letter2.appendChild(lettertwo); 
        }  
        
        if (word[2] == 'c'){
                var letterthree = document.createTextNode(word[2]);
                letter3.appendChild(letterthree); 
        }  
        
        if (word[3] == 'c'){
                var letterfour = document.createTextNode(word[3]);
                letter4.appendChild(letterfour); 
        }

        if (word[4] == 'c'){
                var letterfive = document.createTextNode(word[4]);
                letter5.appendChild(letterfive); 
        }

        if (word[5] == 'c'){
                var lettersix = document.createTextNode(word[5]);
                letter6.appendChild(lettersix); 
        }

        if (word[6] == 'c'){
                var letterseven = document.createTextNode(word[6]);
                letter7.appendChild(letterseven); 
        }

        if (word[7] == 'c'){
                var lettereight = document.createTextNode(word[7]);
                letter8.appendChild(lettereight); 
        }

        if (word[8] == 'c'){
                var letternine = document.createTextNode(word[8]);
                letter9.appendChild(letternine); 
        }

        if (word[9] == 'c'){
                var letterten = document.createTextNode(word[9]);
                letter10.appendChild(letterten); 
        } 

        if (word[10] == 'c'){
                var lettereleven = document.createTextNode(word[10]);
                letter11.appendChild(lettereleven); 
        }

        if (word[11] == 'c'){
                var lettertwelve = document.createTextNode(word[11]);
                letter12.appendChild(lettertwelve); 
        }

        if (word[12] == 'c'){
                var letterthirteen = document.createTextNode(word[12]);
                letter13.appendChild(letterthirteen); 
        } 

        if (word[0] !== 'c' && word[1] !== 'c' && word[2] !== 'c' && word[3] !== 'c' && word[4] !== 'c' 
        && word[5] !== 'c' && word[6] !== 'c' && word[7] !== 'c' && word[8] !== 'c' && word[9] !== 'c'
        && word[10] !== 'c'  && word[11] !== 'c'  && word[12] !== 'c'){
                wrong = wrong + 1;
                console.log(wrong);
                incorrect();
        }
        myBlanks();
};

function disableButtonD() {
        audio.play();
        document.getElementById("four").disabled = true;
        document.getElementById("four").innerHTML = "D";
        document.getElementById("four").style.color = "black";


        if (word[0] == 'd'){
                var letterone = document.createTextNode(word[0]);
                letter1.appendChild(letterone);       
        }  
        
        if (word[1] == 'd'){
                var lettertwo = document.createTextNode(word[1]);
                letter2.appendChild(lettertwo); 
        }  
        
        if (word[2] == 'd'){
                var letterthree = document.createTextNode(word[2]);
                letter3.appendChild(letterthree); 
        }  
        
        if (word[3] == 'd'){
                var letterfour = document.createTextNode(word[3]);
                letter4.appendChild(letterfour); 
        }

        if (word[4] == 'd'){
                var letterfive = document.createTextNode(word[4]);
                letter5.appendChild(letterfive); 
        }

        if (word[5] == 'd'){
                var lettersix = document.createTextNode(word[5]);
                letter6.appendChild(lettersix); 
        }

        if (word[6] == 'd'){
                var letterseven = document.createTextNode(word[6]);
                letter7.appendChild(letterseven); 
        }

        if (word[7] == 'd'){
                var lettereight = document.createTextNode(word[7]);
                letter8.appendChild(lettereight); 
        }

        if (word[8] == 'd'){
                var letternine = document.createTextNode(word[8]);
                letter9.appendChild(letternine); 
        }

        if (word[9] == 'd'){
                var letterten = document.createTextNode(word[9]);
                letter10.appendChild(letterten); 
        } 

        if (word[10] == 'd'){
                var lettereleven = document.createTextNode(word[10]);
                letter11.appendChild(lettereleven); 
        }

        if (word[11] == 'd'){
                var lettertwelve = document.createTextNode(word[11]);
                letter12.appendChild(lettertwelve); 
        }

        if (word[12] == 'd'){
                var letterthirteen = document.createTextNode(word[12]);
                letter13.appendChild(letterthirteen); 
        } 

        if (word[0] !== 'd' && word[1] !== 'd' && word[2] !== 'd' && word[3] !== 'd' && word[4] !== 'd' 
        && word[5] !== 'd' && word[6] !== 'd' && word[7] !== 'd' && word[8] !== 'd' && word[9] !== 'd'
        && word[10] !== 'd'  && word[11] !== 'd'  && word[12] !== 'd'){
                wrong = wrong + 1;
                console.log(wrong);
                incorrect();
        }
        myBlanks();
};

function disableButtonE() {
        audio.play();
        document.getElementById("five").disabled = true;
        document.getElementById("five").innerHTML = "E";
        document.getElementById("five").style.color = "black";


        if (word[0] == 'e'){
                var letterone = document.createTextNode(word[0]);
                letter1.appendChild(letterone);       
        }  
        
        if (word[1] == 'e'){
                var lettertwo = document.createTextNode(word[1]);
                letter2.appendChild(lettertwo); 
        }  
        
        if (word[2] == 'e'){
                var letterthree = document.createTextNode(word[2]);
                letter3.appendChild(letterthree); 
        }  
        
        if (word[3] == 'e'){
                var letterfour = document.createTextNode(word[3]);
                letter4.appendChild(letterfour); 
        }

        if (word[4] == 'e'){
                var letterfive = document.createTextNode(word[4]);
                letter5.appendChild(letterfive); 
        }

        if (word[5] == 'e'){
                var lettersix = document.createTextNode(word[5]);
                letter6.appendChild(lettersix); 
        }

        if (word[6] == 'e'){
                var letterseven = document.createTextNode(word[6]);
                letter7.appendChild(letterseven); 
        }

        if (word[7] == 'e'){
                var lettereight = document.createTextNode(word[7]);
                letter8.appendChild(lettereight); 
        }

        if (word[8] == 'e'){
                var letternine = document.createTextNode(word[8]);
                letter9.appendChild(letternine); 
        }

        if (word[9] == 'e'){
                var letterten = document.createTextNode(word[9]);
                letter10.appendChild(letterten); 
        } 

        if (word[10] == 'e'){
                var lettereleven = document.createTextNode(word[10]);
                letter11.appendChild(lettereleven); 
        }

        if (word[11] == 'e'){
                var lettertwelve = document.createTextNode(word[11]);
                letter12.appendChild(lettertwelve); 
        }

        if (word[12] == 'e'){
                var letterthirteen = document.createTextNode(word[12]);
                letter13.appendChild(letterthirteen); 
        } 

        if (word[0] !== 'e' && word[1] !== 'e' && word[2] !== 'e' && word[3] !== 'e' && word[4] !== 'e' 
        && word[5] !== 'e' && word[6] !== 'e' && word[7] !== 'e' && word[8] !== 'e' && word[9] !== 'e'
        && word[10] !== 'e'  && word[11] !== 'e'  && word[12] !== 'e'){
                wrong = wrong + 1;
                console.log(wrong);
                incorrect();
        }
        myBlanks();
};

function disableButtonF() {
        audio.play();
        document.getElementById("six").disabled = true;
        document.getElementById("six").innerHTML = "F";
        document.getElementById("six").style.color = "black";


        if (word[0] == 'f'){
                var letterone = document.createTextNode(word[0]);
                letter1.appendChild(letterone);       
        }  
        
        if (word[1] == 'f'){
                var lettertwo = document.createTextNode(word[1]);
                letter2.appendChild(lettertwo); 
        }  
        
        if (word[2] == 'f'){
                var letterthree = document.createTextNode(word[2]);
                letter3.appendChild(letterthree); 
        }  
        
        if (word[3] == 'f'){
                var letterfour = document.createTextNode(word[3]);
                letter4.appendChild(letterfour); 
        }

        if (word[4] == 'f'){
                var letterfive = document.createTextNode(word[4]);
                letter5.appendChild(letterfive); 
        }

        if (word[5] == 'f'){
                var lettersix = document.createTextNode(word[5]);
                letter6.appendChild(lettersix); 
        }

        if (word[6] == 'f'){
                var letterseven = document.createTextNode(word[6]);
                letter7.appendChild(letterseven); 
        }

        if (word[7] == 'f'){
                var lettereight = document.createTextNode(word[7]);
                letter8.appendChild(lettereight); 
        }

        if (word[8] == 'f'){
                var letternine = document.createTextNode(word[8]);
                letter9.appendChild(letternine); 
        }

        if (word[9] == 'f'){
                var letterten = document.createTextNode(word[9]);
                letter10.appendChild(letterten); 
        } 

        if (word[10] == 'f'){
                var lettereleven = document.createTextNode(word[10]);
                letter11.appendChild(lettereleven); 
        }

        if (word[11] == 'f'){
                var lettertwelve = document.createTextNode(word[11]);
                letter12.appendChild(lettertwelve); 
        }

        if (word[12] == 'f'){
                var letterthirteen = document.createTextNode(word[12]);
                letter13.appendChild(letterthirteen); 
        } 

        if (word[0] !== 'f' && word[1] !== 'f' && word[2] !== 'f' && word[3] !== 'f' && word[4] !== 'f' 
        && word[5] !== 'f' && word[6] !== 'f' && word[7] !== 'f' && word[8] !== 'f' && word[9] !== 'f'
        && word[10] !== 'f'  && word[11] !== 'f'  && word[12] !== 'f'){
                wrong = wrong + 1;
                console.log(wrong);
                incorrect();
        }
};

function disableButtonG() {
        audio.play();
        document.getElementById("seven").disabled = true;
        document.getElementById("seven").innerHTML = "G";
        document.getElementById("seven").style.color = "black";


        if (word[0] == 'g'){
                var letterone = document.createTextNode(word[0]);
                letter1.appendChild(letterone);       
        }  
        
        if (word[1] == 'g'){
                var lettertwo = document.createTextNode(word[1]);
                letter2.appendChild(lettertwo); 
        }  
        
        if (word[2] == 'g'){
                var letterthree = document.createTextNode(word[2]);
                letter3.appendChild(letterthree); 
        }  
        
        if (word[3] == 'g'){
                var letterfour = document.createTextNode(word[3]);
                letter4.appendChild(letterfour); 
        }

        if (word[4] == 'g'){
                var letterfive = document.createTextNode(word[4]);
                letter5.appendChild(letterfive); 
        }

        if (word[5] == 'g'){
                var lettersix = document.createTextNode(word[5]);
                letter6.appendChild(lettersix); 
        }

        if (word[6] == 'g'){
                var letterseven = document.createTextNode(word[6]);
                letter7.appendChild(letterseven); 
        }

        if (word[7] == 'g'){
                var lettereight = document.createTextNode(word[7]);
                letter8.appendChild(lettereight); 
        }

        if (word[8] == 'g'){
                var letternine = document.createTextNode(word[8]);
                letter9.appendChild(letternine); 
        }

        if (word[9] == 'g'){
                var letterten = document.createTextNode(word[9]);
                letter10.appendChild(letterten); 
        } 

        if (word[10] == 'g'){
                var lettereleven = document.createTextNode(word[10]);
                letter11.appendChild(lettereleven); 
        }

        if (word[11] == 'g'){
                var lettertwelve = document.createTextNode(word[11]);
                letter12.appendChild(lettertwelve); 
        }

        if (word[12] == 'g'){
                var letterthirteen = document.createTextNode(word[12]);
                letter13.appendChild(letterthirteen); 
        } 

        if (word[0] !== 'g' && word[1] !== 'g' && word[2] !== 'g' && word[3] !== 'g' && word[4] !== 'g' 
        && word[5] !== 'g' && word[6] !== 'g' && word[7] !== 'g' && word[8] !== 'g' && word[9] !== 'g'
        && word[10] !== 'g'  && word[11] !== 'g'  && word[12] !== 'g'){
                wrong = wrong + 1;
                console.log(wrong);
                incorrect();
        }
        myBlanks();
};

function disableButtonH() {
        audio.play();
        document.getElementById("eight").disabled = true;
        document.getElementById("eight").innerHTML = "H";
        document.getElementById("eight").style.color = "black";


        if (word[0] == 'h'){
                var letterone = document.createTextNode(word[0]);
                letter1.appendChild(letterone);       
        }  
        
        if (word[1] == 'h'){
                var lettertwo = document.createTextNode(word[1]);
                letter2.appendChild(lettertwo); 
        }  
        
        if (word[2] == 'h'){
                var letterthree = document.createTextNode(word[2]);
                letter3.appendChild(letterthree); 
        }  
        
        if (word[3] == 'h'){
                var letterfour = document.createTextNode(word[3]);
                letter4.appendChild(letterfour); 
        }

        if (word[4] == 'h'){
                var letterfive = document.createTextNode(word[4]);
                letter5.appendChild(letterfive); 
        }

        if (word[5] == 'h'){
                var lettersix = document.createTextNode(word[5]);
                letter6.appendChild(lettersix); 
        }

        if (word[6] == 'h'){
                var letterseven = document.createTextNode(word[6]);
                letter7.appendChild(letterseven); 
        }

        if (word[7] == 'h'){
                var lettereight = document.createTextNode(word[7]);
                letter8.appendChild(lettereight); 
        }

        if (word[8] == 'h'){
                var letternine = document.createTextNode(word[8]);
                letter9.appendChild(letternine); 
        }

        if (word[9] == 'h'){
                var letterten = document.createTextNode(word[9]);
                letter10.appendChild(letterten); 
        } 

        if (word[10] == 'h'){
                var lettereleven = document.createTextNode(word[10]);
                letter11.appendChild(lettereleven); 
        }

        if (word[11] == 'h'){
                var lettertwelve = document.createTextNode(word[11]);
                letter12.appendChild(lettertwelve); 
        }

        if (word[12] == 'h'){
                var letterthirteen = document.createTextNode(word[12]);
                letter13.appendChild(letterthirteen); 
        } 

        if (word[0] !== 'h' && word[1] !== 'h' && word[2] !== 'h' && word[3] !== 'h' && word[4] !== 'h' 
        && word[5] !== 'h' && word[6] !== 'h' && word[7] !== 'h' && word[8] !== 'h' && word[9] !== 'h'
        && word[10] !== 'h'  && word[11] !== 'h'  && word[12] !== 'h'){
                wrong = wrong + 1;
                console.log(wrong);
                incorrect();
        }
        myBlanks();
};

function disableButtonI() {
        audio.play();
        document.getElementById("nine").disabled = true;
        document.getElementById("nine").innerHTML = "I";
        document.getElementById("nine").style.color = "black";


        if (word[0] == 'i'){
                var letterone = document.createTextNode(word[0]);
                letter1.appendChild(letterone);       
        }  
        
        if (word[1] == 'i'){
                var lettertwo = document.createTextNode(word[1]);
                letter2.appendChild(lettertwo); 
        }  
        
        if (word[2] == 'i'){
                var letterthree = document.createTextNode(word[2]);
                letter3.appendChild(letterthree); 
        }  
        
        if (word[3] == 'i'){
                var letterfour = document.createTextNode(word[3]);
                letter4.appendChild(letterfour); 
        }

        if (word[4] == 'i'){
                var letterfive = document.createTextNode(word[4]);
                letter5.appendChild(letterfive); 
        }

        if (word[5] == 'i'){
                var lettersix = document.createTextNode(word[5]);
                letter6.appendChild(lettersix); 
        }

        if (word[6] == 'i'){
                var letterseven = document.createTextNode(word[6]);
                letter7.appendChild(letterseven); 
        }

        if (word[7] == 'i'){
                var lettereight = document.createTextNode(word[7]);
                letter8.appendChild(lettereight); 
        }

        if (word[8] == 'i'){
                var letternine = document.createTextNode(word[8]);
                letter9.appendChild(letternine); 
        }

        if (word[9] == 'i'){
                var letterten = document.createTextNode(word[9]);
                letter10.appendChild(letterten); 
        } 

        if (word[10] == 'i'){
                var lettereleven = document.createTextNode(word[10]);
                letter11.appendChild(lettereleven); 
        }

        if (word[11] == 'i'){
                var lettertwelve = document.createTextNode(word[11]);
                letter12.appendChild(lettertwelve); 
        }

        if (word[12] == 'i'){
                var letterthirteen = document.createTextNode(word[12]);
                letter13.appendChild(letterthirteen); 
        } 

        if (word[0] !== 'i' && word[1] !== 'i' && word[2] !== 'i' && word[3] !== 'i' && word[4] !== 'i' 
        && word[5] !== 'i' && word[6] !== 'i' && word[7] !== 'i' && word[8] !== 'i' && word[9] !== 'i'
        && word[10] !== 'i'  && word[11] !== 'i'  && word[12] !== 'i'){
                wrong = wrong + 1;
                console.log(wrong);
                incorrect();
        }
        myBlanks();
};

function disableButtonJ() {
        audio.play();
        document.getElementById("ten").disabled = true;
        document.getElementById("ten").innerHTML = "J";
        document.getElementById("ten").style.color = "black";


        if (word[0] == 'j'){
                var letterone = document.createTextNode(word[0]);
                letter1.appendChild(letterone);       
        }  
        
        if (word[1] == 'j'){
                var lettertwo = document.createTextNode(word[1]);
                letter2.appendChild(lettertwo); 
        }  
        
        if (word[2] == 'j'){
                var letterthree = document.createTextNode(word[2]);
                letter3.appendChild(letterthree); 
        }  
        
        if (word[3] == 'j'){
                var letterfour = document.createTextNode(word[3]);
                letter4.appendChild(letterfour); 
        }

        if (word[4] == 'j'){
                var letterfive = document.createTextNode(word[4]);
                letter5.appendChild(letterfive); 
        }

        if (word[5] == 'j'){
                var lettersix = document.createTextNode(word[5]);
                letter6.appendChild(lettersix); 
        }

        if (word[6] == 'j'){
                var letterseven = document.createTextNode(word[6]);
                letter7.appendChild(letterseven); 
        }

        if (word[7] == 'j'){
                var lettereight = document.createTextNode(word[7]);
                letter8.appendChild(lettereight); 
        }

        if (word[8] == 'j'){
                var letternine = document.createTextNode(word[8]);
                letter9.appendChild(letternine); 
        }

        if (word[9] == 'j'){
                var letterten = document.createTextNode(word[9]);
                letter10.appendChild(letterten); 
        } 

        if (word[10] == 'j'){
                var lettereleven = document.createTextNode(word[10]);
                letter11.appendChild(lettereleven); 
        }

        if (word[11] == 'j'){
                var lettertwelve = document.createTextNode(word[11]);
                letter12.appendChild(lettertwelve); 
        }

        if (word[12] == 'j'){
                var letterthirteen = document.createTextNode(word[12]);
                letter13.appendChild(letterthirteen); 
        } 

        if (word[0] !== 'j' && word[1] !== 'j' && word[2] !== 'j' && word[3] !== 'j' && word[4] !== 'j' 
        && word[5] !== 'j' && word[6] !== 'j' && word[7] !== 'j' && word[8] !== 'j' && word[9] !== 'j'
        && word[10] !== 'j'  && word[11] !== 'j'  && word[12] !== 'j'){
                wrong = wrong + 1;
                console.log(wrong);
                incorrect();
        }
        myBlanks();
};

function disableButtonK() {
        audio.play();
        document.getElementById("eleven").disabled = true;
        document.getElementById("eleven").innerHTML = "K";
        document.getElementById("eleven").style.color = "black";


        if (word[0] == 'k'){
                var letterone = document.createTextNode(word[0]);
                letter1.appendChild(letterone);       
        }  
        
        if (word[1] == 'k'){
                var lettertwo = document.createTextNode(word[1]);
                letter2.appendChild(lettertwo); 
        }  
        
        if (word[2] == 'k'){
                var letterthree = document.createTextNode(word[2]);
                letter3.appendChild(letterthree); 
        }  
        
        if (word[3] == 'k'){
                var letterfour = document.createTextNode(word[3]);
                letter4.appendChild(letterfour); 
        }

        if (word[4] == 'k'){
                var letterfive = document.createTextNode(word[4]);
                letter5.appendChild(letterfive); 
        }

        if (word[5] == 'k'){
                var lettersix = document.createTextNode(word[5]);
                letter6.appendChild(lettersix); 
        }

        if (word[6] == 'k'){
                var letterseven = document.createTextNode(word[6]);
                letter7.appendChild(letterseven); 
        }

        if (word[7] == 'k'){
                var lettereight = document.createTextNode(word[7]);
                letter8.appendChild(lettereight); 
        }

        if (word[8] == 'k'){
                var letternine = document.createTextNode(word[8]);
                letter9.appendChild(letternine); 
        }

        if (word[9] == 'k'){
                var letterten = document.createTextNode(word[9]);
                letter10.appendChild(letterten); 
        }
        
        if (word[10] == 'k'){
                var lettereleven = document.createTextNode(word[10]);
                letter11.appendChild(lettereleven); 
        }

        if (word[11] == 'k'){
                var lettertwelve = document.createTextNode(word[11]);
                letter12.appendChild(lettertwelve); 
        }

        if (word[12] == 'k'){
                var letterthirteen = document.createTextNode(word[12]);
                letter13.appendChild(letterthirteen); 
        } 

        if (word[0] !== 'k' && word[1] !== 'k' && word[2] !== 'k' && word[3] !== 'k' && word[4] !== 'k' 
        && word[5] !== 'k' && word[6] !== 'k' && word[7] !== 'k' && word[8] !== 'k' && word[9] !== 'k'
        && word[10] !== 'k'  && word[11] !== 'k'  && word[12] !== 'k'){
                wrong = wrong + 1;
                console.log(wrong);
                incorrect();
        }
        myBlanks();
};

function disableButtonL() {
        audio.play();
        document.getElementById("twelve").disabled = true;
        document.getElementById("twelve").innerHTML = "L";
        document.getElementById("twelve").style.color = "black";


        if (word[0] == 'l'){
                var letterone = document.createTextNode(word[0]);
                letter1.appendChild(letterone);       
        }  
        
        if (word[1] == 'l'){
                var lettertwo = document.createTextNode(word[1]);
                letter2.appendChild(lettertwo); 
        }  
        
        if (word[2] == 'l'){
                var letterthree = document.createTextNode(word[2]);
                letter3.appendChild(letterthree); 
        }  
        
        if (word[3] == 'l'){
                var letterfour = document.createTextNode(word[3]);
                letter4.appendChild(letterfour); 
        }

        if (word[4] == 'l'){
                var letterfive = document.createTextNode(word[4]);
                letter5.appendChild(letterfive); 
        }

        if (word[5] == 'l'){
                var lettersix = document.createTextNode(word[5]);
                letter6.appendChild(lettersix); 
        }

        if (word[6] == 'l'){
                var letterseven = document.createTextNode(word[6]);
                letter7.appendChild(letterseven); 
        }

        if (word[7] == 'l'){
                var lettereight = document.createTextNode(word[7]);
                letter8.appendChild(lettereight); 
        }

        if (word[8] == 'l'){
                var letternine = document.createTextNode(word[8]);
                letter9.appendChild(letternine); 
        }

        if (word[9] == 'l'){
                var letterten = document.createTextNode(word[9]);
                letter10.appendChild(letterten); 
        } 

        if (word[10] == 'l'){
                var lettereleven = document.createTextNode(word[10]);
                letter11.appendChild(lettereleven); 
        }

        if (word[11] == 'l'){
                var lettertwelve = document.createTextNode(word[11]);
                letter12.appendChild(lettertwelve); 
        }

        if (word[12] == 'l'){
                var letterthirteen = document.createTextNode(word[12]);
                letter13.appendChild(letterthirteen); 
        } 

        if (word[0] !== 'l' && word[1] !== 'l' && word[2] !== 'l' && word[3] !== 'l' && word[4] !== 'l' 
        && word[5] !== 'l' && word[6] !== 'l' && word[7] !== 'l' && word[8] !== 'l' && word[9] !== 'l'
        && word[10] !== 'l'  && word[11] !== 'l'  && word[12] !== 'l'){
                wrong = wrong + 1;                 console.log(wrong);
                incorrect();
        }
        myBlanks();
};

function disableButtonM() {
        audio.play();
        document.getElementById("thirteen").disabled = true;
        document.getElementById("thirteen").innerHTML = "M";
        document.getElementById("thirteen").style.color = "black";


        if (word[0] == 'm'){
                var letterone = document.createTextNode(word[0]);
                letter1.appendChild(letterone);       
        }  
        
        if (word[1] == 'm'){
                var lettertwo = document.createTextNode(word[1]);
                letter2.appendChild(lettertwo); 
        }  
        
        if (word[2] == 'm'){
                var letterthree = document.createTextNode(word[2]);
                letter3.appendChild(letterthree); 
        }  
        
        if (word[3] == 'm'){
                var letterfour = document.createTextNode(word[3]);
                letter4.appendChild(letterfour); 
        }

        if (word[4] == 'm'){
                var letterfive = document.createTextNode(word[4]);
                letter5.appendChild(letterfive); 
        }

        if (word[5] == 'm'){
                var lettersix = document.createTextNode(word[5]);
                letter6.appendChild(lettersix); 
        }

        if (word[6] == 'm'){
                var letterseven = document.createTextNode(word[6]);
                letter7.appendChild(letterseven); 
        }

        if (word[7] == 'm'){
                var lettereight = document.createTextNode(word[7]);
                letter8.appendChild(lettereight); 
        }

        if (word[8] == 'm'){
                var letternine = document.createTextNode(word[8]);
                letter9.appendChild(letternine); 
        }

        if (word[9] == 'm'){
                var letterten = document.createTextNode(word[9]);
                letter10.appendChild(letterten); 
        } 

        if (word[10] == 'm'){
                var lettereleven = document.createTextNode(word[10]);
                letter11.appendChild(lettereleven); 
        }

        if (word[11] == 'm'){
                var lettertwelve = document.createTextNode(word[11]);
                letter12.appendChild(lettertwelve); 
        }

        if (word[12] == 'm'){
                var letterthirteen = document.createTextNode(word[12]);
                letter13.appendChild(letterthirteen); 
        } 

        if (word[0] !== 'm' && word[1] !== 'm' && word[2] !== 'm' && word[3] !== 'm' && word[4] !== 'm' 
        && word[5] !== 'm' && word[6] !== 'm' && word[7] !== 'm' && word[8] !== 'm' && word[9] !== 'm'
        && word[10] !== 'm'  && word[11] !== 'm'  && word[12] !== 'm'){
                wrong = wrong + 1;                 console.log(wrong);
                incorrect();
        }

        myBlanks();
};

function disableButtonN() {
        audio.play();
        document.getElementById("fourteen").disabled = true;
        document.getElementById("fourteen").innerHTML = "N";
        document.getElementById("fourteen").style.color = "black";


        if (word[0] == 'n'){
                var letterone = document.createTextNode(word[0]);
                letter1.appendChild(letterone);       
        }  
        
        if (word[1] == 'n'){
                var lettertwo = document.createTextNode(word[1]);
                letter2.appendChild(lettertwo); 
        }  
        
        if (word[2] == 'n'){
                var letterthree = document.createTextNode(word[2]);
                letter3.appendChild(letterthree); 
        }  
        
        if (word[3] == 'n'){
                var letterfour = document.createTextNode(word[3]);
                letter4.appendChild(letterfour); 
        }

        if (word[4] == 'n'){
                var letterfive = document.createTextNode(word[4]);
                letter5.appendChild(letterfive); 
        }

        if (word[5] == 'n'){
                var lettersix = document.createTextNode(word[5]);
                letter6.appendChild(lettersix); 
        }

        if (word[6] == 'n'){
                var letterseven = document.createTextNode(word[6]);
                letter7.appendChild(letterseven); 
        }

        if (word[7] == 'n'){
                var lettereight = document.createTextNode(word[7]);
                letter8.appendChild(lettereight); 
        }

        if (word[8] == 'n'){
                var letternine = document.createTextNode(word[8]);
                letter9.appendChild(letternine); 
        }

        if (word[9] == 'n'){
                var letterten = document.createTextNode(word[9]);
                letter10.appendChild(letterten); 
        } 

        if (word[10] == 'n'){
                var lettereleven = document.createTextNode(word[10]);
                letter11.appendChild(lettereleven); 
        }

        if (word[11] == 'n'){
                var lettertwelve = document.createTextNode(word[11]);
                letter12.appendChild(lettertwelve); 
        }

        if (word[12] == 'n'){
                var letterthirteen = document.createTextNode(word[12]);
                letter13.appendChild(letterthirteen); 
        } 

        if (word[0] !== 'n' && word[1] !== 'n' && word[2] !== 'n' && word[3] !== 'n' && word[4] !== 'n' 
        && word[5] !== 'n' && word[6] !== 'n' && word[7] !== 'n' && word[8] !== 'n' && word[9] !== 'n'
        && word[10] !== 'n'  && word[11] !== 'n'  && word[12] !== 'n'){
                wrong = wrong + 1;                 console.log(wrong);
                incorrect();
        }
        myBlanks();
};

function disableButtonO() {
        audio.play();
        document.getElementById("fifteen").disabled = true;
        document.getElementById("fifteen").innerHTML = "O";
        document.getElementById("fifteen").style.color = "black";


        if (word[0] == 'o'){
                var letterone = document.createTextNode(word[0]);
                letter1.appendChild(letterone);       
        }  
        
        if (word[1] == 'o'){
                var lettertwo = document.createTextNode(word[1]);
                letter2.appendChild(lettertwo); 
        }  
        
        if (word[2] == 'o'){
                var letterthree = document.createTextNode(word[2]);
                letter3.appendChild(letterthree); 
        }  
        
        if (word[3] == 'o'){
                var letterfour = document.createTextNode(word[3]);
                letter4.appendChild(letterfour); 
        }

        if (word[4] == 'o'){
                var letterfive = document.createTextNode(word[4]);
                letter5.appendChild(letterfive); 
        }

        if (word[5] == 'o'){
                var lettersix = document.createTextNode(word[5]);
                letter6.appendChild(lettersix); 
        }

        if (word[6] == 'o'){
                var letterseven = document.createTextNode(word[6]);
                letter7.appendChild(letterseven); 
        }

        if (word[7] == 'o'){
                var lettereight = document.createTextNode(word[7]);
                letter8.appendChild(lettereight); 
        }

        if (word[8] == 'o'){
                var letternine = document.createTextNode(word[8]);
                letter9.appendChild(letternine); 
        }

        if (word[9] == 'o'){
                var letterten = document.createTextNode(word[9]);
                letter10.appendChild(letterten); 
        } 

        if (word[10] == 'o'){
                var lettereleven = document.createTextNode(word[10]);
                letter11.appendChild(lettereleven); 
        }

        if (word[11] == 'o'){
                var lettertwelve = document.createTextNode(word[11]);
                letter12.appendChild(lettertwelve); 
        }

        if (word[12] == 'o'){
                var letterthirteen = document.createTextNode(word[12]);
                letter13.appendChild(letterthirteen); 
        } 

        if (word[0] !== 'o' && word[1] !== 'o' && word[2] !== 'o' && word[3] !== 'o' && word[4] !== 'o' 
        && word[5] !== 'o' && word[6] !== 'o' && word[7] !== 'o' && word[8] !== 'o' && word[9] !== 'o'
        && word[10] !== 'o'  && word[11] !== 'o'  && word[12] !== 'o'){
                wrong = wrong + 1;                 console.log(wrong);
                incorrect();
        }

        myBlanks();
};

function disableButtonP() {
        audio.play();
        document.getElementById("sixteen").disabled = true;
        document.getElementById("sixteen").innerHTML = "P";
        document.getElementById("sixteen").style.color = "black";


        if (word[0] == 'p'){
                var letterone = document.createTextNode(word[0]);
                letter1.appendChild(letterone);       
        }  
        
        if (word[1] == 'p'){
                var lettertwo = document.createTextNode(word[1]);
                letter2.appendChild(lettertwo); 
        }  
        
        if (word[2] == 'p'){
                var letterthree = document.createTextNode(word[2]);
                letter3.appendChild(letterthree); 
        }  
        
        if (word[3] == 'p'){
                var letterfour = document.createTextNode(word[3]);
                letter4.appendChild(letterfour); 
        }

        if (word[4] == 'p'){
                var letterfive = document.createTextNode(word[4]);
                letter5.appendChild(letterfive); 
        }

        if (word[5] == 'p'){
                var lettersix = document.createTextNode(word[5]);
                letter6.appendChild(lettersix); 
        }

        if (word[6] == 'p'){
                var letterseven = document.createTextNode(word[6]);
                letter7.appendChild(letterseven); 
        }

        if (word[7] == 'p'){
                var lettereight = document.createTextNode(word[7]);
                letter8.appendChild(lettereight); 
        }

        if (word[8] == 'p'){
                var letternine = document.createTextNode(word[8]);
                letter9.appendChild(letternine); 
        }

        if (word[9] == 'p'){
                var letterten = document.createTextNode(word[9]);
                letter10.appendChild(letterten); 
        } 

        if (word[10] == 'p'){
                var lettereleven = document.createTextNode(word[10]);
                letter11.appendChild(lettereleven); 
        }

        if (word[11] == 'p'){
                var lettertwelve = document.createTextNode(word[11]);
                letter12.appendChild(lettertwelve); 
        }

        if (word[12] == 'p'){
                var letterthirteen = document.createTextNode(word[12]);
                letter13.appendChild(letterthirteen); 
        } 

        if (word[0] !== 'p' && word[1] !== 'p' && word[2] !== 'p' && word[3] !== 'p' && word[4] !== 'p' 
        && word[5] !== 'p' && word[6] !== 'p' && word[7] !== 'p' && word[8] !== 'p' && word[9] !== 'p'
        && word[10] !== 'p'  && word[11] !== 'p'  && word[12] !== 'p'){
                wrong = wrong + 1;                 console.log(wrong);
                incorrect();
        }
        myBlanks();
};

function disableButtonQ() {
        audio.play();
        document.getElementById("seventeen").disabled = true;
        document.getElementById("seventeen").innerHTML = "Q";
        document.getElementById("seventeen").style.color = "black";


        if (word[0] == 'q'){
                var letterone = document.createTextNode(word[0]);
                letter1.appendChild(letterone);       
        }  
        
        if (word[1] == 'q'){
                var lettertwo = document.createTextNode(word[1]);
                letter2.appendChild(lettertwo); 
        }  
        
        if (word[2] == 'q'){
                var letterthree = document.createTextNode(word[2]);
                letter3.appendChild(letterthree); 
        }  
        
        if (word[3] == 'q'){
                var letterfour = document.createTextNode(word[3]);
                letter4.appendChild(letterfour); 
        }

        if (word[4] == 'q'){
                var letterfive = document.createTextNode(word[4]);
                letter5.appendChild(letterfive); 
        }

        if (word[5] == 'q'){
                var lettersix = document.createTextNode(word[5]);
                letter6.appendChild(lettersix); 
        }

        if (word[6] == 'q'){
                var letterseven = document.createTextNode(word[6]);
                letter7.appendChild(letterseven); 
        }

        if (word[7] == 'q'){
                var lettereight = document.createTextNode(word[7]);
                letter8.appendChild(lettereight); 
        }

        if (word[8] == 'q'){
                var letternine = document.createTextNode(word[8]);
                letter9.appendChild(letternine); 
        }

        if (word[9] == 'q'){
                var letterten = document.createTextNode(word[9]);
                letter10.appendChild(letterten); 
        }
        
        if (word[10] == 'q'){
                var lettereleven = document.createTextNode(word[10]);
                letter11.appendChild(lettereleven); 
        }

        if (word[11] == 'q'){
                var lettertwelve = document.createTextNode(word[11]);
                letter12.appendChild(lettertwelve); 
        }

        if (word[12] == 'q'){
                var letterthirteen = document.createTextNode(word[12]);
                letter13.appendChild(letterthirteen); 
        } 

        if (word[0] !== 'q' && word[1] !== 'q' && word[2] !== 'q' && word[3] !== 'q' && word[4] !== 'q' 
        && word[5] !== 'q' && word[6] !== 'q' && word[7] !== 'q' && word[8] !== 'q' && word[9] !== 'q'
        && word[10] !== 'q'  && word[11] !== 'q'  && word[12] !== 'q'){
                wrong = wrong + 1;                 console.log(wrong);
                incorrect();
        }
        myBlanks();
};

function disableButtonR() {
        audio.play();
        document.getElementById("eighteen").disabled = true;
        document.getElementById("eighteen").innerHTML = "R";
        document.getElementById("eighteen").style.color = "black";

        

        if (word[0] == 'r'){
                var letterone = document.createTextNode(word[0]);
                letter1.appendChild(letterone);       
        }  
        
        if (word[1] == 'r'){
                var lettertwo = document.createTextNode(word[1]);
                letter2.appendChild(lettertwo); 
        }  
        
        if (word[2] == 'r'){
                var letterthree = document.createTextNode(word[2]);
                letter3.appendChild(letterthree); 
        }  
        
        if (word[3] == 'r'){
                var letterfour = document.createTextNode(word[3]);
                letter4.appendChild(letterfour); 
        }

        if (word[4] == 'r'){
                var letterfive = document.createTextNode(word[4]);
                letter5.appendChild(letterfive); 
        }

        if (word[5] == 'r'){
                var lettersix = document.createTextNode(word[5]);
                letter6.appendChild(lettersix); 
        }

        if (word[6] == 'r'){
                var letterseven = document.createTextNode(word[6]);
                letter7.appendChild(letterseven); 
        }

        if (word[7] == 'r'){
                var lettereight = document.createTextNode(word[7]);
                letter8.appendChild(lettereight); 
        }

        if (word[8] == 'r'){
                var letternine = document.createTextNode(word[8]);
                letter9.appendChild(letternine); 
        }

        if (word[9] == 'r'){
                var letterten = document.createTextNode(word[9]);
                letter10.appendChild(letterten); 
        } 

        if (word[10] == 'r'){
                var lettereleven = document.createTextNode(word[10]);
                letter11.appendChild(lettereleven); 
        }

        if (word[11] == 'r'){
                var lettertwelve = document.createTextNode(word[11]);
                letter12.appendChild(lettertwelve); 
        }

        if (word[12] == 'r'){
                var letterthirteen = document.createTextNode(word[12]);
                letter13.appendChild(letterthirteen); 
        } 

        if (word[0] !== 'r' && word[1] !== 'r' && word[2] !== 'r' && word[3] !== 'r' && word[4] !== 'r' 
        && word[5] !== 'r' && word[6] !== 'r' && word[7] !== 'r' && word[8] !== 'r' && word[9] !== 'r'
        && word[10] !== 'r'  && word[11] !== 'r'  && word[12] !== 'r'){
                wrong = wrong + 1;                 console.log(wrong);
                incorrect();
        }
        myBlanks();
};

function disableButtonS() {
        audio.play();
        document.getElementById("nineteen").disabled = true;
        document.getElementById("nineteen").innerHTML = "S";
        document.getElementById("nineteen").style.color = "black";

        if (word[0] == 's'){
                var letterone = document.createTextNode(word[0]);
                letter1.appendChild(letterone);       
        }  
        
        if (word[1] == 's'){
                var lettertwo = document.createTextNode(word[1]);
                letter2.appendChild(lettertwo); 
        }  
        
        if (word[2] == 's'){
                var letterthree = document.createTextNode(word[2]);
                letter3.appendChild(letterthree); 
        }  
        
        if (word[3] == 's'){
                var letterfour = document.createTextNode(word[3]);
                letter4.appendChild(letterfour); 
        }

        if (word[4] == 's'){
                var letterfive = document.createTextNode(word[4]);
                letter5.appendChild(letterfive); 
        }

        if (word[5] == 's'){
                var lettersix = document.createTextNode(word[5]);
                letter6.appendChild(lettersix); 
        }

        if (word[6] == 's'){
                var letterseven = document.createTextNode(word[6]);
                letter7.appendChild(letterseven); 
        }

        if (word[7] == 's'){
                var lettereight = document.createTextNode(word[7]);
                letter8.appendChild(lettereight); 
        }

        if (word[8] == 's'){
                var letternine = document.createTextNode(word[8]);
                letter9.appendChild(letternine); 
        }

        if (word[9] == 's'){
                var letterten = document.createTextNode(word[9]);
                letter10.appendChild(letterten); 
        } 

        if (word[10] == 's'){
                var lettereleven = document.createTextNode(word[10]);
                letter11.appendChild(lettereleven); 
        }

        if (word[11] == 's'){
                var lettertwelve = document.createTextNode(word[11]);
                letter12.appendChild(lettertwelve); 
        }

        if (word[12] == 's'){
                var letterthirteen = document.createTextNode(word[12]);
                letter13.appendChild(letterthirteen); 
        } 

        if (word[0] !== 's' && word[1] !== 's' && word[2] !== 's' && word[3] !== 's' && word[4] !== 's' 
        && word[5] !== 's' && word[6] !== 's' && word[7] !== 's' && word[8] !== 's' && word[9] !== 's'
        && word[10] !== 's'  && word[11] !== 's'  && word[12] !== 's'){
                wrong = wrong + 1;                 console.log(wrong);
                incorrect();
        }
        myBlanks();
};

function disableButtonT() {
        audio.play();
        document.getElementById("twenty").disabled = true;
        document.getElementById("twenty").innerHTML = "T";
        document.getElementById("twenty").style.color = "black";

        if (word[0] == 't'){
                var letterone = document.createTextNode(word[0]);
                letter1.appendChild(letterone);       
        }  
        
        if (word[1] == 't'){
                var lettertwo = document.createTextNode(word[1]);
                letter2.appendChild(lettertwo); 
        }  
        
        if (word[2] == 't'){
                var letterthree = document.createTextNode(word[2]);
                letter3.appendChild(letterthree); 
        }  
        
        if (word[3] == 't'){
                var letterfour = document.createTextNode(word[3]);
                letter4.appendChild(letterfour); 
        }

        if (word[4] == 't'){
                var letterfive = document.createTextNode(word[4]);
                letter5.appendChild(letterfive); 
        }

        if (word[5] == 't'){
                var lettersix = document.createTextNode(word[5]);
                letter6.appendChild(lettersix); 
        }

        if (word[6] == 't'){
                var letterseven = document.createTextNode(word[6]);
                letter7.appendChild(letterseven); 
        }

        if (word[7] == 't'){
                var lettereight = document.createTextNode(word[7]);
                letter8.appendChild(lettereight); 
        }

        if (word[8] == 't'){
                var letternine = document.createTextNode(word[8]);
                letter9.appendChild(letternine); 
        }

        if (word[9] == 't'){
                var letterten = document.createTextNode(word[9]);
                letter10.appendChild(letterten); 
        } 

        if (word[10] == 't'){
                var lettereleven = document.createTextNode(word[10]);
                letter11.appendChild(lettereleven); 
        }

        if (word[11] == 't'){
                var lettertwelve = document.createTextNode(word[11]);
                letter12.appendChild(lettertwelve); 
        }

        if (word[12] == 't'){
                var letterthirteen = document.createTextNode(word[12]);
                letter13.appendChild(letterthirteen); 
        } 

        if (word[0] !== 't' && word[1] !== 't' && word[2] !== 't' && word[3] !== 't' && word[4] !== 't' 
        && word[5] !== 't' && word[6] !== 't' && word[7] !== 't' && word[8] !== 't' && word[9] !== 't'
        && word[10] !== 't'  && word[11] !== 't'  && word[12] !== 't'){
                wrong = wrong + 1;                 console.log(wrong);
                incorrect();
        }

        if(letter1.innerHTML != '' && letter2.innerHTML != '' && letter3.innerHTML != '' && letter4.innerHTML != ''){
                alert('you win');
        }
        myBlanks();
};

function disableButtonU() {
        audio.play();
        document.getElementById("twentyone").disabled = true;
        document.getElementById("twentyone").innerHTML = "U";
        document.getElementById("twentyone").style.color = "black";

        if (word[0] == 'u'){
                var letterone = document.createTextNode(word[0]);
                letter1.appendChild(letterone);       
        }  
        
        if (word[1] == 'u'){
                var lettertwo = document.createTextNode(word[1]);
                letter2.appendChild(lettertwo); 
        }  
        
        if (word[2] == 'u'){
                var letterthree = document.createTextNode(word[2]);
                letter3.appendChild(letterthree); 
        }  
        
        if (word[3] == 'u'){
                var letterfour = document.createTextNode(word[3]);
                letter4.appendChild(letterfour); 
        }

        if (word[4] == 'u'){
                var letterfive = document.createTextNode(word[4]);
                letter5.appendChild(letterfive); 
        }

        if (word[5] == 'u'){
                var lettersix = document.createTextNode(word[5]);
                letter6.appendChild(lettersix); 
        }

        if (word[6] == 'u'){
                var letterseven = document.createTextNode(word[6]);
                letter7.appendChild(letterseven); 
        }

        if (word[7] == 'u'){
                var lettereight = document.createTextNode(word[7]);
                letter8.appendChild(lettereight); 
        }

        if (word[8] == 'u'){
                var letternine = document.createTextNode(word[8]);
                letter9.appendChild(letternine); 
        }

        if (word[9] == 'u'){
                var letterten = document.createTextNode(word[9]);
                letter10.appendChild(letterten); 
        } 

        if (word[10] == 'u'){
                var lettereleven = document.createTextNode(word[10]);
                letter11.appendChild(lettereleven); 
        }

        if (word[11] == 'u'){
                var lettertwelve = document.createTextNode(word[11]);
                letter12.appendChild(lettertwelve); 
        }

        if (word[12] == 'u'){
                var letterthirteen = document.createTextNode(word[12]);
                letter13.appendChild(letterthirteen); 
        } 

        if (word[0] !== 'u' && word[1] !== 'u' && word[2] !== 'u' && word[3] !== 'u' && word[4] !== 'u' 
        && word[5] !== 'u' && word[6] !== 'u' && word[7] !== 'u' && word[8] !== 'u' && word[9] !== 'u'
        && word[10] !== 'u'  && word[11] !== 'u'  && word[12] !== 'u'){
                wrong = wrong + 1;                 console.log(wrong);
                incorrect();
        }
        myBlanks();
};

function disableButtonV() {
        audio.play();
        document.getElementById("twentytwo").disabled = true;
        document.getElementById("twentytwo").innerHTML = "V";
        document.getElementById("twentytwo").style.color = "black";

        if (word[0] == 'v'){
                var letterone = document.createTextNode(word[0]);
                letter1.appendChild(letterone);       
        }  
        
        if (word[1] == 'v'){
                var lettertwo = document.createTextNode(word[1]);
                letter2.appendChild(lettertwo); 
        }  
        
        if (word[2] == 'v'){
                var letterthree = document.createTextNode(word[2]);
                letter3.appendChild(letterthree); 
        }  
        
        if (word[3] == 'v'){
                var letterfour = document.createTextNode(word[3]);
                letter4.appendChild(letterfour); 
        }

        if (word[4] == 'v'){
                var letterfive = document.createTextNode(word[4]);
                letter5.appendChild(letterfive); 
        }

        if (word[5] == 'v'){
                var lettersix = document.createTextNode(word[5]);
                letter6.appendChild(lettersix); 
        }

        if (word[6] == 'v'){
                var letterseven = document.createTextNode(word[6]);
                letter7.appendChild(letterseven); 
        }

        if (word[7] == 'v'){
                var lettereight = document.createTextNode(word[7]);
                letter8.appendChild(lettereight); 
        }

        if (word[8] == 'v'){
                var letternine = document.createTextNode(word[8]);
                letter9.appendChild(letternine); 
        }

        if (word[9] == 'v'){
                var letterten = document.createTextNode(word[9]);
                letter10.appendChild(letterten); 
        } 

        if (word[10] == 'v'){
                var lettereleven = document.createTextNode(word[10]);
                letter11.appendChild(lettereleven); 
        }

        if (word[11] == 'v'){
                var lettertwelve = document.createTextNode(word[11]);
                letter12.appendChild(lettertwelve); 
        }

        if (word[12] == 'v'){
                var letterthirteen = document.createTextNode(word[12]);
                letter13.appendChild(letterthirteen); 
        } 

        if (word[0] !== 'v' && word[1] !== 'v' && word[2] !== 'v' && word[3] !== 'v' && word[4] !== 'v' 
        && word[5] !== 'v' && word[6] !== 'v' && word[7] !== 'v' && word[8] !== 'v' && word[9] !== 'v'
        && word[10] !== 'v'  && word[11] !== 'v'  && word[12] !== 'v'){
                wrong = wrong + 1;                 console.log(wrong);
                incorrect();
        }
        myBlanks();
};

function disableButtonW() {
        audio.play();
        document.getElementById("twentythree").disabled = true;
        document.getElementById("twentythree").innerHTML = "W";
        document.getElementById("twentythree").style.color = "black";

        if (word[0] == 'w'){
                var letterone = document.createTextNode(word[0]);
                letter1.appendChild(letterone);       
        }  
        
        if (word[1] == 'w'){
                var lettertwo = document.createTextNode(word[1]);
                letter2.appendChild(lettertwo); 
        }  
        
        if (word[2] == 'w'){
                var letterthree = document.createTextNode(word[2]);
                letter3.appendChild(letterthree); 
        }  
        
        if (word[3] == 'w'){
                var letterfour = document.createTextNode(word[3]);
                letter4.appendChild(letterfour); 
        }

        if (word[4] == 'w'){
                var letterfive = document.createTextNode(word[4]);
                letter5.appendChild(letterfive); 
        }

        if (word[5] == 'w'){
                var lettersix = document.createTextNode(word[5]);
                letter6.appendChild(lettersix); 
        }

        if (word[6] == 'w'){
                var letterseven = document.createTextNode(word[6]);
                letter7.appendChild(letterseven); 
        }

        if (word[7] == 'w'){
                var lettereight = document.createTextNode(word[7]);
                letter8.appendChild(lettereight); 
        }

        if (word[8] == 'w'){
                var letternine = document.createTextNode(word[8]);
                letter9.appendChild(letternine); 
        }

        if (word[9] == 'w'){
                var letterten = document.createTextNode(word[9]);
                letter10.appendChild(letterten); 
        } 

        if (word[10] == 'w'){
                var lettereleven = document.createTextNode(word[10]);
                letter11.appendChild(lettereleven); 
        }

        if (word[11] == 'w'){
                var lettertwelve = document.createTextNode(word[11]);
                letter12.appendChild(lettertwelve); 
        }

        if (word[12] == 'w'){
                var letterthirteen = document.createTextNode(word[12]);
                letter13.appendChild(letterthirteen); 
        } 

        if (word[0] !== 'w' && word[1] !== 'w' && word[2] !== 'w' && word[3] !== 'w' && word[4] !== 'w' 
        && word[5] !== 'w' && word[6] !== 'w' && word[7] !== 'w' && word[8] !== 'w' && word[9] !== 'w'
        && word[10] !== 'w'  && word[11] !== 'w'  && word[12] !== 'w'){
                wrong = wrong + 1;                 console.log(wrong);
                incorrect();
        }
        myBlanks();
};

function disableButtonX() {
        audio.play();
        document.getElementById("twentyfour").disabled = true;
        document.getElementById("twentyfour").innerHTML = "X";
        document.getElementById("twentyfour").style.color = "black";

        if (word[0] == 'x'){
                var letterone = document.createTextNode(word[0]);
                letter1.appendChild(letterone);       
        }  
        
        if (word[1] == 'x'){
                var lettertwo = document.createTextNode(word[1]);
                letter2.appendChild(lettertwo); 
        }  
        
        if (word[2] == 'x'){
                var letterthree = document.createTextNode(word[2]);
                letter3.appendChild(letterthree); 
        }  
        
        if (word[3] == 'x'){
                var letterfour = document.createTextNode(word[3]);
                letter4.appendChild(letterfour); 
        }

        if (word[4] == 'x'){
                var letterfive = document.createTextNode(word[4]);
                letter5.appendChild(letterfive); 
        }

        if (word[5] == 'x'){
                var lettersix = document.createTextNode(word[5]);
                letter6.appendChild(lettersix); 
        }

        if (word[6] == 'x'){
                var letterseven = document.createTextNode(word[6]);
                letter7.appendChild(letterseven); 
        }

        if (word[7] == 'x'){
                var lettereight = document.createTextNode(word[7]);
                letter8.appendChild(lettereight); 
        }

        if (word[8] == 'x'){
                var letternine = document.createTextNode(word[8]);
                letter9.appendChild(letternine); 
        }

        if (word[9] == 'x'){
                var letterten = document.createTextNode(word[9]);
                letter10.appendChild(letterten); 
        } 

        if (word[10] == 'x'){
                var lettereleven = document.createTextNode(word[10]);
                letter11.appendChild(lettereleven); 
        }

        if (word[11] == 'x'){
                var lettertwelve = document.createTextNode(word[11]);
                letter12.appendChild(lettertwelve); 
        }

        if (word[12] == 'x'){
                var letterthirteen = document.createTextNode(word[12]);
                letter13.appendChild(letterthirteen); 
        } 

        if (word[0] !== 'x' && word[1] !== 'x' && word[2] !== 'x' && word[3] !== 'x' && word[4] !== 'x' 
        && word[5] !== 'x' && word[6] !== 'x' && word[7] !== 'x' && word[8] !== 'x' && word[9] !== 'x'
        && word[10] !== 'x'  && word[11] !== 'x'  && word[12] !== 'x'){
                wrong = wrong + 1;                 console.log(wrong);
                incorrect();
        }
        myBlanks();
};

function disableButtonY() {
        audio.play();
        document.getElementById("twentyfive").disabled = true;
        document.getElementById("twentyfive").innerHTML = "Y";
        document.getElementById("twentyfive").style.color = "black";

        if (word[0] == 'y'){
                var letterone = document.createTextNode(word[0]);
                letter1.appendChild(letterone);       
        }  
        
        if (word[1] == 'y'){
                var lettertwo = document.createTextNode(word[1]);
                letter2.appendChild(lettertwo); 
        }  
        
        if (word[2] == 'y'){
                var letterthree = document.createTextNode(word[2]);
                letter3.appendChild(letterthree); 
        }  
        
        if (word[3] == 'y'){
                var letterfour = document.createTextNode(word[3]);
                letter4.appendChild(letterfour); 
        }

        if (word[4] == 'y'){
                var letterfive = document.createTextNode(word[4]);
                letter5.appendChild(letterfive); 
        }

        if (word[5] == 'y'){
                var lettersix = document.createTextNode(word[5]);
                letter6.appendChild(lettersix); 
        }

        if (word[6] == 'y'){
                var letterseven = document.createTextNode(word[6]);
                letter7.appendChild(letterseven); 
        }

        if (word[7] == 'y'){
                var lettereight = document.createTextNode(word[7]);
                letter8.appendChild(lettereight); 
        }

        if (word[8] == 'y'){
                var letternine = document.createTextNode(word[8]);
                letter9.appendChild(letternine); 
        }

        if (word[9] == 'y'){
                var letterten = document.createTextNode(word[9]);
                letter10.appendChild(letterten); 
        } 

        if (word[10] == 'y'){
                var lettereleven = document.createTextNode(word[10]);
                letter11.appendChild(lettereleven); 
        }

        if (word[11] == 'y'){
                var lettertwelve = document.createTextNode(word[11]);
                letter12.appendChild(lettertwelve); 
        }

        if (word[12] == 'y'){
                var letterthirteen = document.createTextNode(word[12]);
                letter13.appendChild(letterthirteen); 
        } 

        if (word[0] !== 'y' && word[1] !== 'y' && word[2] !== 'y' && word[3] !== 'y' && word[4] !== 'y' 
        && word[5] !== 'y' && word[6] !== 'y' && word[7] !== 'y' && word[8] !== 'y' && word[9] !== 'y'
        && word[10] !== 'y'  && word[11] !== 'y'  && word[12] !== 'y'){
                wrong = wrong + 1;                 console.log(wrong);
                incorrect();
        }
        myBlanks();
};

function disableButtonZ() {
        audio.play();
        document.getElementById("twentysix").disabled = true;
        document.getElementById("twentysix").innerHTML = "Z";
        document.getElementById("twentysix").style.color = "black";

        if (word[0] == 'z'){
                var letterone = document.createTextNode(word[0]);
                letter1.appendChild(letterone);       
        }  
        
        if (word[1] == 'z'){
                var lettertwo = document.createTextNode(word[1]);
                letter2.appendChild(lettertwo); 
        }  
        
        if (word[2] == 'z'){
                var letterthree = document.createTextNode(word[2]);
                letter3.appendChild(letterthree); 
        }  
        
        if (word[3] == 'z'){
                var letterfour = document.createTextNode(word[3]);
                letter4.appendChild(letterfour); 
        }

        if (word[4] == 'z'){
                var letterfive = document.createTextNode(word[4]);
                letter5.appendChild(letterfive); 
        }

        if (word[5] == 'z'){
                var lettersix = document.createTextNode(word[5]);
                letter6.appendChild(lettersix); 
        }

        if (word[6] == 'z'){
                var letterseven = document.createTextNode(word[6]);
                letter7.appendChild(letterseven); 
        }

        if (word[7] == 'z'){
                var lettereight = document.createTextNode(word[7]);
                letter8.appendChild(lettereight); 
        }

        if (word[8] == 'z'){
                var letternine = document.createTextNode(word[8]);
                letter9.appendChild(letternine); 
        }

        if (word[9] == 'z'){
                var letterten = document.createTextNode(word[9]);
                letter10.appendChild(letterten); 
        } 

        if (word[10] == 'z'){
                var lettereleven = document.createTextNode(word[10]);
                letter11.appendChild(lettereleven); 
        }

        if (word[11] == 'z'){
                var lettertwelve = document.createTextNode(word[11]);
                letter12.appendChild(lettertwelve); 
        }

        if (word[12] == 'z'){
                var letterthirteen = document.createTextNode(word[12]);
                letter13.appendChild(letterthirteen); 
        } 

        if (word[0] !== 'z' && word[1] !== 'z' && word[2] !== 'z' && word[3] !== 'z' && word[4] !== 'z' 
        && word[5] !== 'z' && word[6] !== 'z' && word[7] !== 'z' && word[8] !== 'z' && word[9] !== 'z'
        && word[10] !== 'z'  && word[11] !== 'z'  && word[12] !== 'z'){
                wrong = wrong + 1;                 console.log(wrong);

        incorrect();
        }

        myBlanks();
};


function incorrect(){

        if(wrong == 1){
                document.getElementById("item1").style.visibility = 'visible';
        }
        
        if(wrong == 2){
                document.getElementById("item2").style.visibility = 'visible';
        }
        
        if(wrong == 3){
                document.getElementById("item3").style.visibility = 'visible';
        }
        
        if(wrong == 4){
                document.getElementById("item4").style.visibility = 'visible';
        }
        
        if(wrong == 5){
                lose.play();
                document.getElementById("item5").style.visibility = 'visible';
                document.getElementById("again").style.visibility = 'visible';
                document.getElementById("grid-container").style.visibility = 'hidden';
                document.getElementById("blanks").style.visibility = 'hidden';
                document.getElementById("one").disabled = true;
                document.getElementById("two").disabled = true;
                document.getElementById("three").disabled = true;
                document.getElementById("four").disabled = true;
                document.getElementById("five").disabled = true;
                document.getElementById("six").disabled = true;
                document.getElementById("seven").disabled = true;
                document.getElementById("eight").disabled = true;
                document.getElementById("nine").disabled = true;
                document.getElementById("ten").disabled = true;
                document.getElementById("eleven").disabled = true;
                document.getElementById("twelve").disabled = true;
                document.getElementById("thirteen").disabled = true;
                document.getElementById("fourteen").disabled = true;
                document.getElementById("fifteen").disabled = true;
                document.getElementById("sixteen").disabled = true;
                document.getElementById("seventeen").disabled = true;
                document.getElementById("eighteen").disabled = true;
                document.getElementById("nineteen").disabled = true;
                document.getElementById("twenty").disabled = true;
                document.getElementById("twentyone").disabled = true;
                document.getElementById("twentytwo").disabled = true;
                document.getElementById("twentythree").disabled = true;
                document.getElementById("twentyfour").disabled = true;
                document.getElementById("twentyfive").disabled = true;
                document.getElementById("twentysix").disabled = true;
        }
        
        };



    