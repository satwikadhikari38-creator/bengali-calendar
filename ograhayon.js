const calendar = document.getElementById("calendar");

const dates = [
    ["১","17 Nov 2026"],
    ["২","18 Nov 2026"],
    ["৩","19 Nov 2026"],
    ["৪","20 Nov 2026"],
    ["৫","21 Nov 2026"],
    ["৬","22 Nov 2026"],
    ["৭","23 Nov 2026"],
    ["৮","24 Nov 2026"],
    ["৯","25 Nov 2026"],
    ["১০","26 Nov 2026"],
    ["১১","27 Nov 2026"],
    ["১২","28 Nov 2026"],
    ["১৩","29 Nov 2026"],
    ["১৪","30 Nov 2026"],
    ["১৫","1 Dec 2026"],
    ["১৬","2 Dec 2026"],
    ["১৭","3 Dec 2026"],
    ["১৮","4 Dec 2026"],
    ["১৯","5 Dec 2026"],
    ["২০","6 Dec 2026"],
    ["২১","7 Dec 2026"],
    ["২২","8 Dec 2026"],
    ["২৩","9 Dec 2026"],
    ["২৪","10 Dec 2026"],
    ["২৫","11 Dec 2026"],
    ["২৬","12 Dec 2026"],
    ["২৭","13 Dec 2026"],
    ["২৮","14 Dec 2026"],
    ["২৯","15 Dec 2026"],
    ["৩০","16 Dec 2026"]
];

// Today's Bengali Date
const todayBengaliDate = "";

// Holidays
const holidays = {
    "১": "অগ্রহায়ণের প্রথম দিন",
    "১৫": "নবান্ন উৎসব",
    "৩০": "অগ্রহায়ণ সংক্রান্তি"
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
            <div class="bengali-month">অগ্রহায়ণ ১৪৩৩</div>
            <div class="english-date">${d[1]}</div>
            ${holiday}
        </div>
    `;
});

// Today Panel
document.getElementById("todayInfo").innerHTML = `
<h3>

<br>
November 2026
</h3>
`;

// Holiday List
let holidayHTML = "";

for (let day in holidays) {

    holidayHTML += `
        <p>
            ${day} অগ্রহায়ণ - ${holidays[day]}
        </p>
    `;
}

document.getElementById("holidayBox").innerHTML =
    holidayHTML;