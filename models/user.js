/**
 * User Schema
 * @author Una Ada <una@anarchy.website>
 * @version 2021.08.02
 * @since 2021.08.02
 * @module models/user
 * @see module:routes/users
 * @see module:controllers/users
 */

/*----- Imports --------------------------------------------------------------*/
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

/*----- Constants ------------------------------------------------------------*/
/** @const {Object.<String,RegExp>} VALID_STRINGS RegExp matching validators. */
export const VALID_STRINGS = {
  /**
   * @param {RegExp} EMAIL Email validation RegExp
   *
   * Almost [RFC822]{@link https://datatracker.ietf.org/doc/html/rfc822}
   * compliant. Taken from {@link https://gist.github.com/badsyntax/719800}.
   */
  EMAIL:
    /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/,
  /** @param {RegExp} USERNAME Username validation RegExp */
  HANDLE: /^[a-zA-Z0-9]*$/,
};
/** @const {Object} VALID_SIZES Definitions of field sizes. */
export const VALID_SIZES = {
  /** @param {Object.<String,Number>} HANDLE Username sizes. */
  HANDLE: { min: 2 ** 2, max: 2 ** 4 },
  /** @param {Object.<String,Number>} NAME Display name sizes. */
  NAME: { min: 2 ** 0, max: 2 ** 5 },
};

/** @const SALT_ROUNDS Number of rounds for bcrypt salting */
const SALT_ROUNDS = 6;

/*----- Helper Functions -----------------------------------------------------*/
/**
 * Gets a validator function to test field uniqueness.
 * @param {String} field The field to which is to be tested for uniqueness
 * @returns {Function} Validation function for uniqueness of specified field.
 */
const validateUnique = field =>
  async function (value) {
    let count = await mongoose.models.User.countDocuments({
      [field]: value,
      // Don't match to current document
      // Would return a validation error if the value was not changed
      _id: {
        $ne:
          // Handle update validation by checking for query scope
          this instanceof mongoose.Query ? this._conditions._id : this._id,
      },
    });
    return !count;
  };

/*----- Schema ---------------------------------------------------------------*/
const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      validate: [
        {
          validator: validateUnique('email'),
          msg: 'E-mail already taken.',
        },
        {
          validator: value => VALID_STRINGS.EMAIL.test(value),
          msg: 'E-mail is not properly formatted.',
        },
      ],
    },
    handle: {
      type: String,
      required: true,
      validate: [
        {
          validator: validateUnique('handle'),
          msg: 'Handle already taken.',
        },
        {
          validator: value => VALID_STRINGS.HANDLE.test(value),
          msg: 'Handle contains invalid characters.',
        },
        {
          validator: value => value.length >= VALID_SIZES.HANDLE.min,
          msg: `Handle is less than ${VALID_SIZES.HANDLE.min} characters.`,
        },
        {
          validator: value => value.length <= VALID_SIZES.HANDLE.max,
          msg: `Handle is more than ${VALID_SIZES.HANDLE.max} characters.`,
        },
      ],
    },
    password: String,
    name: {
      type: String,
      required: true,
      default: 'New User',
      validate: [
        {
          validator: value => value.length >= VALID_SIZES.NAME.min,
          msg: `Name is less than ${VALID_SIZES.NAME.min} characters.`,
        },
        {
          validator: value => value.length <= VALID_SIZES.NAME.max,
          msg: `Name is more than ${VALID_SIZES.NAME.max} characters.`,
        },
      ],
    },
    avatar: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Image',
    },
    googleId: {
      type: String,
      required: false,
      default: null,
      validate: [
        {
          validator: validateUnique('googleId'),
          msg: 'Google account is already connected to another user.',
        },
      ],
    },
    twitterId: {
      type: String,
      required: false,
      default: null,
      validate: [
        {
          validator: validateUnique('twitterId'),
          msg: 'Twitter account is already connected to another user.',
        },
      ],
    },
    githubId: {
      type: String,
      required: false,
      default: null,
      validate: [
        {
          validator: validateUnique('githubId'),
          msg: 'GitHub account is already connected to another user.',
        },
      ],
    },
  },
  {
    timestamps: true,
    toJSON: {
      transform: (doc, ret) => {
        delete ret.password;
        return ret;
      },
    },
    toObject: {
      transform: (doc, ret, opt) => {
        delete ret.password;
        return ret;
      },
    },
  }
);

/*----- Middleware -----------------------------------------------------------*/
userSchema.pre('save', function (next) {
  const user = this;
  if (!user.isModified('password')) return next();
  bcrypt.hash(user.password, SALT_ROUNDS, function (err, hash) {
    if (err) return next(err);
    user.password = hash;
    next();
  });
});
userSchema.methods.comparePassword = function (tryPassword, next) {
  bcrypt.compare(tryPassword, this.password, function (err, isMatch) {
    if (err) return next(err);
    next(null, isMatch);
  });
};

/*----- Exports --------------------------------------------------------------*/
export default mongoose.model('User', userSchema);
