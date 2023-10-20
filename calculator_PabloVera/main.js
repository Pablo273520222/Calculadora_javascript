document.addEventListener("DOMContentLoaded", function () {
  const screen = document.getElementById("Screen");
  const buttons = document.getElementById("buttons");

  buttons.addEventListener("click", function (event) {
    event.preventDefault();
    const button = event.target;


    const value = button.dataset.key;

    switch (value) {
      case "clear":
        screen.textContent = "";
        break;
      case "equal":
        try {
          const result = eval(screen.textContent);
          screen.textContent = result;
        } catch (error) {
          screen.textContent = "Error";
        }
        break;
      default:
        screen.textContent += value;
        break;
    }
  });
});