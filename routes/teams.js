import express from 'express'
import { isAuthenticated } from '../middlewares/auth.js';
import { team } from '../models/teams.js';
import { deleteTeam, getTeam, newTeam } from '../controllers/teams.js';
const router = express.Router();


router.post('/newTeam', isAuthenticated,newTeam);

router.get('/getTeam', isAuthenticated, getTeam);
router.delete('/:id', isAuthenticated, deleteTeam);

export default router;