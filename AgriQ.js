console.log("Registration JavaScript loaded!");

document.getElementById("Registration").addEventListener("submit", async (e) => {

    console.log("FORM SUBMITTED - JavaScript is working!");

    e.preventDefault();

    const farmer = {
        farmerName: document.getElementById("farmerName").value,
        farmerPhone: document.getElementById("farmerPhone").value,
        farmerVillage: document.getElementById("farmerVillage").value,
        cropType: document.getElementById("cropType").value,
        locationInput: document.getElementById("locationInput").value

    };

    console.log("Farmer data:", farmer);

    const response = await fetch("http://localhost:3000/api/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(farmer)
    });

    const result = await response.json();

    console.log("Server response:", result);
});
//To find the location
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