const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const {connection} = require("mongoose");

const todosRouter = require('./routes/todos');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

mongoose.connect(uri);

connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
});

app.use('/todos', todosRouter);

app.listen(port, () => {
  console.log(`Notenow Server running on port: ${port}`)
})