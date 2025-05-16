/**
 * menu.js
 * Setup navigation menu behavior for both desktop and mobile.
 * Supports toggling of submenus and sub-submenus with full touch compatibility.
 */

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

        // Utility: Add both click and touchstart listeners
        function addToggleListener(links, level = "submenu") {
            links.forEach((link) => {
                ["click", "touchstart"].forEach((evtType) => {
                    link.addEventListener(evtType, (event) => {
                        const parent = link.parentElement;
                        const submenu = parent.querySelector(".submenu");
                        const isMobile = window.innerWidth < 768;

                        if (submenu && isMobile) {
                            event.preventDefault();

                            // Close other open submenus at same level
                            const scope =
                                level === "submenu"
                                    ? document.querySelectorAll(
                                          ".menu > li.show-submenu"
                                      )
                                    : parent
                                          .closest(".submenu")
                                          .querySelectorAll("li.show-submenu");

                            scope.forEach((item) => {
                                if (item !== parent) {
                                    item.classList.remove("show-submenu");
                                }
                            });

                            parent.classList.toggle("show-submenu");
                        }
                    });
                });
            });
        }

        // Handle submenu toggles (level 1)
        const submenuToggles = document.querySelectorAll(
            ".menu > li.has-submenu > a"
        );
        addToggleListener(submenuToggles, "submenu");

        // Handle nested submenu toggles (level 2)
        const nestedSubmenuToggles = document.querySelectorAll(
            ".menu li.has-submenu .submenu li.has-submenu > a"
        );
        addToggleListener(nestedSubmenuToggles, "sub-submenu");
    }
}

export { setupMenu };
