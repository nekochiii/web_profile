document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    const content = document.querySelector('.content');
    
    menuToggle.addEventListener('click', function() {
        sidebar.classList.toggle('active');
        content.classList.toggle('active');
    });

    const menuLinks = document.querySelectorAll('.menu a');
    const pages = document.querySelectorAll('.page');
    
    menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            if (window.innerWidth <= 768) {
                sidebar.classList.remove('active');
                content.classList.remove('active');
            }

            menuLinks.forEach(l => l.classList.remove('active'));
            pages.forEach(page => page.classList.remove('active'));

            this.classList.add('active');

            const target = this.getAttribute('href');
            document.querySelector(target).classList.add('active');
        });
    });

    content.addEventListener('click', function() {
        if (window.innerWidth <= 768 && sidebar.classList.contains('active')) {
            sidebar.classList.remove('active');
            content.classList.remove('active');
        }
    });
});
