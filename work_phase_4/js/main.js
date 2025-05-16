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
});
