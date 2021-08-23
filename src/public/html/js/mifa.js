let carritoMifaf = [];
let carritoMifab = [];

let MifaTotal = 0;

function addMifaF(productId, price) {
    //--Descuenta al presionar button--
        const productf = productsFormulaMifaList.find( p => p.id === productId );
        productf.stock--;
  
    console.log(productId, price);
    carritoMifaf.push(productId);
    MifaTotal = MifaTotal + price;
    document.getElementById("checkout").innerHTML = `Pagar $${MifaTotal}`;
    displayProductsMifaF();
  }

  function addMifaB(productId, price) {
    //--Descuenta al presionar button--
        const productb = productsBabyMifaList.find( pb => pb.id === productId );
        productb.stock--;
  
    console.log(productId, price);
    carritoMifab.push(productId);
    MifaTotal = MifaTotal + price;
    document.getElementById("checkout").innerHTML = `Pagar $${MifaTotal}`;
    displayProductsMifaB();
  }


  async function payMifa(){
    try{
        const productsBaybysecMifaList =await (
  
          await fetch("/BabysecMifa", {
            method: "post",
            body: JSON.stringify(carritoMifab),
            headers: {
              "Content-Type": "application/json",
            },
          })
        ).json();
      }catch{
        window.alert("sin stock Babysec");
   
        
        await fetchProductsMifaBaby();
     
  
      }
  try{
    const productsFormulaMifaList =await (

      await fetch("/FormulaMifa", {
        method: "post",
        body: JSON.stringify(carritoMifaf),
        headers: {
          "Content-Type": "application/json",
        },
      })
    ).json();
    
   }catch{
    window.alert("Sin Stock Formula");
    
    
    await fetchProductsMifaForm();  


   }
   carritoMifaf = [];
   carritoMifab=[];
   MifaTotal = 0;
   document.getElementById("checkout").innerHTML = `Pagar $${MifaTotal}`;


}
function displayProductsMifaF( ){     
    let productsFormulaMifaHTML = '' ; 
  
    productsFormulaMifaList.forEach(pf => {

      let buttonFormMifaHTML  = `<button class="button-add" onclick="addMifaF(${pf.id}, ${pf.price})">Agregar</button>`

      if(pf.stock <= 0){
        buttonFormMifaHTML  = `<button disabled class="button-add disabled" onclick="addMifaF(${pf.id}, ${pf.price})">stock</button>`;
        
      }

      productsFormulaMifaHTML +=
        `<div class="Formula-container">
             <h3>${pf.name}</h3>
             <img src="${pf.image}" />
             <h2>${"S/."+pf.price}</h2>
              ${buttonFormMifaHTML}
         </div>`
    });
     
    document.getElementById('Formula-contenta').innerHTML  = productsFormulaMifaHTML ; 

}
function displayProductsMifaB( ){     
    let productsBabyMifaHTML = '' ; 
  
    productsBabyMifaList.forEach(elemento => {

      let buttonBabyMifaHTML  = `<button class="button-add" onclick="addMifaB(${elemento.id}, ${elemento.price})">Agregar</button>`

      if(elemento.stock <= 0){
        buttonBabyMifaHTML  = `<button disabled class="button-add disabled" onclick="addMifaB(${elemento.id}, ${elemento.price})">stock</button>`;
        
      }

      productsBabyMifaHTML +=
        `<div class="Babysec-container">
             <h3>${elemento.name}</h3>
             <img src="${elemento.image}" />
             <h2>${"S/."+elemento.price}</h2>
              ${buttonBabyMifaHTML}
         </div>`
    });
     
    document.getElementById('Babysec-contenta').innerHTML  = productsBabyMifaHTML ; 

}
async function fetchProductsMifaForm(){
    productsFormulaMifaList =await(await fetch("/MifaProductFormula")).json();
    displayProductsMifaF();
  }
  async function fetchProductsMifaBaby(){
    productsBabyMifaList =await(await fetch("/MifaBabysecFormula")).json();
    displayProductsMifaB();
  }

  window.onload = async() => {
  await fetchProductsMifaForm(); 
  await fetchProductsMifaBaby();
}