let clicks = 0;

const BarkNoise = document.getElementById("BarkNoise");
const DogGif = document.getElementById("DogGif.gif");

function moveGif() {
    var frames = document.getElementById("DogGif").children;
    var frameCount = frames.length;
    var i = 0;
    setInterval(function () {
        frames[i % frameCount].style.display = "none";
        frames[++i % frameCount].style.display = "block";
        document.getElementById("DogGif").style.left = i + "px";
    }, 300);
}

document.getElementById("openPopup").addEventListener("click", function () {
    clicks++;
    BarkNoise.play();

    if (clicks === 3) {
        if (confirm("Ik ben moe, kun je mijn energy blikjes vinden?")) {
            handleYes();
        }
        clicks = 0;
    }
});

function handleYes() {
    document.body.classList.toggle("custom-cursor");
    DogGif.classList.remove('hidden');
    DogGif.classList.add('animate');
    moveGif();
}



