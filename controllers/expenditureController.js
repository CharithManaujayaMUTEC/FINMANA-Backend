import Expenditure from "../models/Expenditure.js"; // ES module import

// Get all expenditures
export const getAllExpenditures = async (req, res) => {
  try {
    const expenditures = await Expenditure.find();
    res.status(200).json(expenditures);
  } catch (err) {
    res.status(500).json({ message: "Error fetching expenditures" });
  }
};

// Add a new expenditure
export const addExpenditure = async (req, res) => {
  const { date, type, amount, account } = req.body;
  try {
    const expenditure = new Expenditure({ date, type, amount, account });
    await expenditure.save();
    res.status(201).json(expenditure);
  } catch (err) {
    res.status(500).json({ message: "Error adding expenditure" });
  }
};
