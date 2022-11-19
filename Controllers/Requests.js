import {default as mongodb, ObjectId} from "mongodb";

const database = mongodb.MongoClient;
const urlDb = "mongodb+srv://artem:WebDevelop@fullstackproject.gx3iiu1.mongodb.net/?retryWrites=true&w=majority"

export const getData = (req, res) => {
    database.connect(urlDb, (error, db) => {
        if (error) return res.status(504).send({error: "Database connection has failed"});
        const dbo = db.db("BU-store");
        dbo.collection('products').find({}).toArray((error, result) => {
            if (error) throw error;
            res.send(result)
            db.close()
        })
    })
}

export const pushData = (req, res) => {
    database.connect(urlDb, (error, db) => {
        if (error) return res.status(504).send({error: "Database connection has failed"});
        const dbo = db.db("BU-store");
        const data = {
            name: req.body.name,
            price: req.body.price
        };
        dbo.collection("products").insertOne(data, (error) => {
            if (error) return res.status(504).send({error: "Request error"});
            res.send({
                message: "Success",
            })
            db.close()
        })
    })
}

export const deleteData = (req, res) => {
    database.connect(urlDb, (error, db) => {
        if (error) throw error;
        const dbo = db.db("BU-store");
        dbo.collection("products").deleteOne({_id: new ObjectId(req.params.id)}, (error) => {
            if (error) return res.status(504).send({error: "Request error"});
            res.send({
                message: "Success"
            })
            db.close()
        })
    })
}

export const updateData = (req, res) => {
    database.connect(urlDb, (error, db) => {
        if (error) throw error;
        const dbo = db.db("BU-store");
        const checkId = {_id: new ObjectId(req.params.id)};
        const updateData = { $set: { name: req.body.name, price: req.body.price } }
        dbo.collection("products").updateOne(checkId, updateData, (error) => {
            if (error) return res.status(504).send({error: "Request error"});
            res.send({
                message: "Success"
            })
            db.close()
        })
    })
}

export const uploadImage = (req, res) => {
    res.json({
        message: "Success",
        url: `/uploads/${req.file.originalname}`,
    });
}