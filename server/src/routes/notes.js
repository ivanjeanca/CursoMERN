const { Router } = require('express')
const router = Router()

const { getAllNotes, insertNote, getOneNote, updateNote, deleteNote } = require('../controllers/notes.controller')

router.route('/')
    .get(getAllNotes)
    .post(insertNote)

router.route('/:id')
    .get(getOneNote)
    .put(updateNote)
    .delete(deleteNote)

module.exports = router