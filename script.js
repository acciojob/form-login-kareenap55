document.getElementById("nameForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from refreshing the page

    // Get input values and trim extra spaces
    let firstName = document.querySelector('input[name="fname"]').value.trim();
    let lastName = document.querySelector('input[name="lname"]').value.trim();

    // Check if fields are empty
    if (!firstName || !lastName) {
        alert("Please enter both First Name and Last Name.");
        return;
    }

    // Display full name
    alert(firstName + " " + lastName);
});
