// let a='welcome'
// console.log(a);

// console.log(a.length);                 #length (7)

// console.log(a[0]);                     # [0](w)
// console.log(a.charAt(1));              # charat (e)

// console.log(a.concat('',' to all'));   #add ( welcome to all)

// console.log(a.endsWith('e'));          #endwith (t or f)
// console.log(a.startsWith('e'));        #startwith

// console.log(a.toUpperCase());          #touppercase  (WELCOME)
// console.log(a.toLowerCase());          #tolowercase  (welcome)

// console.log(a.trim());                 #trim
// console.log(a.trimEnd());              #trimend
// console.log(a.trimStart());            #trimStart


// let a=['apple','orange','banana']
// console.log(a.length);
// console.log(a[0]);
// a[0]='APPLE'
// console.log(a);                           

// a.push('kiwi')
// console.log(a);
// a.push(['kiwi'])
// console.log(a);

// a.pop()
// console.log(a);

// a.shift()
// console.log(a);

// a.unshift('kiwi')
// console.log(a);
// -------------------------------------------------------------------
// let a=['apple','orange','banana']
// let b="hello"
// for (i in a){
//     console.log(i); 
// }
// 1,2,3
// for (i in b){
//     console.log(i);
// }

// ------------------

// for (i of a){
//     console.log(i);
    
// }



// ---------------------------------------------------------------------
// functions

// -------------------------------
// Userdefine function

// function fun(a){
//     console.log('fun',a);
// }
// fun()

// function fun1(a){
//     console.log('fun1',a);
// }
// fun1('hello')

// -------------------------------
// Nameless function

// const data=function(a){
//     console.log('data',a);
    
// }
// data()

// const data=function(a){
//     console.log('data',a);
    
// }
// data('hi')

// -----------------------------
// Arrow function

// const data=(a)=>console.log('arrow',a);
// data('function')


// -----------------------------------------------------------



// let data=[{id:'1',name:'A',age:21},{id:'2',name:'B',age:21},{id:'3',name:'C',age:21}]

// function Display(){
//     let tbody=document.querySelector("tbody")
//     data.forEach((user)=>{
//         let tr=document.createElement("tr")

//         let id_td=document.createElement("td")
//         id_td.innerHTML=user.id
//         tr.appendChild(id_td)

//         let name_td=document.createElement("td")
//         name_td.innerHTML=user.name
//         tr.appendChild(name_td)

//         let age_td=document.createElement("td")
//         age_td.innerHTML=user.age
//         tr.appendChild(age_td)

//         tbody=appendChild(tr)
//     })
// }

// Display()



data=[{id:'1',name:'Manu',age:22},{id:'2',name:'Anu',age:22},{id:'3',name:'Sanu',age:22},{id:'4',name:'Banu',age:22}]

function Display(){
    let tbody=document.querySelector("tbody")

    data.forEach((user) => {
        let tr=document.createElement("tr")

        let id_td=document.createElement("td")
        id_td.innerHTML=user.id
        tr.appendChild(id_td)

        let name_td=document.createElement("td")
        name_td.innerHTML=user.name
        tr.appendChild(name_td)

        let age_td=document.createElement("td")
        age_td.innerHTML=user.age
        tr.appendChild(age_td)

        

        tbody.appendChild(tr)
    })
    

}
Display()