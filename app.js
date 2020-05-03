const navSlide = () => {
    const burger = document.querySelector('.burger-menu');
    const nav = document.querySelector('.nav-links');
    const singleLink = document.querySelectorAll('.nav-links li')
    
    burger.addEventListener('click', () => {

        //toggle
        nav.classList.toggle('nav-active')

        //animate link

        singleLink.forEach((link,index) => {
            if (link.style.animation) {
                link.style.animation = '' //every time I click, anim goes
            } else {
                link.style.animation = `Fade 0.5s ease forwards ${index / 7 + 0.3}s`; // give delay
            }
        })

        //Burger Animation

        burger.classList.toggle('toggle')
    });


}

navSlide();