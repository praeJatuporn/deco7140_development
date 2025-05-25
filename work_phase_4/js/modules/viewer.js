document.addEventListener("DOMContentLoaded", () => {
    const imageItems = document.querySelectorAll(".image-item");

    // สร้าง modal viewer แบบ WCAG-compliant
    const modal = document.createElement("div");
    modal.classList.add("modal-viewer");
    modal.innerHTML = `
        <button class="close-btn" type="button" aria-label="Close viewer">&times;</button>
        <img src="" alt="Expanded image" />
        <p class="modal-caption" aria-live="polite"></p>
    `;
    document.body.appendChild(modal);

    const modalImg = modal.querySelector("img");
    const modalCaption = modal.querySelector(".modal-caption");
    const closeBtn = modal.querySelector(".close-btn");

    // เมื่อผู้ใช้คลิกที่ภาพ thumbnail
    imageItems.forEach((item) => {
        const img = item.querySelector("img");
        const caption = item.querySelector("p");

        if (img) {
            img.addEventListener("click", () => {
                modalImg.src = img.src;
                modalImg.alt = img.alt || "Expanded image";
                modalCaption.textContent = caption?.textContent || "";
                modal.classList.add("active");
                closeBtn.focus(); // เพิ่ม accessibility โดยโฟกัสปุ่ม
            });
        }
    });

    // ปิด modal เมื่อกดปุ่มปิด
    closeBtn.addEventListener("click", () => {
        modal.classList.remove("active");
        modalImg.src = "";
        modalCaption.textContent = "";
    });

    // ปิด modal เมื่อคลิกพื้นที่นอกภาพ
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.remove("active");
            modalImg.src = "";
            modalCaption.textContent = "";
        }
    });

    // ปิด modal เมื่อกดปุ่ม ESC
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modal.classList.contains("active")) {
            modal.classList.remove("active");
            modalImg.src = "";
            modalCaption.textContent = "";
        }
    });
});
