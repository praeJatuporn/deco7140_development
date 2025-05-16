function setupMenu(page, msg) {
    console.log(`[${page}] ${msg}`);

    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");

    if (menuToggle && menu) {
        // Toggle main menu (mobile)
        menuToggle.addEventListener("click", () => {
            menu.classList.toggle("show");
        });

        // Close menu and all submenus when clicking outside
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

        // Handle all submenu toggles on mobile
        const submenuToggles = document.querySelectorAll(
            ".menu li.has-submenu > a"
        );

        submenuToggles.forEach((link) => {
            link.addEventListener("click", (event) => {
                const parent = link.parentElement;
                const submenu = parent.querySelector(".submenu");
                const isMobile = window.innerWidth < 768;

                if (submenu && isMobile) {
                    event.preventDefault();

                    // 🔁 ปิด submenu ที่เปิดอยู่ ยกเว้นตัวที่คลิก
                    document
                        .querySelectorAll(".menu li.show-submenu")
                        .forEach((item) => {
                            if (item !== parent && !item.contains(parent)) {
                                item.classList.remove("show-submenu");
                            }
                        });

                    // Toggle current submenu
                    parent.classList.toggle("show-submenu");
                }
            });
        });
    }
}

export { setupMenu };
