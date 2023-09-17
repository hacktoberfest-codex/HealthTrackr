// server.js

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

// Configure middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB (replace 'your_mongodb_uri' with your actual MongoDB URI)
mongoose.connect("mongodb://your_mongodb_uri", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// Create a schema for user data (customize it as needed)
const userSchema = new mongoose.Schema({
  name: String,
  dateOfBirth: Date,
  phoneNumber: String,
  address: String,
  email: String,
  password: String,
});

const User = mongoose.model("User", userSchema);

// Create an API route for user registration
app.post("/api/register", async (req, res) => {
  const {
    name,
    dateOfBirth,
    phoneNumber,
    address,
    email,
    password,
    confirmPassword,
  } = req.body;

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      res.status(400).json({ message: "User already exists" });
    } else {
      // Create a new user
      const newUser = new User({
        name,
        dateOfBirth,
        phoneNumber,
        address,
        email,
        password,
      });

      // Save the user to the database
      await newUser.save();
      res.status(201).json({ message: "Registration successful" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
