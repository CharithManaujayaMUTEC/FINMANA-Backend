import Income from "../models/Income.js"; // ES module import

// Get all incomes
export const getAllIncomes = async (req, res) => {
  try {
    const incomes = await Income.find();
    res.status(200).json(incomes);
  } catch (err) {
    res.status(500).json({ message: "Error fetching incomes" });
  }
};

// Add a new income
export const addIncome = async (req, res) => {
  console.log(req.body);
  const { date, type, amount, account } = req.body;
  try {
    const income = new Income({ date, type, amount, account });
    await income.save();
    res.status(201).json(income);
  } catch (err) {
    res.status(500).json({ message: "Error adding income" });
  }
};
