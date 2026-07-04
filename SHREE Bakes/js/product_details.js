
const dynamicCatalogDataset = [
     {
            id: 1,
            title: "Tiramisu - 250 grms",
            price: 135.00,
            originalPrice: 167.88,
            category: "Dessert",
            type: "Sweet Delights",
            rating: 5,
            reviews: 32,
            image: "image/tiramisu.jpeg"
        },
        {
            id: 2,
            title: "Panna Cotta – Creamy vanilla pudding with fruit or caramel sauce.",
            price: 13.99,
            originalPrice: null,
            category: "Dessert",
            type: "Sweet Delights",
            rating: 5,
            reviews: 24,
            image: "image/panacotta.jpeg"
        },
        {
            id: 3,
            title: "BlueBerry - Cheese Cake (1 piece)",
            price: 19.99,
            originalPrice: 24.00,
            category: "Cake",
            type: "Sweet Delights",
            rating: 5,
            reviews: 24,
            image: "image/cheese.jpeg"
        },
        {
            id: 4,
            title: "Affogato – Vanilla gelato topped with hot espresso.",
            price: 34.00,
            originalPrice: null,
            category: "Dessert",
            type: "Sweet Delights",
            rating: 5,
            reviews: 24,
            image: "image/affogoto.jpeg"
        },
        {
            id: 5,
            title: "Mango Loaded Cake - 1/2 kg",
            price: 13.99,
            originalPrice: null,
            category: "Cake",
            type: "Sweet Delights",
            rating: 4,
            reviews: 18,
            image: "image/mango.jpeg"
        },
        {
            id: 6,
            title: "Red Velvet Cake - 1/2 kg",
            price: 9.99,
            originalPrice: null,
            category: "Cake",
            type: "Sweet Delights",
            rating: 4,
            reviews: 15,
            image: "image/redvelvet.jpeg"
        },
        {
            id: 7,
            title: "Brownie",
            price: 58.00,
            originalPrice: 65.00,
            category: "Dessert",
            type: "Sweet Delights",
            rating: 4,
            reviews: 11,
            image: "image/brownie.jpg"
        },
        {
            id: 8,
            title: "Molten Chocolate Cake",
            price: 16.50,
            originalPrice: null,
            category: "Cake",
            type: "Sweet Delights",
            rating: 4,
            reviews: 9,
            image: "image/moltencho.jpeg"
        },
        {
            id: 9,
            title: "Coffee Tres Leches Cake",
            price: 42.00,
            originalPrice: 48.00,
            category: "Cake",
            type: "Sweet Delights",
            rating: 5,
            reviews: 21,
            image: "image/coffee.jpeg"
        },
        {
            id: 10,
            title: "Mocha Mousse",
            price: 4.50,
            originalPrice: null,
            category: "Dessert",
            type: "Sweet Delights",
            rating: 5,
            reviews: 7,
            image: "image/mocha.jpeg"
        },
        {
            id: 11,
            title: "Trending Scopable Cookie",
            price: 18.00,
            originalPrice: 20.00,
            category: "Cookie",
            type: "Bakery Specials",
            rating: 4,
            reviews: 6,
            image: "image/cookies.webp"
        },
        {
            id: 12,
            title: "Oatmeal Cookie",
            price: 15.99,
            originalPrice: null,
            category: "Cookie",
            type: "Bakery Specials",
            rating: 3,
            reviews: 2,
            image: "image/oatmeal.jpg"
        },
        {
            id: 13,
            title: "Almond Croissant",
            price: 24.99,
            originalPrice: 29.99,
            category: "Croissant",
            type: "Bakery Specials",
            rating: 4,
            reviews: 13,
            image: "image/almondcro.jpeg"
        },
        {
            id: 14,
            title: "Cheese Croissant",
            price: 29.99,
            originalPrice: null,
            category: "Croissant",
            type: "Bakery Specials",
            rating: 3,
            reviews: 5,
            image: "image/cheesecro.jpeg"
        },
        {
            id: 15,
            title: "Ferrero Rocher Cake",
            price: 12.00,
            originalPrice: null,
            category: "Cake",
            type: "Sweet Delights",
            rating: 3,
            reviews: 4,
            image: "image/ferrero.jpeg"
        },
        {
            id: 16,
            title: "Butterscotch Cake",
            price: 17.00,
            originalPrice: null,
            category: "Cake",
            type: "Sweet Delights",
            rating: 3,
            reviews: 1,
            image: "image/butterscotch.jpeg"
        }
    ];

