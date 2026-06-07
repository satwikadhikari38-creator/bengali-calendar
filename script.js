let selectedDates = [];

// Get current month name
const monthName =
    document.querySelector(".bengali-month")
        ?.innerText.split(" ")[0] || "";


// =====================
// LOAD SAVED BOOKINGS
// =====================
window.onload = function () {

    let savedBookings =
        JSON.parse(localStorage.getItem("bookings")) || [];

    savedBookings.forEach(booking => {

        booking.dates.forEach(savedDate => {

            document.querySelectorAll(".date").forEach(box => {

                let d =
                    box.querySelector(".bengali-date").innerText;

                let currentDate =
                    monthName + "-" + d;

                if (currentDate === savedDate) {

                    box.style.backgroundColor = "red";
                    box.style.color = "white";

                    let purposeDiv =
                        document.createElement("div");

                    purposeDiv.className =
                        "booking-purpose";

                    purposeDiv.innerText =
                        booking.purpose;

                    box.appendChild(purposeDiv);
                }

            });

        });

    });

};


// =====================
// DATE SELECTION
// =====================
document.querySelectorAll(".date").forEach(box => {

    box.addEventListener("click", function () {

        let dateText =
            this.querySelector(".bengali-date").innerText;

        if (this.style.backgroundColor === "red") {

            alert("Already Booked");
            return;
        }

        if (selectedDates.includes(dateText)) {

            selectedDates =
                selectedDates.filter(
                    d => d !== dateText
                );

            this.style.backgroundColor = "";
            this.style.color = "";

        } else {

            selectedDates.push(dateText);

            this.style.backgroundColor = "green";
            this.style.color = "white";
        }

        document.getElementById(
            "selectedDate"
        ).innerText =
            selectedDates.length > 0
                ? selectedDates.join(", ")
                : "None";
    });

});


// =====================
// BOOK DATE
// =====================
function bookDate() {

    let name =
        document.getElementById("name")
            .value.trim();

    let purpose =
        document.getElementById("purpose")
            .value.trim();

    if (selectedDates.length === 0) {

        alert("Select Date First");
        return;
    }

    if (name === "") {

        alert("Enter Name");
        return;
    }

    if (purpose === "") {

        alert("Enter Purpose");
        return;
    }

    let bookings =
        JSON.parse(
            localStorage.getItem("bookings")
        ) || [];

    bookings.push({

        name: name,
        purpose: purpose,

        dates: selectedDates.map(
            d => monthName + "-" + d
        )

    });

    localStorage.setItem(
        "bookings",
        JSON.stringify(bookings)
    );

    document.querySelectorAll(".date").forEach(box => {

        let d =
            box.querySelector(".bengali-date").innerText;

        if (selectedDates.includes(d)) {

            box.style.backgroundColor = "red";
            box.style.color = "white";

            let purposeDiv =
                document.createElement("div");

            purposeDiv.className =
                "booking-purpose";

            purposeDiv.innerText =
                purpose;

            box.appendChild(purposeDiv);
        }

    });

    alert(
        "Booking Successful!\n\n" +
        "Name: " + name +
        "\nPurpose: " + purpose +
        "\nDates: " + selectedDates.join(", ")
    );

    selectedDates = [];

    document.getElementById(
        "selectedDate"
    ).innerText = "None";

    document.getElementById("name").value = "";
    document.getElementById("purpose").value = "";
}


// =====================
// SEARCH BOOKING
// =====================
function searchBooking() {

    let search =
        document.getElementById("searchName")
            .value
            .toLowerCase();

    let bookings =
        JSON.parse(
            localStorage.getItem("bookings")
        ) || [];

    let result =
        bookings.filter(
            booking =>
                booking.name
                    .toLowerCase()
                    .includes(search)
        );

    if (result.length === 0) {

        alert("No Booking Found");
        return;
    }

    alert(
        JSON.stringify(
            result,
            null,
            2
        )
    );
}


// =====================
// DELETE ALL BOOKINGS
// =====================
function deleteAllBookings() {

    if (
        confirm(
            "Delete All Bookings?"
        )
    ) {

        localStorage.removeItem(
            "bookings"
        );

        location.reload();
    }

}


// =====================
// DELETE SINGLE BOOKING
// =====================
function deleteBooking(date) {

    let bookings =
        JSON.parse(
            localStorage.getItem("bookings")
        ) || [];

    let fullDate =
        monthName + "-" + date;

    bookings =
        bookings.filter(
            booking =>
                !booking.dates.includes(fullDate)
        );

    localStorage.setItem(
        "bookings",
        JSON.stringify(bookings)
    );

    location.reload();
}


// =====================
// SHOW BOOKINGS
// =====================
function showBookings() {

    let bookings =
        JSON.parse(
            localStorage.getItem("bookings")
        ) || [];

    if (bookings.length === 0) {

        alert("No Bookings Found");
        return;
    }

    let output = "";

    bookings.forEach((booking, index) => {

        output +=
            "Booking " +
            (index + 1) +
            "\n";

        output +=
            "Name: " +
            booking.name +
            "\n";

        output +=
            "Purpose: " +
            booking.purpose +
            "\n";

        output +=
            "Dates: " +
            booking.dates.join(", ") +
            "\n\n";

    });

    alert(output);
}


// =====================
// EDIT BOOKING
// =====================
function editBooking() {

    let oldName =
        prompt(
            "Enter existing booking name:"
        );

    if (!oldName) return;

    let bookings =
        JSON.parse(
            localStorage.getItem("bookings")
        ) || [];

    let booking =
        bookings.find(
            b =>
            b.name.toLowerCase() ===
            oldName.toLowerCase()
        );

    if (!booking) {

        alert("Booking not found");
        return;
    }

    let newName =
        prompt(
            "Enter new name:",
            booking.name
        );

    let newPurpose =
        prompt(
            "Enter new purpose:",
            booking.purpose
        );

    booking.name = newName;
    booking.purpose = newPurpose;

    localStorage.setItem(
        "bookings",
        JSON.stringify(bookings)
    );

    alert(
        "Booking Updated Successfully"
    );

    location.reload();
}


// =====================
// EXPORT BOOKINGS
// =====================
function exportBookings() {

    let bookings =
        JSON.parse(
            localStorage.getItem("bookings")
        ) || [];

    let data =
        JSON.stringify(
            bookings,
            null,
            2
        );

    let blob =
        new Blob(
            [data],
            {
                type:
                "application/json"
            }
        );

    let a =
        document.createElement("a");

    a.href =
        URL.createObjectURL(blob);

    a.download =
        "bookings.json";

    a.click();
}