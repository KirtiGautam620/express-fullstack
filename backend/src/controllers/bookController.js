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

const getAllBook=async(req,res)=>{
    try{
        const b=await prisma.book.findMany({
            include:{
                author:{
                    select:{
                        name:true
                    }
                },
                genres:{
                    include:{
                        genre:{
                            select:{
                                name:true,
                                url:true
                            }
                        }
                    }
                }
            }
        })
        res.status(201).json(b)
    }
    catch(err){
        console.log(err)
    }
}

const getBookById=async(req,res)=>{
    const {id}=req.params
    if(!id){
        res.status(400).json({"message":"invalid"})
    }
    try{
        const u=await prisma.book.findUnique({
            where:{
                id:Number(id)
            },
                include:{
                    author:{
                        select:{
                            name:true
                        }
                    },
                    genres:{
                        include:{
                            genre:{
                                select:{
                                    name:true,
                                    url:true
                                }
                            }
                        }
                    }
                }
        })
        res.status(201).json({"message":u})
    }
    catch(err){
        console.log(err)
    }
}

const updateBook=async(req,res)=>{
    const {id}=req.params
    try{
        const up=await prisma.book.update({
            where:{
                id:id
            },
            include:{
                author:{
                    name:true
                },
                genres:{
                    include:{
                        genre:{
                            name:true,
                            url:true
                        }
                    }
                }
            }
        })
        res.status(201).json(up)
    }
    catch(err){
        console.log(err)
    }
}

const deleteBook=async(req,res)=>{}

module.exports={createBook,getAllBook,getBookById,updateBook,deleteBook}