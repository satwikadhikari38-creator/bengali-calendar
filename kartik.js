const calendar = document.getElementById("calendar");

const dates = [
    ["১","18 Oct 2026"],
    ["২","19 Oct 2026"],
    ["৩","20 Oct 2026"],
    ["৪","21 Oct 2026"],
    ["৫","22 Oct 2026"],
    ["৬","23 Oct 2026"],
    ["৭","24 Oct 2026"],
    ["৮","25 Oct 2026"],
    ["৯","26 Oct 2026"],
    ["১০","27 Oct 2026"],
    ["১১","28 Oct 2026"],
    ["১২","29 Oct 2026"],
    ["১৩","30 Oct 2026"],
    ["১৪","31 Oct 2026"],
    ["১৫","1 Nov 2026"],
    ["১৬","2 Nov 2026"],
    ["১৭","3 Nov 2026"],
    ["১৮","4 Nov 2026"],
    ["১৯","5 Nov 2026"],
    ["২০","6 Nov 2026"],
    ["২১","7 Nov 2026"],
    ["২২","8 Nov 2026"],
    ["২৩","9 Nov 2026"],
    ["২৪","10 Nov 2026"],
    ["২৫","11 Nov 2026"],
    ["২৬","12 Nov 2026"],
    ["২৭","13 Nov 2026"],
    ["২৮","14 Nov 2026"],
    ["২৯","15 Nov 2026"],
    ["৩০","16 Nov 2026"]
];

// Today's Bengali Date
const todayBengaliDate = "";

// Holidays
const holidays = {
    "১": "কার্তিকের প্রথম দিন",
    "১৪": "কালী পূজা",
    "১৫": "দীপাবলি",
    "৩০": "রাস পূর্ণিমা"
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
            <div class="bengali-month">কার্তিক ১৪৩৩</div>
            <div class="english-date">${d[1]}</div>
            ${holiday}
        </div>
    `;
});

// Today Panel
document.getElementById("todayInfo").innerHTML = `
<h3>
s
<br>
October 2026
</h3>
`;

// Holiday List
let holidayHTML = "";

for (let day in holidays) {

    holidayHTML += `
        <p>
            ${day} কার্তিক - ${holidays[day]}
        </p>
    `;
}

document.getElementById("holidayBox").innerHTML =
    holidayHTML;