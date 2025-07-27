const Book = require("./book.model");

const postAbook = async (req, res) => {
  try {
    const newBook = await Book({ ...req.body });
    await newBook.save();
    res
      .status(200)
      .send({ message: "Book created successfully", book: newBook });
  } catch (error) {
    console.log("Error creating book:", error);
    res.status(200).send({ message: "Failed to Create Book", error });
  }
};
//get all books
const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find().sort({ createdAt: -1 });

    res.status(200).send(books);
  } catch (error) {
    console.log("Error fetching books:", error);
    res.status(500).send({ message: "Failed to fetch books", error });
  }
};

const getSingleBook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    if (!book) {
      res.status(404).send({ message: "Book not Found!" });
    }
    res.status(200).send(book);
  } catch (error) {
    console.log("Error fetching book:", error);
    res.status(500).send({ message: "Failed to fetch books" });
  }
};

//updatae a book
const UpdateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedBook = await Book.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updatedBook) {
      res.status(404).send({ message: "Book not Found!" });
    }
    res.status(200).send({
        message: "Book updated successfully",
        book: updatedBook,
    });

  } catch (error) {
    console.log("Error updating book:", error);
    res.status(500).send({ message: "Failed to update book" });
  }
};

const deletedBook = async (req, res) => {
  try {
    const {id} = req.params;
    const deletedBook = await Book.findByIdAndDelete(id);
    if (!deletedBook) {
      return res.status(404).send({ message: "Book not found" });
    }
    res.status(200).send({ message: "Book deleted successfully" , book: deletedBook });
    
  } catch (error) {
    console.log("Error deleting book:", error);
    res.status(500).send({ message: "Failed to delete book" });
  }
}
  

module.exports = {
  postAbook,
  getAllBooks,
  getSingleBook,
  UpdateBook,
  deletedBook,
};
