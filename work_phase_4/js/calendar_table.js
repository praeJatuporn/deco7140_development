// Calendar variables
const monthLabel = document.getElementById("month-label");
const calendarGrid = document.getElementById("calendar-grid");
const prevBtn = document.querySelector(".prev-month");
const nextBtn = document.querySelector(".next-month");

// Current date
let currentDate = new Date();

// Render calendar
function renderCalendar(date) {
    const year = date.getFullYear();
    const month = date.getMonth();

    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    monthLabel.textContent = `${monthNames[month]} ${year}`;

    const firstDay = new Date(year, month, 1);
    const startDay = (firstDay.getDay() + 6) % 7;
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const dayLabels = Array.from(calendarGrid.children).slice(0, 7);
    calendarGrid.innerHTML = "";
    dayLabels.forEach((day) => calendarGrid.appendChild(day));

    for (let i = 0; i < startDay; i++) {
        const emptyCell = document.createElement("div");
        emptyCell.classList.add("calendar-cell");
        calendarGrid.appendChild(emptyCell);
    }

    for (let day = 1; day <= daysInMonth; day++) {
        const cell = document.createElement("div");
        cell.classList.add("calendar-cell");

        // Embroidery Workshop – May 6, 2025
        if (day === 6 && month === 4 && year === 2025) {
            cell.innerHTML = `
                <span class="date">6</span>
                <a href="calendar_event.html" class="event-link with-tooltip">
                    Embroidery Workshop<br><small>1:00–3:00 PM</small>
                    <div class="event-tooltip">
                        <img src="images/calendar/event3.png" alt="Embroidery workshop" />
                        <div class="tooltip-text">
                            <strong>Embroidery Workshop</strong><br />
                            Learn creative embroidery techniques in a hands-on session.<br />
                            <small>May 6, 2025 – 1:00 to 3:00 PM</small>
                        </div>
                    </div>
                </a>
            `;
        }

        // Crochet Workshop – May 22, 2025
        else if (day === 22 && month === 4 && year === 2025) {
            cell.innerHTML = `
                <span class="date">22</span>
                <a href="calendar_event.html" class="event-link with-tooltip">
                    Crochet Workshop<br><small>10:00–12:00</small>
                    <div class="event-tooltip">
                        <img src="images/calendar/event1.png" alt="Crochet workshop" />
                        <div class="tooltip-text">
                            <strong>Crochet Workshop</strong><br />
                            Join us for a relaxing session of group crochet at central library.<br />
                            <small>May 22, 2025 – 10:00 to 12:00</small>
                        </div>
                    </div>
                </a>
            `;
        }

        // Knitting Workshop – May 28, 2025
        else if (day === 28 && month === 4 && year === 2025) {
            cell.innerHTML = `
                <span class="date">28</span>
                <a href="calendar_event.html" class="event-link with-tooltip">
                    Knitting Workshop<br><small>1:00–3:00 PM</small>
                    <div class="event-tooltip">
                        <img src="images/calendar/event2.png" alt="Knitting workshop" />
                        <div class="tooltip-text">
                            <strong>Knitting Workshop</strong><br />
                            Practice and improve your knitting skills with expert guidance.<br />
                            <small>May 28, 2025 – 1:00 to 3:00 PM</small>
                        </div>
                    </div>
                </a>
            `;
        }

        //Default days
        else {
            cell.innerHTML = `<span class="date">${day}</span>`;
        }

        calendarGrid.appendChild(cell);
    }
}

// Navigation
prevBtn.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar(currentDate);
});

nextBtn.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar(currentDate);
});

// Initial load
document.addEventListener("DOMContentLoaded", () => {
    renderCalendar(currentDate);
});
