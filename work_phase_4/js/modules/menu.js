function setupMenu(page, msg) {
    console.log(`[${page}] ${msg}`);

    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");

    if (menuToggle && menu) {
        // ✅ Toggle main menu (mobile)
        menuToggle.addEventListener("click", () => {
            menu.classList.toggle("show");
        });

        // ✅ Close menu and submenus when clicking outside
        document.addEventListener("click", (event) => {
            if (
                !menu.contains(event.target) &&
                !menuToggle.contains(event.target)
            ) {
                menu.classList.remove("show");
                document
                    .querySelectorAll(".menu li.show-submenu")
                    .forEach((item) => {
                        item.classList.remove("show-submenu");
                    });
            }
        });

        // ✅ Toggle submenu (level 1) on mobile
        const submenuToggles = document.querySelectorAll(
            ".menu > li.has-submenu > a"
        );

        submenuToggles.forEach((link) => {
            link.addEventListener("click", (event) => {
                const parent = link.parentElement;
                const submenu = parent.querySelector(".submenu");
                const isMobile = window.innerWidth < 768;

                if (submenu && isMobile) {
                    event.preventDefault();

                    // ปิดเมนูย่อยอื่น ๆ
                    document
                        .querySelectorAll(".menu > li.show-submenu")
                        .forEach((item) => {
                            if (item !== parent) {
                                item.classList.remove("show-submenu");
                            }
                        });

                    parent.classList.toggle("show-submenu");
                }
            });
        });

        // ✅ Toggle sub-submenu (level 2) on mobile
        const nestedSubmenuToggles = document.querySelectorAll(
            ".menu li.has-submenu .submenu li.has-submenu > a"
        );

        nestedSubmenuToggles.forEach((link) => {
            link.addEventListener("click", (event) => {
                const parent = link.parentElement;
                const submenu = parent.querySelector(".submenu");
                const isMobile = window.innerWidth < 768;

                if (submenu && isMobile) {
                    event.preventDefault();

                    // ปิด sub-submenu อื่น ๆ
                    parent
                        .closest(".submenu")
                        .querySelectorAll("li.show-submenu")
                        .forEach((item) => {
                            if (item !== parent) {
                                item.classList.remove("show-submenu");
                            }
                        });

                    parent.classList.toggle("show-submenu");
                }
            });
        });
    }
}

export { setupMenu };
