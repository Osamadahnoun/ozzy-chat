const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");
const connectDB = require("./config/db");
const colors = require("colors");
const userRoutes = require("./routes/userRoutes");

dotenv.config();
connectDB();
const app = express();

app.get("/", (req, res) => {
  res.send("API is Running");
});

app.use("/api/user", userRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, console.log(`Server started on ${PORT}`.yellow.bold));
