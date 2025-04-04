import mongoose from "mongoose";

const ExpenditureSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  type: { type: String, required: true },
  amount: { type: Number, required: true },
  account: { type: String, required: true },
});

const Expenditure = mongoose.model("Expenditure", ExpenditureSchema);
export default Expenditure; // ES module export
