/**
 * Fonts Controller
 * @author Una Ada <una@anarchy.website>
 * @version 2021.08.11
 * @since 2021.08.10
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
export const create = (
  {
    user,
    body,
    // Complex destructuring to get the single font file as a named variable!
    files: {
      font: [font],
    },
  },
  res,
  next
) =>
  s3
    .upload({
      Bucket: process.env.AWS_BUCKET,
      Key: `${uuidv4()}/${font.originalname}`,
      Body: font.buffer,
    })
    .promise()
    .then(({ Location: file }) =>
      (({ unitsPerEm, ascent, descent, capHeight, xHeight }) =>
        Font.create({
          ...body,
          user: user,
          file,
          // Thinking of using `marked` and `sanitize-html` to make the rich
          copyRich: body.copy,
          metrics: {
            unitsPerEm,
            ascent,
            descent,
            capHeight,
            xHeight,
          },
        }))(fontkit.create(font.buffer))
    )
    .then(font => res.json(font))
    .catch(err => console.error(err) || next(err));
