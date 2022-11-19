import express from 'express'
import path from 'path'
import multer from 'multer'

import {deleteData, getData, pushData, updateData, uploadImage} from './Controllers/Requests.js'

const storage = multer.diskStorage({
    destination: (_, __, cb) => {
        cb(null, 'uploads');
    },
    filename: (_, file, cb) => {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage });

const app = express()
const __dirname = path.resolve()

app.use(express.json())
app.use('/uploads', express.static('uploads'))

app.set("view engine", "ejs")
app.set("views", path.resolve(__dirname, "ejs"))

app.get('/', (req, res) => {
    res.render("index", {title: "Main Page", active: "main"})
})

app.get('/features', (req, res) => {
    res.render('features', {title: "Main Features", active: "features"})
})

app.get('/getData', getData)
app.post('/pushData', pushData)
app.delete('/deleteData/:id', deleteData)
app.patch('/updateData/:id', updateData)
// ===== THE PICTURE ===== //
app.post('/upload', upload.single('image'), uploadImage);

const port = 4444;
app.listen(port, (err) => {
    if (err) return console.log("Server crushed");
    console.log("Server OK;", `http://localhost:${port}`)
})