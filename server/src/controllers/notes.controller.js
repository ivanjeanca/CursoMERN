const notesController = {}
const Note = require('../models/Note')

notesController.getAllNotes = async (req, res) => {
    const query = await Note.find()

    res.json(query)
}

notesController.getOneNote = async (req, res) => {
    const query = await Note.findById({ _id: req.params.id })

    res.json(query)
}

notesController.insertNote = async (req, res) => {
    const { title, content, date, author} = req.body
    const query = new Note({
        title,
        content,
        date,
        author
    })

    await query.save()

    res.json({message: 'Nota guardada'})
}

notesController.updateNote = async (req, res) => {
    const { title, content, date, author} = req.body

    await Note.findOneAndUpdate({ _id: req.params.id }, {
        title, 
        content, 
        date, 
        author 
    })

    res.json({message: 'Nota actualizada'})
}

notesController.deleteNote = async (req, res) => {
    await Note.findOneAndDelete({ _id: req.params.id })

    res.json({message: 'Nota eliminada'})
}

module.exports = notesController