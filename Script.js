let clicks = 0;

const BarkNoise = document.getElementById("BarkNoise");
const DogGif = document.getElementById("DogGif");

document.getElementById("openPopup").addEventListener("click", function () {
    clicks++;
    BarkNoise.play();

    if (clicks === 3) {
        document.getElementById("popup").style.display = "block";
        clicks = 0;
    }
});

document.getElementById("yes").addEventListener("click", function () {
    document.body.classList.toggle("custom-cursor");
    document.getElementById("popup").style.display = "none";
    DogGif.classList.remove('hidden');
    DogGif.classList.add('animate-right');
});

document.getElementById("no").addEventListener("click", function () {
    document.getElementById("popup").style.display = "none";
});
