const express = require('express');
const router = express.Router();

// @route   GET /api/status
// @desc    Test API status
// @access  Public
router.get('/status', (req, res) => {
    res.json({ message: 'Server running', status: 'success' });
});

module.exports = router;
