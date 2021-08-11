/**
 * Images Controller
 * @author Una Ada <una@anarchy.website>
 * @version 2021.08.10
 * @since 2021.08.10
 * @module controllers/images
 * @see module:models/image
 */

/*----- Imports --------------------------------------------------------------*/
import Image from '../models/image.js';
import { v4 as uuidv4 } from 'uuid';
import S3 from 'aws-sdk/clients/s3.js';
import path from 'path';

/*----- Initialize -----------------------------------------------------------*/
const s3 = new S3();

/*----- Public Methods -------------------------------------------------------*/
export const create = (user, buffer) =>
  s3
    .upload({
      Bucket: process.env.AWS_BUCKET,
      // This whole bit is temporary until some image manipulation gets added in
      Key: `${uuidv4()}/original${path.extname(font.originalname)}`,
      Body: font.buffer,
    })
    .promise()
    .then(({ Location: file }) =>
      Image.create({
        user,
        original: file,
        36: file,
        400: file,
        1280: file,
      })
    );
