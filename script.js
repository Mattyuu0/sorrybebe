document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("pop-up-btn");
    const introScreen = document.getElementById("intro-screen");
    const flowerScreen = document.getElementById("flower-screen");
    const bouquet = document.getElementById("bouquet");
    const pleaText = document.getElementById("plea-text"); // Grab the new text

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
            
            // Fade in the "Please don't sungit" text right after the bouquet
            setTimeout(() => {
                pleaText.classList.remove("hidden");
                pleaText.classList.add("show-text");
            }, 800); // Waits a fraction of a second so the bouquet appears first

        }, 50); 
    });
});