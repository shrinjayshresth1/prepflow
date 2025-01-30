import cors from 'cors';
import express from "express";
import multer from "multer";
const app = express()
app.use(express.json())
const PORT = 3000;
app.use(cors())

import fs from 'fs';
app.get('/', (req, res) => {
    res.send("Hello world")
})


const uploadDir = 'uploads'
if (!fs.existsSync(uploadDir)) {
    fs.mkdir(uploadDir)
}
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/')
    }
    ,
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})
const upload = multer({ storage })
app.post('/analyze', upload.single('file'), (req, res) => {
    try {
        console.log(req.file.filename);
        res.json({
            message: "File uploaded successfully!",
            filename: req.file.filename,
            path: `uploads/${req.file.filename}`, // Return file path
        });
    }
    catch (e) {
        console.error(e)
    }
})

app.listen(PORT, () => {
    console.log(`Server started running at ${PORT}`)
})