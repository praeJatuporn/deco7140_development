// IMPORTS
import { setupMenu } from "./modules/menu.js";
import { enableEditing } from "./modules/edit.js";

// CONSTANTS
const PAGE_NAME = "index.js";

// VARIABLES
let message = "Page has fully loaded";

// FUNCTIONS

function setupCalendarSearch() {
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
                    cell.classList.toggle("highlight", text.includes(keyword));
                } else {
                    cell.classList.remove("highlight");
                }
            });
        });

        searchInput.addEventListener("keypress", (e) => {
            if (e.key === "Enter") searchButton.click();
        });
    }
}

function setupAlbumSearch() {
    const searchInput = document.getElementById("album-search");
    const searchButton = document.querySelector(".search-btn");

    if (searchInput && searchButton) {
        searchButton.addEventListener("click", () => {
            const keyword = searchInput.value.toLowerCase().trim();

            // 🔍 ค้นหาอัลบั้ม
            const albumCards = document.querySelectorAll(".activity-card");
            albumCards.forEach((card) => {
                const text = card.textContent.toLowerCase();
                card.classList.toggle("highlight", text.includes(keyword));
            });

            // 🔍 ค้นหารูปภาพในแกลเลอรี
            const galleryItems = document.querySelectorAll(".image-item");
            galleryItems.forEach((item) => {
                const text = item.textContent.toLowerCase();
                item.classList.toggle("highlight", text.includes(keyword));
            });
        });

        searchInput.addEventListener("keypress", (e) => {
            if (e.key === "Enter") searchButton.click();
        });
    }
}

// EVENT LISTENERS
document.addEventListener("DOMContentLoaded", () => {
    setupMenu(PAGE_NAME, message);

    const editButton = document.querySelector(".edit-button");
    if (editButton) {
        editButton.addEventListener("click", enableEditing);
    }

    // 🔍 เพิ่มการค้นหาทั้งปฏิทินและอัลบั้ม+แกลเลอรี
    setupCalendarSearch();
    setupAlbumSearch();
});
