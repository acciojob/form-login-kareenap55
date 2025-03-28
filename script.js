function getFormvalue() {
    //Write your code here
	document.getElementById("nameForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents form from refreshing the page

    // Retrieve values and trim any extra spaces
    let firstName = document.querySelector('input[name="fname"]').value.trim();
    let lastName = document.querySelector('input[name="lname"]').value.trim();

    // Construct full name
    let fullName = `${firstName} ${lastName}`.trim();

    // Handle empty input case
    if (fullName === "") {
        alert("Please enter your full name.");
        return;
    }

    // Display full name in an alert
    alert(fullName);
});


}
