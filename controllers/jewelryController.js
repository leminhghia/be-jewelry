import jewelryModel from "../models/jewelryModel.js";
import fas from "fs"

//add jeweley item

const addJewelry = async (req, res) => {
    let image_filename = `${req.file.filename}`;

    const jewelry = new jewelryModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: image_filename
    })
    try {
        await jewelry.save();
        res.json({
            success: true,
            message: "jewelry Added"
        })
    } catch (error) {
        console.log(error)
        res.json({
            success: false,
            message: "Error"
        })
    }
}
// all jewelry list 
const listJewelry = async (req, res) => {
    try {
        const jewelrys = await jewelryModel.find({});
        res.json({
            success: true,
            data: jewelrys
        })
    } catch (error) {
        console.log(error),
            res.json({
                success: false,
                message: "Error"
            })
    }
}
// remove jewelry item
const removeJewelry = async(req,res)=>{
    try{
        const jewelry = await jewelryModel.findById(req.body.id);
        fas.unlink(`uploads/${jewelry.image}`,()=>{})

        await jewelryModel.findByIdAndDelete(req.body.id);
        res.json({success:true,message:"Jewelry Removed"})
    }
    catch (Error){
        console.log(Error);
        res.json({success:false,message:"Error"})
    }
}
export {
    addJewelry,
    listJewelry,
    removeJewelry
}
