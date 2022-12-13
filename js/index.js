/*******************************************************/
/*        
/*              AUTHOR:amour dahou
/*         GITHUB:http://github.com/Amour22
/*         COPYRIGHT 2022 ALL RIGHT RESERVED
/*              UPDATED AT 11th Sep 2022
/*
/******************************************************/

//principal variables declaration and initialization
const cart = document.querySelector("#cartBox");
const hamburger = document.querySelector(".menuToggle");
const header = document.querySelector("header");
const nav = document.querySelector(".navigation");
const copyYear = document.querySelector(".copyYear");
const body = document.querySelector("body");
const addToCartBox = document.querySelectorAll(".addToCartBox");
const buyBox = document.querySelectorAll(".buyBox");
const counter = document.querySelector("#counter");

//STICKY HEADER
window.addEventListener("scroll", sticky_header);
function sticky_header() {
  header.classList.toggle("sticky", window.scrollY > 10);
}

//Mobile Navigation Menu Opening
hamburger.addEventListener("click", function showMenu() {
  nav.classList.toggle("showNav");
  hamburger.classList.toggle("closeNav");
});

//Mobile Navigation Menu closing
//Closing by click on nav link
let navLink = document.querySelectorAll(".navigation li a");
navLink.forEach((i) => {
  i.addEventListener("click", () => {
    nav.classList.remove("showNav");
    hamburger.classList.remove("closeNav");
  });
});

//Copyright Year Update
let actualDate = new Date();
copyYear.textContent = actualDate.getFullYear();

//SHOPING MANAGEMENT

//Invoice creation

/**
 * Invoice container
 * */ 
const invoiceBox = document.createElement("div");

//let's give the container a class
invoiceBox.className = "invoiceBox";

//let's add all primary invoice components
invoiceBox.innerHTML =
  '<svg id="invoiceCloseBtn"><image  x="0px" y="0px" width="16px" height="22px"  xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAuCAMAAACCu8B8AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAB41BMVEUdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRsdHRv///9cvbjrAAAAn3RSTlMAb+xdBFwGQvmEAQemkiLlrBYSt3sMx8AjZaD+vftQdX897/NM/KpI+OgrKOvPD9scc8oRS4m2dp+iVbONMfDGCxAU1yEaYQNBKeaKajryOF+W+t9iCN4bePU5jmACpNUe2grF/Z73R+40Scv04unQ0xfNKn3BqE2TfneYU7yDL8gVzm1XskQw9kOHVjdsGdzgujupBZla0j/E2SThLrU3YU4cAAAAAWJLR0SgXtO+oAAAAAd0SU1FB+YGFBE2OOAIh/sAAAI8SURBVDjLhZRnQxNBEIaH5BBMRKIYgxIUpAiGRLBiATQiUTDYIhZUBFGxoGJFURSxYEPEXvevese8d+4lu8d8ycw7z2Z2d3aOaD7L8/kd38hfoAcLCoVYGGA/uEgUacHFxcK00BLLX1piuss0YHi5mLOIQVTK/go1uZLBMr9ZP8p++SoVuJqTosIKKtdwUFWZC1bXcK6Ww7V1HNavywZjDZyJJyD4y1hY3+gGE3HWG2KO1ITdbNgog4FaVms2SeJmoFuCklgBcaurUDPUbQFH2o49Nbu3FNwBdKettLSy0LYr65i729y1kns4LG7Pubq9SIkOK0qhRuE+RTv2dyJpHbULyw4oW5zu5mzrQToE8LD6MVD1Ec4fzWBN9JiGpIxwWc9x0toJGTx5ijysVyJPe4F05qwDdpG3pSIA++YB6Vw/yLo8b3DgvFN9MN+TvCCd6OIlD7DJdZ9Dl7XglXJGrl7j3+FSDRi7zsCNsN2smyNKMHELA3ab6A7Qu2EVeQ8Ddt8KRoGGjFzwAXIPuQNYJ8ZywEf2zNk3+xjCeBb4ZIj1p87GJp4BnXSByT5WO6V7ae9Bs55LYOoFZuilvPyVj9Wp1/+1N8pCVDDFsq/FVvy6c74dxGRh6t9VcRwJZpP0Hv8RT1rR9AeOZhoV7RgHGh0wP0kfMWCzyh6PAf30mb7AzaifjRFCfpQm+ePdSxoL82R1fzXvYth0SgwdSSPfzHz997lm/BA/J0hvv36L/j94DUVp8rL0X+s+/wHh4H2WALBqrgAAAABJRU5ErkJggg==" /></svg><table><thead><tr><th>N<sup>o</sup> Produit</th> <th>Description</th> <th>Qté</th> <th>Prix</th> <th>Total</th></tr></thead><tbody></tbody></table><div id="resume"><p>THT: <span id="tht"></span></p><p>TVA: <span>5%</span></p><p>TTC: <span id="ttc"></span></p></div><button id="payerBtn"><svg id="payerSvg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#3e3e3e"><g><rect fill="none" height="24" width="24"/><path d="M19,14V6c0-1.1-0.9-2-2-2H3C1.9,4,1,4.9,1,6v8c0,1.1,0.9,2,2,2h14C18.1,16,19,15.1,19,14z M17,14H3V6h14V14z M10,7 c-1.66,0-3,1.34-3,3s1.34,3,3,3s3-1.34,3-3S11.66,7,10,7z M23,7v11c0,1.1-0.9,2-2,2H4c0-1,0-0.9,0-2h17V7C22.1,7,22,7,23,7z"/></g></svg>PAYER</button>';

