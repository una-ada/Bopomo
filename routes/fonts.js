/**
 * Fonts API router
 * @author Una Ada <una@anarchy.website>
 * @version 2021.08.10
 * @since 2021.08.10
 * @module routes/fonts
 * @see modules:models/font
 * @see module:controllers/fonts
 */
/*----- Imports --------------------------------------------------------------*/
import { Router } from 'express';
import multer from 'multer';
import fontsCtrl from '../controllers/users.js';

/*----- Initialize -----------------------------------------------------------*/
const checkUser = (req, res, next) =>
    req.user !== undefined ? next() : res.sendStatus(403),
  router = Router(),
  upload = multer();

/*----- Routes ---------------------------------------------------------------*/
router.route('/').post(
  checkUser,
  /* Using the `.fields` function to catch multiple fields
   * https://github.com/expressjs/multer#fieldsfields
   */
  upload.fields([
    { name: 'font', maxCount: 1 },
    // { name: 'images', maxCount: 10 },
  ]),
  fontsCtrl.create
);

/*----- Error Handling -------------------------------------------------------*/
router.use(function (err, req, res, next) {
  res.status(500).send({ error: err.message });
});

/*----- Exports --------------------------------------------------------------*/
export default router;
