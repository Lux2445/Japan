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

const close = document.querySelector('.header__nav_close').addEventListener('click', function () {
    document.querySelector('.header__nav').classList.add('delite')
})

const active = document.querySelector('.header__burger').addEventListener('click', function () {
    document.querySelector('.header__nav').classList.remove('delite')
})