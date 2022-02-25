/*
//Strings
console.log('Hello,World');

let email='mario@theninjanet.co.uk';
//String concatination
let firstName='Brandon';
let lastName='Sanderson';

let fullName= firstName+' '+lastName;
console.log(fullName);

//getting charecters
console.log(fullName[0]);

//string lenght 
console.log(fullName.length);

//string methods
console.log(fullName.toUpperCase());
let result= fullName.toLowerCase();
console.log(result,fullName);


let index= email.indexOf('@');
console.log(index);
*/
/*
// Common String methods

let email='mario@theninjanet.co.uk';
//let result =email.lastIndexOf('n');
//let result =email.slice(0,10);
//let result =email.substr(5,10);
//let result =email.replace('m','w');
let result =email.replace('n','w');


console.log(result);

*/

//// Numbers
//let radius=10;
//const pi= 3.14;

//console.log(radius,pi);

//// Math Operators +,-,*,/,**,%

// order of operations  B I D M A S
//let result= 5 * (10-3)**2;

//console.log(result);
 
/*
let likes=10;
 likes+=1;
 likes++;
 console.log(likes);
let result= 'The blog has ' +  likes  +  ' likes';
console.log(result);
*/
/*
//// Template String
const title= 'Best read of 2020';
const author= 'Mario';
const likes= 30;

// concatination way
let result= 'The blog called '+ title + ' by ' + author + ' has '+ likes + ' likes ';
console.log(result);
// template string way
 let result1=  `the blog called ${title} by ${author} has ${likes} likes`;
 console.log(result1);
// creating html templates
let html=`
<h2>${title}</h2>
<p>by ${author}</p>
<span>This blog has ${likes} likes</span>
`;

console.log(html);
*/


////  Array 

//let ninjas=['shan','ryu','chun-li'];
/*
ninjas[1]='ken';
console.log(ninjas);
console.log(ninjas[1]);
*/
//// Array Methods

//let result = ninjas.join(',');
//let result = ninjas.indexOf('chun-li');
// let result = ninjas.concat(['ken','crystal']);
// let result1= ninjas.push('zari');
// let result2= ninjas.pop();


// console.log(result);
// console.log(result1);
// console.log(ninjas);
// console.log(result2);



////// NULL AND UNDIFIEND
/*let age= null;

console.log(age, age + 3 , `The age is ${age}`);
*/

//////  boolean and comparisons
//console.log(true,false,"true","false");

// methods can return booleans
/*
let email= 'luigi@theninja.co.uk';
let names=['mario','luigi','toad'];

let result= email.includes('@');
let result1= names.includes('luigi');

console.log(result);
console.log(result1);

*/
// comparison operators
/*let age=25; 
console.log(age == 25);
console.log(age == 35);
console.log(age != 30);
console.log(age > 20);
console.log(age < 20);
console.log(age <= 25);
console.log(age >= 25);
*/
/*
let name='shaun';

console.log(name > 'Shaun');
*/
/*
let age=25; 
console.log(age === 25);
console.log(age === '25');
console.log(age !== 25);
console.log(age !== '25');
*/


// //  Type of conversion

//let score = '100';

//score = Number(score);
// console.log(score + 1);
// console.log(typeof score);

//// //// For loop

// for (let i = 0; i < 5; i++) {
//   console.log('in loop :',i);
// }

// console.log('looped finished');
/*
const names= ['shaun','mario','luigi'];

for (let i = 0; i < names.length; i++) {
   //console.log(names[i]);
   let html= `<div>${names[i]}</div>`;
   console.log(html);
}
*/
// let i=2;
// do{
//    console.log('val of i is :',i);
//    i++;
// }while (i < 5); 

 // // //  If statement
// const age = 25;
// if(age > 20){
//    console.log('You are over 20 years old ');
// }

// const ninjas= ['shaun','ryu','shu-li','yoshi'];
// if(ninjas.length > 3){
//    console.log("that's a lot of ninjas ");
// }

// const password='p@ssword';

// if (password.length >=8) {
//    console.log('that password is long enough');
// }

 
// // // if else
/*
const password='p@ss';
if (password.length >=12 && password.includes('@')) {
   console.log('that password is might strong');
}else if (password.length >=8 || password.includes('@')) {
   console.log('that password is strong enough');
}else{
   console.log('that password is not strong enough');
}
*/
// Logical Not (!)
/*
let user = false;
if(!user){
   console.log(user);
}
console.log(!true);
console.log(!false);
*/

