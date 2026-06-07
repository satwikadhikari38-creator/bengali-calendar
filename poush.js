const calendar = document.getElementById("calendar");

const dates = [
    ["১","17 Dec 2026"],
    ["২","18 Dec 2026"],
    ["৩","19 Dec 2026"],
    ["৪","20 Dec 2026"],
    ["৫","21 Dec 2026"],
    ["৬","22 Dec 2026"],
    ["৭","23 Dec 2026"],
    ["৮","24 Dec 2026"],
    ["৯","25 Dec 2026"],
    ["১০","26 Dec 2026"],
    ["১১","27 Dec 2026"],
    ["১২","28 Dec 2026"],
    ["১৩","29 Dec 2026"],
    ["১৪","30 Dec 2026"],
    ["১৫","31 Dec 2026"],
    ["১৬","1 Jan 2027"],
    ["১৭","2 Jan 2027"],
    ["১৮","3 Jan 2027"],
    ["১৯","4 Jan 2027"],
    ["২০","5 Jan 2027"],
    ["২১","6 Jan 2027"],
    ["২২","7 Jan 2027"],
    ["২৩","8 Jan 2027"],
    ["২৪","9 Jan 2027"],
    ["২৫","10 Jan 2027"],
    ["২৬","11 Jan 2027"],
    ["২৭","12 Jan 2027"],
    ["২৮","13 Jan 2027"],
    ["২৯","14 Jan 2027"],
    ["৩০","15 Jan 2027"]
];

// Today's Bengali Date
const todayBengaliDate = "";

// Holidays
const holidays = {
    "১": "পৌষের প্রথম দিন",
    "১৫": "পৌষ পার্বণ",
    "৩০": "পৌষ সংক্রান্তি"
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
            <div class="bengali-month">পৌষ ১৪৩৩</div>
            <div class="english-date">${d[1]}</div>
            ${holiday}
        </div>
    `;
});

// Today Panel
document.getElementById("todayInfo").innerHTML = `
<h3>

<br>
December 2026
</h3>
`;

// Holiday List
let holidayHTML = "";

for (let day in holidays) {

    holidayHTML += `
        <p>
            ${day} পৌষ - ${holidays[day]}
        </p>
    `;
}

document.getElementById("holidayBox").innerHTML =
    holidayHTML;