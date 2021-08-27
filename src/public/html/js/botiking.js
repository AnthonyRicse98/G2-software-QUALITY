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
  function addBotiF2(productId, price) {
    //--Descuenta al presionar button--
        const productbf = productsFormulaBotiList.find( p => p.id === productId );
        productbf.stock--;
  
    console.log(productId, price);
    carritoBotif.push(productId);
    botiTotal = botiTotal + price;
    document.getElementById("checkout").innerHTML = `Pagar $${botiTotal}`;
    
    displayProductsBotiF2();
  }


  function displayProductsBotiF(){   

    let productsFormulaBotiHTML = ' '; 



    productsFormulaBotiList.forEach(pf => {

   
      let buttonFormBotiHTML  = `<a href="https://inkafarma.pe/buscador?keyword=formula"><button class="button-add" onclick="addBotiF2(${pf.id}, ${pf.price})">Inkafarma</button></a>`


      productsFormulaBotiHTML +=

        `<div class="Formula-container">
             <h3>${pf.name }</h3>
             <img src="${pf.image}" />
             <h2>${"S/."+pf.price}</h2>         
             ${buttonFormBotiHTML}
         </div>`
    });
    productsFormulaBotiListMifa.forEach(pf => {

   
      let buttonFormBotiHTML  = `<a href="https://www.mifarma.com.pe/buscador?keyword=formula"><button class="button-add" onclick="addBotiF2(${pf.id}, ${pf.price})">Mifarma</button></a>`

      productsFormulaBotiHTML +=
        `<div class="Formula-container">
             <h3>${pf.name }</h3>
             <img src="${pf.image}" />
             <h2>${"S/."+pf.price}</h2>         
             ${buttonFormBotiHTML}
         </div>`
    });
   
    document.getElementById('Formula-Boti').innerHTML  = productsFormulaBotiHTML ; 

}
async function fetchProductsBotiFormula(){
  productsFormulaBotiInkaList =await(await fetch("/productsFormula")).json();
  productsFormulaBotiMifaList =await(await fetch("/MifaProductFormula")).json();
    
    
   
  
  
  productsFormulaBotiList.push(productsFormulaBotiInkaList[0]);
  productsFormulaBotiList.push(productsFormulaBotiInkaList[1]);
  productsFormulaBotiListMifa.push(productsFormulaBotiMifaList[3]);
    displayProductsBotiF();
  }
  async function fetchProductsBotiFormula2(){
    
  
      displayProductsBotiF2();
    }



  window.onload = async() => {
    await fetchProductsBotiFormula();  
    await fetchProductsBotiFormula2();  
  }