const express = require('express')
const { userRegister, userLogin, getMe } = require('../controllers/userControllers')
const protect = require('../middlewares/userMiddleware')
const router = require('./donationRoutes')
const routes = express.Router()

router.route('/register/').post(userRegister)
router.route('/login/').post(userLogin)
router.route('/me/').get(protect, getMe)

module.exports = router;
