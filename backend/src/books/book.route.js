const empress = require('express');
const Book = require('./book.model');
const { postAbook, getAllBooks, getSingleBook, UpdateBook, deletedBook } = require('./book.controller');
const router = empress.Router();

//frontend => backend server => controller => book schema => database => send data to server => back to the frontend

//post = when submit something frontend to db
//get = when get something back from db
//put/patch = when edit or update something in db


//post a book 
router.post("/create-book",postAbook)

//get all books
router.get("/",getAllBooks)

//get a single book endpoint
router.get("/:id",getSingleBook)

//update a book endpoint
router.put("/edit/:id",UpdateBook)

//delete a book endpoint
router.delete("/:id",deletedBook);


module.exports = router;