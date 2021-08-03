//--La hacemos global--
let productsFormulaList = [];



let carritof = [];
let carritob = [];
let carritoS = [];
let total = 0;

function addF(productId, price) {
    //--Descuenta al presionar button--
        const productf = productsFormulaList.find( p => p.id === productId );
        productf.stock--;

    console.log(productId, price);
    carritof.push(productId);
    total = total + price;
    document.getElementById("checkout").innerHTML = `Pagar $${total}`;
    displayProductsF();
}
function addB(productId, price) {
    console.log(productId, price);
    carritob.push(productId);
    total = total + price;
    document.getElementById("checkout").innerHTML = `Pagar $${total}`;
}
function addS(productId, price) {
    console.log(productId, price);
    carritoS.push(productId);
    total = total + price;
    document.getElementById("checkout").innerHTML = `Pagar $${total}`;
}


async function pay(){
    const productsBaybysecList =await (

        await fetch("/babysec", {
          method: "post",
          body: JSON.stringify(carritob),
          headers: {
            "Content-Type": "application/json",
          },
        })
      ).json();

      const productsFormulaList =await (

        await fetch("/Formula", {
          method: "post",
          body: JSON.stringify(carritof),
          headers: {
            "Content-Type": "application/json",
          },
        })
      ).json();

      const productsShampooList =await (

        await fetch("/Shampoo", {
          method: "post",
          body: JSON.stringify(carritoS),
          headers: {
            "Content-Type": "application/json",
          },
        })
      ).json();
  
}


//--Funcion--
    function displayProductsS( productsShampooList){     
        let productssHAMPOOHTML = '' ; 
     
       
        productsShampooList.forEach(element => {
            productssHAMPOOHTML +=
            `<div class="Shampoo-container">
                 <h3>${element.name}</h3>
                 <img src="${element.image}" />
                 <h2>S/. ${element.price}</h2>
                 <button class="button-add" onclick="addS(${element.id}, ${element.price})">Agregar</button>
             </div>`
        });
         
        document.getElementById('Shampoo-conten').innerHTML  = productssHAMPOOHTML ; 

   }

   function displayProductsF( ){     
    let productsFormulaHTML = '' ; 
  
    productsFormulaList.forEach(pf => {

      let buttonFormHTML  = `<button class="button-add" onclick="addF(${pf.id}, ${pf.price})">Agregar</button>`

      if(pf.stock <= 0){
        buttonFormHTML  = `<button disabled class="button-add disabled" onclick="addF(${pf.id}, ${pf.price})">Sin stock</button>`;
        
      }

        productsFormulaHTML +=
        `<div class="Formula-container">
             <h3>${pf.name}</h3>
             <img src="${pf.image}" />
             <h2>${"S/."+pf.price}</h2>
              ${buttonFormHTML}
         </div>`
    });
     
    document.getElementById('Formula-conten').innerHTML  = productsFormulaHTML ; 

}

function displayProductsB(productsBaybysecList ){     
    let productsBabysecHTML = '' ; 
  
    productsBaybysecList.forEach(element => {
        productsBabysecHTML +=
        `<div class="Babysec-container">
             <h3>${element.name}</h3>
             <img src="${element.image}" />
             <h2>${element.price}</h2>
             <button class="button-add" onclick="addB(${element.id}, ${element.price})">Agregar</button>
         </div>`
    });
     
    document.getElementById('Babysec-conten').innerHTML  = productsBabysecHTML ; 

}

//--Impresion
window.onload = async() => {
     productsFormulaList =await(await fetch("/productsFormula")).json();
    const productsBaybysecList =await(await fetch("/productsBabysec")).json();
    const productsShampooList =await(await fetch("/productsShampoo")).json();
    
    console.log(productsFormulaList,productsBaybysecList, productsShampooList);   
    displayProductsF();
    displayProductsS(productsShampooList);
    displayProductsB(productsBaybysecList);
}