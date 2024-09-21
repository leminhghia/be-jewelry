import mongoose from "mongoose"

export const connectDB = async() => {
    await mongoose.connect('mongodb+srv://nghialmpi00200:hIfLGHsQt7hha1e9@thoitrang1.0sfs0.mongodb.net/thottrang').then(()=>console.log("DB Connected"));
}