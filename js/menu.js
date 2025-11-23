document.addEventListener("DOMContentLoaded", () => {

    fetch("menu.html")
        .then(r => r.text())
        .then(html => {

            document.getElementById("menu").innerHTML = html;

            // --- LINK ATIVO ---
            let currentPage = window.location.pathname.split("/").pop();
            if (currentPage === "" || currentPage === "/") {
                currentPage = "index.html";
            }

            const links = document.querySelectorAll("#menu a");

            links.forEach(link => {
                if (link.getAttribute("href") === currentPage) {
                    link.classList.add("active");
                }
            });

            // --- MENU MOBILE ---
            const btnMobile = document.querySelector("#menu #btn-mobile");
            const menuMobile =
                document.querySelector("#menu #menu-mobile") ||
                document.querySelector("#menu-mobile");

            if (btnMobile && menuMobile) {
                btnMobile.addEventListener("click", () => {
                    menuMobile.classList.toggle("show");
                });
            }

            document.body.classList.add("loaded");
        });
});
