console.log("I work");

$(document).ready(function () {
    // ########################################################################################

    // **************************FOR MANAGER LOGINS ONLY*****************************

    // ########################################################################################

    $("#login").on("click", function (event) {
        console.log("I work");
        event.preventDefault();
        console.log("manager login js is working");

        var LogInEvent = {
            mgrEmail: $("#emailAddr").val().trim(),
            password: $("#password").val().trim()
        }

        console.log("loginevent = ", LogInEvent);

      
        // queries the database based on the email provided

        $.get("/api/manager/" + LogInEvent.mgrEmail)

        // On success, run the following code

        //STILL NEED VALIDATION
        .then(function(data) {
            var id = data.id;
            console.log("id = " + id);
                // Stores the manager ID retrieved from the database in the session 
                sessionStorage.setItem("managerId", parseInt(data.id));
                window.location.href = "index.html";
                console.log("redirecting");
                sessionStorage.setItem("managerEmail", $("#emailAddr").val().trim());
                // alert("please enter a valid email address");
                
                
                window.location.href = 'MgrCreateEvent.html';


        }).catch(function(err) {
            alert("invalid email or password. please try again");
        });



    });
});