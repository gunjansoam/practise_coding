// let a = null;
// let b = 354;
// let c = true;
// let d = BigInt("567") + BigInt("3")
// let e = "Gunjan soam"
// let f = Symbol("symbol")
// let g
// console.log(a,b,c,d,e,f,g)
// console.log(typeof c)


// const item = {
//     "Gunjan soam":true,
//     "sourav": false,
//     "aaku":67,
//     "ram":undefined
// }
// console.log(item["sourav"])

// question >> wap  to store name phone number and marks of a student using objects.
// const collegian = {
//      name: "Gunjan Soam",
//      mobile : "+91 32615653",
// }
// console.log(collegian)

// question  create a variable of type string and try to add a number to it.
// let a = "gunjan soam";
// let b = 95
// console.log(a+b)
// console.log(typeof(a+b))

// console.log()
  

// const a = {
//     name : "gunjan",
//     section : "cs",
//     ishod: false

// }

// console.log(a)
  
//operators in js 
// console.log("operators in js")
// let a = 45;
// let b = 5;
// airthmetic operators
// console.log("a+b=",a+b)
// console.log("a-b=",a-b)
// console.log("a*b=",a*b)
// console.log("a/b=",a/b)
// console.log("a%b=",a%b)
// console.log("a**b=",a**b)
// console.log("a++=",a++)
// console.log("a--=",a--)
// console.log(a)
// console.log("++a=",++a)
// console.log(a)
// console.log("--a=",--a)
// console.log(a)
//comparison operator
// let comp1 = 6;
// let comp2 = "7";
// console.log("comp1==comp2 is ",comp1 == comp2)
// console.log("comp1!=comp2 is ",comp1!=comp2)
// console.log("comp1 === comp2",comp1===comp2)
// console.log("comp1!==comp1",comp1!==comp2)
//

//conditional statement
// let a = prompt("Hey whats you age?");
// a = Number.parseInt(a);
// if(isNaN(a)){
//     alert("this is a valid number")
// }else{
// // Converting the string to a number
// if(a<0){
//   alert("This is an invalid age");
// }
// else if(a<9){
//   alert("You are a kid and you cannot even think of driving");
// }
// else if(a<18 && a>=9){
//   alert("You are a kid and you can think of driving after 18");
// }
// else{
//   alert("You can now drive as you are above 18");
// }
// console.log("Done")
// }
// // HomeWork - Explore switch statement and write a basic program in the comments
// console.log("You can", (a<18? "not drive" :"drive"))




//qs get user to input a number using prompt("enter a number ")check if the number is multiple of 5 or not. 
// let a = prompt("enter a numbre");
// a = Number.parseInt(a);
// if(a%5==0){
  
//   console.log(a,"multiple of 5")
// }
// else{
//   console.log("not a multiple of 5");
// }
 
//qs write a code which can give grades to student according to their scores:
// 80-100 , A
// 70-89, B
// 60-69,c 
// 50- 59 , D 
// 0-49 , F 
// let score = prompt("enter your score (0-100)")
// let grade;
// if(score>=90 && score<=100){
//   grade = "A";
// }else if (score >= 70 && score<=89){
//   grade = "B";
// }else if ( score>= 60 && score<=69){
//   grade = "c";
// }else if (score>=50 && score<=59){
//   grade = "D";
// }else if ( score>=0 && score<=49){
//   grade = "f"
// }
// console.log("according to your scrocs your grade was",grade)

//for loop
// print 5 times name
// for(let i = 1; i<=5; i++){
//   console.log("Gunjan soam");
// }
// console.log("loop has ended");

//qs calculate sum of 1 to 5
// let sum = 0;
// for(i= 1; i<=5; i++){
//   sum = sum+i;
//   console.log(sum)
  
// }
// console.log("sum=",sum)

//while loop
// let i = 1;
// while(i<=5){
//   console.log("Gunjan soam")
//   i++
// }


// do while loop
// let i = 20;
// do{
//   console.log("Gunjan soam");
//   i++
// }while(i<=10);


//for-of loop =>(over strings and arrays )
// let str = "Gunjan";
// let size = 0;
// for(let i of str){  // iterator => characters
//   console.log("i",i)
//   size++;
// }
// console.log("string size,",size)


//for in loop<= return key values
// let student = {
//   name:"Gunjan soam",
//   age: 20,
//   cgpa : 9.0,
//   isPass: true
// };
// for (let i in student){
//   console.log("key=", i,"value=",student[i]);
//   console.log(i,"=",student[i]);
// }

//wap print all even numbers 0 to 100.
// for(let i = 1; i<=100; i++){
//   if(i%2==0)
//   console.log(i)
// }


// qs 2 
// create a game where you start with  any random  game number . Ask the user to keep gussing the game number until the user enters the correct value
// let gameNum = 9;
// let userNum = prompt("guess the number:");

// while(userNum != gameNum){
//   userNum = prompt("you enter wrong number , guess again:");

// }
// console.log("you guess the right number");

// strings
// let str = "Gunjan soam";
// console.log(str[2]);


// template literals
// let obj ={
//   item: "pen",
//   price: 10,
// };
// let output = `the cost of ${obj.item} is ${obj.price} rupees`
// console.log(output)
// console.log("the cost of ",obj.item,"is",obj.price);
// let sentence = `this is a template literal`;
// console.log(sentence);
// console.log(typeof(sentence))

// strings methods in js
// str.toUppercase()=>convert abc == ABC
// let str = "Gunjan soam"
//  newstr = str.toUpperCase()
// console.log(str)
// console.log(newstr)

// str.tolowercase()=> convert ABC==abc
// let str = "GUNJAN SOAM"
// newstr = str.toLowerCase()
// console.log(str)
// console.log(newstr)

//remove space
// let str = "   gunjan soam   "
// console.log(str.trim());


// str.slice(start,end?)// returns parts of string
// let str = "0123456789";
// let str2 = "developement"
// console.log(str.slice(1,6))
// console.log(str2.slice(1,3))

// str1.concat(str2)// used to add to string
// let str1 = "Gunjan ";
// let str2 = "soam";
// console.log(str1.concat(str2))

//str.replace(searchVal,newVal)// used to search value
// let str = "Gunjan soam";
// console.log(str.replace("soam","rajput"))


// str.charAt(idx)//find out char in at which index string
//string are immutable
// so make a new string and then change value

// let str = "Gunjan soam"
// console.log(str.charAt(5));//n

//qs prompt user to enter their fullname.Generate a  username for them based on the input.start username with @,followed by their full name and ending with the full length.
 
//eg. usename = "Gunjan soam",username should be "@Gunjansoam95"
// let username = prompt("enter you username");
// console.log(username)

// let username1 = "@" + username + username.length;
// console.log(username1);










