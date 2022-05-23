// let value = true;
// console.log(typeof value)

// value=String(value);
// console.log(typeof value)

// var a =10;
// var b =20 ;
// var c=30,d=40;

// var value = (a>b)?'a is greater':(b>c)?'b is greater':'c is greater';
// console.log(value)

// let arr=[10,20,30,40];
// let length=arr.length;
// let counter = length-1;
// console.log(arr.length);

// while(counter>=0)
// {
//     console.log(arr[counter]);
//     counter--;
// }
// let a = 0xF1 ;
// let b =1010;
//  console.log(-4||-2)
// let a ;
// let b;
//console.log((a??b)?'a is not defined':'b is not defined')   
// function showmessage()
// {
//     console.log("hello world inside function");
// }

// // showmessage();
// function showmessage(name)
// {
//     console.log(`hello ${name}`);
//     console.log('hello ' +name+ 's');
// }
// showmessage('shivam');
//////////////////////////////
// function checkEvenOdd(number,even,odd)
// {
//     console.log("Given number is " +number);
//     if(number%2==0) even();
//     else odd();
    
// }

// function checkEven()
// {
//     console.log("Its a even number");
// }

// function checkOdd()
// {
//     console.log("Its odd number");
// }
// checkEvenOdd(12,checkEven,checkOdd);
// let user = {
//     name :"ss",
//     age:30
// }
// let key= prompt("ehat is your name ?" ,"name");
// alert(user[key]);

// let Student = {
//    name:'shivam',
//    rollno:10,
//    register:function(){
//        console.log(this.name)
//    }
// }
// let Student1=Object.assign({},Student);
// Student1.name='snehal';

// let _json = JSON.parse(JSON.stringify(Student));
// console.log(_json);
// console.log();

// Student.register() 
// Student1.register() 

//--------------------------------

// let User = new function()
// {
//     this.name='admin'
//     ,this.isadmin=true
// }

// console.log(User)

// function User()
// {
//     console.log(new.target)
// }
// new User();


// function Calculator()
// {
    
//     this.read = function()
//     {
//             this.input1 = 10;
//             this.input2= 10;
//     };
//     this.sum= function(){
//         return this.input1+this.input2;
//     };
//     this.mul = function(){
//         return this.input1*this.input2;
//     }

// }

// let calculator = new Calculator();
// calculator.read();
// console.log('Sum = ' + calculator.sum()+ '\nMult =' +calculator.mul());

function Person(name,age)
{
   this.name= name;
   this.age=age;
   
}

console.log(new Person('shivam',10))
