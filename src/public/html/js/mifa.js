let carritoMifaf = [];
let carritoMifab = [];

let MifaTotal = 0;

function addMifaF() {
  
    displayProductsMifaF();
  }

  function addMifaB() {
 
    displayProductsMifaB();
  }


  async function payMifa(){

  


}
function displayProductsMifaF( ){     
    let productsFormulaMifaHTML = '' ; 
  
    productsFormulaMifaList.forEach(pf => {

      let buttonFormMifaHTML  = `<a href="https://www.mifarma.com.pe/producto/babylac-pro-1-neuro-advance/024407"><button class="button-add" onclick="addMifaF(${pf.id}, ${pf.price})">Mifarma</button></a>`
      if(pf.id ===1001){
        buttonFormMifaHTML  = `<a href="https://www.mifarma.com.pe/producto/babylac-pro-1-neuro-advance/024407"><button class="button-add" onclick="addF(${pf.id}, ${pf.price})">inkafarma</button></a> `
      }else if(pf.id ===1002){
        buttonFormMifaHTML  = `<a href="https://www.mifarma.com.pe/producto/babylac-pro-2-neuro-advance/024409"><button class="button-add" onclick="addF(${pf.id}, ${pf.price})">inkafarma</button></a> `
      }else if(pf.id ==1003){
        buttonFormMifaHTML  = `<a href="https://www.mifarma.com.pe/producto/Babylac-3-DHA-&-ARA-Lata-900-G/026918"><button class="button-add" onclick="addF(${pf.id}, ${pf.price})">inkafarma</button></a> `
      } if(pf.id ==1004){
        buttonFormMifaHTML  = `<a href="https://www.mifarma.com.pe/producto/similac-3-pro-sensitive/012559"><button class="button-add" onclick="addF(${pf.id}, ${pf.price})">inkafarma</button></a> `
      }else if(pf.id ==1005){
        buttonFormMifaHTML  = `<a href="https://www.mifarma.com.pe/producto/similac-3-pro-sensitive/026352"><button class="button-add" onclick="addF(${pf.id}, ${pf.price})">inkafarma</button></a> `
      }else if(pf.id ==1006){
        buttonFormMifaHTML  = `<a href="https://www.mifarma.com.pe/producto/pediasure-triplesure-sabor-fresa/023711"><button class="button-add" onclick="addF(${pf.id}, ${pf.price})">inkafarma</button></a> `
      }else if(pf.id ==1007){
        buttonFormMifaHTML  = `<a href="https://www.mifarma.com.pe/producto/pediasure-plus-liquido-sabor-vainilla/011086"><button class="button-add" onclick="addF(${pf.id}, ${pf.price})">inkafarma</button></a> `
      }else if(pf.id ==1008){
        buttonFormMifaHTML  = `<a href="https://www.mifarma.com.pe/producto/pediasure-liquido-triple-sure-sabor-chocolate/023869"><button class="button-add" onclick="addF(${pf.id}, ${pf.price})">inkafarma</button></a> `
      }


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

      let buttonBabyMifaHTML  = ``
      if(elemento.id ==1001){
        buttonBabyMifaHTML =`<a href="https://www.mifarma.com.pe/producto/pa%C3%B1al-babysec-super-premium-talla-xxg/012519"><button class="button-add" onclick="addMifaB(${elemento.id}, ${elemento.price})">Mifarma</button></a> `;
      }else  if(elemento.id ==1002){
        buttonBabyMifaHTML =`<a href="https://www.mifarma.com.pe/producto/pa%C3%B1al-babysec-premium-super-mega-talla-xg/023838"><button class="button-add" onclick="addMifaB(${elemento.id}, ${elemento.price})">Mifarma</button></a> `;
      }else  if(elemento.id ==1013){
        buttonBabyMifaHTML =`<a href="https://www.mifarma.com.pe/producto/pa%C3%B1al-babysec-super-premium-talla-xg/012528"><button class="button-add" onclick="addMifaB(${elemento.id}, ${elemento.price})">Mifarma</button></a> `;
      }else  if(elemento.id ==1014){
        buttonBabyMifaHTML =`<a href="https://www.mifarma.com.pe/producto/pa%C3%B1al-recien-nacido-huggies-natural-care/010470"><button class="button-add" onclick="addMifaB(${elemento.id}, ${elemento.price})">Mifarma</button></a> `;
      }else  if(elemento.id ==1015){
        buttonBabyMifaHTML =`<a href="https://www.mifarma.com.pe/producto/pa%C3%B1ales-huggies-bigpack-natural-care-puro-y-natura/026072"><button class="button-add" onclick="addMifaB(${elemento.id}, ${elemento.price})">Mifarma</button></a> `;
      }else  if(elemento.id ==1016){
        buttonBabyMifaHTML =`<a href="https://www.mifarma.com.pe/producto/pa%C3%B1al-huggies-unisex-talla-p-natural-care/010472"><button class="button-add" onclick="addMifaB(${elemento.id}, ${elemento.price})">Mifarma</button></a> `;
      }else 
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