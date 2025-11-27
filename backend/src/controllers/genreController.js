const {PrismaClient}=require("../../generated/prisma")
const prisma=new PrismaClient()
const createGenre = async (req,res)=>{
    try{
        const {name,url}=req.body
        if(!name||!url){
            return res.status(400).json({"message":"data req"})
        }
        const c=await prisma.genre.create({
            data:{
                name,url
            }
        })
        res.status(201).json(c)
    }catch(err){
        res.status(500).json({"message":err.message})
        console.log(err)
    }
}
const getAllGenre = async (req,res)=>{
    try{
        const c=await prisma.genre.findMany({
            include:{
                books:{
                    include:{
                        book:{
                            select:{
                                title:true,
                                summary:true
                    }
                        }
                    }
                    
                }
            }
        })
        res.status(200).json(c)
    }catch(err){
        res.status(500).json({"message":err.message})
        console.log(err)
    }
}

const getGenreById = async (req,res)=>{
    try{
        const {id}=req.params
        if(!id){
            res.status(400).json({"message":"Not found"})
        }
        const c=await prisma.genre.findUnique({
            where:{
                id:Number((id))
            },
            include:{
                books:{
                    include:{
                        book:{
                            select:{
                                title:true,
                                summary:true
                            }
                        }
            }
                }
            }
            
        })
        if(!c){
            res.status(404).json({"message":"not found"})
        }
        res.status(201).json(c)
    }catch(err){
        res.status(500).json({"message":err.message})
        console.log(err)
    }
}


const updateGenre = async (req,res)=>{
    try{
        const {id}=req.params
        const {name,url}=req.body
        if(!id){
            res.status(404).json({"message":"Not found"})
        }
        const c=await prisma.genre.update({
            where:{
                id:Number(id)
            },
            data:{
                name,url
            }
        })
        res.status(201).json(c)
    }catch(err){
        res.status(500).json({"message":err.message})
        console.log(err)
    }
}


const deleteGenre=async (req,res)=>{
    try{
        const {id}=req.params
        const {name,url}=req.body
        if(!name||!url){
            res.status(404).json({"message":"Not found"})
        }
        const c=await prisma.genre.delete({
            where:{
                id:Number(id)
            }
        })
        res.status(201).json(c)
    }catch(err){
        res.status(500).json({"message":err.message})
        console.log(err)
    }
}
module.exports={createGenre,deleteGenre,getAllGenre,updateGenre,getGenreById}