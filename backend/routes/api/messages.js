const router = require('express').Router()
const Message = require('../../models/Message')
const User = require('../../models/User')
const Channel = require('../../models/Channel')

router.route('/').get((req, res) => {
    Message.find()
    .then(messages => res.json(messages))
    .catch(err => res.status(400).json(err))
})

router.route('/:id').get((req, res) => {
    const id = req.params.id
    Message.findById(id)
    .then(message => res.json(message))
    .catch(err => res.status(400).json(err))
})

router.route('/add').post(async (req, res) => {
    const user_email = req.body.user_email
    const channel_name = req.body.channel_name
    const content = req.body.content

    User.findOne({email: user_email})
    .then(user => {
        Channel.findOne({name: channel_name})
        .then(channel => {
            const newMessage = new Message({user, channel, content})
            newMessage.save()
            .then(() => {
                res.json('Message added!')
                channel.messages.push(newMessage)
                channel.save()
                .then(() => res.json('Message pushed to channel messages list'))
                .catch(err => res.status(400).json(err))
            })
            .catch(err => res.status(400).json(err))
        })
        .catch(err => res.status(400).json(err))
    })
    .catch(err => res.status(400).json(err))
})

module.exports = router