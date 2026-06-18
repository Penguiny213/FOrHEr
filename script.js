// ======================
// PASSWORD
// ======================

const PASSWORD = "16";

// ======================
// ELEMENTS
// ======================

const popup = document.getElementById("popup");
const popupText = document.getElementById("popupText");
const bgMusic = document.getElementById("bgMusic");

// ======================
// IMAGE CLUES
// ======================

document.querySelectorAll(".float-img").forEach(img => {

    img.addEventListener("click", () => {

        popupText.innerText = img.dataset.clue;

        popup.style.display = "flex";
    });

});

function closePopup(){

    popup.style.display = "none";
}

// ======================
// PASSWORD CHECK
// ======================

function checkPassword(){
    

    const hint=[
    "👀 Look at the floating images...",
    "💡 The answer is hiding in the clues 💕",
    "🔍 Try observing the pictures carefully...",
    "💖 It's something meaningful between us..."
    ];


    const input =
    document.getElementById("passwordInput").value;

    const message =
    document.getElementById("passwordMessage");

    const lockScreen =
    document.getElementById("lockScreen");

    if(input === PASSWORD){

        message.style.color = "#ff4f8b";
        message.innerText = "💖 Please continue...";

        setTimeout(() => {

            document
            .getElementById("lockScreen")
            .classList.remove("active");

            document
            .getElementById("questionScreen")
            .classList.add("active");

        }, 1000);

    }else{
        lockScreen.classList.add("shake");

        setTimeout(() => {
            lockScreen.classList.remove("shake");
        }, 400);

        message.style.color = "#ff4f8b";
        message.innerText = hint[Math.floor(Math.random() * hint.length)];
    }
}

// Allow Enter key
document
.getElementById("passwordInput")
.addEventListener("keypress", function(e){

    if(e.key === "Enter"){

        checkPassword();
    }

});

// ======================
// SLIDE CONTROL
// ======================

function nextSlide(current,next){

    document
    .getElementById(current)
    .classList.remove("active-slide");

    document
    .getElementById(next)
    .classList.add("active-slide");
}

// ======================
// QUESTION 1
// ======================

function answerQ1(isYes){

    if(isYes){

        alert("ohh reallyyyy awwww 💖🥺");

    }else{

        alert("ouccchhh okayyy 😭💔");
    }

    nextSlide("slide1","slide2");
}

// ======================
// QUESTION 2
// ======================

function answerQ2(isYes){

    if(isYes){

        alert("ohh reallyyyy awwww 💖🥺");

    }else{

        alert("ouccchhh okayyy 😭💔");
    }

    nextSlide("slide2","slide3");
}

// ======================
// QUESTION 3
// ======================

function answerQ3(isYes){

    if(isYes){

        confirmYes(0);

    }else{

        askContinue();
    }
}

// ======================
// NO PATH
// ======================

function askContinue(){

    const answer = confirm(
        "Do you wish to continue? 🥺"
    );

    if(answer){

        showFinal();

    }else{

        askContinue();
    }
}

// ======================
// YES PATH
// 5 CONFIRMATIONS
// ======================

function confirmYes(count){

    const messages = [

        "Are you sure? 🥺",

        "Are you REALLY sure? 💖",

        "Like... 100% sure? 😳",

        "No turning back now... sure? 💕",

        "LAST CHANCE... are you absolutely sure? ❤️"
    ];

    const answer = confirm(messages[count]);

    if(answer){

        if(count < messages.length - 1){

            confirmYes(count + 1);

        }else{

            showFinal();
        }
    }
}

// ======================
// SHOW FINAL SCREEN
// ======================

function showFinal(){

    document
    .getElementById("questionScreen")
    .classList.remove("active");

    document
    .getElementById("finalScreen")
    .classList.add("active");

    if(bgMusic){

        bgMusic.volume = 0.5;

        bgMusic.play().catch(() => {

            console.log("Music autoplay blocked.");
        });
    }
}

// ======================
// FINAL YES BUTTON
// ======================

const finalYesBtn =
document.querySelector(".yes-btn");

if(finalYesBtn){

    finalYesBtn.addEventListener("click", () => {

        document
        .getElementById("lovePopup")
        .style.display = "flex";

    });

}

// ======================
// CLOSE LOVE POPUP
// OPEN GALLERY
// ======================

function closeLovePopup(){

    document
    .getElementById("lovePopup")
    .style.display = "none";

    document
    .getElementById("finalScreen")
    .classList.remove("active");

    document
    .getElementById("galleryScreen")
    .classList.add("active");
}

// ======================
// CLOSE POPUPS
// WHEN CLICKING OUTSIDE
// ======================

window.addEventListener("click", (e) => {

    const lovePopup =
    document.getElementById("lovePopup");

    if(e.target === popup){

        popup.style.display = "none";
    }

    if(e.target === lovePopup){

        lovePopup.style.display = "none";
    }

});

// ======================
// OPTIONAL:
// HEART MESSAGE AFTER
// 10 SECONDS IN GALLERY
// ======================

setTimeout(() => {

    const gallery =
    document.getElementById("galleryScreen");

    if(gallery.classList.contains("active")){

        alert(
            "❤️ Thank you for being you ❤️\n\nI hope we can create many more memories together 💕"
        );
    }

}, 10000);
