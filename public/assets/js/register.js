$(document).ready(function () {

<<<<<<< HEAD
    $(".btn").on("submit", function(event){
        console.log("hello");

    })

});

//     $(".create-form").on("submit", function (event) {
//         console.log("hello");
//         event.preventDefault();
//         var name = $("#burger-name").val().trim();
//         console.log(name);

//         var newBurger = {
//             name: name,
//         };
//         $.ajax("/burgers", {
//             type: "POST",
//             data: newBurger
//         }).then(
//             function () {
//                 console.log("Created new burger");
//                 location.reload();
//             }
//         );
//     });


//     module.exports = function(sequelize, DataTypes) {
//         var Volunteer = sequelize.define("Volunteer", {
//           first_name: DataTypes.STRING,
//           last_name: DataTypes.STRING,
//           street_address:DataTypes.STRING,
//           city:DataTypes.STRING,
//           email: DataTypes.STRING,  
//         });
//         return Volunteer;
//       };

//     $(document).on("click", ".devour-btn", function (event) {
//         var id = $(this).attr("data-burgerid");
//         var newDevouer = 1;
//         console.log(event);
//         var newDevouerState = {
//             devouered: newDevouer
//         };

//         // Send the PUT request.
//         $.ajax({
//             url: "burgers/" + id,
//             type: "PUT",
//             data: newDevouerState
//         }).then(
//             function (response) {
//                 console.log("changed devoured to", response);
//                 // Reload the page to get the updated list
//                 location.reload();
//             }
//         );
//     });
// });


// module.exports = function(sequelize, DataTypes) {
//     var Volunteer = sequelize.define("Volunteer", {
//       first_name: DataTypes.STRING,
//       last_name: DataTypes.STRING,
//       street_address:DataTypes.STRING,
//       city:DataTypes.STRING,
//       email: DataTypes.STRING,  
//     });
//     return Volunteer;
//   };

// // module.exports = function(sequelize, DataTypes) {
// //     var Login = sequelize.define("Login", {
// //       email: DataTypes.STRING,
// //       password: DataTypes.STRING,  
// //     });
// //     return Login;
// //   };



// $(document).ready(function(){



// });

// {/* <div class="form-group">
// <label for="InputEmail">Email address</label>
// <input type="email" class="form-control" id="InputEmail" placeholder="Email">
// </div>
// <div class="form-group">
// <label for="InputPassword">Password</label>
// <input type="password" class="form-control" id="InputPassword" placeholder="Password"> */}
=======
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
                // res.redirect
            }
        )
    });
});
>>>>>>> 75da7f079fbcaa4f60e5ed94a8284c8d43142ff9
