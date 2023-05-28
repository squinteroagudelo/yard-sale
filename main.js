document.addEventListener('DOMContentLoaded', () => {

    const productList = [
        {
            name: 'Bike',
            price: 120,
            image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"'
        },
        {
            name: 'Guitar',
            price: 90,
            image: 'https://images.pexels.com/photos/3660866/pexels-photo-3660866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            name: 'barbecue',
            price: 40,
            image: 'https://images.pexels.com/photos/12547855/pexels-photo-12547855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            name: 'Radio AM/FM',
            price: 30,
            image: 'https://images.pexels.com/photos/6368944/pexels-photo-6368944.jpeg'
        },
        {
            name: 'Tent',
            price: 165,
            image: 'https://images.unsplash.com/photo-1624923686627-514dd5e57bae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'
        },
        {
            name: 'TV set',
            price: 120,
            image: 'https://images.pexels.com/photos/5721865/pexels-photo-5721865.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            name: 'Trampoline',
            price: 135,
            image: 'https://images.pexels.com/photos/4005333/pexels-photo-4005333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            name: 'Speakers',
            price: 85,
            image: 'https://images.pexels.com/photos/373638/pexels-photo-373638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            name: 'Piano',
            price: 450,
            image: 'https://images.pexels.com/photos/2043571/pexels-photo-2043571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        }
    ]

    const productDetail = document.querySelector('#product-detail')
    const navbarEmail = document.querySelector('.navbar-email')
    const desktopMenu = document.querySelector('.desktop-menu')
    const mobileMenu = document.querySelector('.mobile-menu')
    const shoppingCartIcon = document.querySelector('.navbar-shopping-cart')
    const shoppingCartContainer = document.querySelector('#shopping-cart-container')
    const menu = document.querySelector('.menu')
    const cardsContainer = document.querySelector('.cards-container')

    navbarEmail.addEventListener('click', () => {
        desktopMenu.classList.toggle('inactive')
        shoppingCartContainer.classList.add('inactive')
        productDetail.classList.add('inactive')
    })

    menu.addEventListener('click', () => {
        mobileMenu.classList.toggle('inactive')
        shoppingCartContainer.classList.add('inactive')
        productDetail.classList.add('inactive')
    })

    shoppingCartIcon.addEventListener('click', () => {
        shoppingCartContainer.classList.toggle('inactive')
        mobileMenu.classList.add('inactive')
        desktopMenu.classList.add('inactive')
        productDetail.classList.add('inactive')
    })

    document.querySelector('.product-detail-close')
        .addEventListener('click', () => productDetail.classList.add('inactive'))

    for (const product of productList) {
        const productCard = document.createElement('div')
        productCard.classList.add('product-card')

        const img = document.createElement('img')
        img.setAttribute('alt', product.image);
        img.src = product.image;
        // img.style.border = '1px solid var(--very-light-pink)'
        img.addEventListener('click', () => {
            productDetail.classList.remove('inactive')
            productDetail.querySelector('.img-product-details').src = product.image
            productDetail.querySelector('.price-product-details').innerText = product.price
            productDetail.querySelector('.name-product-details').innerText = product.name
            desktopMenu.classList.add('inactive')
            shoppingCartContainer.classList.add('inactive')
            mobileMenu.classList.add('inactive')
        })

        const productInfo = document.createElement('div')
        productInfo.classList.add('product-info');

        const productInfoContainer = document.createElement('div')

        const productPrice = document.createElement('p');
        productPrice.innerText = `$ ${product.price}`

        const productName = document.createElement('p');
        productName.innerText = product.name;

        const figure = document.createElement('figure')
        const imgFigure = document.createElement('img')
        imgFigure.src = './icons/bt_add_to_cart.svg'
        imgFigure.setAttribute('alt', `icon-figure-${product.name}`)

        productInfoContainer.append(productPrice, productName)
        figure.appendChild(imgFigure)
        productInfo.append(productInfoContainer, figure)
        productCard.append(img, productInfo)
        cardsContainer.appendChild(productCard)
    }
})