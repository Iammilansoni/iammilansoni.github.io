document.addEventListener('DOMContentLoaded', function () {
    // Add interactivity here if needed
    // Example: You can add event listeners for user interactions

    // Example: Show a popup when the "Learn More" button is clicked
    const learnMoreButton = document.querySelector('.learn-more-button');
    if (learnMoreButton) {
        learnMoreButton.addEventListener('click', function () {
            alert('You clicked "Learn More"');
        });
    }
});
