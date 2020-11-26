import express from 'express';
import mongoose from 'mongoose'
const PostRouter = require('./routes/posts')
const HomeRouter = require('./routes/home')
const app = express();
const PORT = 3000;

mongoose.connect('mongodb://localhost/nodeapp', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, err => console.log(err ? err : 'Mongo connected.'))

app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: false }))
app.use('/post', PostRouter)
app.use('/', HomeRouter)


app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
});