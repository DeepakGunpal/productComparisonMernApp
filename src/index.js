const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { route } = require('./route/route');
require('dotenv/config');
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())
app.use('/api', route);

app.listen(PORT, () => console.log('listening on port ' + PORT));