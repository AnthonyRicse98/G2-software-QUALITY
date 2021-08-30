let productsFormulaBotiList = [];
let BabysecBotiList = [];

let productsBabyMifaList = [ ];

//formula
let productsFormulaBotiInkaList = [];
let productsFormulaBotiMifaList = [];

//babysec
let BabysecBotiInkaList = [];
let BabysecBotiMifaList = [];


let carritoBotif = [];

let carritoBotifInka = [];



let botiTotal = 0 ;

function addBotiF(productId, price) {
  
    displayProductsBotiF();    
  }

  function addMifaB() {
 
    displayProductsMifaB();
  }


  function displayProductsBotiF(){   

    let productsFormulaBotiHTML = ' '; 



    productsFormulaBotiList.forEach(pf => {
   
      let buttonFormBotiHTML  = ``;
   
      if(pf.id ==1){
        buttonFormBotiHTML  = `<a href="https://inkafarma.pe/producto/babylac-pro-1-neuro-advance/024407"><button class="button-add" onclick="addF(${pf.id}, ${pf.price})">inkafarma</button></a>`
      }else if(pf.id ==2){
        buttonFormBotiHTML  = `<a href="https://inkafarma.pe/producto/babylac-pro-2-neuro-advance/024409"><button class="button-add" onclick="addF(${pf.id}, ${pf.price})">inkafarma</button></a>`
      }else if(pf.id ==3){
        buttonFormBotiHTML  = `<a href="https://inkafarma.pe/producto/Babylac-3-DHA-&-ARA-Lata-900-G/026918"><button class="button-add" onclick="addF(${pf.id}, ${pf.price})">inkafarma</button></a> `
      } if(pf.id ==1004){
        buttonFormBotiHTML  = `<a href="https://www.mifarma.com.pe/producto/similac-3-pro-sensitive/012559"><button class="button-add" onclick="addF(${pf.id}, ${pf.price})">mifarma</button></a> `
      }else if(pf.id ==1005){
        buttonFormBotiHTML  = `<a href="https://www.mifarma.com.pe/producto/similac-3-pro-sensitive/026352"><button class="button-add" onclick="addF(${pf.id}, ${pf.price})">mifarma</button></a> `
      }else if(pf.id ==1006){
        buttonFormBotiHTML  = `<a href="https://www.mifarma.com.pe/producto/pediasure-triplesure-sabor-fresa/023711"><button class="button-add" onclick="addF(${pf.id}, ${pf.price})">mifarma</button></a> `
      }else if(pf.id ==7){
        buttonFormBotiHTML  = `<a href="https://www.mifarma.com.pe/producto/pediasure-plus-liquido-sabor-vainilla/011086"><button class="button-add" onclick="addF(${pf.id}, ${pf.price})">mifarma</button></a> `
      }else if(pf.id ==1008){
        buttonFormBotiHTML  = `<a href="https://www.mifarma.com.pe/producto/pediasure-liquido-triple-sure-sabor-chocolate/023869"><button class="button-add" onclick="addF(${pf.id}, ${pf.price})">mifarma</button></a> `
      }

      productsFormulaBotiHTML +=

        `<div class="Formula-container">
             <h3>${pf.name }</h3>
             <img src="${pf.image}" />
             <h2>${"S/."+pf.price}</h2>         
             ${buttonFormBotiHTML }
         </div>`
    });
    
   
    document.getElementById('Formula-Boti').innerHTML  = productsFormulaBotiHTML ; 

}
function displayProductsMifaB( ){     
  let productsBabyMifa1HTML = '' ; 

  BabysecBotiList.forEach(elemento => {

    let buttonBabyMifaHTML  = ``
    if(elemento.id ==11){
      buttonBabyMifaHTML =`<a href="https://inkafarma.pe/producto/pa%C3%B1al-babysec-super-premium-talla-xxg/012519"><button class="button-add" onclick="addMifaB(${elemento.id}, ${elemento.price})">Inkafarma</button></a> `;
    }else  if(elemento.id ==12){
      buttonBabyMifaHTML =`<a href="https://inkafarma.pe/producto/pa%C3%B1al-babysec-premium-super-mega-talla-xg/023838"><button class="button-add" onclick="addMifaB(${elemento.id}, ${elemento.price})">InkaFarma</button></a> `;
    }else  if(elemento.id ==13){
      buttonBabyMifaHTML =`<a href="https://inkafarma.pe/producto/pa%C3%B1al-babysec-super-premium-talla-xg/012528"><button class="button-add" onclick="addMifaB(${elemento.id}, ${elemento.price})">InkaFarma</button></a> `;
    }else  if(elemento.id ==1014){
      buttonBabyMifaHTML =`<a href="https://www.mifarma.com.pe/producto/pa%C3%B1al-recien-nacido-huggies-natural-care/010470"><button class="button-add" onclick="addMifaB(${elemento.id}, ${elemento.price})">Mifarma</button></a> `;
    }else  if(elemento.id ==15){
      buttonBabyMifaHTML =`<a href="https://inkafarma.pe/producto/pa%C3%B1ales-huggies-bigpack-natural-care-puro-y-natura/026072"><button class="button-add" onclick="addMifaB(${elemento.id}, ${elemento.price})">Inkafarma</button></a> `;
    }else  if(elemento.id ==16){
      buttonBabyMifaHTML =`<a href="https://inkafarma.pe/producto/pa%C3%B1al-huggies-unisex-talla-p-natural-care/010472"><button class="button-add" onclick="addMifaB(${elemento.id}, ${elemento.price})">Inkafarma</button></a> `;
    }else 
    if(elemento.stock <= 0){
      buttonBabyMifaHTML  = `<button disabled class="button-add disabled" onclick="addMifaB(${elemento.id}, ${elemento.price})">stock</button>`;
      
    }

    productsBabyMifa1HTML +=
      `<div class="Babysec-container">
           <h3>${elemento.name}</h3>
           <img src="${elemento.image}" />
           <h2>${"S/."+elemento.price}</h2>
            ${buttonBabyMifaHTML}
       </div>`
  });
   
  document.getElementById('Babysec-boti').innerHTML  = productsBabyMifa1HTML ; 

}

