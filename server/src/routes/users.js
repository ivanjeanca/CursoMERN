const { Router } = require('express')
const router = Router()

const { getAllUsers, insertUser, getOneUser, updateUser, deleteUser } = require('../controllers/users.controller')

router.route('/')
    .get(getAllUsers)
    .post(insertUser)

router.route('/:id')
    .get(getOneUser)
    .put(updateUser)
    .delete(deleteUser)

module.exports = router