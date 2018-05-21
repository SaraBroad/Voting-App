$(".submit-btn").on("click", function(event){
    event.preventDefault();
    var email = "";
    var password = ""
});
// $.ajax(api/events/:id)


//do get request for volunteers emails
//then do validation
//if email is in db - continue
//if email is not in db - alert
//if password doesn't match db password - alert incorrect password
//if both match - continue to events page window.location.href = "/"