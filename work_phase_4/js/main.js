/**
 * main.js
 * Entry point script to initialize site-wide JS behavior
 */

// IMPORTS
import { setupMenu } from "./modules/menu.js";
import { enableEditing } from "./modules/edit.js";

// CONSTANTS
const PAGE_NAME = "index.js";

// VARIABLES
let message = "Page has fully loaded";

// EVENT LISTENERS
document.addEventListener("DOMContentLoaded", () => {
    setupMenu(PAGE_NAME, message);

    // ✅ ผูก event ให้ปุ่ม Edit Profile แค่ตอนโหลดครั้งแรก
    const editButton = document.querySelector(".edit-button");
    if (editButton) {
        editButton.addEventListener("click", enableEditing);
    }

    // 🔍 Event Search Functionality
    const searchInput = document.getElementById("event-search");
    const searchButton = document.querySelector(".search-btn");

    if (searchInput && searchButton) {
        searchButton.addEventListener("click", () => {
            const keyword = searchInput.value.toLowerCase().trim();
            const cells = document.querySelectorAll(".calendar-cell");

            cells.forEach((cell) => {
                const link = cell.querySelector(".event-link");
                if (link) {
                    const text = link.textContent.toLowerCase();
                    if (text.includes(keyword)) {
                        cell.classList.add("highlight");
                    } else {
                        cell.classList.remove("highlight");
                    }
                } else {
                    cell.classList.remove("highlight");
                }
            });
        });

        // Press Enter to Search
        searchInput.addEventListener("keypress", (e) => {
            if (e.key === "Enter") {
                searchButton.click();
            }
        });
    }
});
