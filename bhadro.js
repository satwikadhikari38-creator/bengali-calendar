const calendar = document.getElementById("calendar");

const dates = [
    ["১","18 Aug 2026"],
    ["২","19 Aug 2026"],
    ["৩","20 Aug 2026"],
    ["৪","21 Aug 2026"],
    ["৫","22 Aug 2026"],
    ["৬","23 Aug 2026"],
    ["৭","24 Aug 2026"],
    ["৮","25 Aug 2026"],
    ["৯","26 Aug 2026"],
    ["১০","27 Aug 2026"],
    ["১১","28 Aug 2026"],
    ["১২","29 Aug 2026"],
    ["১৩","30 Aug 2026"],
    ["১৪","31 Aug 2026"],
    ["১৫","1 Sep 2026"],
    ["১৬","2 Sep 2026"],
    ["১৭","3 Sep 2026"],
    ["১৮","4 Sep 2026"],
    ["১৯","5 Sep 2026"],
    ["২০","6 Sep 2026"],
    ["২১","7 Sep 2026"],
    ["২২","8 Sep 2026"],
    ["২৩","9 Sep 2026"],
    ["২৪","10 Sep 2026"],
    ["২৫","11 Sep 2026"],
    ["২৬","12 Sep 2026"],
    ["২৭","13 Sep 2026"],
    ["২৮","14 Sep 2026"],
    ["২৯","15 Sep 2026"],
    ["৩০","16 Sep 2026"],
    ["৩১","17 Sep 2026"]
];

// Today's Bengali Date
const todayBengaliDate = "";

// Holidays
const holidays = {
    "১": "ভাদ্রের প্রথম দিন",
    "১৫": "বিশ্বকর্মা পূজা",
    "৩০": "মহালয়া"
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
            <div class="bengali-month">ভাদ্র ১৪৩৩</div>
            <div class="english-date">${d[1]}</div>
            ${holiday}
        </div>
    `;
});

// Today Panel
document.getElementById("todayInfo").innerHTML = `
<h3>

<br>
August 2026
</h3>
`;

// Holiday List
let holidayHTML = "";

for (let day in holidays) {

    holidayHTML += `
        <p>
            ${day} ভাদ্র - ${holidays[day]}
        </p>
    `;
}

document.getElementById("holidayBox").innerHTML =
    holidayHTML;