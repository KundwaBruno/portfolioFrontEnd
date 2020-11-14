var hamb = document.getElementById("ham");
var respNav = document.getElementById("respNavigation");
hamb.addEventListener("click", function () {
    if (respNav.style.display === "block") {
        $("#respNavigation").slideUp("fast");
    } else {
        $("#respNavigation").slideDown("fast");
    }
});