async function fetchProductsBotiFormula(){
  productsFormulaBotiInkaList =await(await fetch("/productsFormula")).json();
  productsFormulaBotiMifaList =await(await fetch("/MifaProductFormula")).json();

  var f1 = productsFormulaBotiInkaList.map(ar1 => ({price: ar1.price}));
  
  for(var i = 0 ; i< f1.length ;i++){
   if(productsFormulaBotiInkaList[i].price<=productsFormulaBotiMifaList[i].price){
     productsFormulaBotiList.push(productsFormulaBotiInkaList[i])
   }else if(productsFormulaBotiInkaList[i].price>productsFormulaBotiMifaList[i].price){
    productsFormulaBotiList.push(productsFormulaBotiMifaList[i]);
   
   }

  }
  
 
  
  


    displayProductsBotiF();
  }

  async function fetchProductsMifaBaby(){
    BabysecBotiInkaList =await(await fetch("/productsBabysec")).json();
    BabysecBotiMifaList =await(await fetch("/MifaBabysecFormula")).json();
    var f1 = BabysecBotiInkaList.map(ar1 => ({price: ar1.price}));
  
  for(var i = 0 ; i< f1.length ;i++){
   if(BabysecBotiInkaList[i].price<=BabysecBotiMifaList[i].price){
   // console.log(productsFormulaBotiInkaList[i].price + "<=" +productsFormulaBotiMifaList[i].price )
   BabysecBotiList.push(BabysecBotiInkaList[i])
  //   console.log(productsFormulaBotiList[i].id)
   }else if(BabysecBotiInkaList[i].price>BabysecBotiMifaList[i].price){
    //  console.log(productsFormulaBotiInkaList[i].price + ">" +productsFormulaBotiMifaList[i].price )
    BabysecBotiList.push(BabysecBotiMifaList[i]);
      //console.log(productsFormulaBotiList[i].id)
     }

  }
  console.log(BabysecBotiList);
    displayProductsMifaB();
  }


  window.onload = async() => {
    await fetchProductsBotiFormula();  
    await fetchProductsMifaBaby();
  //  await fetchProductsBotiFormula2();  
  }
 