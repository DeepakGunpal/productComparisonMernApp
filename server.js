const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const route = require('./src/route/route');
require('dotenv/config');
const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors({
    origin: "*"
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', route);


app.listen(PORT, () => console.log('listening on port ' + PORT))
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true })
    .then(() => console.log('connected to DB '))
    .catch((error) => console.log('error: ' + error.message));

