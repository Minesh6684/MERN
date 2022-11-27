const asyncHandler = require('express-async-handler')
const Donations = require('../models/donationsModel')

const getDonations = asyncHandler(async(req, res) => {
    const donations = await Donations.find({user: req.user._id})
    if (!donations) {
        res.status(400)
        throw new Error('No Donations')
    }
    res.status(200).json(donations)
})

const postDonation = asyncHandler(async(req, res) => {
    const { address, description } = req.body

    if (!address) {
        res.status(400)
        throw new Error('Please enter Address')
    }
    if (!description) {
        res.status(400)
        throw new Error('Please Describe the donation')
    }
    const donation = await Donations.create({
        user: req.user.id,
        address,
        description,
    })

    res.status(201).json(donation)
})

const updateDonation = asyncHandler(async(req, res) => {
    const donation = await Donations.findById(req.params.id)
    if (!donation) {
        res.status(400)
        throw new Error('No Donation Found to update')
    }
    if(req.user.id !== donation.user.toString()){
        res.status(401)
        throw new Error('User not authorized')
    }
    const updatedDonation = await Donations.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })
    res.status(200).json(updatedDonation)
})

const deleteDonation = asyncHandler(async(req, res) => {
    const donation = await Donations.findById(req.params.id)
    if (!donation) {
        res.status(400)
        throw new Error("No Donation Found to delete")
    }

    if (req.user.id !== donation.user.toString()) {
        res.status(401)
        throw new Error("User not Authorized")
    }

    const deletedDonation = await Donations.deleteOne(donation)
    res.status(200).json(deletedDonation)
})

module.exports = {
    getDonations,
    postDonation,
    updateDonation,
    deleteDonation
}