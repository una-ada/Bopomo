/**
 * JSON Web Token Config
 * @author Una Ada <una@anarchy.website>
 * @version 2021.08.02
 * @since 2021.08.02
 */
import jwt from 'jsonwebtoken';

const SECRET = process.env.SECRET;

export default (req, res, next) =>
  (token =>
    token
      ? jwt.verify(token.replace('Bearer ', ''), SECRET, (err, decoded) =>
          err ? next(err) : (req.user = decoded.user) && next()
        )
      : next())(
    // Define the token in this context
    req.get('Authorization') || req.query.token || req.body.token
  );
