import User from "../models/UserModel.js"

export const createUser = async (req, res) => {
    try {
        const count = await User.count({
            where: {
                email: req.body.email
            }
        })


        if (count > 0) {
            res.json({ message: "User with similar email already exist." })
        } else {
            await User.create(req.body)
            res.json({ message: "User Created Successfully."})
        }

    } catch (error) {
        res.json({ message: error.message })
    }
}

export const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll()
        res.json(users)
    } catch (error) {
        res.json({ message: error.message })
    }

}

export const updateUser = async (req, res) => {
    try {
        await User.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        res.json({ message: "Record updated." })
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const updateUserBy_uname = async (req, res) => {


    try {
        await User.update(req.body, {
            where: {
                username: req.params.old_username
            }
        })
        res.json({ message: "Record updated by username." })
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const getUsersByParam_id = async (req, res) => {
    try {
        const users = await User.findByPk(req.params.id)
        res.json(users)
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const getUsersByParam_uname = async (req, res) => {
    try {
        const users = await User.findOne({
            where: {
                username: req.params.username
            }
        })
        res.json(users)
    } catch (error) {
        res.json({ message: error.message })
    }
}


export const deleteUser = async (req, res) => {
    try {

        await User.destroy({
            where: {
                id: req.params.id
            }
        })
        res.json({ message: "User deleted succesfully" })
    } catch (error) {
        res.json({ message: error.message +req.params.id})
    }
}