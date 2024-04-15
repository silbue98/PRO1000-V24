const seatingArea = document.getElementById("seatingArea");
const totalSeats = document.getElementById("totalSeats");
const totalPrice = document.getElementById("totalPrice");
const bookNowBtn = document.getElementById("bookNowBtn");
const seatPrice = 699; 
// Function to update booking summary
function updateBookingSummary() {
    const selectedSeats = document.querySelectorAll(".seating-area .seat.selected").length;
    totalSeats.innerText = selectedSeats;
    totalPrice.innerText = selectedSeats * seatPrice + " NOK";
}

// Function to toggle seat selection
function toggleSeatSelection(seat) {
    if (!seat.classList.contains("booked")) {
        seat.classList.toggle("selected");
        updateBookingSummary();
    }
}

// Event Delegation for handling seat selection
seatingArea.addEventListener("click", function(e) {
    // Check if the clicked element is a seat and not booked
    if (e.target.classList.contains("seat") && !e.target.classList.contains("booked")) {
        toggleSeatSelection(e.target);
    }
});

// Dynamic seats creation (remains unchanged)
const totalRows = 10; 
const seatsPerRow = 10;
for (let row = 0; row < totalRows; row++) {
    if (row % 4 === 3) continue; // Skipping a row for walking space

    for (let seatNum = 0; seatNum < seatsPerRow; seatNum++) {
        if (seatNum % 4 === 3) { // Skipping a seat for walking space
            let gap = document.createElement("div");
            gap.classList.add("seat-gap");
            seatingArea.appendChild(gap);
            continue;
        }

        let seat = document.createElement("div");
        seat.classList.add("seat");

        // Mark some seats as booked randomly
        if (Math.random() < 0.2) {
            seat.classList.add("booked");
        }

        seatingArea.appendChild(seat);
    }
}

    
// Function to show the menu

function toggleMenu() {
    let navLinks = document.getElementById("navLinks");
    if (navLinks.style.right === "0px") {
        navLinks.style.right = "-200px"; // Adjust this value based on your CSS
    } else {
        navLinks.style.right = "0px";
    }
}
function showMenu() {
  document.getElementById("navLinks").classList.add("open");
}

function hideMenu() {
  document.getElementById("navLinks").classList.remove("open");
}
// Attach toggleMenu function to both icons
document.querySelector(".fa-bars").addEventListener("click", toggleMenu);
document.querySelector(".fa-times").addEventListener("click", toggleMenu);
document.querySelector(".fa-bars").addEventListener("keypress", toggleMenu); // Accessiblity for keyboard users
document.querySelector(".fa-times").addEventListener("keypress", toggleMenu); // Better access for keyboard users
