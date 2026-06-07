const calendar = document.getElementById("calendar");

const dates = [
    ["১","17 Mar 2027"],
    ["২","18 Mar 2027"],
    ["৩","19 Mar 2027"],
    ["৪","20 Mar 2027"],
    ["৫","21 Mar 2027"],
    ["৬","22 Mar 2027"],
    ["৭","23 Mar 2027"],
    ["৮","24 Mar 2027"],
    ["৯","25 Mar 2027"],
    ["১০","26 Mar 2027"],
    ["১১","27 Mar 2027"],
    ["১২","28 Mar 2027"],
    ["১৩","29 Mar 2027"],
    ["১৪","30 Mar 2027"],
    ["১৫","31 Mar 2027"],
    ["১৬","1 Apr 2027"],
    ["১৭","2 Apr 2027"],
    ["১৮","3 Apr 2027"],
    ["১৯","4 Apr 2027"],
    ["২০","5 Apr 2027"],
    ["২১","6 Apr 2027"],
    ["২২","7 Apr 2027"],
    ["২৩","8 Apr 2027"],
    ["২৪","9 Apr 2027"],
    ["২৫","10 Apr 2027"],
    ["২৬","11 Apr 2027"],
    ["২৭","12 Apr 2027"],
    ["২৮","13 Apr 2027"],
    ["২৯","14 Apr 2027"],
    ["৩০","15 Apr 2027"]
];

// Today's Bengali Date
const todayBengaliDate = "";

// Holidays
const holidays = {
    "১": "চৈত্রের প্রথম দিন",
    "১৫": "চৈত্র সংক্রান্তি",
    "২৯": "বাংলা বছরের শেষ দিন",
    "৩০": "নববর্ষের প্রস্তুতি"
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
            <div class="bengali-month">চৈত্র ১৪৩৩</div>
            <div class="english-date">${d[1]}</div>
            ${holiday}
        </div>
    `;
});

// Today Panel
document.getElementById("todayInfo").innerHTML = `
<h3>

<br>
March 2027
</h3>
`;

// Holiday List
let holidayHTML = "";

for (let day in holidays) {

    holidayHTML += `
        <p>
            ${day} চৈত্র - ${holidays[day]}
        </p>
    `;
}

document.getElementById("holidayBox").innerHTML =
    holidayHTML;