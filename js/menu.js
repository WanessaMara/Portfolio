document.addEventListener("DOMContentLoaded", () => {
    fetch("menu.html")
        .then(response => response.text())
        .then(html => {

            // Insere o menu carregado
            document.getElementById("menu").innerHTML = html;

            // ---- MARCAR LINK ATIVO ----
            const currentPage = window.location.pathname.split("/").pop();
            const links = document.querySelectorAll("#menu nav a");

            links.forEach(link => {
                let linkPage = link.getAttribute("href");
                if (linkPage === currentPage) {
                    link.classList.add("active");
                }
            });

            // ---- MENU MOBILE ----
            const btnMobile = document.querySelector("#menu #btn-mobile");
            const menuMobile = document.querySelector("#menu #menu-mobile");

            if (btnMobile && menuMobile) {
                btnMobile.addEventListener("click", () => {
                    menuMobile.classList.toggle("show");
                });
            }

            // remove fade
            document.body.classList.add("loaded");
        });
});
