let locationBtn = document.getElementById("locationBtn");


locationBtn.addEventListener("click", function () {

    let message = document.getElementById("message");


    // Check location support

    if (navigator.geolocation) {

        message.innerHTML = "📍 Getting your location...";


        navigator.geolocation.getCurrentPosition(

            showPosition,
            showError

        );

    }

    else {

        message.innerHTML =
            "❌ Cannot find your location.";

    }

});


// SHOW LOCATION

function showPosition(position) {

    let latitude = position.coords.latitude;

    let longitude = position.coords.longitude;


    document.getElementById("location").value =

        "Lat: " + latitude.toFixed(4) +
        " | Long: " + longitude.toFixed(4);


    let message = document.getElementById("message");

    message.innerHTML =
        "✅ Location Added Successfully!!";

}


// SHOW ERROR

function showError(error) {

    document.getElementById("message").innerHTML =
        "❌ Location permission denied or unavailable.";

}