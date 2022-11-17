import express from 'express'
import path from 'path'
import multer from 'multer'

import {default as mongodb} from "mongodb";

const database = mongodb.MongoClient;
const urlDb = "mongodb+srv://artem:WebDevelop@fullstackproject.gx3iiu1.mongodb.net/?retryWrites=true&w=majority"

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
app.use('/uploads', express.static('uploads'))

const __dirname = path.resolve()

app.set("view engine", "ejs")
app.set("views", path.resolve(__dirname, "ejs"))



app.get('/', (req, res) => {
    res.render("index", {title: "Main Page"})
})

app.post('/pushData', (req, res) => {
     database.connect(urlDb, (error, db) => {
        if (error) return res.status(504).send({error: "Database connection has failed"});
        const dbo = db.db("BU-store");
        dbo.collection("products").find({}).toArray((err, result) => {
            if (err) throw err;
            const data = {
                _id: result.length + 1,
                name: req.body.name,
                price: req.body.price
            };
            dbo.collection("products").insertOne(data, (error) => {
                if (error) throw error;
                res.send({
                    message: "Success",
                })
                db.close()
            })
        })
    })
})

app.listen(4444, (err) => {
    if (err) return console.log("Server crushed");
    console.log("Server OK")
})