// alert is the way to make pop up window with a certain message
alert("welcome to java script basics")

// create a variables
// var keyword to declaration
// myfirstname - name of variable 
// "Moustapha " the value of myfirstname variable
var myfirstname = "Moustapha"

//create second variable
var mylastname = "Mohamed "

// create variables of full name 
/* create variable contains full name by join both of my first name var and my last name var 
adding " " to make space betwwen first name and last name */
// document .write an way to show full name variable
// writing '<br/>' to make space one line
document.write('<br/>', "creating varabiles to show full name");
var fullname = "hello my first name is " + "  " + myfirstname + "  " + mylastname
document.write('<br/>', fullname);

// create variables with numbers values
// create var to join numbers info and show on html

document.write('<br/>', '<br/>', "creating varabiles to show full number about the same person", '<br/>');
var myage = 29
var myweight = 77
var myheight = 1.77
var numberofmobiles = 4
var numberoffamilymembers = 30
var numberfacts = "My age is " + myage + " & " + "My weight is" + myweight + " & " + "My Height is " + myheight + " & " + " i have " + numberofmobiles + " Mobiles"
    + " & " + " I have " + numberoffamilymembers + " Members"
document.write('<br/>', numberfacts);

// adding all of these varaibles into one variable 

var fullpersoninfo = fullname + numberfacts
document.write('<br/>', fullpersoninfo, '<br/>');


// creating other number variables to be used for mathmaticail issues
var x = 215
var y = 40
var z = 60

// creating variables to use diffrent cacluations 

document.write('<br/>', "the value of x =215",
    '<br/>', "the value of y =40",
    '<br/>', "the value of z =60")

document.write('<br/>', "cearting the mathmatics on direct way eg . x + y+ z")

// sum x + y+ z
var plus = x + y + z
//same var plus = x += y+z
document.write('<br/>', "the value of plus = x + y + z is ", plus)

// substration x - y - z
var substration = x - y - z
document.write('<br/>', "the value of substration x - y - z is ", substration)

// multiplication x * y * z
var multiplication = x * y * z
document.write('<br/>', "the value of  multiplication x * y * z is ", multiplication)

// division x / y / z
var division = x / y / z
document.write('<br/>', "the value of  division x / y / z is ", division)

// plus and substration x + y - z
var mixedplus = (x + y) - z
// same as x + y -z
document.write('<br/>', "the value of plus and substration x + y - z is ", mixedplus)

// plus and multiplication x * y + z
var mixedplus_multiplication = (x * y) + z
// same as x * y +z
document.write('<br/>', "the value of plus and multiplication (x * y) + z is ", mixedplus_multiplication)

// plus and substration x - y * z
var mixedsubstration_multiplication = (x - y) * z
// same as x - y * z
document.write('<br/>', "the value of substration & multiplication = (x - y) * z is ", mixedsubstration_multiplication)

// plus and division x + y / z
var mixedplus_division = (x + y) / z
// same as x + y /z
document.write('<br/>', "the value of plus and divison (x + y) / z is ", mixedplus_division)

// division and substration x / y - z
var mixedsubstration_division = (x / y) - z
// same as x / y - z
document.write('<h/6>', '<br/>', "the value of substration & division = (x / y) - z is ", mixedsubstration_division)

// if statement 
// use simple example to determine the number is even or add

document.write("<br><h4> using if statement </h4>")

var number = 8;
document.write("<h4> the value of number</h4>", number, "<br>")

if (number % 2 === 0) {
    document.write("its even number</br>")
}
else { document.write("its odd number</br>") };

// use simple example to determine the number is positive or  negative number

if (number > 0) {
    document.write(" its positive number</br>")

} else if (number < 0) {
    document.write("its negative number</br>")

} else {
    document.write("its  not negative  nor positive number </br>")

}


// use simple example to determine the number is positive and even number
if (number % 2 === 0 && number > 0) {
    document.write(" its positive number and even </br>")
}
else {
    document.write("its negative and odd number </br>")
}

// using exmaple of switch 
document.write("<br><h4> using Switch  statement to show basic day  </h4>")


var day = 7;

switch (day) {
    case 1:
        document.write("Saturday </br>")
        break;

    case 2:
        document.write("Sunday </br>")
        break;

    case 3:
        document.write("Monday </br>")
        break;

    case 4:
        document.write("Tuseday </br>")
        break;

    case 5:
        document.write("Wedesday </br>")
        break;

    case 6:
        document.write("Thurday </br>")
        break;

    case 7:
        document.write("Firday </br>")
        break;
    default:
        document.write("Incorrect entry</br>")

}


// Loops
document.write("<br><h4> using  for Loops statement write numbers from 1 to 10 </h4>")
//var xyz initalization of var
// xyz<=0 the condition to run the loop
// ++ or -- increment or decrement the value

for (var xyz = 1; xyz <= 10; xyz++) {
    document.write(xyz, "<br></h4>")
}

document.write("<br><h4> using  for Loops statement write numbers from 2 and increaced by 2 </h4>")
var xyz = 2
for (; xyz <= 10; xyz += 2) {
    document.write(xyz, "<br></h4>")
}

document.write("<br><h4> using  While Loops statement write numbers from 1 and increaced by 2 show odd numbers </h4>")
var xz = 1;
while (xz < 10) {
    document.write(xz, "<br></h4>")
    xz = xz + 2;
}

document.write("<br><h4> using  do while Loops statement write name </h4>")
//at least the loop will run one time then check on condition even the condition is not true it will run one time
var xy = 7;
do {
    document.write("Mostafa <br></h4>")
    xy--;
} while (xy > 5);


