const express = require('express')
const { check } = require('express-validator')
const router = express.Router()
const controller = require('./controller')
const validationFields = require('../../middlewares/validation')
const { validationRole, validationEmail, validationUserId } = require('../../helpers/db-validators')

router.get('/', (req, res) => {
  controller
    .getUser(req.query)
    .then(response => res.json(response))
    .catch(err => res.json(err))
})

router.post('/', [
  check('mail', 'Mail is required').notEmpty(),
  check('mail', 'Mail is not validate').isEmail(),
  check('mail').custom(validationEmail),
  check('name', 'Name is required').notEmpty(),
  check('password', 'Password is required and must be more than 6 letters').isLength({ min: 6 }).notEmpty(),
  check('role').custom(validationRole),
  // check('role', 'It is not a permitted role').isIn('ADMIN_ROLE', 'USER_ROLE'),
  validationFields
], (req, res) => {
  controller
    .newUser(req.body)
    .then(response => res.json(response))
    .catch(err => console.error(err))
})

router.put('/:id', [
  check('id', 'id is not validate').isMongoId(),
  check('id').custom(validationUserId),
  check('role').custom(validationRole),
  validationFields
], (req, res) => {
  controller
    .editUser(req.params, req.body)
    .then(response => res.json(response))
    .catch(err => res.json(err))
})

router.delete('/:id', [
  check('id', 'id is not validate').isMongoId(),
  check('id').custom(validationUserId),
  validationFields
], (req, res) => {
  controller
    .deleteUser(req.params.id)
    .then(response => res.json(response))
    .catch(err => res.json(err))
})

module.exports = router
