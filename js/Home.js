function sendEmail() {
  Email.send({
    SecureToken: "b0ec0654-7113-47c9-96d8-ea31685f5d77",
    To: "johnkennethserrano95@gmail.com",
    From: "johnkennethserrano95@gmail.com",
    Subject: "Portfolio Contact Form",
    Body:
      "<br>From: " +
      document.getElementById("name").value +
      "<br>Subject: " +
      document.getElementById("subject").value +
      "<br>Email: " +
      document.getElementById("email").value +
      "<br>Message: " +
      document.getElementById("message").value,
  }).then((message) => alert("Email sent successfully"));
}
function DropdownClick() {
  document.getElementById("Dropdown").style.display = "block";
  document.getElementById("hamburger").style.display = "none";
}
function NoDropdown() {
  document.getElementById("hamburger").style.display = "block";
  document.getElementById("Dropdown").style.display = "none";
}
