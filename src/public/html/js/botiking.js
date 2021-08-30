let productsFormulaBotiList = [];
let productsFormulaBotiListMifa = [];
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



  function displayProductsBotiF(){   

    let productsFormulaBotiHTML = ' '; 



    productsFormulaBotiList.forEach(pf => {
   
      let buttonFormBotiHTML  = ``;
      let buttonFormBoti2HTML  = ``;
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

async function fetchProductsBotiFormula(){
  productsFormulaBotiInkaList =await(await fetch("/productsFormula")).json();
  productsFormulaBotiMifaList =await(await fetch("/MifaProductFormula")).json();

  var f1 = productsFormulaBotiInkaList.map(ar1 => ({price: ar1.price}));
  var f2 = productsFormulaBotiMifaList.map(ar2 => ({price: ar2.price}));
  var f3=[];
  console.log(productsFormulaBotiInkaList);
  console.log(f2);
  
  for(var i = 0 ; i< f1.length ;i++){
 
  
   if(productsFormulaBotiInkaList[i].price<=productsFormulaBotiMifaList[i].price){
   // console.log(productsFormulaBotiInkaList[i].price + "<=" +productsFormulaBotiMifaList[i].price )
     productsFormulaBotiList.push(productsFormulaBotiInkaList[i])
  //   console.log(productsFormulaBotiList[i].id)
   }else if(productsFormulaBotiInkaList[i].price>productsFormulaBotiMifaList[i].price){
  //  console.log(productsFormulaBotiInkaList[i].price + ">" +productsFormulaBotiMifaList[i].price )
    productsFormulaBotiList.push(productsFormulaBotiMifaList[i]);
    //console.log(productsFormulaBotiList[i].id)
   }
   console.log(productsFormulaBotiList[i])
  }
  
 
  
  


    displayProductsBotiF();
  }




  window.onload = async() => {
    await fetchProductsBotiFormula();  
  //  await fetchProductsBotiFormula2();  
  }
 