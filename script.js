var myFirstString = 'ez egy string';
var mySecondString = "ez egy string";
var myThirdString = `ez
egy 
többsoros
string`;

var myFirstNumber = 0;
var mySecondNumber = 35;
var myThirdNumber = 7676767;

var myFirstBoolean = true;
var mySecondBoolean = false;

var myFirstArray = ["1984","Lord of the Rings", "A Mester és Margarita", "Galaxis útikalauz stopposoknak","Vita Brevis"];
var mySecondArray = [1984,"Lord of the Rings", "A Mester és Margarita", "Galaxis útikalauz stopposoknak","Vita Brevis"];

var myFirstObject = {
    title: "Lord of the Rings",
    publicationDate: 1954,
    translations: ["hu","de","fr","jp"]
};

console.log(myFirstArray[0]);
console.log(myFirstObject.title);
console.log(myFirstObject["title"]);

var a = 1;
var b = 2;
var c = a+b;
console.log(c);

function add(firstNumber, secondNumber){
    console.log(firstNumber+secondNumber);
}

add(1,2);
add(1111,92929);

var subtraction = function(a,b){
    if (a>b){
        console.log(a-b);
    }
    else if(a<b){
        console.log(b-a);
    }
    else {
        console.log("A végeredmény nulla.");
        console.log(a-b);
    }
}

subtraction(3,4);
subtraction("15",15);
add("15",15);
add("Nyitva","tartás");
subtraction("Nyitva","tartás");

//!!!!!!!!!!!!!!!!!!!!!!! === a jó!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
function ifElseCheck(text){
    if(text === "hello"){
        console.log("A text hello volt");
    }
    else if (text === "hello"){
        console.log("A text megint hello");
    }
    if (text === "hello"){
        console.log("A text harmadjara is hello");
    }
}

ifElseCheck("hello");

function compare(a,b){
    console.log("== ", a==b);
    console.log("=== ", a===b);
    var c = a+b;
    console.log(typeof c);
};

compare("1984",1984);
compare("15","16");

var myFirstFunctionVariable = function(){
    console.log("ez egy függvény, ami változóban tárolunk el");
}

myFirstFunctionVariable();

(function(){
    console.log("?");
}())    //immediatly invoked function

var anotherVar = myFirstFunctionVariable();     //HA fgv után van () akkor mindenképp lefut!!!!!!!!!!
//anotherVar();
console.log(typeof anotherVar);
console.log(anotherVar);

var anotherVar2 = myFirstFunctionVariable;
anotherVar2();

console.log(typeof anotherVar2);

//fgv-t argumentumként is át tudunk adni egy másik fgv-nek
function theLastFunction(obj1, obj2){
    console.log("obj1 értéke: ", obj1);
    console.log("obj1 típusa: ", typeof obj1);
    console.log("obj2 értéke: ", obj2);
    console.log("obj2 típusa: ", typeof obj2);
    console.log(obj2());
}

//Név nélküli function-nál szóköz
theLastFunction("hello", function (){
    return "I'm calling theLastFunction";
});

/*
Motorháztető alatt:

    var window = {
        addEventListener: function (eventName, eventFunction){
            ...
        }
    }
*/
window.addEventListener("load", function(){
    console.log("Az oldal betöltődött");
});
