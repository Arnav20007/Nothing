
// Fetch products from JSON file and display them on the webpage
fetch('products.json')
    .then(response => response.json())
    .then(products => {
        let productContainer = document.getElementById('products');
        products.forEach(product => {
            let productCard = document.createElement('div');
            productCard.classList.add('product-card');
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>Price: ₹${product.price}</p>
                <button>Add to Cart</button>
            `;
            productContainer.appendChild(productCard);
        });
    })
    .catch(error => console.error('Error loading products:', error));
