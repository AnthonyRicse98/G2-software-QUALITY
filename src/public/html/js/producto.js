let products = [];
function addF() {
   document.getElementById("checkout").innerHTML = `Pagar $${total}`;
   displayProducts();
} 

function displayProducts( ){     
    let productsFormulaHTML = '' ; 
  
    products.forEach(pf => {

      let buttonFormHTML  = `<a href="producto.html"><button class="button-add" onclick="addF(${pf.id}, ${pf.price})">inkafarma</button></a> `

      if(pf.stock <= 0){
        buttonFormHTML  = `<button disabled class="button-add disabled" onclick="addF(${pf.id}, ${pf.price})">stock</button>`;
        
      }

        productsFormulaHTML +=
        `<div class="Formula-container">
             <h3>${pf.name}</h3>
             <img src="${pf.image}" />
             <h2>${"S/."+pf.price}</h2>           
         </div>`
    });
     
    document.getElementById('image-container').innerHTML  = productsFormulaHTML ; 

}
async function fetchproducto(){
    products =await(await fetch("/productsFormula")).json();



    displayProducts();
  }
  window.onload = async() => {
    await fetchproducto();  
    

   
}