// Schneeanimation
function createSnow() {
    var snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");
    snowflake.textContent = "❄";

    var randomPosition = Math.random() * window.innerWidth;
    var animationDuration = Math.random() * 3 + 2;

    snowflake.style.left = randomPosition + "px";
    snowflake.style.animationDuration = animationDuration + "s";

    document.body.appendChild(snowflake);

    setTimeout(function() {
        snowflake.remove();
    }, animationDuration * 1000);
}

setInterval(createSnow, 200); // Alle 200ms ein neuer Schneeflocken
