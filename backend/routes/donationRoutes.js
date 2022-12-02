const express = require('express');
const protect = require('../middlewares/userMiddleware')
const { getDonations, postDonation, deleteDonation, updateDonation, getAllDonations } = require('../controllers/donationControllers');
const router = express.Router()

router.route('/').get(protect, getDonations).post(protect, postDonation)
router.route('/:id').put(protect, updateDonation).delete(protect, deleteDonation)
router.route('/get_all_donations').get(getAllDonations)

module.exports = router;