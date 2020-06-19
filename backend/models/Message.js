const mongoose = require('mongoose')
const Schema = mongoose.Schema

const messageSchema = new Schema({
    user : {type:Schema.Types.ObjectId , ref:'User'},
    channel : {type:Schema.Types.ObjectId, ref:'Channel'},
    content : {type: String, required: true}
}, {
    timestamps : true
})

const Message = mongoose.model('Message', messageSchema)

module.exports = Message