import mongoose from "mongoose";

const jewelrySchema = new mongoose.Schema({
    name: {type:String,required:true},
    description: {type:String,required:true},
    price: {type:Number,required:true},
    image: {type:String,required:true},
    category: {type:String,required:true}
})

const jewelryModel = mongoose.models.jewelry || mongoose.model("jewelry",jewelrySchema)

export default jewelryModel;