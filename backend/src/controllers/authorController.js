const {PrismaClient}=require("../../generated/prisma")
const prisma=new PrismaClient()

const createAuthor=async(req,res)=>{
    const {first_name,family_name,date_of_birth,date_of_death,name,lifespan,url}=req.body
    if(!first_name||!family_name||!date_of_birth||!date_of_death||!name||!lifespan||!url){
        return res.status(400).json({message:"require fields"})
    }
    const a=await prisma.author.create({
        data:{
            first_name:first_name,
            family_name:family_name,
            date_of_birth:new Date(date_of_birth),
            date_of_death:new Date(date_of_death),
            name:name,
            lifespan:lifespan,
            url:url
        }
    })
    res.status(201).json(a)
}

const getAllAuthor=async(req,res)=>{
    try{
        const u=await prisma.author.findMany({
            include:{
                book:true
            }
        })
        res.status(201).json(u) 
    }
    catch(err){
        console.log(err)
    }

}
const getAuthorById=async(req,res)=>{
    const {id}=req.params
    if(!id){
        res.status(400).json({message:"required id"})
    }
    try{
        const a=await prisma.author.findUnique({
            where:{
                id:Number(id)
            },
                include:{
                    book:true
                }
            
        })
        res.status(201).json({"message":a})
    }
    catch(err){
        console.log(err)
    }
}
const updateAuthor=async(req,res)=>{
    const {id}=req.params
    const {first_name,family_name,date_of_birth,date_of_death,name,lifespan,url}=req.body
    if(!id){
            res.status(404).json({"message":"Not found"})
        }
    try{
        const a=await prisma.author.update({
            where:{
                id:Number(id)
            },
            data:{
                first_name,family_name,date_of_birth,date_of_death,name,lifespan,url
            }
        })
        res.status(201).json(a)
    }
    catch(err){
        console.log(err)
    }
}
const deleteAuthor=async(req,res)=>{}

module.exports={createAuthor,getAllAuthor,getAuthorById,updateAuthor,deleteAuthor}