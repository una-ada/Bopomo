/**
 * Users Controller
 * @author Una Ada <una@anarchy.website>
 * @version 2021.08.02
 * @since 2021.08.02
 * @module controllers/users
 * @see module:models/user
 * @see module:routes/users
 */

/*----- Imports --------------------------------------------------------------*/
import User from '../models/user.js';
import jwt from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid';
import S3 from 'aws-sdk/clients/s3.js';

/*----- Initialize -----------------------------------------------------------*/
const SECRET = process.env.SECRET;
const s3 = new S3();

/*----- Private Methods ------------------------------------------------------*/
const createJWT = user => jwt.sign({ user }, SECRET, { expiresIn: '24h' });

/*----- Export Methods -------------------------------------------------------*/
export default {
  signup: (req, res, next) =>
    s3.upload(
      {
        Bucket: process.env.AWS_BUCKET,
        Key: `${uuidv4()}/${req.file.originalname}`,
        Body: req.file.buffer,
      },
      async function (err, data) {
        if (err) {
          console.error(err);
          return next(err);
        }
        const user = new User({ ...req.body, photoUrl: data.Location });
        console.log(user);
        try {
          await user.save();
          res.json({ token: createJWT(user) });
        } catch (err) {
          console.error(err);
          res.status(400).json(err);
        }
      }
    ),
  login: async (req, res) => {
    try {
      console.log(req.body);
      const user = await User.findOne({ email: req.body.email });
      console.log(user, ' this user in login');
      if (!user) return res.status(401).json({ err: 'bad credentials' });
      user.comparePassword(req.body.password, (err, isMatch) => {
        if (isMatch) {
          const token = createJWT(user);
          res.json({ token });
        } else {
          return res.status(401).json({ err: 'bad credentials' });
        }
      });
    } catch (err) {
      return res.status(401).json(err);
    }
  },
};
