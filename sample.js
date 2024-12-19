// console.log('start');
// for(i=0;i<=100;i++){
//     console.log(i);
    
// }
// console.log('end');

// console.log('start');
// setTimeout(()=>{
//     console.log('inside');
    
// },3000)
// console.log('end');

// let count=10
// let data = setInterval(()=>{
//     document.getElementById("time").innerHTML=count
//     console.log(count);

//     count--
//     if(count<0){
//         clearInterval(data)
//     }
    
// },1000);

// let second=10
// let minuts=1
// let data = setInterval(()=>{
//     document.getElementById("time").innerHTML=minuts+':'+second
//     // console.log(minuts);
    
//     second--
//     // minuts--
//     if(second<0 ){
//         minuts--
//         second=59
//         if(minuts<0){
//             clearInterval(data)
//         }
//     }   
// },1000);

// let count=5
// let data = setInterval(()=>{
//     document.getElementById("time").innerHTML=count
//     console.log(count);

//     count--
//     if(count<0){
//         clearInterval(data)
//         if(count<0){
//             document.getElementById("img").style.display="none"
//         }
//     }
    
// },1000);



// document.getElementById("form").addEventListener("submit",function(event){
//     event.preventDefault()
//     let no=document.getElementById('no').value
//     let a1=document.getElementById("a1")
//     if(no.length==10){
//             if(/^[6-9]\d{9}/.test(no)){
//                 a1.innerHTML='valid'
//             }
//     }
//     else{
//         a1.innerHTML='invalid'
//     }
// })


// Password
// let pw=document.getElementById("pw")
// let len=document.getElementById("len")
// let cap=document.getElementById("cap")
// let sm=document.getElementById("sm")
// let no=document.getElementById("no")
// let spl=document.getElementById("spl")
// pw.addEventListener('input',function(){
//     let password=pw.value
//     len.style.color=password.length>=8 ? 'green' : 'red'
//     cap.style.color=/[A-Z]/.test(password) ? 'green' : 'red'
//     sm.style.color=/[a-z]/.test(password) ? 'green' : 'red'
//     no.style.color=/\d/.test(password) ? 'green' : 'red'
//     spl.style.color=/[!@#$%&*]/.test(password) ? 'green' : 'red'
    
// })

// document.getElementById("form").addEventListener("submit",function(event){
//     event.preventDefault()
//     let password=document.getElementById("pw").value
//     console.log(password.length);

//     if (password.length>=8 && /[A-Z]/.test(password) && /[a-z]/.test(password) && /\d/.test(password) && /[!@#$%&*]/.test(password)){
//         alert("Valid")
//     }
//     else{
//         alert("Invalid")
//     }
    
// })


// let eml=document.getElementById("eml")
// let len=document.getElementById("len")
// let sml=document.getElementById("sml")
// let no=document.getElementById("no")
// let spl=document.getElementById("spl")

// eml.addEventListener('input',function(){
//         let email=eml.value
//         len.style.color=email.length>=8 ? 'green' : 'red'
//         sml.style.color=/[a-z]/.test(email) ? 'green' : 'red'
//         no.style.color=/\d/.test(email)  ? 'green' : 'red'
//         spl.style.color=/[!@#$%&*]/.test(email)  ? 'green' : 'red'

// })

// document.getElementById("form").addEventListener('submit',function(event){
//         event.preventDefault()
//         let email=document.getElementById("eml").value
//         console.log(email.length);

//         if(email.length>=8 && /[a-z]/.test(email) && /\d/.test(email) && /[!@#$%&*]/.test(email)){
//                 alert('Valid')
//         }
//         else{
//                 alert('Invalid')
//         }
// })

// try{
//     console.log('A');
// }
// catch(error){
//     console.log('error',error.message);
// }
// finally{
//     console.log('prg ends');
// }

// class std{
//     constructor(){
//         console.log('demo');
//     }
//     display(){
//         console.log('display');
//     }
// }
// let std1=new std
// std1.display()

// class std{
//     constructor(name){
//         this. name = name
//         console.log('demo data');
//     }
//     display(age){
//         console.log('display',this.name,age);
//     }
// }
// let std1=new std('anu')
// std1.display(21)

// class school{
//     constructor(){
//         console.log('school');
//     }
//     classroom(){
//         console.log('classroom');
//     }
// }
// class std extends school{
//     constructor(name){
//         super()
//         this. name = name
//         console.log('demo data');
//     }
//     display(age){
//         console.log('display',this.name,age);
//     }
// }
// let std1=new std('anu')
// std1.display(21)
// std1.classroom()

// callback

// function demo(callback){
//     console.log('demo fun');
//     callback()
// }
// function sample(){
//     console.log('sample fun');
// }
// demo(sample)

// callback hell

// function demo(callback){
//     console.log('demo fun');
//     callback(sample1)
// }
// function sample(callback){
//     console.log('sample fun');
//     callback()
// }
// function sample1(){
//     console.log('sample1 fun');
// }
// demo(sample)

// const data = new Promise((resolve,reject)=>{
//     if(10==9){
//         resolve("eql")
//     }
//     else{
//         reject("not eql")
//     }
// })
// data.then(result=>console.log(result)).catch(error=>console.log(error)).finally(()=>console.log("prg ends"))

// async await

async function demo(){
    const data = new Promise((resolve,reject)=>{
        setTimeout(()=>resolve("data avilable"),2000)
    })
    const result=await data
    console.log(result)
}
demo()