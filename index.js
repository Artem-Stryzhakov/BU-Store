import express from 'express'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import mongoose from "mongoose";
import path from 'path'
import multer from 'multer'

import {validationResult} from 'express-validator'
import {registerValidation} from './validations/auth.js'
import UserModel from './models/User.js'

import {deleteData, getData, pushData, updateData, uploadImage} from './Controllers/Requests.js'

// ===== DATABASE CONNECTION ===== //
mongoose.connect('mongodb+srv://artem:WebDevelop@fullstackproject.gx3iiu1.mongodb.net/?retryWrites=true&w=majority')
    .then(() => console.log("DB is OK"))
    .catch((err) => console.log('DB error', err));
// =============================== //

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
app.use(express.json())

const __dirname = path.resolve()

app.use('/uploads', express.static('uploads'))
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs")
app.set("views", path.resolve(__dirname, "ejs"))

app.get('/', (req, res) => {
    res.render("index", {title: "Main Page", active: "main"})
})

app.get('/features', (req, res) => {
    res.render('features', {title: "Main Features", active: "features"})
})

app.post('/auth/register', registerValidation, async(req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json(errors.array())
    }

    const password = req.body.password;
    const salt = await bcrypt.genSalt(10)
    const passwordHash = await bcrypt.hash(password, salt)

    const doc = new UserModel({
        email: req.body.email,
        fullName: req.body.fullName,
        avatarUrl: req.body.avatarUrl,
        passwordHash,
    });

    const user = await doc.save();

    res.json(user)
    console.log(user.createdAt)
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