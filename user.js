// FORM

let form = document.getElementById("farmerForm");


// GET LOCATION

function getLocation() {

    let message = document.getElementById("message");

    if (navigator.geolocation) {

        message.innerHTML = "📍 Getting your location...";

        navigator.geolocation.getCurrentPosition(
            showPosition,
            showError
        );

    } else {

        message.innerHTML =
            "❌ Your browser does not support location.";
    }
}


// SHOW LOCATION

function showPosition(position) {

    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    document.getElementById("location").value =
        "Lat: " + latitude.toFixed(4) +
        ", Long: " + longitude.toFixed(4);

    document.getElementById("message").innerHTML =
        "✅ Location accessed successfully!";
}


// LOCATION ERROR

function showError(error) {

    let message = document.getElementById("message");

    if (error.code === 1) {

        message.innerHTML =
            "❌ Location permission denied.";

    }

    else if (error.code === 2) {

        message.innerHTML =
            "❌ Location unavailable.";

    }

    else if (error.code === 3) {

        message.innerHTML =
            "❌ Location request timed out.";

    }

    else {

        message.innerHTML =
            "❌ Something went wrong.";
    }
}


// FORM SUBMIT

form.addEventListener("submit", function (event) {

    event.preventDefault();


    let name = document.getElementById("farmerName").value;

    let mobile = document.getElementById("mobile").value;

    let crop = document.getElementById("crop").value;

    let cropQuantity = document.getElementById("quantity").value;

    let location = document.getElementById("location").value;


    // Check location

    if (location === "") {

        document.getElementById("message").innerHTML =
            "📍 Please click Get Location first!";

        return;
    }


    // CREATE TABLE ROW

    let row = document.createElement("tr");


    row.innerHTML = `

        <td>${name}</td>
        <td>${mobile}</td>
        <td>${crop}</td>
        <td>${cropQuantity} KG</td>
        <td>${location}</td>

    `;


    // ADD ROW TO TABLE

    document
        .getElementById("tableBody")
        .appendChild(row);


    document.getElementById("message").innerHTML =
        "✅ Farmer data added successfully!";


    // RESET FORM

    form.reset();

});