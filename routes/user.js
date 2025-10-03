const express = require("express")
const { handleGetAllUsers, handleGetUserById, handleUpdateUserById, handleDeleteUserbyId, handleCreateNewUser } = require("../controllers/user")
const router = express.Router();

//routes

router
    .route("/")
    .get(handleGetAllUsers)
    .post(handleCreateNewUser)

router
    .route("/:id")
    .get(handleGetUserById)
    .patch(handleUpdateUserById)
    .delete(handleDeleteUserbyId)


module.exports = router;