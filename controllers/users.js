/**
 * Users Controller
 * @author Una Ada <una@anarchy.website>
 * @version 2021.08.10
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

/*----- Public Methods -------------------------------------------------------*/
export const checkUser = (req, res, next) =>
    req.user !== undefined ? next() : res.sendStatus(403),
  create = (req, res, next) =>
    User.create(
      {
        ...req.body,
        // This is a temporary default, will fix it up in the future
        username: `user${String(+new Date()).substr(2)}`,
      },
      (err, user) =>
        err
          ? console.error(err) || next(err)
          : res.json({ token: createJWT(user) })
    ),
  login = async (req, res) => {
    try {
      const user = await User.findOne({ email: req.body.email });
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
  };
