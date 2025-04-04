const express = require("express");
const { getAllIncomes, addIncome } = require("../controllers/incomeController");

const router = express.Router();

router.get("/", getAllIncomes);
router.post("/", addIncome);

module.exports = router;
