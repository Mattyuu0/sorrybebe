document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("pop-up-btn");
    const introScreen = document.getElementById("intro-screen");
    const flowerScreen = document.getElementById("flower-screen");
    const bouquet = document.getElementById("bouquet");

    // Make the button pop up 2 seconds after the page loads
    setTimeout(() => {
        btn.classList.remove("hidden");
        btn.classList.add("show");
    }, 2000);

    // What happens when the button is clicked
    btn.addEventListener("click", () => {
        // Hide the intro and show the flower screen container
        introScreen.classList.add("hidden");
        flowerScreen.classList.remove("hidden");

        // Trigger the massive bouquet pop-up animation
        setTimeout(() => {
            bouquet.classList.add("bloom");
        }, 50); 
    });
});