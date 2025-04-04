import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";

import incomeRoutes from "./routes/incomeRoutes.js"; // ES module import
import expenditureRoutes from "./routes/expenditureRoutes.js"; // ES module import

dotenv.config(); // Load environment variable

const app = express(); // Middleware
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use("/api/users", userRoutes);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Routes
app.use("/api/incomes", incomeRoutes);
app.use("/api/expenditures", expenditureRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
