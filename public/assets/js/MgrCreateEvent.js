$(document).ready(function () {
    console.log("MgrEventCreate is ready!");

    // ########################################################################################

    // *************************FOR MANGER CREATING EVENT FORM*********************************

    // ########################################################################################
    $(document).on("submit", "#manager-CreateEvent-form", handleCreateEventFormSubmit);
    // A function to handle what happens when the form is submitted to create a new Author
    function handleCreateEventFormSubmit(task) {
        event.preventDefault();
        console.log("event create button is clicked");

        newTask = {
            event_title: $("#event_title").val().trim(),
            organization_name: $("#organization_name").val().trim(),
            organizer_first_name: $("#organizer_first_name").val().trim(),
            organizer_last_name: $("#organizer_last_name").val().trim(),
            street_address: $("#street_address").val().trim(),
            city: $("#city").val().trim(),
            state: $("#state").val().trim(),
            zip_code: $("#zip_code").val().trim(),
            phone_number: $("#phone_number").val().trim(),
            volunteers_needed: $("#volunteers_needed").val().trim(),
            event_description: $("#event_description").val().trim(),
            managerId: parseInt(sessionStorage.getItem("managerId"))
        };

        console.log("new Event listing = ", newTask);

  // Send an AJAX POST-request with jQuery
  $.post("/api/managerevents", newTask)
    // On success, run the following code
    .then(function() {
        console.log("New Event is posted");



    });

        // empty each input box by replacing the value with an empty string
        $("#event_title").val("");
        $("#organization_name").val("");
        $("#organizer_first_name").val("");
        $("#organizer_last_name").val("");
        $("#street_address").val("");
        $("#city").val("");
        $("#state").val("");
        $("#zip_code").val("");
        $("#phone_number").val("");
        $("#volunteers_needed").val("");
        $("#event_description").val("");

        //Loads next page
        // window.location.href = "MgrEventListings.html"

    }

});