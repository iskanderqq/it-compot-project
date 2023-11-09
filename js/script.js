let tmpButton = 0;
const btn = document.getElementById("btn");
let basket = 0;
let price = btn.previousSibling.previousSibling.textContent 
price = price.replace(' ', '')
price = parseInt(price)
const basketPrice = document.querySelector('.price')

if(localStorage.getItem('basket') !== null){
    basket = localStorage.getItem('basket')
    basketPrice.textContent = basket
}

if(localStorage.getItem('richag') !== null){
    tmpButton = localStorage.getItem('richag')
    tmpButton = parseInt(tmpButton)

    if(tmpButton == false){
        btn.innerHTML = "купить";
        btn.style.background = "red";
    }else{
        btn.innerHTML = "в корзине";
        btn.style.background = "green";
    }

}

function buy() {

    if (tmpButton == true) {
        btn.innerHTML = "купить";
        btn.style.background = "red";
        tmpButton = 0;
        basket = parseInt(basket) - price
    }
    else {
        btn.innerHTML = "в корзине";
        btn.style.background = "green";
        tmpButton = 1;
        basket = parseInt(basket) + price
    }
    basketPrice.textContent = basket

    localStorage.setItem('basket', basket)
    localStorage.setItem('richag', tmpButton)
}
