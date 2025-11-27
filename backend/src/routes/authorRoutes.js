const {Router}=require("express")
const { createAuthor, getAllAuthor, getAuthorById, deleteAuthor, updateAuthor } = require("../controllers/authorController")
const authorRouter=Router()

authorRouter.post("/author",createAuthor)
authorRouter.get("/author",getAllAuthor)
authorRouter.get("/author/:id",getAuthorById)
authorRouter.delete("/author/:id",deleteAuthor)
authorRouter.patch('/author/:id',updateAuthor)

module.exports=authorRouter