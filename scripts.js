// Add active class to menu item when hovering
const menuItems = document.querySelectorAll('nav ul li a');

menuItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.classList.add('active');
    });
    
    item.addEventListener('mouseout', () => {
        item.classList.remove('active');
    });
});

// Change background color on scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#222';
    } else {
        navbar.style.backgroundColor = '#333';
    }
});
