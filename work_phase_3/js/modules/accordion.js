//For open and close each header accordion by clicking
function initAccordion(containerSelector) {
    const headers = document.querySelectorAll(`${containerSelector} .accordion-header`);

    headers.forEach((header) => {
        header.removeEventListener("click", handleAccordionClick);
        header.addEventListener("click", handleAccordionClick);
    });
}

//For checking the open accordion and close others
//close nested accordion as well
function handleAccordionClick(e) {
    e.stopPropagation(); 
    const item = this.parentElement;
    const isOpen = item.classList.contains("open");

    if (!isOpen) {
        const siblings = Array.from(item.parentElement.children);
        siblings.forEach(sibling => {
            if (sibling !== item && sibling.classList.contains("open")) {
                sibling.classList.remove("open");
                closeAllChildAccordions(sibling);
            }
        });
    }

    //Close the nested if parent accordion is closed.
    item.classList.toggle("open");

    if (!item.classList.contains("open")) {
        closeAllChildAccordions(item);
    }
}

// Control nested accordion following their parents if it is closed.
function closeAllChildAccordions(parentElement) {
    const childAccordions = parentElement.querySelectorAll(".accordion-item.open");
    childAccordions.forEach(item => {
        item.classList.remove("open");
        closeAllChildAccordions(item); 
    });
}

export { initAccordion };