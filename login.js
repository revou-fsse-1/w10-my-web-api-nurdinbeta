const getData = localStorage.getItem("userData");
const userData = JSON.parse(getData) || [
  { id: 1, email: "admin@gmail.com", password: "Admin123" },
];

function signIn() {
 const userEmail = document.getElementById("email").value;
  const userPassword = document.getElementById("password").value;
    localStorage.setItem("email", userEmail);
    localStorage.setItem("password", userPassword);
    window.location.href = "http://localhost:5173/"
};