document.addEventListener("DOMContentLoaded", () => {
    // 1. EXTRACT DATA ROUTING URL PARAMS
    const queryParameters = new URLSearchParams(window.location.search);
    const targetProductId = parseInt(queryParameters.get('id')) || 1; 

    // 2. MATCH ASSET METADATA
    const activeProduct = dynamicCatalogDataset.find(item => item.id === targetProductId) || dynamicCatalogDataset[0];

    // 3. CART SYSTEM PERSISTENCE CONTROLLER
    let activeCartCounter = parseInt(localStorage.getItem('cartCount')) || 0;
    const globalCountIndicatorNode = document.getElementById('cartGlobalCounter');
    globalCountIndicatorNode.textContent = activeCartCounter;

    // 4. MAP DATA STRUCTURAL ENTITIES TO INJECT INTO PAGE
    document.getElementById('breadcrumbTitle').textContent = activeProduct.title;
    document.getElementById('productDetailTitle').textContent = activeProduct.title;
    document.getElementById('productMainImage').src = activeProduct.image;
    document.getElementById('detailCurrentPrice').textContent = `$${activeProduct.price.toFixed(2)}`;
    
    if (activeProduct.originalPrice) {
        document.getElementById('detailComparePrice').textContent = `$${activeProduct.originalPrice.toFixed(2)}`;
    } else {
        document.getElementById('detailComparePrice').style.display = 'none';
    }

    // 5. INJECT STAR RATINGS INTERFACES
    document.getElementById('detailStars').innerHTML = '★'.repeat(activeProduct.rating) + '☆'.repeat(5 - activeProduct.rating);
    document.getElementById('detailReviewCount').textContent = `${activeProduct.reviews} reviews`;
    document.getElementById('dynamicLongDescription').innerHTML = activeProduct.description || 'Crafted with premium ingredients and baked fresh to deliver the perfect balance of flavor and texture. Every bite is made with care, making it an ideal treat for celebrations, coffee breaks, or simply satisfying your sweet cravings.';

    // --- INTERACTIVE EVENT CONTROLLERS ---

    // A. Tab Toggling Engine Core
    const visualTabsTriggers = document.querySelectorAll('.tab-trigger');
    const dataTabsPanels = document.querySelectorAll('.tab-panel');

    visualTabsTriggers.forEach(tabTriggerButton => {
        tabTriggerButton.addEventListener('click', () => {
            visualTabsTriggers.forEach(btn => btn.classList.remove('active'));
            dataTabsPanels.forEach(panel => panel.classList.remove('active'));

            tabTriggerButton.classList.add('active');
            document.getElementById(tabTriggerButton.dataset.tab).classList.add('active');
        });
    });

    // B. Add To Cart Pipeline Trigger
    document.getElementById('addToCartBtn').addEventListener('click', () => {
        activeCartCounter++;
        localStorage.setItem('cartCount', activeCartCounter);
        globalCountIndicatorNode.textContent = activeCartCounter;
        
        globalCountIndicatorNode.style.transform = 'scale(1.3)';
        setTimeout(() => { globalCountIndicatorNode.style.transform = 'scale(1)'; }, 200);
    });

    // C. Immediate Checkout Buy Routing Action Trigger
    document.getElementById('buyNowBtn').addEventListener('click', () => {
        window.location.href = 'confirmation.html'; 
    });
});