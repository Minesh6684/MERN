const jwt = require('jsonwebtoken')
const Users = require('../models/userModel')

const protect = async(req, res, next) => {
    let token
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1]
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            req.user = await Users.findById(decoded.id).select(-decoded.password)
            next() 
        } catch (error) {
            console.log(error)
            throw new Error('Token not Authorized')
        }
    }
    if(!token) {
        res.status(400)
        throw new Error('No Token')
    }
}

module.exports = protect;