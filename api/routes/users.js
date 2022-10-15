import express  from "express";
import { deleteUser, getUser, getUsers, updateUser } from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";
const router = express.Router();


//Maybe for admin

router.get("/checkauthentication", verifyToken, (req,res,next)=>{

    res.send("Hello user, you are logged in!!")

})

// This functionality for user loin authentication 

//router.get("/checkuser/:id", verifyUser, (req,res,next)=>{

//  res.send("Hello user, you are logged in!! and you can delete you're account!!!")

//})

//This functionality for verifying the admin 

router.get("/checkadmin/:id", verifyAdmin, (req,res,next)=>{

    res.send("Hello admin, you are logged in!! and you can delete all accounts!!")

})
//Read
//Update

router.put("/:id", verifyUser, updateUser);

//Delete

router.delete("/:id", verifyUser, deleteUser);

//Get
router.get("/:id", verifyUser, getUser);

//GetAll
router.get("/", verifyAdmin, getUsers);

export default router;