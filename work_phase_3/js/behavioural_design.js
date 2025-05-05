import { initAccordion } from "./modules/accordion.js";
import { postFormData } from "./modules/postFormData.js";
import { fetchGetData } from "./modules/getData.js";

document.addEventListener("DOMContentLoaded", () => {
    initAccordion(".accordion");

    // Handle form submission (POST)
    const form = document.getElementById("community-form");
    const feedback = document.getElementById("form-feedback");

    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        feedback.textContent = "Submitting...";

        const { success, data } = await postFormData(
            form,
            "https://damp-castle-86239-1b70ee448fbd.herokuapp.com/decoapi/community/",
            {
                student_number: "s4898675",
                uqcloud_zone_id: "59a50ef0",
            }
        );

        if (success) {
            feedback.textContent = data.message;
            form.reset();
        } else {
            feedback.textContent = data.message || "Something went wrong.";
        }
    });

    // Fetch and display community data (GET)
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
            const card = document.createElement("div");
            card.className = "card mb-3";
            card.innerHTML = `
                <div class="card-body">
                    <h5 class="card-title">${member.name}</h5>
                    <p class="card-text">${
                        member.message || "No message provided."
                    }</p>
                </div>
            `;
            container.appendChild(card);
        });
    });
});
