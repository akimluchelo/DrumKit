

var lst = document.querySelectorAll(".drum");

for (var i =0; i < lst.length; i++){
    lst[i].addEventListener("click", function () {
        var buttonInnerHtml = this.innerHTML;
        makeSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);
    })
}

function makeSound(key){
    if (key === "w"){
        var audio = new Audio("./sounds/tom-1.mp3");
        audio.play();
    }
    else if (key === "a"){
        var audio2 = new Audio("./sounds/tom-2.mp3");
        audio2.play();
    }
    else if (key === "s"){
        var audio3 = new Audio("./sounds/tom-3.mp3");
        audio3.play();
    }
    else if (key === "d"){
        var audio4 = new Audio("./sounds/tom-4.mp3");
        audio4.play();
    }
    else if (key === "j"){
        var audio5 = new Audio("./sounds/snare.mp3");
        audio5.play();
    }
    else if (key === "k"){
        var audio6 = new Audio("./sounds/crash.mp3");
        audio6.play();
    }
    else if (key === "l"){
        var audio7 = new Audio("./sounds/kick-bass.mp3");
        audio7.play();
    }
}

document.addEventListener("keydown", function (event){
    makeSound(event.key);
    buttonAnimation(event.key);
})


function buttonAnimation(curKey){
    var activeButton = document.querySelector("." + curKey);
    activeButton.classList.add("pressed");
    setTimeout(function () {activeButton.classList.remove("pressed"), 300;});
}