// // Break and continue
/*
const scores= [50,25,0,30,100,20,10];

for (let i = 0; i < scores.length; i++) {

   if(scores[i] === 0){
     continue;
   }

   console.log('your scoe: ', scores[i] );

   if(scores[i] === 100){
      console.log('you got the top score!');
      break;
   }
}

*/


// switch statements
/*
const grade = 'D';

switch(grade){
   case 'A':
      console.log('you got an A!');
      break;
   case 'B':
      console.log('you got an B!');
      break;
   case 'C':
      console.log('you got an C!');
      break; 
   case 'D':
      console.log('you got an D!');
      break;
   case 'E':
      console.log('you got an E!'); 
      break;
      default:
         console.log('Not a valid grade');
}
*/
 
//variables &  block scope
/*
const age = 30;

if(true){
   const age = 40;
   const name = 'shaun';
   console.log('inside first code block', age , name);

   if(true){
      const age = 50;
      
      console.log('inside first code block', age);
      var test = 'Hello';
   }
}
   console.log('inside first code block', age , name , test);
*/

// // // // // /// // // function declaration
/*
function greet() {
   console.log('Hello there');
}
// function expression
const speak = function(){
   console.log('Good Day');
}

greet();
speak();
*/
// arguments and parameters
/*
const speak = function(name='luigi' , time='night'){
   console.log(`good ${time} ${name}`);
}

//speak('mario', 'morning');
speak(); 
*/


// returning values
 /*
const calcArea = function(radius){
   let area = 3.14 * radius **2;
   return area;
};

const area= calcArea(5);
console.log(area);
*/

// regular function
/*
const calcArea = function(radius){
   return 3.14 * radius **2;
};*/
// Arrow function
/*
const calcArea = (radius) => {
   return 3.14 * radius **2;
};


const area= calcArea(10);
console.log('area is : ',area);
*/
/*
const bill= function (products,tax) {
   let total = 0;
   for(let i=0; i < products.length; i++){
      total += products[i] + products[i] * tax;
   }
   return total;
}
*/
/*
const bill = (products , tax) => {
   let total = 0;
   for(let i=0; i < products.length; i++){
      total += products[i] + products[i] * tax;
   }
   return total;
};

console.log(bill([10,15,30],.2));
*/
/*
const name = 'shaun';
// functions
const greet = () => 'Hello';

let resultOne= greet();
console.log(resultOne);

// methods
let resultTwo = name.toUpperCase();
console.log(resultTwo);
*/


// callback and foreach
/*
const myFunc =(callbackFunc) => {
  // do something
  let value = 50;
  callbackFunc(value);
};

myFunc(function(value){
   // do something;
   console.log(value);
});
////////////////////////////////////////////////////
const myFunc =(callbackFunc) => {
   // do something
   let value = 50;
   callbackFunc(value);
 };

myFunc(value => {
   // do something;
   console.log(value);
});

*/
/*
let people = ['mario','luigi','ryu','shaun','chun-li'];
people.forEach((person , index) => {
   console.log(index , person);
});
*/
/*
let people = ['mario','luigi','ryu','shaun','chun-li'];

const logPerson = (person , index) => {
   console.log(`${index} - hello ${person}`);
}

people.forEach(logPerson);
*/

// callback function in action

// get a refrence to the ul
/*
const ul = document.querySelector('.people');

const people = ['mario','luigi','ryu','shaun','chun-li'];
let html = ``;

people.forEach(function(person){
   // create html template
   html += `<li style="color : purple">${person}</li>`;
});
console.log(html);
ul.innerHTML=html;
*/

// object literal
/*
const blogs=[
  {title: 'my mac & cheese rules', likes:30},
  {title:'10 things to make with marmite', likes:50}
];

console.log(blogs);

let user ={
  name:'crystal',
  age:30,
  email:'crystal@thenetninja.co.uk',
  location:'berlin',
  //blogs:['my mac & cheese rules','10 things to make with marmite'],
  blogs:[
   {title: 'my mac & cheese rules', likes:30},
   {title:'10 things to make with marmite', likes:50}
  ],
  login: function(){
     console.log('the user logged in');
  },
  logBlogs:function(){
    console.log(this.blogs);
    console.log('this user has written the following blogs:');
    this.blogs.forEach(blog => {console.log(blog.title , blog.likes);});
  }
};

console.log(user);
console.log(user.name);

user.age=35;
console.log(user.age);

console.log(user['email']);
user['name']= 'chun-li';
console.log(user['name']);
user.login();

user.logBlogs();
console.log(this);
*/



