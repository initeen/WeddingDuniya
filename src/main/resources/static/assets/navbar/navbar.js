document.addEventListener("DOMContentLoaded", function () {
    const profileDropdown = document.querySelector(".profile-dropdown");
    const dropdownContent = document.querySelector(".dropdown-content");

    profileDropdown.addEventListener("click", function () {
        dropdownContent.classList.toggle("show");
    });

    // Close the dropdown if the user clicks outside of it
    window.addEventListener("click", function (event) {
        if (!profileDropdown.contains(event.target)) {
            dropdownContent.classList.remove("show");
        }
    });
});
