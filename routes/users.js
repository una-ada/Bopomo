/**
 * Users API router
 * @author Una Ada <una@anarchy.website>
 * @version 2021.08.10
 * @since 2021.08.02
 * @module routes/users
 * @see modules:models/user
 * @see module:controllers/users
 */
/*----- Imports --------------------------------------------------------------*/
import { Router } from 'express';
import multer from 'multer';
import * as usersCtrl from '../controllers/users.js';

/*----- Initialize -----------------------------------------------------------*/
const router = Router(),
  upload = multer();

/*----- Routes ---------------------------------------------------------------*/
router.post('/signup', usersCtrl.create);
router.post('/login', usersCtrl.login);

/*----- Exports --------------------------------------------------------------*/
export default router;
