"use strict"

const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i)
    },
    BlackBarry: function () {
        return navigator.userAgent.match(/BlackBarry/i)
    },
    IOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i)
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i)
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i)
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBarry() ||
            isMobile.IOS() ||
            isMobile.Opera() ||
            isMobile.Windows()
        );
    }
}

if (isMobile.any()) {
    document.body.classList.add('_touch')

    let menuArrow = document.querySelectorAll('.menu__arrow')

    if (menuArrow.length > 0) {
        menuArrow.forEach(el => {
            el.addEventListener('click', () => {
                el.parentElement.classList.toggle('_active')
            })
        })
    }

} else {
    document.body.classList.add('_pc')
}

/*------------------------------------------------------------------------------------------*/
// Прокрутка при клике

const menuLinks = document.querySelectorAll('.menu__link[data-goto]')

if (menuLinks.length > 0) {
    
    menuLinks.forEach(el => {
        el.addEventListener('click', onMenuLinkClick)
    })

    function onMenuLinkClick(e) {
        console.log(e);
        const menuLink = e.target
    
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto)
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;
             
            if (iconMenu.classList.contains('_active')) {
                document.body.classList.remove('_lock')
                iconMenu.classList.remove('_active');
                menuBody.classList.remove('_active');
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: 'smooth'
            })

            e.preventDefault();
            
        }
    }
}

/*------------------------------------------------------------------------------------------*/
// Menu burger

const iconMenu = document.querySelector('.menu__icon')
const menuBody = document.querySelector('.menu__body')

if (iconMenu) {

    iconMenu.addEventListener('click', function () {
        document.body.classList.toggle('_lock')
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    })

}