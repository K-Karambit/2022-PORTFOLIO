function sendEmail() {
  Email.send({
    SecureToken: "90d50a5b-4d3a-45e9-92b8-96da6d3ee7a4",
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
