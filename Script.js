let clicks = 0;

const BarkNoise = document.getElementById("BarkNoise");
const DogGif = document.getElementById("DogGif.gif");

const tracker = document.querySelector(".hondje");
let mouseX = 0, mouseY = 0;
let posX = 0, posY = 0;
const speed = 0.02;

document.addEventListener("mousemove", (e) => {
    mouseX = e.pageX;
    mouseY = e.pageY;
});

function animate() {
    posX += (mouseX - posX) * speed;
    posY += (mouseY - posY) * speed;

    let mirror = posX > mouseX ? "scaleX(-1)" : "scaleX(1)";

    tracker.style.transform = `translate(${posX}px, ${posY}px) ${mirror}`;

    requestAnimationFrame(animate);
}


document.getElementById("openPopup").addEventListener("click", function () {
    clicks++;
    BarkNoise.play();

    if (clicks === 3) {
        if (confirm("Ik ben moe, kun je mijn energy blikjes vinden?")) {
            Yes();
        }
        clicks = 0;
    }
});

function Yes() {
    document.body.classList.toggle("custom-cursor");
    document.querySelector(".hondje").style.opacity = "100";
    animate();
}




