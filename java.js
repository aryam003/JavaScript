// function fun1(){
//     let n1=parseInt(document.getElementById("n1").value)
//     let n2=parseInt(document.getElementById("n2").value)
//     let h2=document.getElementById("display")

    
//     if(n2>=5){
//         h2.innerHTML=n1*0.05+n1
//     }
//     else{
//         h2.innerHTML="no bonus"
//     }
// }

function fun1(){
    let n1=parseInt(document.getElementById("n1").value)

    let h2=document.getElementById("display")

    if(n1==1){
        h2.innerHTML="sunday"
    }
    else if(n1==2){
        h2.innerHTML="monday"
    }
    else if(n1==3){
        h2.innerHTML="tuesday"
    }
    else if(n1==4){
        h2.innerHTML="Wednsday"
    }
    else if(n1==5){
        h2.innerHTML="thusday"
    }
    else if(n1==6){
        h2.innerHTML="friday"
    }
    else if(n1==7){
        h2.innerHTML="satueday"
    }
    else{
        h2.innerHTML="invald"
    }
}