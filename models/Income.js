import mongoose from "mongoose";

const IncomeSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  type: { type: String, required: true },
  amount: { type: Number, required: true },
  account: { type: String, required: true },
});

const Income = mongoose.model("Income", IncomeSchema);
export default Income; // ES module export
