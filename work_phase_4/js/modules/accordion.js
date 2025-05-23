/**
 * accordion.js
 * เปิด/ปิด accordion อย่างเรียบง่ายและเข้ากับฟอร์มแบบ nested
 */

function initAccordion(selector) {
    const accordions = document.querySelectorAll(selector);

    accordions.forEach((accordion) => {
        accordion.addEventListener("click", (e) => {
            const header = e.target.closest(".accordion-header");
            if (!header) return;

            const item = header.closest(".accordion-item");
            const isOpen = item.classList.contains("open");

            // ปิดทั้งหมดภายใต้ accordion เดียวกัน
            accordion.querySelectorAll(".accordion-item").forEach((el) =>
                el.classList.remove("open")
            );

            // เปิด item ที่คลิกถ้ายังไม่เปิด
            if (!isOpen) {
                item.classList.add("open");
            }
        });
    });
}

export { initAccordion };
