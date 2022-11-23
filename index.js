import express from 'express'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import mongoose from "mongoose";
import path, {resolve} from 'path'
import multer from 'multer'

import {validationResult} from 'express-validator'
import {registerValidation} from './validations/auth.js'

import UserModel from './models/User.js'
import checkAuth from "./utils/checkAuth.js";
import * as UserController from './Controllers/UserController.js'

import {deleteData, getData, pushData, updateData, uploadImage} from './Controllers/Requests.js'

// ===== DATABASE CONNECTION ===== //
mongoose.connect('mongodb+srv://artem:WebDevelop@fullstackproject.gx3iiu1.mongodb.net/BU-store?retryWrites=true&w=majority')
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

app.post('/auth/login', UserController.login)
app.post('/auth/register', registerValidation, UserController.register)
app.post('/auth/me', checkAuth, UserController.getMe)

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