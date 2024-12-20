const fetchdata = async ()=>{
    try{
        const response = await fetch("https://dummyjson.com/products")
        const data = await response.json()
        // console.log(data.products);
        const row = document.querySelector(".row")
        data.products.forEach(element => {
            // console.log(element.title);
            const col=document.createElement("div")
            col.classList.add("col-lg-3")
            col.innerHTML=`
              <div class="card" style="width:100%">
                <img class="card-img-top" src="${element.thumbnail}" alt="Card image" style="width:100%">
                <div class="card-body">
                <h4 class="card-title">${element.title}</h4>
                <p class="card-text">${element.description}</p>
                <button type="button" class="btn btn-primary viewmore" data-bs-toggle="modal" data-bs-target="#myModal" data-id="${element.id}">
                    view more
                </button>
                </div>
              </div>
            `
            row.appendChild(col)
        });

        document.querySelectorAll(".viewmore").forEach((btn)=>{
            btn.addEventListener('click',(e)=>{
                const proid=e.target.getAttribute("data-id")
                const product=data.products.find((pro)=>pro.id==proid)
                console.log(product);
                document.getElementById("model_img").src=product.thumbnail
                document.getElementById("model_title").innerHTML=product.title

                
            })
        })
    }
    catch(error){
        console.log(error);
        
    }
}
fetchdata()