// Math object
/*
console.log(Math);

const random= Math.random();
console.log(Math.round(random * 100));
*/

//  primitive value
/*
let scoreOne = 50;
let scoreTwo = scoreOne;

console.log(`scoreOne: ${scoreOne}`  ,`scoreTwo; ${scoreTwo}`);

// refrences value

  const userOne={name:'ryu',age:30};
  const userTwo = userOne;
  console.log(userOne , userTwo);
*/

//  DOM
/*
const para= document.querySelector('p');
//const para1= document.querySelector('div.error');
const para1= document.querySelector('body > h1');

//console.log(para);
//console.log(para1);

const para2= document.querySelectorAll('p');
// para2.forEach(para => {
//    console.log(para);

// });

//console.log(para2);
//console.log(para2[1]);

const errors= document.querySelectorAll('.error');
//console.log(errors);

*/

// Quary DOM
/*
// get element by id
const title= document.getElementById('page-title');
console.log(title);
// get element by their class name
const errors= document.getElementsByClassName('error');
console.log(errors);
console.log(errors[0]);

//get element by their tag name
const paras= document.getElementsByTagName('p');
console.log(paras);
console.log(paras[1]);
*/

// add change page content
/*
const para = document.querySelector('p');

//console.log(para.innerText);
para.innerText = 'ninjas are awesome';

const para2= document.querySelectorAll('p');

para2.forEach(para => {
   console.log(para.innerText);
   para.innerText += '  new text'; 
});



const content= document.querySelector('.content');

//console.log(content.innerHTML);
//content.innerHTML = '<h2>this is a new H2</h2>';
//content.innerHTML += '<h2>this is a new H2</h2>';

const people=['shan','ryu','chun-li'];

people.forEach(person =>{
   content.innerHTML += `<p>${person}</p>`
});
*/

// Getting & Setting Attributes
/*
const link = document.querySelector('a');

console.log(link.getAttribute('href'));
link.setAttribute('href', 'https://www.theninja.co.uk');
link.innerText= 'the net ninja website';

const mssg = document.querySelector('p');

console.log(mssg.getAttribute('class'));
mssg.setAttribute('class', 'success');
mssg.setAttribute('style', 'color:green;');

*/
// Changing CSS Styles
/*
const title= document.querySelector('h1');

//title.setAttribute('style', 'margin:50px;');

console.log(title.style);
console.log(title.style.color);

title.style.margin = '50px';
title.style.color = 'crimson';
title.style.fontSize = '60px';
title.style.margin = '';
*/
 
//   Adding & Removing Classes
/*
const content = document.querySelector('p');

console.log(content.classList);

content.classList.add('error');
content.classList.remove('error');

content.classList.add('success');
*/
/*
const paras = document.querySelectorAll('p');

paras.forEach(p => {
   //console.log(p.textContent);
   //console.log(p.innerText);
   if(p.textContent.includes('error')){
      p.classList.add('error');
   }
   if(p.innerText.includes('success')){
      p.classList.add('success');
   }
});

const title= document.querySelector('.title');

title.classList.toggle('test');

*/

//   Parents, Children & Siblings
/*
const article = document.querySelector('article');

  console.log(article.children);

  console.log(Array.from(article.children));


  Array.from(article.children).forEach(child =>{
     child.classList.add('article-element');
   });

const title = document.querySelector('h2');

console.log(title.parentElement);
console.log(title.parentElement.parentElement);
console.log(title.nextElementSibling);
console.log(title.previousElementSibling);

console.log(title.nextElementSibling.parentElement.children);
*/

//   Event Basics (click events)
/*
const button = document.querySelector('button');

button.addEventListener('click',() =>{
  console.log('you clicked me');
});
*/

//////     Changing CSS Styles
/*
const items = document.querySelectorAll('li');

items.forEach(item =>{
   item.addEventListener('click', e =>{
      //console.log('item clicked');
      //console.log(e);
      //console.log(e.target);
      //console.log(item);
      e.target.style.textDecoration= 'line-through';
   });
});
*/


