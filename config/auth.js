/**
 * JSON Web Token Config
 * @author Una Ada <una@anarchy.website>
 * @version 2021.08.11
 * @since 2021.08.02
 */

/*----- Imports --------------------------------------------------------------*/
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

/*----- Initialize -----------------------------------------------------------*/
dotenv.config();

export default (req, res, next) =>
  (token =>
    token
      ? jwt.verify(
          token.replace('Bearer ', ''),
          process.env.SECRET,
          (err, decoded) =>
            err ? next(err) : (req.user = decoded.user) && next()
        )
      : next())(
    // Define the token in this context
    req.get('Authorization') || req.query.token || req.body.token
  );
