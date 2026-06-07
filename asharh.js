const calendar = document.getElementById("calendar");

// Current Month (used by booking system)
const currentMonth = "আষাঢ়";

const dates = [
    ["১","17 Jun 2026"],
    ["২","18 Jun 2026"],
    ["৩","19 Jun 2026"],
    ["৪","20 Jun 2026"],
    ["৫","21 Jun 2026"],
    ["৬","22 Jun 2026"],
    ["৭","23 Jun 2026"],
    ["৮","24 Jun 2026"],
    ["৯","25 Jun 2026"],
    ["১০","26 Jun 2026"],
    ["১১","27 Jun 2026"],
    ["১২","28 Jun 2026"],
    ["১৩","29 Jun 2026"],
    ["১৪","30 Jun 2026"],
    ["১৫","1 Jul 2026"],
    ["১৬","2 Jul 2026"],
    ["১৭","3 Jul 2026"],
    ["১৮","4 Jul 2026"],
    ["১৯","5 Jul 2026"],
    ["২০","6 Jul 2026"],
    ["২১","7 Jul 2026"],
    ["২২","8 Jul 2026"],
    ["২৩","9 Jul 2026"],
    ["২৪","10 Jul 2026"],
    ["২৫","11 Jul 2026"],
    ["২৬","12 Jul 2026"],
    ["২৭","13 Jul 2026"],
    ["২৮","14 Jul 2026"],
    ["২৯","15 Jul 2026"],
    ["৩০","16 Jul 2026"],
    ["৩১","17 Jul 2026"]
];

// Today's Bengali Date
const todayBengaliDate = "";

// Holidays
const holidays = {
    "১": "পহেলা আষাঢ়",
    "১৫": "রথযাত্রা",
    "৩০": "গুরু পূর্ণিমা"
};

// Generate Calendar
dates.forEach(d => {

    const isToday =
        d[0] === todayBengaliDate
            ? "today"
            : "";

    const holiday =
        holidays[d[0]]
            ? `<div class="holiday">${holidays[d[0]]}</div>`
            : "";

    calendar.innerHTML += `
        <div class="date ${isToday}">
            <div class="bengali-date">${d[0]}</div>
            <div class="bengali-month">আষাঢ় ১৪৩৩</div>
            <div class="english-date">${d[1]}</div>
            ${holiday}
        </div>
    `;
});

// Today Panel
document.getElementById("todayInfo").innerHTML = `
<h3>

<br>
June 2026
</h3>
`;

// Holiday List
let holidayHTML = "";

for (let day in holidays) {

    holidayHTML += `
        <p>
            ${day} আষাঢ় - ${holidays[day]}
        </p>
    `;
}

document.getElementById("holidayBox").innerHTML =
    holidayHTML;