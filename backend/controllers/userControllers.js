const asyncHandler = require('express-async-handler')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Users = require('../models/userModel')

const userRegister = asyncHandler(async(req, res) => {
    const { name, phone, email, password } = req.body
    if (!name || !phone || !email || !password) {
        res.status(400)
        throw new Error('You might have missed atleast a field')
    }
    const userExist = await Users.findOne({email})
    if (userExist) {
        res.status(400)
        throw new Error('User already exists')
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const user = await Users.create({
        name,
        phone,
        email,
        password: hashedPassword
    })

    if(!user) {
        res.status(400)
        throw new Error('Problem occured creating Account')
    }
    res.status(201).json({
        _id: user.id,
        name: user.name,
        phone: user.phone,
        email: user.email,
        token: await generateToken(user.id)
    })
})

const userLogin = asyncHandler(async(req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        res.status(400)
        throw new Error('You might have missed atleast a field')
    }

    const user = await Users.findOne({email})
    
    if (user && await bcrypt.compare(password, user.password)) {
        res.status(200).json({
            _id: user.id,
            name: user.name,
            phone: user.phone,
            email: user.email,
            token: await generateToken(user.id),
        })
    } else {
        res.status(400)
        throw new Error('User not Found')
    }
})

const getMe = asyncHandler(async(req, res) => {
    res.status(200).json(req.user)
})

const generateToken = async(id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: '30d'
    })
}

module.exports = {
    userRegister,
    userLogin,
    getMe
}