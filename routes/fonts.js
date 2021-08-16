/**
 * Fonts API router
 * @author Una Ada <una@anarchy.website>
 * @version 2021.08.16
 * @since 2021.08.10
 * @module routes/fonts
 * @see modules:models/font
 * @see module:controllers/fonts
 */
/*----- Imports --------------------------------------------------------------*/
import { Router } from 'express';
import multer from 'multer';
import * as fontsCtrl from '../controllers/fonts.js';
import { checkUser } from '../controllers/users.js';

/*----- Initialize -----------------------------------------------------------*/
const router = Router(),
  upload = multer();

/*----- Routes ---------------------------------------------------------------*/
router
  .route('/')
  .get(fontsCtrl.index)
  .post(
    checkUser,
    /* Using the `.fields` function to catch multiple fields
     * https://github.com/expressjs/multer#fieldsfields
     */
    upload.fields([{ name: 'font', maxCount: 1 }]),
    fontsCtrl.create
  );
router.route('/:id').get(fontsCtrl.findBuId);

/*----- Exports --------------------------------------------------------------*/
export default router;
