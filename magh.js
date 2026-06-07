const calendar = document.getElementById("calendar");

const dates = [
    ["১","16 Jan 2027"],
    ["২","17 Jan 2027"],
    ["৩","18 Jan 2027"],
    ["৪","19 Jan 2027"],
    ["৫","20 Jan 2027"],
    ["৬","21 Jan 2027"],
    ["৭","22 Jan 2027"],
    ["৮","23 Jan 2027"],
    ["৯","24 Jan 2027"],
    ["১০","25 Jan 2027"],
    ["১১","26 Jan 2027"],
    ["১২","27 Jan 2027"],
    ["১৩","28 Jan 2027"],
    ["১৪","29 Jan 2027"],
    ["১৫","30 Jan 2027"],
    ["১৬","31 Jan 2027"],
    ["১৭","1 Feb 2027"],
    ["১৮","2 Feb 2027"],
    ["১৯","3 Feb 2027"],
    ["২০","4 Feb 2027"],
    ["২১","5 Feb 2027"],
    ["২২","6 Feb 2027"],
    ["২৩","7 Feb 2027"],
    ["২৪","8 Feb 2027"],
    ["২৫","9 Feb 2027"],
    ["২৬","10 Feb 2027"],
    ["২৭","11 Feb 2027"],
    ["২৮","12 Feb 2027"],
    ["২৯","13 Feb 2027"],
    ["৩০","14 Feb 2027"]
];

// Today's Bengali Date
const todayBengaliDate = "s";

// Holidays
const holidays = {
    "১": "মাঘের প্রথম দিন",
    "১০": "সরস্বতী পূজা",
    "১৫": "মাঘী পূর্ণিমা",
    "৩০": "মাঘ সংক্রান্তি"
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
            <div class="bengali-month">মাঘ ১৪৩৩</div>
            <div class="english-date">${d[1]}</div>
            ${holiday}
        </div>
    `;
});

// Today Panel
document.getElementById("todayInfo").innerHTML = `
<h3>

<br>
January 2027
</h3>
`;

// Holiday List
let holidayHTML = "";

for (let day in holidays) {

    holidayHTML += `
        <p>
            ${day} মাঘ - ${holidays[day]}
        </p>
    `;
}

document.getElementById("holidayBox").innerHTML =
    holidayHTML;