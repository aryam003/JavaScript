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

let count=5
let data = setInterval(()=>{
    document.getElementById("time").innerHTML=count
    console.log(count);

    count--
    if(count<0){
        clearInterval(data)
        if(count<0){
            document.getElementById("img").style.display="none"
        }
    }
    
},1000);

