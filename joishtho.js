const calendar = document.getElementById("calendar");

const dates = [
    ["১","15 May 2026"],
    ["২","16 May 2026"],
    ["৩","17 May 2026"],
    ["৪","18 May 2026"],
    ["৫","19 May 2026"],
    ["৬","20 May 2026"],
    ["৭","21 May 2026"],
    ["৮","22 May 2026"],
    ["৯","23 May 2026"],
    ["১০","24 May 2026"],
    ["১১","25 May 2026"],
    ["১২","26 May 2026"],
    ["১৩","27 May 2026"],
    ["১৪","28 May 2026"],
    ["১৫","29 May 2026"],
    ["১৬","30 May 2026"],
    ["১৭","31 May 2026"],
    ["১৮","1 Jun 2026"],
    ["১৯","2 Jun 2026"],
    ["২০","3 Jun 2026"],
    ["২১","4 Jun 2026"],
    ["২২","5 Jun 2026"],
    ["২৩","6 Jun 2026"],
    ["২৪","7 Jun 2026"],
    ["২৫","8 Jun 2026"],
    ["২৬","9 Jun 2026"],
    ["২৭","10 Jun 2026"],
    ["২৮","11 Jun 2026"],
    ["২৯","12 Jun 2026"],
    ["৩০","13 Jun 2026"],
    ["৩১","14 Jun 2026"]
];

// Today's Bengali Date
const todayBengaliDate = "";

// Holidays
const holidays = {
    "১": "জ্যৈষ্ঠের প্রথম দিন",
    "১০": "গঙ্গা দশহরা",
    "১৫": "জামাই ষষ্ঠী",
    "৩০": "জ্যৈষ্ঠ সংক্রান্তি"
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
            <div class="bengali-month">জ্যৈষ্ঠ ১৪৩৩</div>
            <div class="english-date">${d[1]}</div>
            ${holiday}
        </div>
    `;
});

// Today Panel
document.getElementById("todayInfo").innerHTML = `
<h3>

<br>
May 2026
</h3>
`;

// Holiday List
let holidayHTML = "";

for (let day in holidays) {

    holidayHTML += `
        <p>
            ${day} জ্যৈষ্ঠ - ${holidays[day]}
        </p>
    `;
}

document.getElementById("holidayBox").innerHTML =
    holidayHTML;