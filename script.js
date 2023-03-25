// Generate random prices and images for product listings
const products = document.querySelectorAll('.product-listing li');
products.forEach(product => {
    const price = product.querySelector('.price');
    price.textContent = Math.floor(Math.random() * 901) + 100;

    const image = product.querySelector('img');
    const imageNumber = Math.floor(Math.random() * 10) + 1;
    image.src = `https://source.unsplash.com/featured/?bikini-girl&sig=${imageNumber}`;
    image.width = 200;
    image.height = 300;
});

// Add functionality for adding products to cart and checking out
const addToCartButtons = document.querySelectorAll('.product-listing button');

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const product = button.parentElement;
        const productTitle = product.querySelector('h3').textContent;
        const productPrice = parseInt(product.querySelector('.price').textContent);

        addItemToCart(productTitle, productPrice);
    });
});

function addItemToCart(title, price) {
    // Add item to cart (implementation depends on the server-side code and database)
    const cartItems = document.querySelector('#cart-items');
    const cartItem = document.createElement('li');
    cartItem.textContent = `${title} - $${price}`;
    cartItems.appendChild(cartItem);
}

const checkoutForm = document.querySelector('.checkout form');
checkoutForm.addEventListener('submit', event => {
    event.preventDefault();

    const name = checkoutForm.querySelector('#name').value;
    const email = checkoutForm.querySelector('#email').value;
    const address = checkoutForm.querySelector('#address').value;
    const paymentMethod = checkoutForm.querySelector('#payment').value;

    placeOrder(name, email, address, paymentMethod);
});

function placeOrder(name, email, address, paymentMethod) {
    // Place order (implementation depends on the server-side code and database)
    const orderInfo = document.querySelector('#order-info');
    orderInfo.innerHTML = `<p>Name: ${name}</p><p>Email: ${email}</p><p>Address: ${address}</p><p>Payment Method: ${paymentMethod}</p>`;
}
