window.showSection = function (sectionId) {
    var sections = document.getElementsByClassName("section");
    for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = "none";
    }
    var sectionToShow = document.getElementById(sectionId);
    sectionToShow.style.display = "flex";
    sectionToShow.style.animation = "fadeIn 0.85s";
}

