// Simulated featured products data
const featuredProducts = [
    { id: 1, name: "Product 1", price: 20 },
    { id: 2, name: "Product 2", price: 30 },
    { id: 3, name: "Product 3", price: 25 }
];

// Function to display featured products
function displayFeaturedProducts() {
    const featuredProductsSection = document.getElementById("featured-products");
    featuredProductsSection.innerHTML = "";

    featuredProducts.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        productCard.innerHTML = `
            <h3>${product.name}</h3>
            <p>Price: $${product.price}</p>
        `;
        featuredProductsSection.appendChild(productCard);
    });
}

// Function to search products
function searchProducts() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const searchResults = featuredProducts.filter(product => 
        product.name.toLowerCase().includes(searchInput)
    );
    displaySearchResults(searchResults);
}

// Function to display search results
function displaySearchResults(results) {
    const featuredProductsSection = document.getElementById("featured-products");
    featuredProductsSection.innerHTML = "";

    results.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        productCard.innerHTML = `
            <h3>${product.name}</h3>
            <p>Price: $${product.price}</p>
        `;
        featuredProductsSection.appendChild(productCard);
    });
}

// Initial display of featured products
displayFeaturedProducts();




