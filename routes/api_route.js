const express = require('express')
const router= express.Router()
const route = require('../App functions/main')


router.get('/', route.main)

module.exports = router
 