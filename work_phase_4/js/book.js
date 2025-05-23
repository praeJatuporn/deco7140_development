import { initAccordion } from "./modules/accordion.js";
import { postFormData } from "./modules/postFormData.js";
import { fetchGetData } from "./modules/getData.js";

const form = document.getElementById("event-booking-form");
const selectedEventDisplay = document.getElementById("selected-event");
const feedbackEl = document.getElementById("form-feedback");

// ✅ Accordion
initAccordion(".accordion");

// ✅ Show selected event in real time
form.addEventListener("change", (e) => {
    if (e.target.name === "event") {
        selectedEventDisplay.textContent = `You selected: ${e.target.value}`;
    }
});

// ✅ Submit form
form.addEventListener("submit", async (e) => {
    e.preventDefault();
    feedbackEl.textContent = "Sending...";

    const { success, data } = await postFormData(
        form,
        "https://damp-castle-86239-1b70ee448fbd.herokuapp.com/decoapi/community/",
        {
            student_number: "s4898675",
            uqcloud_zone_id: "59a50ef0",
        }
    );

    if (success) {
        feedbackEl.textContent = `✅ Registration successful for: ${form.event.value}`;
        form.reset();
        selectedEventDisplay.textContent = "";
    } else {
        feedbackEl.textContent = `❌ Registration failed. ${
            data.message || "Try again later."
        }`;
    }
});
