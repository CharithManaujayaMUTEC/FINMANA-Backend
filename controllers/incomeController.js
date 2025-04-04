import Income from "../models/Income.js";

// Get all incomes
const getAllIncomes = async (req, res) => {
  try {
    const incomes = await Income.find();
    res.status(200).json(incomes);
  } catch (err) {
    res.status(500).json({ message: "Error fetching incomes" });
  }
};

// Add a new income
const addIncome = async (req, res) => {
  const { date, type, amount, account } = req.body;
  try {
    const income = new Income({ date, type, amount, account });
    await income.save();
    res.status(201).json(income);
  } catch (err) {
    res.status(500).json({ message: "Error adding income" });
  }
};

export default { getAllIncomes, addIncome };
