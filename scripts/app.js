const navLinkList = document.querySelectorAll('.nav-link');

navLinkList.forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.active')?.classList.remove('active')
        link.classList.add('active');
    });
});