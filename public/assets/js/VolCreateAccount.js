$(document).ready(function () {

    $(".submit-btn").on("click", function (event) {
        event.preventDefault();
        var firstName = $("#firstname").val().trim();
        var lastName = $("#lastname").val().trim();
        var address = $("#streetAddress").val().trim();
        var city = $("#city").val().trim();
        var state = $("#state").val().trim();
        var zipcode = $("#zip").val().trim();
        var email = $("#email").val().trim();
        var phone = $("#phone").val().trim();
        var password = $("#password").val().trim();
        var confirmpassword = $("#confirmpassword").val().trim();

        var newVolunteer = {
            first_name: firstName,
            last_name: lastName,
            street_address: address,
            city: city,
            state: state,
            zipcode: zipcode,
            email: email,
            password: password
            //password: password
        };

        console.log(newVolunteer);
        $.ajax("/api/newuser", {
            type: "POST",
            data: newVolunteer
        }).then(
            function () {
                console.log("Created new user");
                alert("Thank you for registering! Login using your credentials to continue")
            }
        )
    });
});