/**
 * Fonts Controller
 * @author Una Ada <una@anarchy.website>
 * @version 2021.08.10
 * @since 2021.08.02
 * @module controllers/fonts
 * @see module:models/font
 * @see module:routes/fonts
 */

/*----- Imports --------------------------------------------------------------*/
import Font from '../models/font.js';
import fontkit from 'fontkit';
import { v4 as uuidv4 } from 'uuid';
import S3 from 'aws-sdk/clients/s3.js';

/*----- Initialize -----------------------------------------------------------*/
const s3 = new S3();

/*----- Export Methods -------------------------------------------------------*/
export default {
  create: (req, res, next) =>
    s3
      .upload({
        Bucket: process.env.AWS_BUCKET,
        Key: `${uuidv4()}/${req.file.originalname}`,
        Body: req.file.buffer,
      })
      .promise()
      .then(data =>
        (({ unitsPerEm, ascent, descent, capHeight, xHeight }) =>
          Font.create({
            ...req.body,
            user: req.user,
            file: data.Location,
            metrics: {
              unitsPerEm,
              ascent,
              descent,
              capHeight,
              xHeight,
            },
          }))(fontkit.create(req.file.buffer))
      )
      .then(font => res.json(font))
      .catch(err => console.error(err) || next(err)),
};
