/**
 * main.js
 * Entry point script to initialize site-wide JS behavior
 */

// IMPORTS
import { setupMenu } from "./modules/menu.js";

// CONSTANTS
const PAGE_NAME = "index.js";

// VARIABLES
let message = "Page has fully loaded";

// EVENT LISTENERS
document.addEventListener("DOMContentLoaded", () => {
    setupMenu(PAGE_NAME, message);
});
