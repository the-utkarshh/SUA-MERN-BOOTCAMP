var number=27
if(number%2==0){
    console.log("Even Number")
}
else{
    console.log("Odd Number")
}


// Question 2

var num = 0
if(num>0){
    console.log("number is posiitive")
}
else if(num==0){
    console.log("number is zero")
}
else{
    console.log("number is negative")
}

// Question 3

var marks=19
if(marks>=40){
    console.log("Pass")
}
else{
    console.log("Fail")
}

// Question 4

var age=22
if(age>=18){
    console.log("You can Vote")
}
else{
    console.log("You cannot vote")
}

// Question 5

var a=23
var b=23
if(a>b){
    console.log("A is greater")
}
else if(b>a){
    console.log("B is greater")
}
else{
    console.log("BOth are equal")
}

// Question 6

var salary = 20000
var experience = 4
if (experience>=5) {
    var bonus = 0.20*salary
    console.log("Bonus =",bonus)
    console.log("Total salary=",bonus+salary )
}
else if(experience>=2 && experience<4){
    var bonus=0.10*salary
    console.log("Bonus =",bonus)
    console.log("Final salary",bonus+ salary)
}
else{
    var bonus=0.05*salary
    console.log("Bonus =",bonus)
    console.log("Final salary",bonus + salary)
}

// Question 7

var num1 = 100
var num2 = 10
var operator = "*"
// var operator = "/"
// var operator = "+"
// var operator = "-"
if(operator=='*'){
    console.log("Product =",num1 * num2)
}
if(operator=='-'){
    console.log("Answer =",num1 - num2)
}
if(operator=='/'){
    console.log("Answer =",num1 / num2)
}
if(operator=='+'){
    console.log("Answer =",num1 + num2)
}