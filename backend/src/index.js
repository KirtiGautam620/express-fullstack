const express =require("express")
require('dotenv').config({quiet:true})
const genreRouter=require("../src/routes/genreRoutes")
const bookRouter=require("../src/routes/bookRoutes")
const authorRouter=require("../src/routes/authorRoutes")
const app=express()
app.use(express.json())
app.use("/authors",authorRouter)
app.use("/genres",genreRouter)
app.use("/books",bookRouter)
// app.post("/api/v1/book",async (req,res)=>{
//     const {title,authorId,summary,isbn,genreId,genre,url}=req.body
//     if(!title||!authorId||!summary||!isbn||!genre){
//         res.status(401).json({"message":"err"})
//     }
//     // try{
//     //     const newUser= await prisma.book.create({
//     //     data:{
//     //         title:title,
//     //         authorId:authorId,
//     //         summary:summary,
//     //         isbn:isbn,
//     //         url:url,
//     //         author:{
//     //             connect:{
//     //                 authorId:authorId
//     //             }
//     //         },
//     //         genre:{
//     //             create:[
//     //                 genre.map(g=>({
//     //                     genre:{
//     //                         connect:{
//     //                             g:genreId
//     //                         }
//     //                     }
//     //                 }))
//     //             ]
//     //         }
//     //     }
//     // })
//     // res.status(201).json(newUser)
//     // }catch(err){
//     // console.log(err)
//     // }
    
// })
app.listen(3000,()=>{
    console.log("server is listening")
})