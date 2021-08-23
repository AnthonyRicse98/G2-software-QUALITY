let productsFormulaBotiList = [];
let productsFormulaBotiInkaList = [];
let productsFormulaBotiMifaList = [];


let carritoBotif = [];

let carritoBotifInka = [];



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
  function addBotiF(productId, price) {
    //--Descuenta al presionar button--
        const productf = productsFormulaBotiList.find( p => p.id === productId );
        productf.stock--;
  
    console.log(productId, price);
    carritoBotifInka.push(productId);
    botiTotal = botiTotal + price;
    document.getElementById("checkout").innerHTML = `Pagar $${botiTotal}`;
    
    displayProductsBotiF2();
  }

  async function payBoti(){
    try{
        const productsFormsInkaList =await (
  
          await fetch("/Formula", {
            method: "post",
            body: JSON.stringify(carritoBotif),
            headers: {
              "Content-Type": "application/json",
            },
          })
        ).json();
        /*
        const productsFormsMifaList =await (
          await fetch("/FormulaMifa", {
            method: "post",
            body: JSON.stringify(carritoBotif),
            headers: {
              "Content-Type": "application/json",
            },
          })
        ).json();
      */
      }catch{
        window.alert("sin stock Formula");
   
        
        await fetchProductsBotiFormula();
  
      
    }
    try{
      const productsFormsMifaList =await (
        await fetch("/FormulaMifa", {
          method: "post",
          body: JSON.stringify(carritoBotifInka),
          headers: {
            "Content-Type": "application/json",
          },
        })
      ).json();
    }catch{
      window.alert("sin stock Formula");
      await fetchProductsBotiFormula2();
    }

    carritoMifaf = [];
    carritoBotif = [];

    botiTotal = 0;
    document.getElementById("checkout").innerHTML = `Pagar $${botiTotal}`;


  }

  function displayProductsBotiF(){   

    let productsFormulaBotiHTML = ' '; 



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
              ${buttonFormBotiHTML}s
         </div>`
    });
   
    document.getElementById('Formula-Boti').innerHTML  = productsFormulaBotiHTML ; 

}
function displayProductsBotiF2(){   

  let productsFormulaBotiHTML = ' '; 



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
            ${buttonFormBotiHTML}s
       </div>`
  });
 
  document.getElementById('Formula-Boti').innerHTML  = productsFormulaBotiHTML ; 

}
async function fetchProductsBotiFormula(){
  productsFormulaBotiInkaList =await(await fetch("/productsFormula")).json();
  
  
  productsFormulaBotiList.push(productsFormulaBotiInkaList[0]);
  productsFormulaBotiList.push(productsFormulaBotiInkaList[1]);

    displayProductsBotiF();
  }
  async function fetchProductsBotiFormula2(){
    productsFormulaBotiMifaList =await(await fetch("/MifaProductFormula")).json();
    
    
    productsFormulaBotiList.push(productsFormulaBotiMifaList[2]);
  
  
      displayProductsBotiF2();
    }



  window.onload = async() => {
    await fetchProductsBotiFormula();  
    await fetchProductsBotiFormula2();  
  }