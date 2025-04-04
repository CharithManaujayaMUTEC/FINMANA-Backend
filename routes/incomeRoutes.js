import express from "express"; // ES module import
import { getAllIncomes, addIncome } from "../controllers/incomeController.js"; // ES module import

const router = express.Router();

router.get("/", getAllIncomes);
router.post("/", addIncome);

export default router; // ES module export
