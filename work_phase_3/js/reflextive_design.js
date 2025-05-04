/**
 * IMPORTS
 * Keep track of external modules being used
 * */
import { initAccordion } from "./modules/accordion.js";
import { fetchGetData } from "./modules/getData.js";

/**
 * CONSTANTS
 */
const PAGE_NAME = "reflective_design.js";

/**
 * VARIABLES
 */
let message = "Page has fully loaded";

/**
 * EVENT LISTENERS
 */
document.addEventListener("DOMContentLoaded", () => {
    initAccordion(".accordion");

    const container = document.getElementById("community-list");

    fetchGetData("https://yourdomain/api/community/", {
        student_number: "s1234567",
        uqcloud_zone_id: "abc123",
    }).then((data) => {
        if (!data) {
            container.innerHTML =
                '<p class="text-danger">Unable to load community members.</p>';
            return;
        }

        data.forEach((member) => {
            const card = document.createElement("article");
            card.className = "community-card";

            card.innerHTML = `
                <img src="${member.photo}" alt="Photo of ${member.name}" />
                <div class="card-body">
                    <h3>${member.name}</h3>
                    <p>${member.message || "No message provided."}</p>
                </div>
            `;

            container.appendChild(card);
        });
    });
});
