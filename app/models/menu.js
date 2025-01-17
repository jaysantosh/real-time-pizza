const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const menuSchema = new Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    size: { type: String, required: true },
})
// const Menu=mongoose.model('Menu',menuSchema)

module.exports = mongoose.model('Menu', menuSchema);//it is equivalent to const Menu=mongoose.model('Menu',menuSchema)

