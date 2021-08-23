let productsFormulaBotiList = [];

let carritoBotif = [];

let botiTotal = 0 ;

function addBotiF(productId, price) {
    //--Descuenta al presionar button--
        const productf = productsFormulaBotiList.find( p => p.id === productId );
        productf.stock--;
  
    console.log(productId, price);
    carritoBotif.push(productId);
    botiTotal = botiTotal + price;
    document.getElementById("checkout").innerHTML = `Pagar $${botiTotal}`;
    displayProductsBotiF();
  }

  async function payBoti(){
    try{
        const productsBaybysecMifaList =await (
  
          await fetch("/FormulaBoti", {
            method: "post",
            body: JSON.stringify(carritoBotif),
            headers: {
              "Content-Type": "application/json",
            },
          })
        ).json();
      }catch{
        window.alert("sin stock Formula");
   
        
        await fetchProductsBotiFormula();
     
  
      
    }

    carritoBotif = [];

    botiTotal = 0;
    document.getElementById("checkout").innerHTML = `Pagar $${botiTotal}`;


  }
  function displayProductsBotiF( ){     
    let productsFormulaBotiHTML = '' ; 
   
    productsFormulaBotiList.forEach(pf => {

      let buttonFormBotiHTML  = `<button class="button-add" onclick="addBotiF(${pf.id}, ${pf.price})">Agregar</button>`

      if(pf.stock <= 0){
        buttonFormBotiHTML  = `<button disabled class="button-add disabled" onclick="addBotiF(${pf.id}, ${pf.price})">stock</button>`;
        
      }

      productsFormulaBotiHTML +=
        `<div class="Formula-container">
             <h3>${pf.name}</h3>
             <img src="${pf.image}" />
             <h2>${"S/."+pf.price}</h2>
              ${buttonFormBotiHTML}
         </div>`
    });
     
    document.getElementById('Formula-Boti').innerHTML  = productsFormulaBotiHTML ; 

}
async function fetchProductsBotiFormula(){
    productsFormulaBotiList =await(await fetch("/BotiProductFormula")).json();
    displayProductsBotiF();
  }
  async function fetchProductsForm(){
    productsFormulaList =await(await fetch("/productsFormula")).json();
    displayProductsF();
  }

  window.onload = async() => {
    await fetchProductsBotiFormula(); 
    await fetchProductsForm();  
  }