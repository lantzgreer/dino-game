var character = document.getElementById("character");
var block = document.getElementById("block");
function jump() {
    console.log("click");
    character.classlist.add("animate");
    setTimeout(function(){
        character.classList.remove("animate");
    },500);
}