import express from "express"; // ES module import
import mongoose from "mongoose"; // ES module import
import cors from "cors"; // ES module import
import bodyParser from "body-parser"; // ES module import
import dotenv from "dotenv"; // ES module import

import incomeRoutes from "./routes/incomeRoutes.js"; // ES module import
import expenditureRoutes from "./routes/expenditureRoutes.js"; // ES module import

dotenv.config(); // Load environment variable

const app = express(); // Middleware
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

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
