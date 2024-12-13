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

data=[{id:'1',name:'Manu',age:22},{id:'2',name:'Anu',age:22},{id:'3',name:'Sanu',age:22},{id:'4',name:'Banu',age:22}]

function Display(){
    let tbody=document.querySelector("tbody")
    tbody.innerHTML=''
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

        let edit_td=document.createElement("td")
        let edit_btn=document.createElement("button")
        edit_btn.innerHTML='edit'
        edit_btn.onclick=function(){
            edit_form(user.id)
        }
        edit_td.appendChild(edit_btn)
        tr.appendChild(edit_td)

        let delete_td=document.createElement("td")
        let del_btn=document.createElement("button")
        del_btn.innerHTML="Delete"

        del_btn.onclick=function(){
            delete_data(user.id)
        }
        delete_td.appendChild(del_btn)
        tr.appendChild(delete_td)

        tbody.appendChild(tr)
    })
}

function delete_data(id){
    data=data.filter((user)=>user.id!=id)
    Display()
}
let edit_data
function edit_form(id){
    document.getElementById("edit_form").style.display='block'
    document.getElementById("add_form").style.display='none'

    let edit=data.find((user)=>user.id==id)
    
    document.getElementById("e_id").value=edit.id
    document.getElementById("e_name").value=edit.name
    document.getElementById("e_age").value=edit.age
    edit_data=id
}
document.getElementById("edit_form").addEventListener('submit',function(event){
    event.preventDefault()
    let id = document.getElementById("e_id").value
    let name = document.getElementById("e_name").value
    let age = document.getElementById("e_age").value

    data=data.map((user)=>{
        if(user.id==edit_data){
            return {...user,id:id,name:name,age:age}
        }
        return user
    })
    document.getElementById("edit_form").style.display='none'
    document.getElementById("add_form").style.display='block'
    Display()
})
document.getElementById("add_form").addEventListener('submit',function(event){
    event.preventDefault()
    let id = document.getElementById("id").value
    let name = document.getElementById("name").value
    let age = document.getElementById("age").value
    data.push({id:id,name:name,age:age})

    document.getElementById("id").value=''
    document.getElementById("name").value=''
    document.getElementById("age").value=''
    
    Display()
})


Display()