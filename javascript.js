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
var fullname = "hello my first name is " + "  " + myfirstname + "  " + mylastname
document.write(fullname);

// create variables with numbers values
// create var to join numbers info and show on html
var myage = 29
var myweight = 77
var myheight = 1.77
var numberofmobiles = 4
var numberoffamilymembers = 30
var numberfacts = "My age is "  + myage + " & " + "My weight is" + myweight + " & " + "My Height is " + myheight + " & " +" i have " + numberofmobiles + " Mobiles" 
+ " & " + " I have " + numberoffamilymembers + " Members"
document.write('<br/>' , numberfacts);