const router = require('express').Router()
const Channel = require('../../models/Channel')
const User = require('../../models/User')

router.route('/').get((req, res) => {
    Channel.find()
    .then(channels => res.json(channels))
    .catch(err => res.status(400).json(err))
})

router.route('/:channel_name').get((req, res) => {
    Channel.findOne({name : req.params.channel_name})
    .then(channel => res.json(channel))
    .catch(err => res.status(400).json(err))
})

router.route('/add').post(async (req, res) => {
    const name = req.body.name
    const owner_email = req.body.owner_email
    const messages = []

    User.find()
    .then(u => {
        users = [...u]
        User.findOne({email : owner_email})
        .then(owner => {
            const newChannel = new Channel({name, users, owner, messages})
            newChannel.save()
            .then(() => res.json('Channel Added!'))
            .catch(err => res.status(400).json(err))
        })
        .catch(err => res.status(400).json(err))
    })
    .catch(err => res.status(400).json(err))
})

module.exports = router