const navLinkList = document.querySelectorAll('.nav-link');

navLinkList.forEach(link => {
    link.addEventListener('click', (event) => {
        document.querySelector('.active')?.classList.remove('active');
        
        link.classList.add('active');
        
        if (link.getAttribute('href') === '#portfolio') {
            event.preventDefault();
            
            window.scrollTo({
                top: 0,
                behavior: 'smooth' 
            });
        }
    });
});

document.addEventListener('scroll', () => {
    const header = document.querySelector('header');

    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
})

let btn = document.getElementById('btn'); 
let logo = document.querySelector('.logo img')

btn.onclick = function() {
    document.body.classList.toggle('light');

    let darkLogo = logo.getAttribute('data-dark');
    let lightLogo = logo.getAttribute('data-light');

    let currentLogo = logo.getAttribute('src');
    
    if (currentLogo === darkLogo) {
        logo.setAttribute('src', lightLogo);
    } else {
        logo.setAttribute('src', darkLogo)
    }
}


