

const initAnimaScroll = () => {
    const sections = document.querySelectorAll('.js-scroll');
    const windowMetade = window.innerHeight * 0.7;

    const animaScroll = () => {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const isSectionVisible = (sectionTop - windowMetade) < 0;

            if (isSectionVisible) {
                section.classList.add('ativado');
            } else {
                section.classList.remove('ativado');
            }
        });
    };

    animaScroll();
    window.addEventListener('scroll', animaScroll);
};

initAnimaScroll();

const iniciarAnimaLink = () =>{
    const linksInternos = document.querySelectorAll (".lista-primaria a[href^='#']");

    const animaLink = (event) =>{
       event.preventDefault();
        const href = event.currentTarget.getAttribute("href");
        const secao = document.querySelector(href);
        console.log(href)
        console.log(secao)
        secao.scrollIntoView({
            behavior: 'smooth',
            block: "start",
        });
    }
    linksInternos.forEach(link => {
        link.addEventListener("click", animaLink);
    })

}
iniciarAnimaLink();





const btnMobile = document.querySelector('#btn-mobile');

const toggleMenu = (event) =>{
    if(event.type === 'touchstart'){
        event.preventDefault();
    }
const nav = document.querySelector('.nav-primaria');
    nav.classList.toggle('ativo')

}

btnMobile.addEventListener('click', toggleMenu)
btnMobile.addEventListener('touchstart', toggleMenu)