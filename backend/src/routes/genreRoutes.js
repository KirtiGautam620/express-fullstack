const {Router}=require("express")
const { createGenre,getAllGenre,getGenreById,deleteGenre,updateGenre} = require("../controllers/genreController")
const genreRouter=Router()

genreRouter.post("/",createGenre)
genreRouter.get("/",getAllGenre)
genreRouter.get("/:id",getGenreById)
genreRouter.delete("/:id",deleteGenre)
genreRouter.patch("/:id",updateGenre)

module.exports=genreRouter