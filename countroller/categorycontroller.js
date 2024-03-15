const {mongoClient,ObjectId}=require("mongodb")
let main= require("../models/dbconflicg")

const catform=async(req,res)=>{
    let db =await main();
    const collection=db.collection("category")

    let allcat=await collection.find({}).toArray();
    res.render("category",{
        "catinfo":allcat,
        "edituser":[]

    })

}
const savecatData = async (req, res) => {
    let db = await main();
    const collection = db.collection("category");

    let id=req.body.cid
    let obj = {
        name: req.body.cname
    }
    if(id!=''){
        let ans =collection.updateOne({_id :new ObjectId(id)},{$set:obj})
    }
    else{
        let ans = collection.insertOne(obj);
    }
    res.redirect("/category")
}
// const savecatData = async (req, res) => {
//     try {
//         let categoryName = req.body.cname.trim(); // Trim any whitespace
        
//         // Check if the category name is empty
//         if (!categoryName) {
//             return res.status(400).send("Category name cannot be empty");
//         }

//         let db = await main();
//         const collection = db.collection("category");

//         let obj = {
//             name: categoryName
//         };

//         let ans = await collection.insertOne(obj);

//         res.redirect("/category");
//     } catch (error) {
//         console.error(error);
//         res.status(500).send("Internal Server Error");
//     }
// };

const deletecatData=async (req,res)=>{
    let db = await main();
    const collection = db.collection("category");

    let deleteid=req.params.id
    let ans = await collection.deleteOne({_id :new ObjectId(deleteid)})
    res.redirect("/category")

}
 
const editcatData =async(req,res)=>{
    let db = await main();
    const collection = db.collection("category");

    let editid=req.params.id;
    let allcat=await collection.find({}).toArray();
    let edituser=await collection.find({_id:new ObjectId(editid)}).toArray();

    res.render("category",{
        "catinfo":allcat,
        "edituser":edituser
    })

}

module.exports= {catform,savecatData,deletecatData,editcatData}