//let's include invoice in document
body.appendChild(invoiceBox);
const tbody = document.querySelector(".invoiceBox tbody");

//invoice display and closure
//display&&closure
cart.onclick = () => {
  invoiceBox.classList.toggle("showInvoiceBox");
};
//closure
const invoiceCloseBtn = document.querySelector("#invoiceCloseBtn");
invoiceCloseBtn.onclick = () => {
  invoiceBox.classList.remove("showInvoiceBox");
};

//invoice principal functionality creation

//product code initialize
let lastProductCode = 0;

/**
 * Groups the functionalities of adding and products deletting
 * @param1 {string} product description
 * @param2 {number} Product Quantity
 * @param3 {number} produit price
 */

function cartManagement(fdescription, fquantity, fprice) {
  class addToCart {
    constructor(description, quantity, price) {
      this.description = description;
      this.quantity = quantity;
      this.price = price;
    }
    generateProduct() {
      //product code generation
      const fcode = "TRX_" + lastProductCode;
      //invoice rows creation
      const tr = document.createElement("tr");
      //include invoice rows on document
      tbody.appendChild(tr);
      //invoice rows components creation
      const Pcode = document.createElement("td");
      const Pdescription = document.createElement("td");
      const Pquantity = document.createElement("td");
      const Pprice = document.createElement("td");
      const Ptotal = document.createElement("td");
      const Premove = document.createElement("td");
      const PremoveImg = document.createElement("img");
      //add attribute to rows components
      Premove.classList.toggle("removeTd");
      Pdescription.classList.toggle("Pdescription");
      Ptotal.classList.toggle("Ptotal");
      Pquantity.classList.toggle("Pquantity");
      //enable user to change product quantity manually
      Pquantity.setAttribute("contentEditable", "true");

      //rows components intialize
      let code = document.createTextNode(fcode);
      lastProductCode++;
      const description = document.createTextNode(this.description);
      const quantity = document.createTextNode(this.quantity);
      const price = document.createTextNode(this.price);
      const total = document.createTextNode(this.price * this.quantity);

      PremoveImg.setAttribute("src", "../assets/images/delete.svg");
      PremoveImg.classList.toggle("PremoveImg");

      //let's give values to components
      Pcode.appendChild(code);
      Pdescription.appendChild(description);
      Pquantity.appendChild(quantity);
      Pprice.appendChild(price);
      Ptotal.appendChild(total);
      Premove.appendChild(PremoveImg);

      //include components on invoice row
      tr.appendChild(Pcode);
      tr.appendChild(Pdescription);
      tr.appendChild(Pquantity);
      tr.appendChild(Pprice);
      tr.appendChild(Ptotal);
      tr.appendChild(Premove);

      /**product delleting managements*/
      Premove.onclick = function deleteProduct() {
        tbody.removeChild(Premove.parentElement);
        //update invoice for each delleting
        facturation();
      };

      //update invoice for each product quantity changes
      Pquantity.onchange = facturation();
    }
  }
  //products adding

  //	let's check if shopcart is not empty
  if (tbody.childElementCount !== 0) {
    /**
     * Check if products already exist. True if exist; default:false
     * */
    let productExist = false;

    //let's check if products already exists
    let allProductName = document.querySelectorAll(".Pdescription");
    allProductName.forEach((i) => {
      //if product exist, put @productExist on true and let's increment quantity then update invoice
      if (i.textContent === fdescription) {
        productExist = true;
        //product quantity
        let qte = i.nextSibling.textContent;
        //product price
        let prix = i.nextSibling.nextSibling.textContent;
        //increment quantity
        i.nextSibling.textContent = parseInt(++qte);
        //eval price
        i.nextSibling.nextSibling.nextSibling.textContent = prix * qte;
        //update invoice
        facturation();
      }
    });
    //let's create product if not exist
    if (productExist === false) {
      const generate = new addToCart(fdescription, fquantity, fprice);
      generate.generateProduct();
    }
    //initialize @productExist
    productExist = false;
  } else {
    //if shopcart is empty, generate new product
    const generate = new addToCart(fdescription, fquantity, fprice);
    generate.generateProduct();
  }
}

