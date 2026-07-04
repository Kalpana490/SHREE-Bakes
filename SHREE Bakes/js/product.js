document.addEventListener("DOMContentLoaded", () => {
    const products = [
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
            type: "Sweet Delightst",
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

    // ---------------------------------------------------------------
    // Element references
    // ---------------------------------------------------------------
    const filterToggleBtn = document.getElementById('filterToggleBtn');
    const filterDrawer = document.getElementById('filterDrawer');
    const gridLayoutBtn = document.getElementById('gridLayoutBtn');
    const listLayoutBtn = document.getElementById('listLayoutBtn');
    const productsGrid = document.getElementById('productsGrid');
    const productCount = document.getElementById('productCount');
    const noResultsMsg = document.getElementById('noResultsMsg');
    const sortSelect = document.getElementById('sortBy');
    const clearFiltersBtn = document.getElementById('clearFiltersBtn');
    const filterInputs = document.querySelectorAll('.filter-input');

    // ---------------------------------------------------------------
    // 2. RENDERING
    // ---------------------------------------------------------------
    function buildStarsHTML(rating) {
        let html = '';
        for (let i = 1; i <= 5; i++) {
            html += i <= rating
                ? '<i class="fa-solid fa-star"></i>'
                : '<i class="fa-regular fa-star"></i>';
        }
        return html;
    }

    function buildCardHTML(product) {
        const priceHTML = product.originalPrice
            ? `$${product.price.toFixed(2)} <span class="price-original">$${product.originalPrice.toFixed(2)}</span>`
            : `$${product.price.toFixed(2)}`;

        return `
            <a href="product_details.html?id=${product.id}" class="product-card" style="text-decoration: none; color: inherit; display: block;">
                <div class="product-img-wrapper">
                    <img src="${product.image}" alt="${product.title}">
                    <div class="hover-actions">
                        <div class="action-btn wishlist-btn"><i class="fa-regular fa-heart"></i></div>
                        <div class="action-btn add-to-cart-btn"><i class="fa-solid fa-basket-shopping"></i></div>
                    </div>
                </div>
                <div class="product-info-block">
                    <h4 class="product-title">${product.title}</h4>
                    <div class="product-price">${priceHTML}</div>
                    <div class="rating-container">
                        <div class="stars">${buildStarsHTML(product.rating)}</div>
                        <span class="review-count">${product.reviews} Reviews</span>
                    </div>
                </div>
            </a>
        `;
    }

    function renderProducts(list) {
        if (list.length === 0) {
            productsGrid.innerHTML = '';
            noResultsMsg.style.display = 'block';
        } else {
            noResultsMsg.style.display = 'none';
            productsGrid.innerHTML = list.map(buildCardHTML).join('');
        }
        productCount.textContent = `Products (${list.length})`;
    }

    // ---------------------------------------------------------------
    // 3. FILTERING + SORTING LOGIC
    // ---------------------------------------------------------------
    function getCheckedValues(group) {
        return Array.from(filterInputs)
            .filter(input => input.dataset.filterGroup === group && input.checked)
            .map(input => input.value);
    }

    function applyFiltersAndSort() {
        const selectedCategories = getCheckedValues('category');
        const selectedTypes = getCheckedValues('type');
        const selectedRatings = getCheckedValues('rating').map(Number);

        let result = products.filter(product => {
            const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(product.category);
            const typeMatch = selectedTypes.length === 0 || selectedTypes.includes(product.type);
            const ratingMatch = selectedRatings.length === 0 || selectedRatings.some(minRating => product.rating >= minRating);
            return categoryMatch && typeMatch && ratingMatch;
        });

        switch (sortSelect.value) {
            case 'alpha-asc':
                result.sort((a, b) => a.title.localeCompare(b.title));
                break;
            case 'alpha-desc':
                result.sort((a, b) => b.title.localeCompare(a.title));
                break;
            case 'price-asc':
                result.sort((a, b) => a.price - b.price);
                break;
            case 'price-desc':
                result.sort((a, b) => b.price - a.price);
                break;
            case 'rating-desc':
                result.sort((a, b) => b.rating - a.rating);
                break;
        }

        renderProducts(result);
        updateFilterButtonState(selectedCategories.length + selectedTypes.length + selectedRatings.length);
    }

    function updateFilterButtonState(activeCount) {
        if (activeCount > 0) {
            filterToggleBtn.classList.add('active-filters');
            filterToggleBtn.innerHTML = `<i class="fa-solid fa-sliders"></i> Filter (${activeCount})`;
        } else {
            filterToggleBtn.classList.remove('active-filters');
            filterToggleBtn.innerHTML = `<i class="fa-solid fa-sliders"></i> Filter`;
        }
    }

    // ---------------------------------------------------------------
    // 4. EVENT BINDINGS
    // ---------------------------------------------------------------

    filterToggleBtn.addEventListener('click', () => {
        filterDrawer.classList.toggle('open');
    });

    gridLayoutBtn.addEventListener('click', () => {
        gridLayoutBtn.classList.add('active');
        listLayoutBtn.classList.remove('active');
        productsGrid.classList.remove('list-view');
    });
    listLayoutBtn.addEventListener('click', () => {
        listLayoutBtn.classList.add('active');
        gridLayoutBtn.classList.remove('active');
        productsGrid.classList.add('list-view');
    });

    sortSelect.addEventListener('change', applyFiltersAndSort);

    filterInputs.forEach(input => {
        input.addEventListener('change', applyFiltersAndSort);
    });

    clearFiltersBtn.addEventListener('click', () => {
        filterInputs.forEach(input => { input.checked = false; });
        sortSelect.value = 'alpha-asc';
        applyFiltersAndSort();
    });

    // ---------------------------------------------------------------
    // 5. CART + WISHLIST HANDLING
    // ---------------------------------------------------------------
    let cartCount = parseInt(localStorage.getItem('cartCount')) || 0;

    function updateCartBadge() {
        const cartCounterNode = document.getElementById('cartCounter');
        if (cartCounterNode) {
            cartCounterNode.textContent = cartCount;
            cartCounterNode.style.transform = 'scale(1.3)';
            setTimeout(() => { cartCounterNode.style.transform = 'scale(1)'; }, 200);
        }
    }

    productsGrid.addEventListener('click', (event) => {
        const cartBtn = event.target.closest('.add-to-cart-btn');
        const wishlistBtn = event.target.closest('.wishlist-btn');

        if (cartBtn) {
            event.preventDefault();
            event.stopPropagation();
            cartCount++;
            localStorage.setItem('cartCount', cartCount);
            updateCartBadge();
        }

        if (wishlistBtn) {
            event.preventDefault();
            event.stopPropagation();
            const heartIcon = wishlistBtn.querySelector('i');
            heartIcon.classList.toggle('fa-regular');
            heartIcon.classList.toggle('fa-solid');
            heartIcon.style.color = heartIcon.classList.contains('fa-solid') ? '#cc0000' : '';
        }
    });

    // ---------------------------------------------------------------
    // 6. INITIAL RENDER
    // ---------------------------------------------------------------
    applyFiltersAndSort();
    updateCartBadge();
});