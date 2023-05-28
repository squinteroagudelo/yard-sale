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

    document.querySelector('.navbar-email')
        .addEventListener('click', () => {
            document.querySelector('.desktop-menu').classList.toggle('inactive')
            document.querySelector('#shopping-cart-container').classList.add('inactive')
        })

    document.querySelector('.menu')
        .addEventListener('click', () => {
            document.querySelector('.mobile-menu').classList.toggle('inactive')
            document.querySelector('#shopping-cart-container').classList.add('inactive')
        })

    document.querySelector('.navbar-shopping-cart').addEventListener('click', () => {
        document.querySelector('#shopping-cart-container').classList.toggle('inactive')
        document.querySelector('.mobile-menu').classList.add('inactive')
        document.querySelector('.desktop-menu').classList.add('inactive')
    })

    const cardsContainer = document.querySelector('.cards-container')

    for (const product of productList) {
        const productCard = document.createElement('div')
        productCard.classList.add('product-card')

        const img = document.createElement('img')
        img.setAttribute('alt', product.image);
        img.src = product.image;
        // img.style.border = '1px solid var(--very-light-pink)'

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