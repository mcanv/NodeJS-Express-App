import express from 'express'
const Post = require('../models/post')
const router = express.Router()

router.get('/', async (req, res) => {
    const posts = await Post.find().sort({
        created_at: 'desc'
    })
    res.status(200).send(posts)
})

module.exports = router