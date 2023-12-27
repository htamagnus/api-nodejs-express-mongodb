import Book from "../models/Books.js";
import { author } from "../models/Author.js";

class BookController {

  static async listBooks(req, res) {
    try {
      const bookList = await Book.find({});
      res.status(200).json(bookList);
    } catch (error) {
      res.status(500).json({ message: `${error.message} - request failed` });
    }
  };

  static async getBookById(req, res) {
    try {
      const id = req.params.id;
      const foundBook = await Book.findById(id);
      res.status(200).json(foundBook);
    } catch (error) {
      res.status(500).json({ message: `${error.message} - failed to request book` });
    }
  };

  static async createBook(req, res) {
    const newBook = req.body;
    try {
      const foundAuthor = await author.findById(newBook.author);
      const completeBook = { ...newBook, author: { ...foundAuthor._doc }};
      const createdBook = await Book.create(completeBook);
      res.status(201).json({ message: "created successfully", book: createdBook });
    } catch (error) {
      res.status(500).json({ message: `${error.message} - failed to create book` });
    }
  }

  static async updateBook(req, res) {
    try {
      const id = req.params.id;
      await Book.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "book updated" });
    } catch (error) {
      res.status(500).json({ message: `${error.message} - update failed` });
    }
  };

  static async deleteBook(req, res) {
    try {
      const id = req.params.id;
      await Book.findByIdAndDelete(id);
      res.status(200).json({ message: "book deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: `${error.message} - deletion failed` });
    }
  };

  static async listBooksByPublisher(req, res) {
    const publisher = req.query.publisher;
    try {
      const booksByPublisher = await Book.find({ publisher: publisher });
      res.status(200).json(booksByPublisher);
    } catch (error) {
      res.status(500).json({ message: `${error.message} - search failed` });
    }
  }
};

export default BookController;
