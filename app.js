const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const dotenv = require('dotenv')
const Router = require('./src/routers/api')
const serverless = require('serverless-http')
dotenv.config()
const app = express();
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
const cors = require('cors')
app.use(cors({origin:true}))

var db = process.env.MONGO
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected!'))
  .catch((err) => console.log(err))
  app.use('/api', Router)
  const PORT = process.env.PORT || 8080;
  app.listen(PORT, () => {
      
    console.log(`Server is running on port ${PORT}`);
  });

  