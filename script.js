// const toggleBtn = document.querySelector("#togglePassword");
// const password = document.querySelector("#id_password");
// const show = document.querySelector(".show");
// const hide = document.querySelector(".hide");

// // Display Button When An input is Made
// password.addEventListener("input", showToggleButton);

// function showToggleButton() {
//   if (password.value.length > 0) {
//     toggleBtn.style.display = "block";
//   } else {
//     toggleBtn.style.display = "";
//   }
// }

// toggleBtn.addEventListener("click", (e) => {
//   // ------ Toggle Type ------
//   const type =
//     password.getAttribute("type") === "password" ? "text" : "password";
//   password.setAttribute("type", type);
//   // ------ Toggle eye -------
// });
// toggleButton.addEventListener("click", (e) => {});

const show = document.getElementById("show");
const hide = document.getElementById("hide");
const password = document.getElementById("id_password");
const toggleBtn = document.querySelector("show_hide");

function togglePassword() {
  toggleIcon();

  if (password.type === "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }
}

function toggleIcon() {
  if (show.style.display === "none") {
    show.style.display = "block";
    hide.style.display = "none";
  } else {
    show.style.display = "none";
    hide.style.display = "block";
  }
}

function showToggleButton() {
  if (password.value.length > 0) {
    toggleBtn.style.display = "block";
  } else {
    toggleBtn.style.display = "";
  }
}
