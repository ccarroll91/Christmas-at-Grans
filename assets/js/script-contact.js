function sendMail(contactForm) {
    emailjs.send("gmail", "contact", {
        "from_name": contactForm.name.value,
        "from_emailaddress": contactForm.emailaddress.value,
        "message": contactForm.message.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
            alert("Thanks for getting in touch <3");
        },
        function(error) {
            console.log("FAILED", error);
        });
        return false;
}

document.addEventListener("submit", function(event) {
  event.preventDefault()
  event.target.reset()
})