const express = require('express')
const mongoose = require('mongoose');
const Product = require("./models/product.model.js")
const cors = require('cors');
const multer = require('multer');
const path = require('path');

const app = express()
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage });

// Serve static files from the 'uploads' directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

mongoose.connect('mongodb+srv://divyeshvankariitg:Rq6lWZhhnbUv0UqZ@backenddb.a0rirth.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB')
  .then(() => {
    console.log('Connected to DB!');
})
.catch(()=> {
    console.log("Connection DB Failed!");
})



app.get('/', function (req, res) {
  res.send('Hello World')
})

app.post('/api/products', upload.single('file'), async (req, res) => {
  try {
    const { name, quantity, price, description } = req.body;
    const file = req.file ? req.file.filename : null;
    const product = await Product.create({ name, quantity, price, description, file });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// Get all products
app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a product by ID
app.get('/api/products/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a product by ID
app.put('/api/products/:id', async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a product by ID
app.delete('/api/products/:id', async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.status(200).json({ message: 'Product deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});





// Rq6lWZhhnbUv0UqZ

// mongodb+srv://divyeshvankariitg:<password>@backenddb.a0rirth.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB