let clicks = 0;

const BarkNoise = document.getElementById("BarkNoise");

document.getElementById("openPopup").addEventListener("click", function() {
    clicks++;
    BarkNoise.play();

    if (clicks === 3) {
        document.getElementById("popup").style.display = "block";
        clicks = 0;
    }
});

document.getElementById("yes").addEventListener("click", function() {
    document.body.classList.toggle("custom-cursor");
    document.getElementById("popup").style.display = "none";
});

document.getElementById("no").addEventListener("click", function() {
    document.getElementById("popup").style.display = "none";
});