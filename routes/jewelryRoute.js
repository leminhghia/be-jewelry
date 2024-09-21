import express from "express";
import {addJewelry, listJewelry, removeJewelry} from "../controllers/jewelryController.js"
import multer from "multer";

const jeweleyRouter = express.Router();

// Image Storage Engine

const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb) => {
        return cb(null, `${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage:storage})

jeweleyRouter.post("/add", upload.single("image"), addJewelry)
jeweleyRouter.get("/list",listJewelry)
jeweleyRouter.post("/remove",removeJewelry)




export default jeweleyRouter;