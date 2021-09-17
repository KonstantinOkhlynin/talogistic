const headerMainIconMenuMobile = document.querySelector('.header-main__icon-menu-mobile')
const menuClose = document.querySelector('.menu__close')
const menu = document.querySelector('.menu')
const headerMain = document.querySelector('.header-main')
const main = document.querySelector('.main')
const footer = document.querySelector('.footer')

headerMainIconMenuMobile.addEventListener('click', () => {
    menu.classList.add('menu__active')
    headerMain.classList.add('menu__disabled')
    main.classList.add('menu__disabled')
    footer.classList.add('menu__disabled')
})

menuClose.addEventListener('click', () => {
    menu.classList.remove('menu__active')
    headerMain.classList.remove('menu__disabled')
    main.classList.remove('menu__disabled')
    footer.classList.remove('menu__disabled')
})
