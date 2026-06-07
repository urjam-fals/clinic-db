function showPage(pageId) {
    document.querySelectorAll('page').forEach(page => {
        page.classList.remove('active');
    });

    document.getElementById('page').classList.add('active');
}

// function toggleMobileMenu() {
//     const menu = document.getElementById("menu");
//     menu.classList.toggle("w3-show");

// }

// function toggleDesktopMenu() {
//     const menu = document.getElementById("menu-desktop");
//     menu.classList.toggle("w3-show");
// }

function toggleMenu(id) {
    document.getElementById(id).classList.toggle("w3-show");
}