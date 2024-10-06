// const express = require('express');
// const mongoose = require('mongoose');
// const dotenv = require('dotenv');
// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(express.json());

// // Basic route
// app.get('/', (req, res) => {
//   res.send('Music Streaming Backend API is running!');
// });

// // Connect to MongoDB
// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => console.log('Connected to MongoDB'))
// .catch(err => console.error('MongoDB connection error:', err));

// // Start server
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });


import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import songRouter from './src/routes/songRoute.js';
import connectDB from './src/config/mongodb.js';
import connectCloudinary from './src/config/cloudinary.js';

const app=express();
const port =process.env.PORT || 4000;
connectDB();
connectCloudinary();

app.use(express.json());
app.use(cors());

app.use("/api/song",songRouter)



app.get('/',(req,res) => res.send("API Working"))

app.listen(port,()=>console.log(`Server started on ${port}`))