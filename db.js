const express = require('express');
const app = express();
const mongooes = require("mongoose");

const PostsSchma = new.mongoose.Schema({
    title: {
        type: String
    },
    author: {
        type: String
    },
    desc: {
        type: String
    }
});
let Posts = mongooes.model('posts', PostsSchma);

app.get('/', (req, res) => {
    res.send('server');
});

app.get('/getpost', async (req, res) => {
    const posts = await Posts.find();
    res.json(posts);
});

module.exports = app;