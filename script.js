
// Set the current year in the footer
document.getElementById("year").textContent =
    new Date().getFullYear();


// Prevent selecting past appointment dates
const dateInput = document.getElementById("date");

const today = new Date();
const localToday = [
    today.getFullYear(),
    String(today.getMonth() + 1).padStart(2, "0"),
    String(today.getDate()).padStart(2, "0")
].join("-");

dateInput.min = localToday;


// Handle appointment form submission
const appointmentForm =
    document.getElementById("appointmentForm");

const formMessage =
    document.getElementById("formMessage");

appointmentForm.addEventListener("submit", function (event) {

    event.preventDefault();

    if (!appointmentForm.checkValidity()) {
        appointmentForm.reportValidity();
        return;
    }

    const customerName =
        document.getElementById("name").value.trim();

    const appointmentDate = dateInput.value;

    if (appointmentDate < localToday) {
        formMessage.textContent =
            "Please select today or a future date.";

        formMessage.style.color = "#b00020";
        return;
    }

    formMessage.textContent =
        "Thank you, " + customerName +
        "! Your appointment request has been prepared. " +
        "Please contact the studio to confirm your booking.";

    formMessage.style.color = "#8e3f59";

    appointmentForm.reset();

    dateInput.min = localToday;
});


// Close the mobile navbar after clicking a link
const navLinks = document.querySelectorAll(
    ".navbar-collapse .nav-link, .navbar-collapse .btn"
);

const navbarMenu = document.getElementById("navbarMenu");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        if (navbarMenu.classList.contains("show")) {

            const collapse = bootstrap.Collapse.getOrCreateInstance(
                navbarMenu
            );

            collapse.hide();
        }
    });
});