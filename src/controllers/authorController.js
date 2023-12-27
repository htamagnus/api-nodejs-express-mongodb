import { author } from "../models/Author.js";

class AuthorController {

  static async listAuthors(req, res) {
    try {
      const listAuthors = await author.find({});
      res.status(200).json(listAuthors);
    } catch (error) {
      res.status(500).json({ message: `${error.message} - request failed` });
    }
  };

  static async getAuthorById(req, res) {
    try {
      const id = req.params.id;
      const foundAuthor = await author.findById(id);
      res.status(200).json(foundAuthor);
    } catch (error) {
      res.status(500).json({ message: `${error.message} - failed to request author` });
    }
  };

  static async createAuthor(req, res) {
    try {
      const newAuthor = await author.create(req.body);
      res.status(201).json({ message: "created successfully", author: newAuthor });
    } catch (error) {
      res.status(500).json({ message: `${error.message} - failed to create author` });
    }
  }

  static async updateAuthor(req, res) {
    try {
      const id = req.params.id;
      await author.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "author updated" });
    } catch (error) {
      res.status(500).json({ message: `${error.message} - update failed` });
    }
  };

  static async deleteAuthor(req, res) {
    try {
      const id = req.params.id;
      await author.findByIdAndDelete(id);
      res.status(200).json({ message: "author deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: `${error.message} - deletion failed` });
    }
  };
};

export default AuthorController;