/**facturation: this function allow to eval invoice*/
function facturation() {
  /**check if  each product total price is calculated correctly. 
   * So fetch all cell who contain quantity and add it in new array*/
  const allProductQuantity = document.querySelectorAll(".Pquantity");
  //let's eval each product price
  allProductQuantity.forEach((item) => {
    let qte = parseInt(item.innerText);
    let price = parseInt(item.nextSibling.innerText);
    item.nextSibling.nextSibling.innerText = price * qte;
  });

  //then fetch all cell who contain each product total price
  const allProductPriceTotal = document.querySelectorAll(".Ptotal");

  //let's create new array that will contain each product total price
  const newAllProductPriceTotal = [];

  //let's fetch all products total price and add it in @newAllProductPriceTotal
  allProductPriceTotal.forEach((item) => {
    newAllProductPriceTotal.push(parseInt(item.innerText));
  });

  /**
   * totalPrice: save invoice total price with out TVA
   */
  let totalPrice;

  /*let's check if total price container is array and not empty, 
  then eval all and assign total to @totalPrice*/
  if (
    Array.isArray(newAllProductPriceTotal) &&
    newAllProductPriceTotal.length > 0
  ) {
    totalPrice = newAllProductPriceTotal.reduce((a, b) => a + b);
  } else {
    totalPrice = 0;
  }
  //let's assign total price with out TVA to concerned cell
  document.querySelector("#tht").innerHTML = totalPrice + " $";

  //let's eval total price with TVA,then assign it to concerned cell
  document.querySelector("#ttc").innerHTML =
    totalPrice + (5 * totalPrice) / 100 + " $";

  //let's display a products total quantity on shopcart
  showQuantity();
}
/**
 * showQuantity:Allow to count products quantity and display it
 */
function showQuantity() {
  //let's display a counter on shopcart
  counter.classList.add("showCounter");

  //let's fetch all cells that contains products quantity
  const allProductQuantity = document.querySelectorAll(".Pquantity");

  //let's create a new array that contain each product quantity
  const newAllProductQuantity = [];

  //let's add in @newAllProductQuantity each product quantity
  allProductQuantity.forEach((item) => {
    newAllProductQuantity.push(parseInt(item.innerText));
  });

  /*let's check if total quantity container is array and not empty, 
  then eval all and assign total to @totalQuantity*/
  let totalQuantity;
  if (
    Array.isArray(newAllProductQuantity) &&
    newAllProductQuantity.length > 0
  ) {
    totalQuantity = newAllProductQuantity.reduce((a, b) => a + b);
  } else {
    totalQuantity = 0;
  }

  //let's assign total quantity to counter
  counter.innerHTML = totalQuantity;
}

//"add to cart" button on menu section config 
let productName;
let productPrice;

addToCartBox.forEach((item) => {
  item.onclick = () => {
    productName =
      item.parentElement.parentElement.childNodes[3].childNodes[1].firstChild
        .nodeValue;
    productPrice =
      item.parentElement.parentElement.childNodes[3].childNodes[1].firstChild
        .nextSibling.firstChild.nodeValue;
    cartManagement(productName, 1, parseInt(productPrice));
    upgradeQuantityByInput();
  };
});

