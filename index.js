const express = require('express');
const mongoose = require('mongoose');
const { MONGO_URL } = require('./config');
const app = express();
const PORT = process.env.PORT || 5000
//Routes
const postsRoutes = require('./routes/api/posts');
//bodyparser
app.use(express.json())

//connect to md
mongoose.connect(MONGO_URL, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false })
    .then(() => console.log('Success'))
    .catch((err) => console.log(err))

//use routes 

app.use('/api/posts', postsRoutes)

app.get('/', (req, res ) => {
    res.send('Hello World!')
});



app.listen(PORT, () => console.log('FOO'));




