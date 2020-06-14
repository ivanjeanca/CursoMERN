const usersController = {}
const User = require('../models/User')

usersController.getAllUsers = async (req, res) => {
    const query = await User.find()

    res.json(query)
}

usersController.getOneUser = async (req, res) => {
    const query = await User.findById({ _id: req.params.id })

    res.json(query)
}

usersController.insertUser = async (req, res) => {
    const { username } = req.body

    const query = new User({
        username
    })

    await query.save()

    res.json({message: 'Usuario insertado'})
}

usersController.updateUser = async (req, res) => {
    const { username } = req.body

    await User.findOneAndUpdate({ _id: req.params.id }, {
        username
    })

    res.json({message: 'Usuario actualizado'})
}

usersController.deleteUser = async (req, res) => {
    await User.findOneAndDelete({ _id: req.params.id })

    res.json({message: 'Usuario eliminado'})
}

module.exports = usersController