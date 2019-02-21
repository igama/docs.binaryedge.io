/* javascript */
document.addEventListener("DOMContentLoaded", function(event) {
    var x = document.getElementsByClassName("md-nav");
    for (i = 0; i < x.length; i++) {
        if (x[i].style === "display: none; overflow: hidden;") {
            x[i].style = "display: block; overflow: visible;"
        }
    }
});
