const express = require('express')
const router = express.Router() // creating express route handler
const urlController = require('../controllers/urlController')

router.post('/url/shorten', urlController.urlShortner)
router.get('/:urlCode', urlController.getUrl)



module.exports = router