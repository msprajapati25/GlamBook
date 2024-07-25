const port = 4003;
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const cors = require('cors');
const jwt = require('jsonwebtoken'); // Import jsonwebtoken module

app.use(express.json());
app.use(cors());

// Database connection with MongoDB
mongoose.connect("mongodb+srv://msprajapati25:manish2308@cluster0.yonudlk.mongodb.net/GLAMBOOK", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// API creation
app.get("/", (req, res) => {
    res.send("Express app is running");
});

// Image storage engine
const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
});

const upload = multer({ storage: storage });

app.use('/images', express.static('upload/images'));

// Creating upload endpoint for images
app.post('/upload', upload.single('service'), (req, res) => {
    res.json({
        success: 1,
        image_url: `http://localhost:${port}/images/${req.file.filename}`
    });
});

// Schema for creating services
const ServiceSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    new_price: {
        type: Number,
        required: true
    },
    old_price: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    },
    available: {
        type: Boolean,
        default: true
    }
});

const Service = mongoose.model('Service', ServiceSchema);

app.post('/addservice', async (req, res) => {
    try {
        let services = await Service.find({});
        let nid = services.length > 0 ? services[services.length - 1].id + 1 : 1;
        const newService = new Service({
            id: nid,
            name: req.body.name,
            image: req.body.image,
            category: req.body.category,
            new_price: req.body.new_price,
            old_price: req.body.old_price
        });
        await newService.save();
        console.log("Saved");
        res.json({
            success: true,
            name: req.body.name,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// creating api for deleting services
app.post('/removeservice', async (req, res) => {
    try {
        await Service.findOneAndDelete({ id: req.body.id });
        console.log("Service deleted");
        res.json({
            success: true,
            name: req.body.name,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

//creating api for getting all services
app.get('/allservices', async (req, res) => {
    try {
        let services = await Service.find({});
        console.log("all services found");
        res.json(services);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// Schema for user model
const UserSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String,
    cartdata: { type: mongoose.Schema.Types.Mixed },
    date: { type: Date, default: Date.now }
});

const Users = mongoose.model('Users', UserSchema);

//creating endpoint for registration of customers
app.post('/signup', async (req, res) => {
    try {
        let check = await Users.findOne({ email: req.body.email });
        if (check) {
            return res.status(400).json({ success: false, errors: "existing user found with same email" })
        }
        let cart = {};
        for (let i = 0; i < 300; i++) {
            cart[i] = 0;
        }
        const user = new Users({
            name: req.body.username,
            email: req.body.email,
            password: req.body.password,
            cartdata: cart
        });
        await user.save();
        console.log("User saved");
        const data = {
            user: {
                id: user.id,
            }
        }
        const token = jwt.sign(data, 'secret_app');
        res.json({ success: true, token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

//creating endpoint for login of customers
app.post('/login',async(req,res) => {
    let user = await Users.findOne({email: req.body.email});
    if (user){
        const passComp= req.body.password === user.password;
        if (passComp){
            const data = {
                user: {
                    id: user.id,
                }
            }
            const token = jwt.sign(data, 'secret_app');
            res.json({ success: true, token });
        }
        else{
            res.json({success: false,errors : "Wrong password"});
        }
    }
    else{
        res.json({success: false,errors : "User not found"});
    }
})

app.listen(port, () => {
    console.log("Server is running on port " + port);
});
