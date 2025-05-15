const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());       // **allow everything** during debugging
app.use(express.json()); // preferred over body-parser now

// MongoDB Connection
mongoose.connect("mongodb+srv://raiankitsr:LSIokaGr2eYQVe3Q@cluster0.lw46zw0.mongodb.net/?retryWrites=true&w=majority&appName=Contact", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => {
    console.error("MongoDB connection error:", err.message);
    process.exit(1);
  });

// MongoDB Schema and Model
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});
const Contact = mongoose.model("Contact", contactSchema);

// Route
app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    const contact = new Contact({ name, email, message });
    await contact.save();
    res.status(200).json({ success: true, message: "Message sent successfully!" });
  } catch (err) {
    res.status(500).json({ error: "Server error. Please try again." });
  }
});

// Start server (✅ use a different port from Vite)
const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