document.write("<br><h4> using functions to add 2 numbers  HARD CODED FUNCTION  a = 4 and b =6 s</h4>")
//make basic function to add 2  numbers
// add2numbers is the function name 
// () the parematers of function
// var a , b , total things functions you put to excute
// add2number(); call the function 
// this function is hard code lets make it a little dynamic
function add2numbers() {
    var a = 4;
    var b = 6;
    var total = a + b;
    document.write("the total of a+b is  <br></h4>", total)
}

add2numbers();

document.write("<br><h4> using functions to add 2 numbers  f , t dynamic values</h4>")
//make basic function to add 2  numbers
// add2numbers is the function name 
// () the parematers of function
// addtwonumber(); call the function 
function addtwonumbers(f, t) {
    var total = f + t;
    document.write("the total of f+t is  <br></h4>", total)
}

addtwonumbers(4, 8);


document.write("<br><h4> using functions to concatenate 2 names mostafa and mohamed</h4>")
//make basic function to concatenate strings
// add2strings is the function name 
// () the parematers of function
// add2strings(); call the function 
function add2strings(s1, s2) {
    var total = s1 + " " + s2;
    document.write("the total of s1+s2 is  <br></h4>", total)
}

add2strings("Mostafa", "Mohamed");


document.write("<br><h4> using functions to concatenate 2 names bmw and 318i</h4>")
//make basic function to concatenate strings
// add2car is the function name 
// () the parematers of function
// add2car(); call the function 
// return value
function add2car(d1, d2) {
    var total = d1 + " " + d2;
    return total;
}
var output = add2car("BMW", "318I");

document.write("the total of d1+d2 is  <br></h4>", output);

document.write("<br><h4> using ARRAYS basic way</h4>")
// cars is the name of array
// bmw etc the items of array
// array index starts with 0 
// push adding item to array at last poistion
// unshift adding item to array at first Poistion
// pop remove last element on array "tesla"
// shift remove first element on array "GMC"

var cars = ["Bmw", "Kia", "Lada", "Mercedes Benz"]
cars.push("FORD")
cars.push("Tesla")
cars.unshift("GMC")
//cars.pop()
//cars.shift()

document.write("<br><h4> using ARRAYS  Car Names Bmw-Kia-Lada -Mercedes Benz and we want to show only Kia </h4>")
document.write(cars[1], "<br> </h3>")

document.write("<br><h4> we can show all items of array by using for loop</h4>")
// var i intialization value of index is 0
// i< cars.lenght is the condition to run the loop
// i ++ increment the value of i
// document of cars[i] show the item equlivanent to array index ( index 0 will show bmw)

for (var i = 0; i < cars.length; i++) {
    document.write("<h5>" + cars[i] + "</h5>");
}

document.write("<br><h4> using ARRAYS by NEW KEY WORD</h4>")
// furits is the name of array
// Banna etc the items of array
// array index starts with 0 
// new key word and [] changed to ()
var furits = new Array("Banna", "Apple", "Mango");

document.write("<br><h4> using ARRAYS  Furits Names Banna, Apple ,Mango and we want to show only MANGO </h4>")
document.write(furits[2], "<br> </h3>")

document.write("<br><h4> we can show all items of furit array by using for loop</h4>")
// var m intialization value of index is 0
// i< furits.lenght is the condition to run the loop
// m ++ increment the value of m
// document of furits[m] show the item equlivanent to array index ( index 0 will show bmw)

for (var m = 0; m < furits.length; m++) {
    document.write("<h6>" + furits[m] + "</h6>");
}
document.write("<br><h4> we can show all items of cars and  furit array by using +</h4>")

document.write(cars + "  " + furits);

document.write("<br><h4> we can show all items of cars and  furit array by using concatenate</h4>")

document.write(cars.concat(furits));

document.write("<br><h4> OBJECTS (Static Type)</h4>")

var moderncar = {
    car_model: "bmw",
    car_engine: "electric engine type",
    car_horsepower: 350,
    car_maxspeed: 300
}
document.write("<br><h5>" + "Modern Car Object" + moderncar.car_model + " " + "Horse Power" + moderncar.car_horsepower + " " + "Car Engine Type" + moderncar.car_engine +
    " " + "Car Maxium Speed " + moderncar.car_maxspeed + "</h5>")

document.write("<br><h4> OBJECTS (Dynamic - General  Type - Function constraction)</h4>")
//make a car template with comman data 
// this key word refree to cardata to specfic properites to car data
// car model, car engine are prameters for car data object

function cardata(carmodel, carengine, carhorsepower, carmaxspeed) {
    this.carmodel = carmodel;
    this.carengine = carengine;
    this.carhorsepower = carhorsepower;
    this.carmaxspeed = carmaxspeed,
        this.showcarData = function () {
            document.write("Added New Car");
        }
}

// adding other propreties for car data after the function 
//cardata.numbersofwheels=4;

//remove not importatant property 
//delete cardata.carengine;

//create new var for lada car called beko and use new key word for new object car data and write the prameters
//call function showcarData

var beko = new cardata("lada", "electric", 320, 333);
beko.showcarData();
document.write("<br><h4>" + "Car Name" + beko.carmodel + "  " + "Car Engine" + beko.carengine + "  " + "Car Horse Power" + beko.carhorsepower +
    +"  " + "Car Max Speed " + beko.carmaxspeed + "</h4>")
