const express = require("express");
const cors = require("cors");

const app = express();

const PORT = 3000;

// Allow frontend to communicate with backend
app.use(cors());

// Allow server to receive JSON data
app.use(express.json());


// ===============================
// FARMER REGISTRATION API
// ===============================

app.post("/api/register", (req, res) => {

    console.log("Registration request received!");

    const farmer = req.body;

    console.log("Farmer received by server:");
    console.log(farmer);

    res.json({
        success: true,
        message: "Farmer registered successfully!",
        farmer: farmer
    });

});


// ===============================
// START SERVER
// ===============================

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});