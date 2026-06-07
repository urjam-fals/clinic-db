function showPage(pageId) {
    document.querySelectorAll('page').forEach(page => {
        page.classList.remove('active');
    });

    document.getElementById('page').classList.add('active');
}

function toggleMenu() {
    const menu = document.getElementById("menu");

    if (menu.classList.contains("w3-show")) {
        menu.classList.remove("w3-show");
    } else {
        menu.classList.add("w3-show");
    }
}