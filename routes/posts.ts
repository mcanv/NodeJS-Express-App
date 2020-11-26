import express from 'express'
const Post = require('../models/post')
const router = express.Router()

router.get('/create', (req, res) => {
    res.render('post/create', {post: new Post(), title: 'Create new post'})
})

router.get('/:id', async (req, res) => {
    const post = await Post.findById(req.params.id)
    if(post == null) res.redirect('/')
    res.status(200).send(post)
})

router.post('/create', async (req, res) => {
    let post = new Post({
        title: req.body.title,
        body: req.body.body,
    })
    try {
        await post.save() 
        res.redirect('/')
    }catch(e) {
        console.log(e)
        res.render('post/create', {post: post, title: 'Create new post'})
    }
})

module.exports = router