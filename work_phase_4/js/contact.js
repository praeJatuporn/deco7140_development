import { postFormData } from "./modules/postFormData.js";
import { fetchGetData } from "./modules/getData.js";

document.addEventListener("DOMContentLoaded", () => {
    // Handle form submission (POST)
    const form = document.getElementById("community-form");
    const feedback = document.getElementById("form-feedback");

    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        feedback.textContent = "Sending your message...";

        const { success, data } = await postFormData(
            form,
            "https://damp-castle-86239-1b70ee448fbd.herokuapp.com/decoapi/community/",
            {
                student_number: "s4898675",
                uqcloud_zone_id: "59a50ef0",
            }
        );

        if (success) {
            feedback.textContent = "Thank you! Your message has been sent successfully.";
            feedback.className = "success";
            form.reset();
        } else {
            feedback.textContent = data.message || "Oops! Something went wrong. Please try again.";
            feedback.className = "error";
        }
    });

    // Optional: Fetch and display messages or contacts (GET)
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
                '<p class="text-danger">Unable to load messages.</p>';
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
