const calendar = document.getElementById("calendar");

const dates = [
    ["১","15 Feb 2027"],
    ["২","16 Feb 2027"],
    ["৩","17 Feb 2027"],
    ["৪","18 Feb 2027"],
    ["৫","19 Feb 2027"],
    ["৬","20 Feb 2027"],
    ["৭","21 Feb 2027"],
    ["৮","22 Feb 2027"],
    ["৯","23 Feb 2027"],
    ["১০","24 Feb 2027"],
    ["১১","25 Feb 2027"],
    ["১২","26 Feb 2027"],
    ["১৩","27 Feb 2027"],
    ["১৪","28 Feb 2027"],
    ["১৫","1 Mar 2027"],
    ["১৬","2 Mar 2027"],
    ["১৭","3 Mar 2027"],
    ["১৮","4 Mar 2027"],
    ["১৯","5 Mar 2027"],
    ["২০","6 Mar 2027"],
    ["২১","7 Mar 2027"],
    ["২২","8 Mar 2027"],
    ["২৩","9 Mar 2027"],
    ["২৪","10 Mar 2027"],
    ["২৫","11 Mar 2027"],
    ["২৬","12 Mar 2027"],
    ["২৭","13 Mar 2027"],
    ["২৮","14 Mar 2027"],
    ["২৯","15 Mar 2027"],
    ["৩০","16 Mar 2027"]
];

// Today's Bengali Date
const todayBengaliDate = "";

// Holidays
const holidays = {
    "১": "ফাল্গুনের প্রথম দিন",
    "৭": "আন্তর্জাতিক মাতৃভাষা দিবস",
    "১৫": "দোল পূর্ণিমা",
    "১৬": "হোলি উৎসব"
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
            <div class="bengali-month">ফাল্গুন ১৪৩৩</div>
            <div class="english-date">${d[1]}</div>
            ${holiday}
        </div>
    `;
});

// Today Panel
document.getElementById("todayInfo").innerHTML = `
<h3>

<br>
February 2027
</h3>
`;

// Holiday List
let holidayHTML = "";

for (let day in holidays) {

    holidayHTML += `
        <p>
            ${day} ফাল্গুন - ${holidays[day]}
        </p>
    `;
}

document.getElementById("holidayBox").innerHTML =
    holidayHTML;