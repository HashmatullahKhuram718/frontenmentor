// Get all five rating buttons
const ratings = document.querySelectorAll(".rating");


// FIX:
// Earlier you used document.querySelector("button").
// That can select the wrong button.
// Now we select the Submit button specifically.
const submitBtn = document.querySelector(".submit-btn");


// Get the first card
const ratingCard = document.querySelector(".rating-card");


// Get the thank-you card
const thankYouCard = document.querySelector(".thank-you");


// This is the span where the selected number will appear
const selectedNumber = document.querySelector("#from");


// This variable remembers which rating the user selected
let selectedRating;


// Go through all rating buttons
ratings.forEach(function (rating) {

    // Listen for a click on each rating button
    rating.addEventListener("click", function () {

        // Save the clicked number
        selectedRating = rating.textContent;


        // Remove active class from all buttons
        ratings.forEach(function (item) {

            item.classList.remove("active");

        });


        // Add active class only to the clicked button
        rating.classList.add("active");

    });

});



// Listen for click on Submit button
submitBtn.addEventListener("click", function () {

    // Only continue if user selected a rating
    if (selectedRating) {

        // Put selected rating inside thank-you message
        selectedNumber.textContent = selectedRating;


        // Hide first card
        ratingCard.style.display = "none";


        // Show second card
        thankYouCard.style.display = "block";

    }

});