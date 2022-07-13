const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRouter = require('./routes/auth');
const userRouter = require('./routes/users');
const movieRouter = require('./routes/movies');
const listRouter = require('./routes/lists');
const cors = require('cors');
dotenv.config();

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
  })
  .then(() => console.log('DB connection success'))
  .catch((err) => console.log(err));
app.use(express.json());
app.use(cors());
app.get('/', (req, res) => {
  res.send('heeloo');
});
app.use('/api/auth', authRouter);
app.use('/api/users', userRouter);
app.use('/api/movies', movieRouter);
app.use('/api/lists', listRouter);
app.listen(8080, () => {
  console.log('Backend server is running');
});
