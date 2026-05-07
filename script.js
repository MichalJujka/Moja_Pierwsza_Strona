// =========================
// SCRIPT.JS
// =========================

const button = document.getElementById("clickMe");

if (button) {

  button.addEventListener("click", () => {

    button.textContent = "Thanks for Clicking!";

    button.style.transform = "scale(1.08)";

    setTimeout(() => {
      button.style.transform = "scale(1)";
    }, 200);

  });

}