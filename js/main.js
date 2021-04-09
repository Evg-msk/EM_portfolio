window.addEventListener('DOMContentLoaded', () => {
    new WOW().init();

    const mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        autoplay: true,
        autoHeight: true,
        mobile: true,
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },

    });

    const contactBtn = document.querySelector('.btn');
    const closeBtn = document.querySelector('.close');
    const pageLayout = document.querySelector('.overlay');

    contactBtn.addEventListener('click', () => {
        pageLayout.style.display = 'block';
        contactBtn.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });

    closeBtn.addEventListener('click', () => {
        pageLayout.style.display = 'none';
        contactBtn.classList.remove('more-splash');
        document.body.style.overflow = '';
    });
});