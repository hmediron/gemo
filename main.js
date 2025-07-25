let product = document.querySelectorAll(".product")
let add = document.querySelectorAll(".add")
let cart = document.querySelector(".secend")
let numberOfCart = document.querySelector(".number-of-cart")
let icon = document.querySelectorAll(".cut")
let addOn = document.querySelectorAll(".add-on")
let plus = document.querySelectorAll(".fa-plus")
let minus = document.querySelectorAll(".fa-minus")
let cartImg = document.querySelector(".cart-img")
let cartText = document.querySelector(".text")
let conet = 0;
let bigParent = document.querySelector(".the-big-one")
let parent = document.createElement("div")
let child = document.createElement("div")
let startNew = document.createElement("div")
let startNewBtn = document.createElement("button")
parent.innerHTML = `<i class="fa-regular fa-circle-check"></i>  </i><div><h2>Order Confirmed</h2>
<p>We hope you enjoy your food!</p></div>`
parent.classList.add("parent")
parent.classList.add("off")
child.classList.add("child")
let sumOrder = 0;
let cartItems = document.createElement("div")
let order = document.createElement("div")
add.forEach((get) => {
    get.addEventListener("click", () => {
        numberOfCart.textContent = ++conet
        get.parentElement.children[0].classList.add('bord')
        get.style.display = "none"
        cartImg.style.display = 'none'
        cartText.style.display = 'none'
        let nameOfProduct = get.parentElement.children[4].textContent
        let priceOfProduct = get.parentElement.children[5].children[0].textContent
        sumOrder += parseFloat(priceOfProduct)
        cartItems.classList.add("in-cart")
        let productTitel = document.createElement("div")
        productTitel.setAttribute("data-name", nameOfProduct)
        productTitel.innerHTML = ` ${nameOfProduct} <p class="product-in-cart">1<strong>x</strong><span class="price">@$${priceOfProduct}</span> <span>$${priceOfProduct}</span</p><hr>`
        order.classList.add("order")
        order.innerHTML = `<div class="order-total"><p>Order Total</p>  <p class="price-in-order">$${sumOrder.toFixed(2)}</p></div>
       <p class="neutral"><img src="icons/icon-carbon-neutral.svg" alt="" srcset=""/>This is a <strong>carbon-neutral</strong> delivery</p>
      <button class="conf">Confirm Order</button>`
        cartItems.appendChild(productTitel)
        cart.appendChild(cartItems)
        cart.appendChild(order)
        let conf = document.querySelector(".conf")
        let r = get.closest(".product").querySelector(".bord")
        let inOrder = document.createElement("div")
        inOrder.setAttribute("data-number", nameOfProduct)
        inOrder.innerHTML = `<div> <div class="on-order"><div class="on-title"><img src="${r.getAttribute("src")}"/> <p class="on-text">${nameOfProduct}<span><span class="numer-x">1<strong>x</strong></span>   <span class="price">@$${priceOfProduct}</span></span></span> </p> </div><span class="last-price">$${priceOfProduct}</span</p> </div><hr><div>`
        startNew.innerHTML = `<div class="last-price"><p>Order Total</p>  <p class="total-price">$${sumOrder.toFixed(2)}</p></div>`
        inOrder.classList.add("in-order")
        parent.appendChild(child)
        child.appendChild(inOrder)
        child.appendChild(startNew)
        conf.addEventListener("click", () => {
            parent.classList.remove("off")
            bigParent.classList.remove("off")
        })
        startNewBtn.innerHTML = `  Start New Order`
        parent.appendChild(startNewBtn)
    })
})
document.body.appendChild(parent)
let x = 0;
plus.forEach((plu) => {
    plu.addEventListener("click", () => {
        let a = plu.nextElementSibling.textContent++
        numberOfCart.textContent = ++conet
        let nameO = plu.closest(".product").querySelector(".product-title").textContent
        let cartItem = document.querySelector(`[data-name="${nameO}"]`)
        let c = cartItem.children[0].firstChild.textContent++
        let priceOfProduct = plu.closest(".product").querySelector(".price").textContent
        let cartItemPrice = document.querySelector(`[data-name="${nameO}"]`)
        let s = cartItemPrice.children[0].children[2].textContent = `$${priceOfProduct.slice(1) * ++c}`
        let z = document.querySelector(".price-in-order")
        let k = sumOrder
        x = parseFloat(priceOfProduct.slice(1))
        let final = z.textContent = `$${(sumOrder = k + x).toFixed(2)}`
        startNew.children[0].children[1].innerHTML = `${final}`
        k = 0;
        let onOrder = document.querySelector(`[data-number="${nameO}"]`)
        onOrder.children[0].children[0].children[0].children[1].children[0].children[0].firstChild.textContent++
        onOrder.children[0].children[0].children[1].textContent = s

    })
})
minus.forEach((min) => {
    min.addEventListener("click", () => {
        if (min.previousElementSibling.textContent > 1) {
            min.previousElementSibling.textContent--
            let newValue = --conet
            numberOfCart.textContent = newValue
            let nameO = min.closest(".product").querySelector(".product-title").textContent
            let cartItem = document.querySelector(`[data-name="${nameO}"]`)
            let c = cartItem.children[0].firstChild.textContent--
            let priceOfProduct = min.closest(".product").querySelector(".price").textContent
            let cartItemPrice = document.querySelector(`[data-name="${nameO}"]`)
            let s = cartItemPrice.children[0].children[2].textContent = `$${priceOfProduct.slice(1) * --c}`
            let z = document.querySelector(".price-in-order")
            let k = sumOrder
            x = parseFloat(priceOfProduct.slice(1))
            let final = z.textContent = `$${(sumOrder = k - x).toFixed(2)}`
            startNew.children[0].children[1].innerHTML = `${final}`
            let onOrder = document.querySelector(`[data-number="${nameO}"]`)
            onOrder.children[0].children[0].children[0].children[1].children[0].children[0].firstChild.textContent--
            onOrder.children[0].children[0].children[1].textContent = s
        }
    })
})
startNewBtn.addEventListener("click", () => {
    location.reload()
})