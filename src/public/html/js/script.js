//--La hacemos global--
let productsFormulaList = [];
let productsBaybysecList = [] ; 
let productsShampooList = []

let productsFormulaMifaList = [];
let productsBabyMifaList = [];


let carritof = [];
let carritob = [];
let carritoS = [];


let total = 0;



function addF(productId, price) {
 
    displayProductsF();
}
function addB(productId, price) {

    displayProductsB();
}
function addS(productId, price) {

    displayProductsS();
}


async function pay(){
     

}

//--Funcion--
    function displayProductsS( ){     
        let productssHAMPOOHTML = '' ; 
     
       
        productsShampooList.forEach(element => {
          let buttonShamHTML  = ``

          if(element.stock <= 0){
            buttonShamHTML  = `<button disabled class="button-add disabled" onclick="addS(${element.id}, ${element.price})">stock</button>`;
            
          }


            productssHAMPOOHTML +=
            `<div class="Shampoo-container">
                 <h3>${element.name}</h3>
                 <img src="${element.image}" />
                 <h2>${"S/."+element.price}</h2>
                 ${buttonShamHTML}
             </div>`
        });
         
        document.getElementById('Shampoo-conten').innerHTML  = productssHAMPOOHTML ; 

   }

   function displayProductsF( ){     
    let productsFormulaHTML = '' ; 
  
    productsFormulaList.forEach(pf => {

      let buttonFormHTML  = `<a href="https://inkafarma.pe/buscador?keyword=formula"><button class="button-add" onclick="addF(${pf.id}, ${pf.price})">inkafarma</button></a> `
      if(pf.id ==1){
        buttonFormHTML  = `<a href="https://inkafarma.pe/producto/babylac-pro-1-neuro-advance/024407"><button class="button-add" onclick="addF(${pf.id}, ${pf.price})">inkafarma</button></a> `
      }else if(pf.id ==2){
        buttonFormHTML  = `<a href="https://inkafarma.pe/producto/babylac-pro-2-neuro-advance/024409"><button class="button-add" onclick="addF(${pf.id}, ${pf.price})">inkafarma</button></a> `
      }else if(pf.id ==3){
        buttonFormHTML  = `<a href="https://inkafarma.pe/producto/Babylac-3-DHA-&-ARA-Lata-900-G/026918"><button class="button-add" onclick="addF(${pf.id}, ${pf.price})">inkafarma</button></a> `
      } if(pf.id ==4){
        buttonFormHTML  = `<a href="https://inkafarma.pe/producto/similac-3-pro-sensitive/012559"><button class="button-add" onclick="addF(${pf.id}, ${pf.price})">inkafarma</button></a> `
      }else if(pf.id ==5){
        buttonFormHTML  = `<a href="https://inkafarma.pe/producto/similac-3-pro-sensitive/026352"><button class="button-add" onclick="addF(${pf.id}, ${pf.price})">inkafarma</button></a> `
      }else if(pf.id ==6){
        buttonFormHTML  = `<a href="https://inkafarma.pe/producto/pediasure-triplesure-sabor-fresa/023711"><button class="button-add" onclick="addF(${pf.id}, ${pf.price})">inkafarma</button></a> `
      }else if(pf.id ==7){
        buttonFormHTML  = `<a href="https://inkafarma.pe/producto/pediasure-plus-liquido-sabor-vainilla/011086"><button class="button-add" onclick="addF(${pf.id}, ${pf.price})">inkafarma</button></a> `
      }else if(pf.id ==8){
        buttonFormHTML  = `<a href="https://inkafarma.pe/producto/pediasure-liquido-triple-sure-sabor-vainilla/023870"><button class="button-add" onclick="addF(${pf.id}, ${pf.price})">inkafarma</button></a> `
      }

      if(pf.stock <= 0){
        buttonFormHTML  = `<button disabled class="button-add disabled" onclick="addF(${pf.id}, ${pf.price})">stock</button>`;
        
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

function displayProductsB( ){     
    let productsBabysecHTML = '' ; 
  
    productsBaybysecList.forEach(element => {
      
      let buttonBabyHTML  = ``
      console.log(productsBaybysecList);
      if(element.id==11){
        buttonBabyHTML  = `<a href="https://inkafarma.pe/producto/pa%C3%B1al-babysec-super-premium-talla-xxg/012519"><button class="button-add" onclick="addB(${element.id}, ${element.price})">inkafarma</button></a>`

      }else if(element.id==12){
        buttonBabyHTML  = `<a href="https://inkafarma.pe/producto/pa%C3%B1al-babysec-premium-super-mega-talla-xg/023838"><button class="button-add" onclick="addB(${element.id}, ${element.price})">inkafarma</button></a>`

      }else if(element.id==13){
        buttonBabyHTML  = `<a href="https://inkafarma.pe/producto/pa%C3%B1al-babysec-super-premium-talla-xg/012528"><button class="button-add" onclick="addB(${element.id}, ${element.price})">inkafarma</button></a>`

      }else if(element.id==14){
        buttonBabyHTML  = `<a href="https://inkafarma.pe/producto/pa%C3%B1al-recien-nacido-huggies-natural-care/010470"><button class="button-add" onclick="addB(${element.id}, ${element.price})">inkafarma</button></a>`

      }else if(element.id==15){
        buttonBabyHTML  = `<a href="https://inkafarma.pe/producto/pa%C3%B1ales-huggies-bigpack-natural-care-puro-y-natura/026072"><button class="button-add" onclick="addB(${element.id}, ${element.price})">inkafarma</button></a>`

      }else if(element.id==16){
        buttonBabyHTML  = `<a href="https://inkafarma.pe/producto/pa%C3%B1al-huggies-unisex-talla-p-natural-care/010472"><button class="button-add" onclick="addB(${element.id}, ${element.price})">inkafarma</button></a>`

      }
      if(element.stock <= 0){
        buttonBabyHTML  = `<button disabled class="button-add disabled" onclick="addB(${element.id}, ${element.price})">stock</button>`;
        
      }
    
        productsBabysecHTML +=
        `<div class="Babysec-container">
             <h3>${element.name}</h3>
             <img src="${element.image}" />
             <h2>${"S/."+element.price}</h2>
              ${buttonBabyHTML}
         </div>`
    });
     
    document.getElementById('Babysec-conten').innerHTML  = productsBabysecHTML ; 

}
async function fetchProductsForm(){
  productsFormulaList =await(await fetch("/productsFormula")).json();
  displayProductsF();
}
async function fetchProductsBaby(){
  productsBaybysecList =await(await fetch("/productsBabysec")).json();
  displayProductsB();
}
async function fetchProductssShampoo(){
  productsShampooList =await(await fetch("/productsShampoo")).json();
  displayProductsS();

}


//--Impresion
window.onload = async() => {
    await fetchProductsForm();  
    await fetchProductsBaby();
   await fetchProductssShampoo();

   
}