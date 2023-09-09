const express = require('express')
const mongo = require('../Database/Connection')
const FoodProduct = require('../Model/ProductModel')
const router = express.Router();
const multer = require('multer')
const uploads = multer({ dest: 'uploads/' })
const bodyParser = require('body-parser');
const Registation=require('../Model/User_model');
const bcrypt = require('bcrypt');
router.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded bodies
router.use(bodyParser.json()); // Parse JSON bodies
router.use(express.json());
const storage = multer.memoryStorage(); // Store images as buffers in memory
// const upload = multer({ storage });
const stripe = require("stripe")("pk_test_51MFeFBLjMxsRcJtMH6eI9oWOoBP95zrWtoY0jSkgUrPzyfcQvPX8ayPL5ro31SdQ8Rcd3pc7A4mBmVGJ9vKN5BLa00UeXZsjoi")
const { v4: uuidv4 } = require('uuid');
const storageEngine = multer.diskStorage({
    destination: "./upload",
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}--${file.originalname}`);
    },
});
const upload = multer({
    storage: storageEngine,
});

router.get('/shop/:id', async(req,res)=>{
    try {
        const product = await FoodProduct.findById(req.params.id);
        if (!product) {
          return res.status(404).json({ message: 'Product not found' });
        }
        res.json({product});
      } catch (error) {
        res.status(500).json({ message: 'Server error' });
      }
})

router.get('/shop', async (req, res) => {
    try {

        const studentData = await FoodProduct.find()
        res.status(201).json(studentData);
    } catch (e) {
        console.log('Error is occur ', e)
    }
});


// home page request;
router.get('/', async (req, res) => {
    try {

        const studentData = await FoodProduct.find()
        res.status(201).json(studentData);
    } catch (e) {
        console.log('Error is occur ', e)
    }
});
router.post('/product', upload.single('image'), (req, res, next) => {
    // console.log(req.body)
    if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded.' });
    }
    res.status(200).json({ message: 'Image uploaded successfully.' });
    // const image = req.file.filename;
    // console.log(image)
    const { name, price, description, rating, category } = req.body;


// const image=req.file.filename;

    const newProduct = new FoodProduct({
        name, category, price, description, rating,
        image: {
            data: req.file.filename,
            // contentType: 'image/jpg',
        },
    });
    newProduct.save()
        .then(newProduct => {
            console.log("data is store")
        })
        .catch(e => {
            console.log('error is occur ', e)
        })

    // res.send('data is received')
});

// registation

router.post('/signup', async (req, res) => {
    try {
        console.log('awais')
      const { name, email, password } = req.body;
      console.log(req.body)
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);
  
      const newUser = new Registation({
        name,
        email,
        password: hashedPassword
      });
  
      await newUser.save();
    //   req.session.user = email;
      res.json({message:'Registration successful'});
    } catch (error) {
      res.status(400).json('Error: ' + error);
    }
    // res.redirect('/login')
  });

// login
router.post('/login', async (req, res) => {


    try {
      const { email, password } = req.body;
      const user = await Registation.findOne({ email });
  
      if (!user) {
        return res.status(401).json({ error: 'Invalid credentials email' });
      }
      // console.log(user.password)
      const isPasswordValid = await bcrypt.compare(password, user.password);
    
      
  
  
     
      if (!isPasswordValid) {
        return res.status(401).json({ error: 'Invalid credentials password' });
      }
     else{
      res.json({ message: 'Login successful' });

         // Create a session
        //  req.session.user = user;
        //  data_session=req.session.user;
        //  res.cookie('user', user); // Store user data in a cookie
        //  res.json(req.session.user);
     }
    
      // const token=jwt.sign({username:user.username},secret_key);
      // console.log(token)
      // res.cookie("token", token, {
      //   httpOnly: true, // Prevents JavaScript access to the cookie
      //   secure: true,
      //   maxAge: 3600000, // E
      //   // Ensures the cookie is sent only over HTTPS
      // });
  
  
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  });
  
  router.post("/checkout", async (req, res) => {

    let error;
    let status;
    try {
        const { product, token } = req.body;
        const customer = await stripe.customers.create({
            email: token.email,
            source: token.id
        });
        const key = uuidv4();
        const id_key = Math.random();
        const charge = await stripe.charges.create({
            amount: product.price * 100,
            currency: "usd",
            customer: customer.id,
            receipt_email: token.email,
            description: `purchased the ${product.name}`,
            shipping: {
                name:token.card.name,
                address:{
                    line1: token.card.address_line1,
                    line2: token.card.address.line2,
                    city: token.card.address_city,
                    country: token.card.address_country,
                    postal_code: token.card.address_zip
                }
               
            }
        }, {
            id_key: key

        });
        status = "success";


    } catch (error) {
        console.log(error);
        status = "error";

    }
    res.json({ status });
});



module.exports = router;