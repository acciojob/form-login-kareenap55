function getFormvalue() {
    //Write your code here
	document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("userForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the form from submitting and refreshing the page

        let firstName = document.getElementById("fname").value.trim();
        let lastName = document.getElementById("lname").value.trim();

        if (firstName === "" || lastName === "") {
            alert("Please enter both First Name and Last Name.");
            return;
        }

        alert(firstName + " " + lastName);
    });
});


}
