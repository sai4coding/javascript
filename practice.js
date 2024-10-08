//alert("hello")
let a=10
console.log(a)
let b=2.4
console.log(b)
let condition=true
console.log(condition)
let name="sai"
console.log(name)
 a=12
 console.log(a)
 let obj={name:"sai"}
 console.log(obj)
 console.log(typeof(obj))
let h=null
console.log(typeof(h))

h="hehe"
console.log(h)
// alert(h)
//let val=prompt("enter age")
//console.log(val)

//console.log(prompt(a+b))
let st="nagasai"
console.log(st.length)
console.log(st.charAt(2))
console.log(st.charAt(4))
console.log(st.slice(1,4))
console.log(st.substr(1,4))


let a1=2
let a2=3
let b1='2'
let b2='3'
let c1='2'
let c2=3
console.log(a1+a2 +" " +(a1-a2))
console.log(b1+b2 +" " +(b1*b2))
console.log(c1+c2 +" " +(c1%c2))
let num1=21
 let num2=num1.toString()
console.log(typeof(num2))
console.log(num1.toString(2))

//let age=prompt("enter your age")
//let reqiredAge=18-age
/*
if(age>=18){
    alert("you are eligible to vote ")

}
else{
    alert("you are not eligible to vote and you need" +(reqiredAge) +(" more years to become voter"))
}

*/
/*
if(age==18 || age>18){
    console.log("ok")
}
else{
    console.log("not ok")
}

*/
/*
let number=prompt("enter number")
if(number>0 &&number%2==0){
    console.log("number is even")
  
}
else if(number >0 && number%2!=0){
    console.log("number is odd number ")
}
else if(number<0){
   console.log("negative number")
}
else if(number==0){
    console.log("equal to zero")

}
else{
    console.log("not a number")
}
*/


/*
let table=prompt("enter table")
for(let  i=1;i<=10;i++){
    console.log(table*i)
}
*/

function multi(a,b){
    return a*b
}

console.log(multi(2,3))

function multi(a,b){
    let product=a*b
    return product
}

console.log(multi(4,5))


//ananomous function 

let z=function(x){
    
    if (x>0){
          return "ok"
    }
    else{
        return "not ok"
    }
}

console.log(z(0))



let r=()=>{
    return 9-2
}

console.log(r())


function compare(){
    let a=prompt(parseInt("enter number"))
    let b=prompt(parseInt("enter number"))
       if(a>b){
        return  a +"is bigger than" +b
       }
       else if(a<b){
            return b +"is bigger than" +a
       }
       else{
        return "nothing"
       }
}
console.log(compare())





let arr=[1,2,3]
console.log(arr)
/*
let arr2={}
for(let i=0;i<2;i++){
    let values=prompt("enter values")
    arr2[i]=values
}
console.log(arr2)
*/
console.log(arr.length)
console.log(arr.toString())
let str=['hi','hello','naga','sai']

console.log(str.slice(2))


//Math 

let a;
console.log(Math.floor(Math.random(a)*10000)); // to generate random 4 digits number


let a=12.5;
console.log(Math.floor(a)); //12
console.log(Math.ceil(a)); //13
let b=-5;
console.log(Math.abs(b)); //5



//destructuring
let arr=[1,2,3,4,5]
let [a,b,c,d,e]=[1,2,3,4,5]
console.log(a)
console.log(d)


//ternary
let age=12;
(age>18) ? console.log("ok") : console.log("not ok")

let a=12;
let b=(a>10) ? 'a is greater than 10' : 'a is not greater than 10'
console.log(b)

let arr=[1,2,3,4,5]
console.log(...arr)  // spread

console.log(Math.max(...arr))
let max=Math.max(...arr);
let min=Math.min(...arr);
console.log(max +" " +min)
console.log(Math.abs(min-max))
let arr2=[5,6,7]
console.log(arr2)
console.log(...arr, ...arr2 )

function name(...z){  // rest
    console.log(z)
    console.log(...z) // spread
}
name('sai','naga','nivas')


const a=12;
if(a>10){
  a++;
}
console.log(a);// type arror

var a=12;
if(a>10){
  a++;
}
console.log(a); //13


function name(){
  console.log("nagasai");// nomral function
}
name();
   // arrow functions
const names=()=> "hello sai";
console.log(names());

const sum=(a,b)=>a+b;
console.log(sum(2,3));


let arr1=[1,2,3];
let arr2=[...arr1,4,5,6,7];
console.log(arr1);
console.log(arr2);

let details={
  name:'sai',
  age:23,
}

let college={
  ...details,
  clg:'qis',
  rollNo:'21491a4463',
}

console.log(college);



