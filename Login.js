console.log("Welcome to our site");

const Login_Btn = document.querySelector(".login");
const Register_Btn = document.querySelector(".Register");
const forgetPassword_Btn = document.querySelector(".forgetPassword");

const Login = document.querySelector("[Login]");
const Register = document.querySelector("[Register]");
const Forget = document.querySelector("[Forget]");

const Forget_Link = document.querySelector("[Forget_Link]");
const Login_Link = document.querySelector("[Login_Link]");

Login_Btn.addEventListener("click", () => {
  Login.classList.remove("visible");
  Register.classList.add("visible");
  Forget.classList.add("visible");
});

Register_Btn.addEventListener("click", () => {
  console.log("Register click");
  Register.classList.remove("visible");
  Login.classList.add("visible");
  Forget.classList.add("visible");
});

forgetPassword_Btn.addEventListener("click", () => {
  Login.classList.add("visible");
  Register.classList.add("visible");
  Forget.classList.remove("visible");
});

Forget_Link.addEventListener("click", () => {
  Login.classList.add("visible");
  Register.classList.add("visible");
  Forget.classList.remove("visible");
});

Login_Link.addEventListener("click", () => {
  Login.classList.remove("visible");
  Register.classList.add("visible");
  Forget.classList.add("visible");
});
