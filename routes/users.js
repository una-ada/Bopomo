/**
 * Users API router
 * @author Una Ada <una@anarchy.website>
 * @version 2021.08.02
 * @since 2021.08.02
 * @module routes/users
 * @see controllers/users
 */
/*----- Imports --------------------------------------------------------------*/
import { Router } from 'express';
import multer from 'multer';
import usersCtrl from '../controllers/users.js';

/*----- Initialize -----------------------------------------------------------*/
const router = Router(),
  upload = multer();

/*----- Routes ---------------------------------------------------------------*/
router.post('/signup', upload.single('photo'), usersCtrl.signup);
router.post('/login', usersCtrl.login);

/*----- Exports --------------------------------------------------------------*/
export default router;
