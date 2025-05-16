export function enableEditing() {
    const profileDetails = document.getElementById("profileDetails");
    const values = profileDetails.querySelectorAll(".value");

    values.forEach((span) => {
        const key = span.getAttribute("data-key");
        const current = span.innerText;
        const input = document.createElement("input");
        input.type = "text";
        input.name = key;
        input.value = current;
        input.classList.add("editable-input");
        span.replaceWith(input);
    });

    // สลับปุ่ม
    const oldButton = profileDetails.querySelector(".edit-button");
    const newButton = oldButton.cloneNode(true);
    newButton.textContent = "Save";
    newButton.classList.add("save-button");
    newButton.classList.remove("edit-button");

    newButton.addEventListener("click", saveChanges);
    oldButton.replaceWith(newButton);
}

function saveChanges() {
    const profileDetails = document.getElementById("profileDetails");
    const inputs = profileDetails.querySelectorAll("input");

    inputs.forEach((input) => {
        const span = document.createElement("span");
        span.classList.add("value");
        span.setAttribute("data-key", input.name);
        span.innerText = input.value;
        input.replaceWith(span);
    });

    // แสดงข้อความยืนยัน
    alert("Profile saved successfully!");

    // สลับปุ่มกลับ
    const oldButton = profileDetails.querySelector(".save-button");
    const newButton = oldButton.cloneNode(true);
    newButton.textContent = "Edit Profile";
    newButton.classList.add("edit-button");
    newButton.classList.remove("save-button");

    newButton.addEventListener("click", enableEditing);
    oldButton.replaceWith(newButton);
}
