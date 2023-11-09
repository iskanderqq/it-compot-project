let elemLi = document.createElement('li')
elemLi.classList.add('gds__item')

let elemList = document.querySelector('.gds__list')

let elemName = document.createElement('h3')
let elemNameText = document.createTextNode('Iphone 14')
elemName.appendChild(elemNameText)

let elemImg = document.createElement('img')
elemImg.src = 'img/tovar.jpg'
elemImg.style.width = '250px'

let elemPrice = document.createElement('p')
let elemPriceText = document.createTextNode('75 000 руб')
elemPrice.appendChild(elemPriceText)

let elemBtn = document.createElement('btn')
let elemBtnText = document.createTextNode('удалить')
elemBtn.appendChild(elemBtnText)
elemBtn.setAttribute('onclick', 'del()')

let firstLi = document.querySelectorAll('.gds__item')[0]

function update(){
    elemLi.appendChild(elemName)
    elemLi.appendChild(elemImg)
    elemLi.appendChild(elemPrice)
    elemLi.appendChild(elemBtn)
    firstLi.classList.add('none')

    elemList.appendChild(elemLi)
}

function del(){
    elemBtn.parentNode.remove()
    firstLi.classList.remove('none')
}