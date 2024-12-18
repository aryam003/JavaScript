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
let pw=document.getElementById("pw")
let len=document.getElementById("len")
let cap=document.getElementById("cap")
let sm=document.getElementById("sm")
let no=document.getElementById("no")
let spl=document.getElementById("spl")
pw.addEventListener('input',function(){
    let password=pw.value
    len.style.color=password.length>=8 ? 'green' : 'red'
    cap.style.color=/[A-Z]/.test(password) ? 'green' : 'red'
    sm.style.color=/[a-z]/.test(password) ? 'green' : 'red'
    no.style.color=/\d/.test(password) ? 'green' : 'red'
    spl.style.color=/[!@#$%&*]/.test(password) ? 'green' : 'red'
    
})

document.getElementById("form").addEventListener("submit",function(event){
    event.preventDefault()
    let password=document.getElementById("pw").value
    console.log(password.length);

    if (password.length>=8 && /[A-Z]/.test(password) && /[a-z]/.test(password) && /\d/.test(password) && /[!@#$%&*]/.test(password)){
        alert("Valid")
    }
    else{
        alert("Invalid")
    }
    
})




