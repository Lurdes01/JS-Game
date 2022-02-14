const cat = document.getElementById("cat");
const clew = document.getElementById("clew");

document.addEventListener("keydown", function(event) {
    jump();
});

function jump() {
    if (cat.classList != "jump") {
        cat.classList.add("jump")
    }
    setTimeout( function() {
        cat.classList.remove("jump")
    }, 300)
}

let isAlive = setInterval ( function() {
    let catTop = parseInt(window.getComputedStyle(cat).getPropertyValue("top"));
    let clewLeft = parseInt(window.getComputedStyle(clew).getPropertyValue("left"));

    if (clewLeft < 80 && clewLeft > 0 && catTop >= 140) {
        alert("GAME OVER!!")
    }
}, 10)