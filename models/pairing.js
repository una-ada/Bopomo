/**
 * Pairing Model
 * @author Una Ada <una@anarchy.website>
 * @version 2021.08.10
 * @since 2021.08.10
 * @module models/pairing
 * @see module:models/font
 */

/*----- Imports --------------------------------------------------------------*/
import mongoose from 'mongoose';

/*----- Schema ---------------------------------------------------------------*/
const pairingSchema = new mongoose.Schema({
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    fontA: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Font',
    },
    fontB: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Font',
    },
    fontAType: String,
    fontBType: String,
    fontAApproved: Boolean,
    fontBApproved: Boolean,
  });

/*----- Exports --------------------------------------------------------------*/
export default mongoose.model('Pairing', pairingSchema);
