const colorForm = document.getElementById("colorForm");
const heading = document.getElementById("heading");

colorForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const colorInput = document.getElementById("colorInput").value;
    heading.style.color = colorInput;
});
