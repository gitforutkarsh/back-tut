const User = require("../models/user")

async function handleGetAllUsers(req, res) {
    const allDbUsers = await User.find({})
    return res.json(allDbUsers);
}

async function handleGetUserById(req, res) {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ error: "user not found" });
    return res.json(user);
}

async function handleUpdateUserById(req, res) {
    await User.findOneAndUpdate(req.params.id, { lastname: "changed" })
    return res.json({ status: "success" })
}

async function handleDeleteUserbyId(req, res) {
    await User.findByIdAndDelete(req.params.id);
    return res.json({ status: "sucess" })
}

async function handleCreateNewUser(req, res) {
    const body = req.body
    const result = User.create({
        firstName: body.firstName,
        lastname: body.firstName,
        email: body.email,
        gender: body.gender,
        jobTitle: body.jobTitle
    })
    console.log(result);
    return res.status(201).json({ msg: "success", id: result._id})
}


module.exports = {
    handleGetAllUsers,
    handleGetUserById,
    handleUpdateUserById,
    handleDeleteUserbyId,
    handleCreateNewUser
}
