const ourContactsBlockOne = document.querySelector('.our-contacts__block-one')
const ourContactsBlockTwo = document.querySelector('.our-contacts__block-two')
const ourContactsBlockThree = document.querySelector('.our-contacts__block-three')
const ourContactsBlockActive = document.querySelector('.our-contacts__block-active')
const requirementsinfoContainerActive = document.querySelector('.requirements__container-active')
const ourСontactsBlockTitleActive = document.querySelector('.our-contacts__block-title-active')
const ourСontactsBlockTitleOne = document.querySelector('.our-contacts__block-title-one')
const ourСontactsBlockTitleTwo = document.querySelector('.our-contacts__block-title-two')
const ourСontactsBlockTitleThree = document.querySelector('.our-contacts__block-title-three')
const requirementsInfoContainerOne = document.querySelector('.requirements__container-one')
const requirementsInfoContainerTwo = document.querySelector('.requirements__container-two')

ourContactsBlockOne.addEventListener('click', () => {

    ourContactsBlockOne.classList.add('our-contacts__block-active')
    ourContactsBlockTwo.classList.remove('our-contacts__block-active')
    ourContactsBlockThree.classList.remove('our-contacts__block-active')
    requirementsInfoContainerOne.classList.add('requirements__container-active')
    requirementsInfoContainerTwo.classList.remove('requirements__container-active')
    ourСontactsBlockTitleOne.classList.add('our-contacts__block-title-active')
    ourСontactsBlockTitleTwo.classList.remove('our-contacts__block-title-active')
    ourСontactsBlockTitleThree.classList.remove('our-contacts__block-title-active')

})


ourContactsBlockTwo.addEventListener('click', () => {

    ourContactsBlockOne.classList.remove('our-contacts__block-active')
    ourContactsBlockTwo.classList.add('our-contacts__block-active')
    ourContactsBlockThree.classList.remove('our-contacts__block-active')
    requirementsInfoContainerOne.classList.remove('requirements__container-active')
    requirementsInfoContainerTwo.classList.add('requirements__container-active')
    ourСontactsBlockTitleOne.classList.remove('our-contacts__block-title-active')
    ourСontactsBlockTitleTwo.classList.add('our-contacts__block-title-active')
    ourСontactsBlockTitleThree.classList.remove('our-contacts__block-title-active')

})

ourContactsBlockThree.addEventListener('click', () => {

    ourContactsBlockOne.classList.remove('our-contacts__block-active')
    ourContactsBlockTwo.classList.remove('our-contacts__block-active')
    ourContactsBlockThree.classList.add('our-contacts__block-active')
    requirementsInfoContainerOne.classList.remove('requirements__container-active')
    requirementsInfoContainerTwo.classList.add('requirements__container-active')
    ourСontactsBlockTitleOne.classList.remove('our-contacts__block-title-active')
    ourСontactsBlockTitleTwo.classList.remove('our-contacts__block-title-active')
    ourСontactsBlockTitleThree.classList.add('our-contacts__block-title-active')

})



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