//"Buy Now" button on menu section config  and shopcat automatic displaying
buyBox.forEach((item) => {
  item.onclick = () => {
    const name =
      item.parentElement.parentElement.childNodes[3].childNodes[1].firstChild
        .nodeValue;
    const prix =
      item.parentElement.parentElement.childNodes[3].childNodes[1].firstChild
        .nextSibling.firstChild.nodeValue;
    tbody.innerHTML = "";
    cartManagement(name, 1, parseInt(prix));
    upgradeQuantityByInput();
    invoiceBox.classList.add("showInvoiceBox");
  };
});

/**
 * upgradeQuantityByInput: Allow users to udapte products quantity manually
 */
function upgradeQuantityByInput() {
  let allQuantity = document.querySelectorAll(".Pquantity");

  allQuantity.forEach((item) => {
    /**
     * realQuantity: quantity that has added
     */
    let realQuantity = item.textContent;

    /**UNIT TEST*/
    console.log("realqte=" + " " + realQuantity);

    /**
     * realTimeQuantity: real time quantity
     */
    let realTimeQuantity;

    /**
     * isApprovedQuantity: Boolean, True if quantity that has added is Valid
     * else false
     */
    let isApprovedQuantity;

    /**
     * isApprovedNumbers: Boolean, True if input is Valid Number
     *  else false
     */
    let isApprovedNumbers;

    /**
     * approvedNumbers: Array, zpproved number list
     */
    let approvedNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

    /**
     * arrowsKeys: Array, incrementation and quantity desincrementation keys list
     */
    let arrowsKeys = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];

    /**
     * updateApprobationTest: Allow to validate quantity that has added
     */
    function updateApprobationTest() {
      /**UNIT TEST*/
      console.log("*************function updateApprobationTest ");
      console.log("approvedNumbers=" + " " + isApprovedNumbers);
      console.log("isApprovedQuantity=" + " " + isApprovedQuantity);
      console.log("realTimeQuantity=" + " " + realTimeQuantity);
      console.log("realQuantity=" + " " + realQuantity);

      /**Quantity validation condition*/
      isApprovedQuantity = realTimeQuantity > 0 && realTimeQuantity <= 100;
      isApprovedNumbers = realQuantity > 0 && realQuantity <= 100;

      /**UNIT TEST*/
      console.log("approvedNumbers=" + " " + isApprovedNumbers);
      console.log("isApprovedQuantity=" + " " + isApprovedQuantity);
      console.log("realTimeQuantity=" + " " + realTimeQuantity);
      console.log("realQuantity=" + " " + realQuantity);
    }

    item.addEventListener("keyup", (event) => {
      realTimeQuantity = item.textContent;

      /**
       * inputKey: users input keys
       */
      let inputKey = event.key;

      /**
       * isApprovedKey: Boolean, True if keys that users has been input is valid
       * else False
       */
      let isApprovedKey = inputKey > 0 && inputKey <= 100;

      /**UNIT TEST*/
      console.log("isapprovedKey=" + " " + isApprovedKey);
      console.log("realTimeQuantity=" + " " + realTimeQuantity);

      updateApprobationTest();

      if (
        (isApprovedKey === true &&
          isApprovedNumbers === true &&
          isApprovedQuantity === true) ||
        (isApprovedQuantity === true && inputKey == 0)
      ) {
        /**UNIT TEST*/
        console.log("*************FIRST CONDITION ");

        realTimeQuantity = item.textContent;
        realQuantity = realTimeQuantity.trim();
        item.innerText = realQuantity;

        /**UNIT TEST*/
        console.log("!succes qte were are ADDED =" + " " + item.textContent);
        console.log("realTimeQuantity=" + " " + realTimeQuantity);
        console.log("realQuantity=" + " " + realQuantity);

        facturation();
        updateApprobationTest();
      } else if (inputKey === "Backspace") {
        /**UNIT TEST*/
        console.log("*************SECOND CONDITION (BACKSPACE) ");

        realTimeQuantity = item.textContent;
        updateApprobationTest();

        /**UNIT TEST*/
        console.log("realTimeQuantity=" + " " + realTimeQuantity);
        console.log("realQuantity=" + " " + realQuantity);

        if (isApprovedQuantity === true) {
          /**UNIT TEST*/
          console.log("*************SECOND CONDITION (BACKSPACE) IF ZONE");

          realQuantity = realTimeQuantity;
          updateApprobationTest();

          /**UNIT TEST*/
          console.log("realTimeQuantity=" + " " + realTimeQuantity);
          console.log("realQuantity=" + " " + realQuantity);
        } else {
          /**UNIT TEST*/
          console.log("*************SECOND CONDITION (BACKSPACE) ELSE ZONE");

          realQuantity = "";
          updateApprobationTest();

          /**UNIT TEST*/
          console.log("realTimeQuantity=" + " " + realTimeQuantity);
          console.log("realQuantity=" + " " + realQuantity);
          console.log("Entrer une quantité supérieur à 0");
        }
      } else if (arrowsKeys.includes(inputKey)) {
        /**UNIT TEST*/
        console.log("*************THIRD CONDITION (ARROWS KEY)");

        if (isApprovedQuantity === true && inputKey == "ArrowUp") {
          /**UNIT TEST*/
          console.log("****THIRD CONDITION (UP ARROWS KEY) IF ZONE");

          if (realQuantity < 100) {
            item.innerText = parseInt(realQuantity) + 1;
          }

          realTimeQuantity = item.textContent;
          realQuantity = realTimeQuantity;
          updateApprobationTest();
          facturation();

          /**UNIT TEST*/
          console.log("realTimeQuantity=" + " " + realTimeQuantity);
          console.log("realQuantity=" + " " + realQuantity);
        } else if (isApprovedQuantity === true && inputKey == "ArrowDown") {
          /**UNIT TEST*/
          console.log("****THIRD CONDITION (DOWN ARROWS KEY) IF ZONE");

          if (realQuantity > 1) {
            item.innerText = parseInt(realQuantity) - 1;
          }

          realTimeQuantity = item.textContent;
          realQuantity = realTimeQuantity;
          updateApprobationTest();
          facturation();

          /**UNIT TEST*/
          console.log("realTimeQuantity=" + " " + realTimeQuantity);
          console.log("realQuantity=" + " " + realQuantity);
        } else if (
          (inputKey == "ArrowUp" && isApprovedNumbers == false) ||
          (inputKey == "ArrowDown" && isApprovedNumbers == false)
        ) {
          /**UNIT TEST*/
          console.log(
            "****THIRD CONDITION (UP AND DOWN ARROWS KEY WITH HOLD QUUANTITY=UNDEFINED ) ELSE ZONE"
          );

          realQuantity = 1;
          item.innerText = realQuantity;
          updateApprobationTest();
          facturation();

          /**UNIT TEST*/
          console.log("realTimeQuantity=" + " " + realTimeQuantity);
          console.log("realQuantity=" + " " + realQuantity);
        } else if (inputKey == "ArrowLeft" || inputKey == "ArrowRight") {
          /**UNIT TEST*/
          console.log("****THIRD CONDITION (ARROWS KEY) ELSE ZONE");

          realQuantity = realTimeQuantity;
          updateApprobationTest();

          /**UNIT TEST*/
          console.log("realTimeQuantity=" + " " + realTimeQuantity);
          console.log("realQuantity=" + " " + realQuantity);
          console.log("Entrer une quantité supérieur à 0");
        }
      } else {
        /**UNIT TEST*/
        console.log("*************FOURTH CONDITION FOR OTHERS");
        console.log(inputKey);

        if (isApprovedNumbers === true) {
          /**UNIT TEST*/
          console.log("*************FOURTH CONDITION FOR OTHERS IF ZONE");

          item.textContent = realQuantity;
          updateApprobationTest();

          /**UNIT TEST*/
          console.log("Quantity=" + " " + item.textContent);
        } else {
          /**UNIT TEST*/
          console.log("*************FOURTH CONDITION FOR OTHERS ELSE ZONE");

          realQuantity = 1;
          item.textContent = realQuantity;
          updateApprobationTest();

          /**UNIT TEST*/
          console.log("realQuantity=" + " " + realQuantity);
          console.log("Entrer une quantité supérieur à 0");
        }
      }
    });

    /**Renitialize input quantity when he lost focus and  quantity is invalid*/
    item.onblur = () => {
      if (!approvedNumbers.includes(item.textContent)) {
        item.textContent = 1;
        facturation();

        /**UNIT TEST*/
        console.log("Entrer une quantité comprise entre 1 et 100");
      }
    };
  });
}
