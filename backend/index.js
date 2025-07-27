const express = require('express');
const app = express();
const cors = require('cors');


const mongoose = require('mongoose');

const PORT = process.env.PORT || 5000;
require('dotenv').config()

//middleware
app.use(express.json())
app.use(cors({
    origin: ['http://localhost:5173'],
    credentials: true,
    
}));



//routes 
const bookRoutes = require('./src/books/book.route');
app.use("/api/books",bookRoutes);



//phuwanat22296
//BFmJHduabk3OXOCF
async function main() {
  await mongoose.connect(process.env.DB_URL);
    app.use('/', (req, res) => {
    res.send('Welcome to the Bookstore API');
    });
}


main().then(()=>console.log("Mongodb Connect Successfully!")).catch(err => console.log(err));


//start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    });