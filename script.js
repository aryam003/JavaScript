// alert("javascript")

// a="Script"
// alert(a)
// console.log("welcome",a);

// var a="java"
// var a=20

// let a="java"
// a=0

// const a="Js"

// ----------------------------------

// number
// let a=90 
// let a=2.56 
// let a=(1,2,3) 

// object
// let a=[1,2,3]
// [1,2,3]

// let a={name:'A',age:23} 
// {name:'A',age:23} 

// number Nan:not a number
// let a
// a+=10
// console.log(typeof a);
// console.log(a);

// -------------------------------------

// console.log(1+2);
//  (  -,+,/,%,*,**, ++,-- )
//                   ------
// let a=1
// a++
// a+1=2

// let a=1
// a--
// a-1=0

// ( +=,-=,*=,/=,%=,**=)
// let a=10
// a*=10
// 100

// ( ==,!=,<,>,<=,>=, === , !== )
//                   ------------
// let a=1
// let b="1"
// console.log(a==b);
// t
// console.log(a===b);
// f

// let a=1
// let b="1"
// console.log(a!=b);
// f
// console.log(a!==b);
// t

// let a=1
// let b="1"
// console.log(a!=b && a==10);
// f  (&& = and)
// console.log(a!=b || a==1);
// t  (|| = or)

// --------------------------------------------------------------------

// function sample(){

    // let result=document.getElementById("name")
    // console.log(result.value);
    // document.getElementById("display").innerHTML=result.value

    // let result=document.getElementById("name").value
    // console.log(result);
    // let h2=document.getElementById("display")
    // h2.innerHTML=result
// }
// ----------------------------------------------------------------------
    
function sample(){
     
    let n1=parseInt(document.getElementById("n1").value)
    let n2=parseInt(document.getElementById("n2").value)
    let h2=document.getElementById("display")
    h2.innerHTML=n1+n2
    if(n1==n2){
        h2.innerHTML='eql'
    }
    else if(n1!=n2){
        h2.innerHTML="not eql"
    }
}

function sample2(){
    let n1=parseInt(document.getElementById("n1").value)
    let n2=parseInt(document.getElementById("n2").value)
    let h2=document.getElementById("display")
    h2.innerHTML=n1-n2
}
function sample3(){
    let n1=parseInt(document.getElementById("n1").value)
    let n2=parseInt(document.getElementById("n2").value)
    let h2=document.getElementById("display")
    h2.innerHTML=n1*n2
}
function sample4(){
    let n1=parseInt(document.getElementById("n1").value)
    let n2=parseInt(document.getElementById("n2").value)
    let h2=document.getElementById("display")
    h2.innerHTML=n1/n2
}
function sample5(){
    let n1=parseInt(document.getElementById("n1").value)
    let n2=parseInt(document.getElementById("n2").value)
    let h2=document.getElementById("display")
    h2.innerHTML=n1%n2
}

