const calendar = document.getElementById("calendar");

const dates = [
    ["১","18 Jul 2026"],
    ["২","19 Jul 2026"],
    ["৩","20 Jul 2026"],
    ["৪","21 Jul 2026"],
    ["৫","22 Jul 2026"],
    ["৬","23 Jul 2026"],
    ["৭","24 Jul 2026"],
    ["৮","25 Jul 2026"],
    ["৯","26 Jul 2026"],
    ["১০","27 Jul 2026"],
    ["১১","28 Jul 2026"],
    ["১২","29 Jul 2026"],
    ["১৩","30 Jul 2026"],
    ["১৪","31 Jul 2026"],
    ["১৫","1 Aug 2026"],
    ["১৬","2 Aug 2026"],
    ["১৭","3 Aug 2026"],
    ["১৮","4 Aug 2026"],
    ["১৯","5 Aug 2026"],
    ["২০","6 Aug 2026"],
    ["২১","7 Aug 2026"],
    ["২২","8 Aug 2026"],
    ["২৩","9 Aug 2026"],
    ["২৪","10 Aug 2026"],
    ["২৫","11 Aug 2026"],
    ["২৬","12 Aug 2026"],
    ["২৭","13 Aug 2026"],
    ["২৮","14 Aug 2026"],
    ["২৯","15 Aug 2026"],
    ["৩০","16 Aug 2026"],
    ["৩১","17 Aug 2026"]
];

// Today's Bengali Date
const todayBengaliDate = "";

// Holidays
const holidays = {
    "১": "শ্রাবণের প্রথম দিন",
    "১৫": "ঝুলন যাত্রা",
    "৩০": "শ্রাবণ পূর্ণিমা"
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
            <div class="bengali-month">শ্রাবণ ১৪৩৩</div>
            <div class="english-date">${d[1]}</div>
            ${holiday}
        </div>
    `;
});

// Today Panel
document.getElementById("todayInfo").innerHTML = `
<h3>

<br>
July 2026
</h3>
`;

// Holiday List
let holidayHTML = "";

for (let day in holidays) {

    holidayHTML += `
        <p>
            ${day} শ্রাবণ - ${holidays[day]}
        </p>
    `;
}

document.getElementById("holidayBox").innerHTML =
    holidayHTML;
    const currentMonth = "শ্রাবণ";