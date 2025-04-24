// js/modules/menu.js

/**
 * Sets up the responsive navigation menu toggle.
 *
 * @param {string} pageName — the name of the current page (for logging)
 * @param {string} message — a message to log when the menu is initialized
 */
export function setupMenu(pageName, message) {
    console.log(`[Menu] ${pageName}: ${message}`);

    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");

    if (menuToggle && menu) {
        // Toggle menu visibility
        menuToggle.addEventListener("click", () => {
            menu.classList.toggle("show");
        });

        // Optional: Close menu when clicking outside
        document.addEventListener("click", (event) => {
            if (
                !menu.contains(event.target) &&
                !menuToggle.contains(event.target)
            ) {
                menu.classList.remove("show");
            }
        });
    } else {
        console.error("[Menu] ไม่พบ .menu-toggle หรือ .menu ใน DOM");
    }
}