////  Adding & Removing Classes
/*
const content = document.querySelector('p');

console.log(content.classList);
//content.classList.add('error');
//content.classList.remove('error');
content.classList.add('success');
*/
/*
const paras = document.querySelectorAll('p');

paras.forEach(p => {
   //console.log(p.textContent);
   if(p.textContent.includes('error')){
      p.classList.add('error');
   }
   if(p.innerText.includes('success')){
      p.classList.add('success');
   }
});

const title = document.querySelector('.title');

title.classList.toggle('test');
*/

/////  Parents, Children & Siblings
/*
 const article= document.querySelector('article');

////console.log(article.children);

//console.log(Array.from(article.children));

const title= document.querySelector('h2');

console.log(title.parentElement);
console.log(title.parentElement.parentElement);
console.log(title.nextElementSibling);
console.log(title.previousElementSibling);

console.log(title.nextElementSibling.parentElement.children);
*/

//  10. Event Basics (click events)

// const button = document.querySelector('button');

// button.addEventListener('click', () => {
//    console.log('clicked me');
// });

/////11. Creating & Removing Elements
/*
 const ul = document.querySelector('ul'); 
//ul.remove();
const button = document.querySelector('button');
button.addEventListener('click', () => {
   //ul.innerHTML +=  '<li>something new</li>';
   const li= document.createElement('li');
   li.textContent ='somethin new to do';
   //ul.append(li);
   ul.prepend(li);
   });


// const items = document.querySelectorAll('li'); 

// items.forEach(item => {
//    item.addEventListener('click', e => {
      
//       //e.target.style.textDecoration= 'line-through';
//       console.log('event i LI');
//       e.stopPropagation();
//       e.target.remove();
//    });
// });

ul.addEventListener('click', e => {
   //console.log('event i UL');
   //console.log(e.target);
   if(e.target.tagName === 'LI'){
     e.target.remove();
   }
});
*/


////  13. More DOM Events
/*
const copy = document.querySelector('.copy-me');

copy.addEventListener('copy' , () => {
   console.log('OI , my content is copyright');
});

const box= document.querySelector('.box');

box.addEventListener('mousemove' , e =>{
  //console.log(e.offsetX,e.offsetY);
  box.textContent = `x pos -${e.offsetX} x pos -${e.offsetY}`
});


document.addEventListener('wheel', e =>{
   console.log(e.pageX,e.pageY);
})
*/

/////   14. Building a Popup
/*
const button= document.querySelector('button');
const popup= document.querySelector('.popup-wrapper');
const close= document.querySelector('.popup-close');


button.addEventListener('click', () => {
   popup.style.display='block'; 
});

close.addEventListener('click', () => {
   popup.style.display='none'; 
});

popup.addEventListener('click', () => {
   popup.style.display='none'; 
});
*/

/////   2. Submit Events
 /*
const form = document.querySelector('.signup-form');
//const username= document.querySelector('#username');

form.addEventListener('submit', e =>{
  e.preventDefault();
  //console.log(username.value);
  console.log(form.username.value);
});
 

//    3. Regular Expressions
const username= 'shaun';
const pattern = /^[a-z]{6,}$/;

// let result = pattern.test(username);
// console.log(result);

// if(result){
//    console.log('regex test passed :)');
// }else {
//    console.log('regex test failed :(');
// }

let result = username.search();pattern
console.log(result);
*/

/// 5. Basic Form Validation
const form = document.querySelector('.signup-form');
const feedback= document.querySelector('.feedback');
const usernamePattern= /^[a-zA-Z]{6,12}$/;


form.addEventListener('submit', e =>{
   e.preventDefault();

   // validation
   const username = form.username.value;
   //const usernamePattern= /^[a-zA-Z]{6,12}$/;

   if(usernamePattern.test(username)){
      // feedback good info
      feedback.textContent= 'that username is valid!';
   }else{
      //feedback help info
      feedback.textContent= 'username must contain letters only & be between 6&12 characters long';
   }
   
 });

//  6. Keyboard Events

// live  feedback
form.username.addEventListener('keyup' , e =>{
   //console.log(e.target.value , form.username.value);
   if(usernamePattern.test(e.target.value)){
      form.username.setAttribute('class','success');
   }else{
      form.username.setAttribute('class','error');
   }
});







































































































































































































































































































































































































































