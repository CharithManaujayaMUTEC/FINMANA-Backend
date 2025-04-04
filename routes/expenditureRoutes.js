import express from "express"; // ES module import
import {
  getAllExpenditures,
  addExpenditure,
} from "../controllers/expenditureController.js"; // ES module import

const router = express.Router();

router.get("/", getAllExpenditures);
router.post("/", addExpenditure);

export default router; // ES module export
