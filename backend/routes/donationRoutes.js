const express = require('express');
const protect = require('../middlewares/userMiddleware')
const { getDonations, postDonation, deleteDonation, updateDonation } = require('../controllers/donationControllers');
const router = express.Router()

router.route('/').get(protect, getDonations).post(protect, postDonation)
router.route('/:id').put(protect, updateDonation).delete(protect, deleteDonation)

module.exports = router;