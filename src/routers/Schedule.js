const express = require('express')
const router = express.Router()
const Authorization = require('../utils/authorization')
const auth = require('../middlewares/auth')

const Schedule = require('../controllers/Schedule')


router.post('/create-schedule',auth, Authorization.roleAuthorization(['doctor','admin']),Schedule.CreateSchedule)
