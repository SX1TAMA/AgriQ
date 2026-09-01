let locatiobtn = document.getElementById("getLocationBtn");

locatiobtn.addEventListener("click", function () {

    let message = document.getElementById("message");

    if (navigator.geolocation) {

        message.innerHTML = "\n📍 Getting your location...";

        navigator.geolocation.getCurrentPosition(
            showPosition,
            showError
        );

    } else {

        message.innerHTML =
            "❌ Cannot find your location.";

    }

    function showPosition(position) {

        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;

        document.getElementById("locationInput").value =
            "Lat: " + latitude.toFixed(4) +
            " | Long: " + longitude.toFixed(4);

        message.innerHTML =
            "\n✅ Location Added Successfully!!";

    }

    function showError(error) {

        message.innerHTML =
            "❌ Location permission denied or unavailable.";

    }

});