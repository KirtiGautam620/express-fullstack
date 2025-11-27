const {Router}=require("express")
const { createBook, getAllBook, getBookById, deleteBook, updateBook } = require("../controllers/bookController")
const bookRouter=Router()

bookRouter.post("/",createBook)
bookRouter.get("/",getAllBook)
bookRouter.get("/:id",getBookById)
bookRouter.delete("/:id",deleteBook)
bookRouter.patch("/:id",updateBook)

module.exports=bookRouter