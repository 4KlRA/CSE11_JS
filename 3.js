let fontSize = 16;
document.getElementById("fontButton").addEventListener("click", function() {
    fontSize += 2;
    document.querySelector("p").style.fontSize = fontSize + "px";
});