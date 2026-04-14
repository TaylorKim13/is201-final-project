/*!
* Start Bootstrap - Creative v7.0.7 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Activate SimpleLightbox plugin for portfolio items
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });

    // Masthead background slideshow
    const leftImages = [
        'https://m.media-amazon.com/images/I/81kz06oSUeL.jpg',
        'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1592cb7c-9b89-4b7c-9cd7-61c44913dd58/d9bjt5a-88f0bd9e-c3d5-49a6-babe-d03c263fc2e5.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi8xNTkyY2I3Yy05Yjg5LTRiN2MtOWNkNy02MWM0NDkxM2RkNTgvZDlianQ1YS04OGYwYmQ5ZS1jM2Q1LTQ5YTYtYmFiZS1kMDNjMjYzZmMyZTUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.s3SAsOyLUccU326baP3VS8jvStjrN5B3TRudwigKy9c',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqrYwap1XaZplAXl08fLFjvOovWW_E4xMxNg&s',
        'https://static0.colliderimages.com/wordpress/wp-content/uploads/2019/10/star-wars-the-force-awakens-poster-405x600.jpg?q=50&fit=crop&w=405&dpr=1.5',
        'https://m.media-amazon.com/images/I/71zR7dYIjzL._AC_UF894,1000_QL80_.jpg'
    ];

    const rightImages = [
        'https://m.media-amazon.com/images/I/91EmWoPK3+L.jpg',
        'https://lh6.googleusercontent.com/proxy/pVIAnvk9eTtBdFEkWqvE_t7c7k6kB3FajSebcusBGjU2OBMNyTi24vOol7LBKW_zxRbkM7FopOwaCQA4l6OR6uadlh3eN0fz2w-zCXSEoh9S__KhkxY1gP0',
        'https://lh3.googleusercontent.com/proxy/DOvYPrHWbtJZ382M-e9cWJUiOSLgnaU_K_VLjGVpOysqyDdQKRfyUyDSftBJ-k6j8pm0xEXW_ogknIWzgH2n34OWrrVLzMrSEA50l0l_tCfhghWx58EsCvg1F6wgWxTajCC6CNFvdw',
        'https://assets-prd.ignimgs.com/2025/11/14/mog-tsrsheet4-pyramid-rgb-1-1763159409909.jpg'
    ];

    const masthead = document.querySelector('header.masthead');
    if (masthead && leftImages.length > 0) {
        const layers = [document.createElement('div'), document.createElement('div')];
        layers.forEach(layer => layer.className = 'masthead-bg');
        masthead.insertBefore(layers[0], masthead.firstChild);
        masthead.insertBefore(layers[1], masthead.firstChild);

        let currentIndex = 0;
        let activeLayer = 0;

        const setLayerBackground = (layer, leftUrl, rightUrl) => {
            layer.style.backgroundImage = `linear-gradient(to bottom, rgba(92, 77, 66, 0.8) 0%, rgba(92, 77, 66, 0.8) 100%), url("${leftUrl}"), url("${rightUrl}")`;
        };

        const preloadImage = url => {
            const img = new Image();
            img.src = url;
        };
        leftImages.forEach(preloadImage);
        rightImages.forEach(preloadImage);

        setLayerBackground(layers[0], leftImages[0], rightImages[0 % rightImages.length]);
        layers[0].classList.add('active');
        if (leftImages.length > 1) {
            setLayerBackground(layers[1], leftImages[1], rightImages[1 % rightImages.length]);
        }

        setInterval(() => {
            const nextIndex = (currentIndex + 1) % leftImages.length;
            const nextRightIndex = nextIndex % rightImages.length;
            const nextLayer = layers[1 - activeLayer];
            setLayerBackground(nextLayer, leftImages[nextIndex], rightImages[nextRightIndex]);
            nextLayer.classList.add('active');
            layers[activeLayer].classList.remove('active');
            activeLayer = 1 - activeLayer;
            currentIndex = nextIndex;
        }, 5000);
    }

});
