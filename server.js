const express = require("express");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/workout", {
    userNewUrlParser: true,
    useFindAndModify: true
})

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

const PORT = 3000;


// html-calls
app.use('/', require('./routes/html'));
// api-calls
app.use('/api', require('./routes/api'));

app.listen(PORT, () => {
    console.log('app running @ http://localhost:'+PORT)
})