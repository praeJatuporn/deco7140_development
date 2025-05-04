document.addEventListener("DOMContentLoaded", () => {
    const photoInput = document.getElementById("photo");

    const fileStatus = document.getElementById("file-status");

    const joinButton = document.getElementById("join-btn");

    const successMessage = document.getElementById("success-message");

    // File selection status

    photoInput.addEventListener("change", () => {
        if (photoInput.files.length > 0) {
            fileStatus.textContent = photoInput.files[0].name;
        } else {
            fileStatus.textContent = "No file chosen";
        }
    });

    // Displaying a message after pressing "Join the Community"

    joinButton.addEventListener("click", (event) => {
        event.preventDefault(); //

        successMessage.style.display = "block"; // Join success message
    });
});

import { postFormData } from "./modules/postFormData.js";

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("community-form");

    const feedback = document.getElementById("form-feedback");

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        feedback.textContent = "Submitting...";

        const { success, data } = await postFormData(
            form,

            "INSERT_API_ENDPOINT",

            {
                student_number: "s4898675",

                uqcloud_zone_id:
                    "sftp://deco7140-59a50ef0.zones.eait.uq.edu.au ",
            }
        );

        if (success) {
            feedback.textContent = data.message;

            form.reset();
        } else {
            feedback.textContent = data.message || "Something went wrong.";
        }
    });
});

// Checking the join success status after pressing "Join the Community"

import { postFormData } from "./modules/postFormData.js";

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("community-form");

    const feedback = document.getElementById("form-feedback");

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        feedback.textContent = "Submitting...";

        const { success, data } = await postFormData(
            form,

            "INSERT_API_ENDPOINT",

            {
                student_number: "s4898675",

                uqcloud_zone_id:
                    "sftp://deco7140-59a50ef0.zones.eait.uq.edu.au ",
            }
        );

        if (success) {
            feedback.textContent = data.message;

            form.reset();
        } else {
            feedback.textContent = data.message || "Something went wrong.";
        }
    });
});
