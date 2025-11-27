const {Router}=require("express")
const { createGenre,getAllGenre,getGenreById,deleteGenre,updateGenre} = require("../controllers/genreController")
const genreRouter=Router()

genreRouter.post("/genre",createGenre)
genreRouter.get("/genre",getAllGenre)
genreRouter.get("/genre/:id",getGenreById)
genreRouter.delete("/genre/:id",deleteGenre)
genreRouter.patch("/genre/:id",updateGenre)



module.exports=genreRouter