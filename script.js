
function goToRatingPage() {
    window.location.href = "rating.html";
}


// rating-script.js

let selectedRating = null;

function selectRating(rating) {
    selectedRating = rating;
    const stars = document.querySelectorAll('.star');
    
    stars.forEach(star => {
        const starRating = parseInt(star.dataset.rating);
        star.classList.toggle('active', starRating <= selectedRating);
    });
}

function submitRating() {
    const description = document.getElementById('descriptionBox').value;

    if (selectedRating !== null){
        const confirmation = confirm("Thank you for your rating! Do you want to go back to the main page?");

        if(confirmation){
    
   
        window.location.href = "index.html";
    } else {
        alert("Please select a rating before submitting.");
    }
}
}
