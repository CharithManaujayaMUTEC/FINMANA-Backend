const express = require("express");
const {
  getAllExpenditures,
  addExpenditure,
} = require("../controllers/expenditureController");

const router = express.Router();

router.get("/", getAllExpenditures);
router.post("/", addExpenditure);

module.exports = router;
