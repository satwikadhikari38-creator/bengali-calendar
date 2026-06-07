const calendar = document.getElementById("calendar");

const dates = [
    ["১","18 Sep 2026"],
    ["২","19 Sep 2026"],
    ["৩","20 Sep 2026"],
    ["৪","21 Sep 2026"],
    ["৫","22 Sep 2026"],
    ["৬","23 Sep 2026"],
    ["৭","24 Sep 2026"],
    ["৮","25 Sep 2026"],
    ["৯","26 Sep 2026"],
    ["১০","27 Sep 2026"],
    ["১১","28 Sep 2026"],
    ["১২","29 Sep 2026"],
    ["১৩","30 Sep 2026"],
    ["১৪","1 Oct 2026"],
    ["১৫","2 Oct 2026"],
    ["১৬","3 Oct 2026"],
    ["১৭","4 Oct 2026"],
    ["১৮","5 Oct 2026"],
    ["১৯","6 Oct 2026"],
    ["২০","7 Oct 2026"],
    ["২১","8 Oct 2026"],
    ["২২","9 Oct 2026"],
    ["২৩","10 Oct 2026"],
    ["২৪","11 Oct 2026"],
    ["২৫","12 Oct 2026"],
    ["২৬","13 Oct 2026"],
    ["২৭","14 Oct 2026"],
    ["২৮","15 Oct 2026"],
    ["২৯","16 Oct 2026"],
    ["৩০","17 Oct 2026"]
];

// Today's Bengali Date
const todayBengaliDate = "";

// Holidays
const holidays = {
    "১": "আশ্বিনের প্রথম দিন",
    "১০": "মহাষষ্ঠী",
    "১১": "মহাসপ্তমী",
    "১২": "মহাঅষ্টমী",
    "১৩": "মহানবমী",
    "১৪": "বিজয়া দশমী"
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
            <div class="bengali-month">আশ্বিন ১৪৩৩</div>
            <div class="english-date">${d[1]}</div>
            ${holiday}
        </div>
    `;
});

// Today Panel
document.getElementById("todayInfo").innerHTML = `
<h3>

<br>
September 2026
</h3>
`;

// Holiday List
let holidayHTML = "";

for (let day in holidays) {

    holidayHTML += `
        <p>
            ${day} আশ্বিন - ${holidays[day]}
        </p>
    `;
}

document.getElementById("holidayBox").innerHTML =
    holidayHTML;