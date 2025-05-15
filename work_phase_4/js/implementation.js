/**
 * IMPORTS
 * Keep track of external modules being used
 */
import { fetchGetData } from "./modules/getData.js";

/**
 * CONSTANTS
 */
const PAGE_NAME = "implementation.js";

/**
 * VARIABLES
 */
let message = "Page has fully loaded";

/**
 * EVENT LISTENERS
 */
document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("community-list");

    fetchGetData(
        "https://damp-castle-86239-1b70ee448fbd.herokuapp.com/decoapi/community/",
        {
            student_number: "s4898675",
            uqcloud_zone_id: "59a50ef0",
        }
    ).then((data) => {
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
