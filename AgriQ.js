console.log("Registration JavaScript loaded!");

document.getElementById("Registration").addEventListener("submit", async (e) => {

    console.log("FORM SUBMITTED - JavaScript is working!");

    e.preventDefault();

    const farmer = {
        farmerName: document.getElementById("farmerName").value,
        farmerPhone: document.getElementById("farmerPhone").value,
        farmerVillage: document.getElementById("farmerVillage").value,
        cropType: document.getElementById("cropType").value
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
