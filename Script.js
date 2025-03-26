let clicks = 0;
let cans = 0;

const BarkNoise = document.getElementById("BarkNoise");
const DogGif = document.getElementById("DogGif");
const CanSound = document.getElementById("CanSound");
const EnormNoBullshit = document.getElementById("EnormNoBullshit");

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
    //DogGif.classList.add('animate-right');
    LogoBlank.classList.remove('hidden');
    EnergyCan1.classList.remove('hidden');
    EnergyCan2.classList.remove('hidden');
    EnergyCan3.classList.remove('hidden');
}

function Completed(){
    if (cans === 3) {
        EnormNoBullshit.classList.remove('hidden');
        EnormNoBullshit.play();
        VideoRemove();
    }
}
EnormNoBullshit.addEventListener("ended", function () {
    EnormNoBullshit.remove(); 
    console.log("Video removed after playing.");
  });

document.getElementById("EnergyCan1").addEventListener("click", function () {
    this.remove();
    cans++;
    CanSound.play();
    Completed();
});

document.getElementById("EnergyCan2").addEventListener("click", function () {
    this.remove();
    cans++;
    CanSound.play();
    Completed();
});

document.getElementById("EnergyCan3").addEventListener("click", function () {
    this.remove();
    cans++;
    CanSound.play();
    Completed();
});
