var btn = document.getElementById("toggle-anim");
var bg = document.getElementsByTagName("body")[0];

btn.addEventListener("click", function(){
    if (btn.className.indexOf("paused") === -1){
        btn.classList.add("paused");
        bg.style.WebkitAnimationPlayState = "paused";
        bg.style.animationPlayState = "paused";
    }
    else{
        btn.classList.remove("paused");
        bg.style.WebkitAnimationPlayState = "running";
        bg.style.animationPlayState = "running";
    }
});
