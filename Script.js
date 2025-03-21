let clicks = 0;

const BarkNoise = document.getElementById("BarkNoise");


function moveGif() {
    var dogGif = document.getElementById("DogGif");
    var position = 0;
    var speed = 5; 
    var screenWidth = window.innerWidth;

    function animate() {
        if (position < screenWidth - dogGif.clientWidth) {
            position += speed;
            dogGif.style.left = position + "px";
            requestAnimationFrame(animate);
        }
    }
}

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
    DogGif.classList.add('animate');
    animate();
});

document.getElementById("no").addEventListener("click", function () {
    document.getElementById("popup").style.display = "none";
});
