const mongoose = require("mongoose");

const IncomeSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  type: { type: String, required: true },
  amount: { type: Number, required: true },
  account: { type: String, required: true },
});

const Income = mongoose.model("Income", IncomeSchema);
module.exports = Income;
