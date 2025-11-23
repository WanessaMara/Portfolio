document.addEventListener("DOMContentLoaded", () => {

    fetch("menu.html")
        .then(response => response.text())
        .then(html => {

            // Insere o menu carregado
            document.getElementById("menu").innerHTML = html;

            // === Marcar link ativo ===
            const currentPage = window.location.pathname.split("/").pop();
            const links = document.querySelectorAll("#menu a");

            links.forEach(link => {
                if (link.getAttribute("href") === currentPage) {
                    link.classList.add("active");
                }
            });

            // === MENU MOBILE ===
            const btnMobile = document.querySelector("#menu #btn-mobile");
            const menuMobile = document.querySelector("#menu-mobile");

            if (btnMobile) {
                btnMobile.addEventListener("click", () => {
                    menuMobile.classList.toggle("show");
                });
            }

            // remove fade
            document.body.classList.add("loaded");
        });
});
