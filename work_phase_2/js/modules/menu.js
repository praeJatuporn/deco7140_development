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

    if (!menuToggle || !menu) {
        console.error("[Menu] .menu-toggle or .menu not found in DOM");
        return;
    }

    // Prevent clicks inside the menu from closing it
    menu.addEventListener("click", (event) => {
        event.stopPropagation();
    });

    // Toggle menu visibility when hamburger button is clicked
    menuToggle.addEventListener("click", (event) => {
        event.stopPropagation();
        menu.classList.toggle("show");
    });

    // Close menu when clicking outside and menu is open
    document.addEventListener("click", () => {
        if (menu.classList.contains("show")) {
            menu.classList.remove("show");
        }
    });
}
