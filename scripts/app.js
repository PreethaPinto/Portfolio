//Add active tab on select
const navLinkList = document.querySelectorAll('.icon');

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

let nav = document.querySelector('header');
let prevScrollPosition = window.pageYOffset;

window.addEventListener('scroll', () => {
    let currentScrollPosition = window.pageYOffset;

    if (prevScrollPosition < currentScrollPosition) {
        // Scrolling down, hide the navbar
        nav.classList.add('hide');
    } else {
        // Scrolling up, show the navbar
        nav.classList.remove('hide');
    }

    prevScrollPosition = currentScrollPosition;
});



//Add light mode
let btn = document.getElementById('btn'); 
let logo = document.querySelector('.logo img')

btn.onclick = function() {
    document.body.classList.toggle('light');

    let darkLogo = logo.getAttribute('data-dark');
    let lightLogo = logo.getAttribute('data-light');

    let currentLogo = logo.getAttribute('src');
    
    if (currentLogo === darkLogo) {
        logo.setAttribute('src', lightLogo);

        btn.innerHTML = '<i class="fa-solid fa-moon" style="cursor: pointer; font-size: 24px;"></i>';
        
    } else {
        logo.setAttribute('src', darkLogo);

        btn.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }   
}

//Clear form after going back to page
window.onload = function() {
    // Reset the form fields when the page loads
    document.getElementById("form").reset();
};



function toggleMenu() {
    const responsiveMenu = document.querySelector('.hamburger-nav');
    const iconBars = document.querySelector('.open-icon');
    const iconX = document.querySelector('.close-icon');

    if (responsiveMenu.style.display === 'block') {
        responsiveMenu.style.display = 'none';
        iconBars.style.display = 'block';
        iconX.style.display = 'none';
    } else {
        responsiveMenu.style.display = 'block';
        iconBars.style.display = 'none';
        iconX.style.display = 'block';
    }
    
}


function hideMenu() {
const closeResponsiveMenu = document.querySelector('.hamburger-nav');
closeResponsiveMenu.style.display = 'none';
const iconBars = document.querySelector('.open-icon');
    const iconX = document.querySelector('.close-icon');
    iconBars.style.display = 'block'; 
    iconX.style.display = 'none';
}

