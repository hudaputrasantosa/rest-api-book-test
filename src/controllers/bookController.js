const Book = require("../models").Book;

const getBooks = async (req, res) => {
  try {
    let books = await Book.findAll({
      include: [],
      order: [["createdAt", "DESC"]],
    });
    if (!books) {
      res.status(404).json({ status: "Not Found", message: "Books not found" });
    }
    res.status(200).json({
      status: "OK",
      message: "Success find data",
      data: books,
    });
  } catch (error) {
    res.status(500).json({
      status: "Error",
      message: `Error at ${error}`,
    });
  }
};

const createBook = async (req, res) => {
  try {
    await Book.create({
      title: req.body.title,
      author: req.body.author,
      year: req.body.year,
      stock: req.body.stock,
    });

    res.status(200).json({
      status: "OK",
      message: "Success add book",
    });
  } catch (error) {
    res.status(500).json({
      status: "Error",
      message: `Error at ${error}`,
    });
  }
};

module.exports = { getBooks, createBook };
