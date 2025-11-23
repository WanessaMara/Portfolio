document.addEventListener("DOMContentLoaded", () => {

    fetch("menu.html")
        .then(r => r.text())
        .then(html => {

            document.getElementById("menu").innerHTML = html;

            // --- LINK ATIVO ---
            let currentPage = window.location.pathname.split("/").pop();

            // Caso abra como /Portfolio/
            if (currentPage === "" || currentPage.includes("Portfolio")) {
                currentPage = "index.html";
            }

            // Agora pega OS DOIS menus (desktop + mobile)
            const links = document.querySelectorAll(
                "#menu a, #menu-mobile a"   // funciona porque menu-mobile existe
            );

            links.forEach(link => {
                if (link.getAttribute("href") === currentPage) {
                    link.classList.add("active");
                }
            });

            // --- MENU MOBILE ---
            const btnMobile = document.querySelector("#btn-mobile");
            const menuMobile = document.querySelector("#menu-mobile");

            if (btnMobile && menuMobile) {
                btnMobile.addEventListener("click", () => {
                    menuMobile.classList.toggle("show");
                });
            }

            document.body.classList.add("loaded");
        });
});
