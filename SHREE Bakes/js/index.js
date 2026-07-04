document.addEventListener("DOMContentLoaded", () => {

    // 1. CART COUNTER, SHARED VIA localStorage ACROSS PAGES
    let cartCount = parseInt(localStorage.getItem('cartCount')) || 0;
    const cartCounterNode = document.getElementById('cartCounter');
    if (cartCounterNode) {
        cartCounterNode.textContent = cartCount;
    }

    // 2. ADD TO CART FROM BEST SELLERS BASKET ICON
    document.querySelectorAll('.action-btn .fa-basket-shopping').forEach(basketIcon => {
        basketIcon.closest('.action-btn').addEventListener('click', () => {
            cartCount++;
            localStorage.setItem('cartCount', cartCount);
            if (cartCounterNode) {
                cartCounterNode.textContent = cartCount;
                cartCounterNode.style.transform = 'scale(1.3)';
                setTimeout(() => { cartCounterNode.style.transform = 'scale(1)'; }, 200);
            }
        });
    });

    // 3. WISHLIST HEART TOGGLE
    document.querySelectorAll('.action-btn .fa-heart').forEach(heartIcon => {
        heartIcon.closest('.action-btn').addEventListener('click', function () {
            heartIcon.classList.toggle('fa-regular');
            heartIcon.classList.toggle('fa-solid');
            heartIcon.style.color = heartIcon.classList.contains('fa-solid') ? '#cc0000' : '';
        });
    });

    // 4. NEWSLETTER SUBSCRIBE FORM
    const searchBox = document.querySelector('.search-box');
    if (searchBox) {
        const subscribeBtn = searchBox.querySelector('button');
        const emailInput = searchBox.querySelector('input[type="email"]');

        subscribeBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const email = emailInput.value.trim();

            if (!email || !email.includes('@')) {
                emailInput.style.borderColor = '#cc0000';
                return;
            }

            emailInput.style.borderColor = '';
            subscribeBtn.textContent = 'Subscribed';
            emailInput.value = '';

            setTimeout(() => {
                subscribeBtn.textContent = 'Subscribe';
            }, 3000);
        });
    }

    // 5. VIDEO BANNER PLAY BUTTON
    const playBtn = document.querySelector('.play-btn');
    if (playBtn) {
        playBtn.addEventListener('click', () => {
            alert('Video coming soon!');
        });
    }

    // 6. STICKY HEADER SHRINK ON SCROLL
    const siteHeader = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            siteHeader.style.boxShadow = '0 2px 10px rgba(0,0,0,0.06)';
        } else {
            siteHeader.style.boxShadow = 'none';
        }
    });

});