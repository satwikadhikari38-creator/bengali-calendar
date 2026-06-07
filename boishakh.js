const calendar = document.getElementById("calendar");

const dates = [
    ["১","14 Apr 2026"],
    ["২","15 Apr 2026"],
    ["৩","16 Apr 2026"],
    ["৪","17 Apr 2026"],
    ["৫","18 Apr 2026"],
    ["৬","19 Apr 2026"],
    ["৭","20 Apr 2026"],
    ["৮","21 Apr 2026"],
    ["৯","22 Apr 2026"],
    ["১০","23 Apr 2026"],
    ["১১","24 Apr 2026"],
    ["১২","25 Apr 2026"],
    ["১৩","26 Apr 2026"],
    ["১৪","27 Apr 2026"],
    ["১৫","28 Apr 2026"],
    ["১৬","29 Apr 2026"],
    ["১৭","30 Apr 2026"],
    ["১৮","1 May 2026"],
    ["১৯","2 May 2026"],
    ["২০","3 May 2026"],
    ["২১","4 May 2026"],
    ["২২","5 May 2026"],
    ["২৩","6 May 2026"],
    ["২৪","7 May 2026"],
    ["২৫","8 May 2026"],
    ["২৬","9 May 2026"],
    ["২৭","10 May 2026"],
    ["২৮","11 May 2026"],
    ["২৯","12 May 2026"],
    ["৩০","13 May 2026"],
    ["৩১","14 May 2026"]
];

// Today's Bengali Date
const todayBengaliDate = "";

// Holidays
const holidays = {
    "১": "পহেলা বৈশাখ",
    "১৪": "হালখাতা উৎসব",
    "৩০": "বৈশাখ সংক্রান্তি"
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
            <div class="bengali-month">বৈশাখ ১৪৩৩</div>
            <div class="english-date">${d[1]}</div>
            ${holiday}
        </div>
    `;
});

// Today Panel
document.getElementById("todayInfo").innerHTML = `
<h3>

<br>
April 2026
</h3>
`;

// Holiday List
let holidayHTML = "";

for (let day in holidays) {

    holidayHTML += `
        <p>
            ${day} বৈশাখ - ${holidays[day]}
        </p>
    `;
}

document.getElementById("holidayBox").innerHTML =
    holidayHTML;
    const currentMonth = "বৈশাখ";