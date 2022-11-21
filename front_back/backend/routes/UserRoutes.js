import express from "express";
import { getAllUsers, createUser, updateUser, deleteUser, getUsersByParam_id, getUsersByParam_uname,updateUserBy_uname } from "../controllers/UserController.js"

const router = express.Router()

router.get('/users', getAllUsers);

//get user by param id
router.get('/users/:id', getUsersByParam_id);
//get user by param username
router.get('/users/find/:username', getUsersByParam_uname);

router.post('/users', createUser);
router.patch('/users/:id', updateUser)
router.patch('/users/update/:old_username', updateUserBy_uname)
router.delete('/users/:id', deleteUser)

export default router