require('dotenv').config()
module.exports = {
    MONGO_URL: `mongodb+srv://abdeladim:${process.env.PASSWORD}@cluster0.s1rok.mongodb.net/api?retryWrites=true&w=majority`
}