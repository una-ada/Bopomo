/**
 * Image Model
 * @author Una Ada <una@anarchy.website>
 * @version 2021.08.10
 * @since 2021.08.10
 * @module models/image
 */

/*----- Imports --------------------------------------------------------------*/
import mongoose from 'mongoose';

/*----- Schema ---------------------------------------------------------------*/
const imageSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    original: String,
    36: String,
    400: String,
    1280: String,
  },
  {
    timestamps: true,
  }
);

/*----- Exports --------------------------------------------------------------*/
export default mongoose.model('Image', imageSchema);
