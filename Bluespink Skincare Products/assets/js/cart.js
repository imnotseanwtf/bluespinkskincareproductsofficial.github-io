'use strict';
window.addEventListener('DOMContentLoaded', function () {

    

    let cart = document.querySelectorAll('.add-cart');
    let products = [{
        name: "Old Spice",
        price: 150,
        tag: 'shampoo1',
        inCart: 0
    }, {
        name: "CALIFORNIA BABY SHAMPOO & BODYWASH",
        price: 1990,
        tag: 'shampoobody',
        inCart: 0

    }, {
        name: "BB Moringa Ceramide",
        price: 48,
        tag: 'face1',
        inCart: 0
    }, {
        name: "SkinCeuticals C E Ferulic",
        price: 45,
        tag: 'skin1',
        inCart: 0
    }, {
        name: "EltaMD UV Clear Broad-Spectrum SPF",
        price: 58,
        tag: 'cream1',
        inCart: 0
    }, {
        name: "Obagi Medical Professional-C Serum",
        price: 25,
        tag: 'skin2',
        inCart: 0
    }, {
        name: "Sunday Riley GOOD GENES All-In-One Lactic Acid Treatment",
        price: 99,
        tag: 'cream2',
        inCart: 0
    }, {
        name: "Medik8 Press And Clear Refill 150ml",
        price: 150,
        tag: 'face3',
        inCart: 0
    }, {
        name: "Pai Skincare C-2 Believe Vitamin C Brightening Moisturizer",
        price: 100,
        tag: 'cream3',
        inCart: 0
    }, {
        name: "Glo Skin Beauty Dermstore Exclusive Bio-Renew EGF Cream And EGF Drops Duo",
        price: 25,
        tag: 'body1',
        inCart: 0
    }, {
        name: "Living Proof Triple Bond Complex 45ml",
        price: 32,
        tag: 'hair1',
        inCart: 0
    }, {
        name: "EltaMD Dermstore Exclusive UV Glow Broad-Spectrum SPF 36",
        price: 58,
        tag: 'face',
        inCart: 0
    }, {
        name: "ESPA Lip And Hand Hydration - Dermstore Exclusive",
        price: 50,
        tag: 'body2',
        inCart: 0
    }, {
        name: "ELEMIS Papaya Enzyme Peel (1.7 Fl. Oz.)",
        price: 78,
        tag: 'face4',
        inCart: 0
    }
    ];
    for (let i = 0; i < cart.length; i++) {
        cart[i].addEventListener('click', () => {
            cartNumbers(products[i]);
            totalCost(products[i]);
        })
    }
    function onLoadCartNumbers() {
        let productNumbers = localStorage.getItem('cartNumbers');
        if (productNumbers) {
            document.querySelector('.cart span').textContent = productNumbers;
        }
    }
    function cartNumbers(product) {

        let productNumbers = localStorage.getItem('cartNumbers');
        productNumbers = parseInt(productNumbers);
        if (productNumbers) {

            localStorage.setItem('cartNumbers', productNumbers + 1);
            document.querySelector('.cart span').textContent = productNumbers + 1;
        } else {
            localStorage.setItem('cartNumbers', 1);
            document.querySelector('.cart span').textContent = 1;
        }
        setItem(product);

    }
    function setItem(product) {
        let cartItems = localStorage.getItem('productsInCart');
        cartItems = JSON.parse(cartItems);


        if (cartItems != null) {
            if (cartItems[product.tag] == undefined) {
                cartItems = {
                    ...cartItems,
                    [product.tag]: product
                }
            }

            cartItems[product.tag].inCart += 1;
        } else {
            product.inCart = 1;

            cartItems = {
                [product.tag]: product
            }
        }

        localStorage.setItem("productsInCart", JSON.stringify(cartItems));
    }
    function totalCost(product) {
        console.log(product);
        let cartCost = localStorage.getItem('totalCost');

        if (cartCost != null) {
            cartCost = parseInt(cartCost);
            localStorage.setItem("totalCost", cartCost + product.price);
        } else {
            localStorage.setItem("totalCost", product.price);
        }
    }
    function displayCart() {
        let cartItems = localStorage.getItem("productsInCart");
        cartItems = JSON.parse(cartItems);
        let productContainer = document.querySelector(".products");
        let cartCost = localStorage.getItem('totalCost');
        if (cartItems && productContainer) {
            productContainer.innerHTML = '';
            Object.values(cartItems).map(item => {
                productContainer.innerHTML += `
                
      
                <div class="product">

				<img src="../Bluespink Skincare Products/assets/images/add to cart/${item.tag}.png">

				<div class="product-info">

					<h3 class="product-name">${item.name}</h3>

					<h4 class="product-price">$${item.price}</h4>

					<div class="quantity"><ion-icon name="arrow-back-circle-outline"></ion-icon><span>${item.inCart}</span><ion-icon name="arrow-forward-circle-outline"></ion-icon>
                    </div>
					<p class="product-remove">

						<i class="fa fa-trash" aria-hidden="true"></i>

						<span class="remove">Remove</span>

					</p>

				</div>
                <div class="total">
                     $${item.inCart * item.price}
                </div>
                </div>
                
                
            `;

            });
            productContainer.innerHTML += `
            <div class="cart-total">

			<p>

				<span>Total Price</span>

				<span>$${cartCost}</span>

			</p>

			<p>

				<span>Number of Items</span>

				<span></span>

			
			<a href="#">Proceed to Checkout</a>

		</div>`
        }



    }
    onLoadCartNumbers();
    displayCart();

});
