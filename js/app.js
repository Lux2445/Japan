(function(){
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if(window.pageYOffset > 50) {
            header.classList.add('header__active');
        } else {
            header.classList.remove('header__active')
        }
    }
})();

(function() {
    const burger = document.querySelector('.header__burger')
    const menu = document.querySelector('.header__nav')
    const closeItem = document.querySelector('.header__nav_close')

    burger.addEventListener('click', ()  => {
        menu.classList.add('header__nav_active')
    });

    closeItem.addEventListener('click', () => {
        menu.classList.remove('header__nav_active')
    })
}) ();