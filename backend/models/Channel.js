const mongoose = require('mongoose')
const Schema = mongoose.Schema

const channelSchema = new Schema({
    name : {type: String, required: true},
    users : [{type: Schema.Types.ObjectId, ref:'User'}],
    owner : {type: Schema.Types.ObjectId, ref:'User'},
    messages : [{type: Schema.Types.ObjectId , ref:'Message'}]
}, {
    timestamps : true
})

const Channel = mongoose.model('Channel', channelSchema)

module.exports = Channel