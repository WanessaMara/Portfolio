document.addEventListener("DOMContentLoaded", () => {
    fetch("menu.html")
        .then(response => response.text())
        .then(html => {

            // Insere o menu carregado
            document.getElementById("menu").innerHTML = html;

            // ---- MARCAR LINK ATIVO ----
            const links = document.querySelectorAll("nav a");
            const path = window.location.pathname;
            links.forEach(link => {
                if (link.getAttribute("href") === path) {
                    link.classList.add("active");
                }
            });

            // ---- MENU MOBILE ----
            const btnMobile = document.getElementById("btn-mobile");
            const menuMobile = document.getElementById("menu-mobile");

            if (btnMobile && menuMobile) {
                btnMobile.addEventListener("click", () => {
                    menuMobile.classList.toggle("show");
                });
            }

            // remove fade
            document.body.classList.add("loaded");
        });
});
