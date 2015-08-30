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
console.log("Well hello there fellow interwebz adventurer!");
console.log("If you find any bugs or quriks feel free to submit a pull request - https://github.com/finafisken/finafisken.github.io.git")
console.log("Have a nice day!");



// var a = document.getElementById("logo-svg");
// var svgDoc = a.contentDocument;
// var path = svgDoc.getElementById("o2");
// var total_length = path.getTotalLength();
