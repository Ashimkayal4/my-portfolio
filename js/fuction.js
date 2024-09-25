function hideAllSection(id) {
    document.getElementById("Project-section").classList.add("hidden");
    document.getElementById("technologies-section").classList.add("hidden");
    document.getElementById("about-section").classList.add("hidden");
    document.getElementById("contact-section").classList.add("hidden");
    document.getElementById(id).classList.remove("hidden");
}

document.getElementById("project-btn").addEventListener('click', function () {
    hideAllSection("Project-section");
})

document.getElementById("technologies-btn").addEventListener('click', function () {
    hideAllSection("technologies-section");
})


document.getElementById("about-btn").addEventListener('click', function () {
    hideAllSection("about-section");
})

document.getElementById("contact-btn").addEventListener('click', function () {
    hideAllSection("contact-section");
})