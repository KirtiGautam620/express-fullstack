const {PrismaClient}=require("../../generated/prisma")
const prisma=new PrismaClient()

const createBook=async(req,res)=>{
    const {title,authorId,summary,isbn,genre,url}=req.body
    if(!title||!authorId||!summary||!isbn||!genre||!url){
        res.status(400).json("req fields")
    }
    const ids=Array.isArray(genre)?genre:[genre]
    try{
        const b=await prisma.book.create({
        data:{
            title,summary,isbn,url,
            author:{
                connect:{
                    id:Number(authorId)
                }
            },
            genres:{
                create:ids.map((e)=>({
                    genre:{
                        connect:{
                            id:Number(e)
                        }
                    }
                }))
            }
        }
    })
    res.status(201).json(b)

    }catch(err){
        console.log(err)
    }
    
}

const getAllBook=async(req,res)=>{}

const getBookById=async(req,res)=>{}

const updateBook=async(req,res)=>{}

const deleteBook=async(req,res)=>{}

module.exports={createBook,getAllBook,getBookById,updateBook,deleteBook}