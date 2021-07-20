const express = require('express')
const router = express.Router()

router.get('/:id', (req, res) => {
  const { id } = req.params
  const { age, country, page = 1, limit = 10 } = req.query

  res.json({
    id,
    age,
    country,
    page,
    limit
  })
})

module.exports = router
