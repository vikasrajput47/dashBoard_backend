import express from 'express'
import { empInfo } from "../models/empInfo.js";
import { createData, getAllData, getData, getDataById } from '../controllers/empInfo.js';
import { isAuthenticated } from '../middlewares/auth.js';

 const router = express.Router();


router.get('/allData',isAuthenticated,getAllData)
router.post("/getData",isAuthenticated,getData );
router.post("/create", isAuthenticated,createData);
router.get("/:id", isAuthenticated,getDataById);

export default router;