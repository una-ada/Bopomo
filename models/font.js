/**
 * Font Model
 * @author Una Ada <una@anarchy.website>
 * @version 2021.08.10
 * @since 2021.08.10
 * @module models/font
 * @see module:models/pairing
 */

/*----- Imports --------------------------------------------------------------*/
import mongoose from 'mongoose';

/*----- Schema ---------------------------------------------------------------*/
const voteSchema = new mongoose.Schema({
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    value: Boolean,
  }),
  commentSchema = new mongoose.Schema(),
  metricSchema = new mongoose.Schema({
    unitsPerEm: Number,
    ascent: Number,
    descent: Number,
    capHeight: Number,
    xHeight: Number,
  }),
  fontSchema = new mongoose.Schema(
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
      name: String,
      file: String,
      repo: String,
      copy: String,
      copyRich: String,
      images: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Image',
        },
      ],
      tags: [String],
      metrics: metricSchema,
      pairings: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Pairing',
        },
      ],
      comments: [commentSchema],
    },
    {
      timestamps: true,
    }
  );

// This is separate so it can have recursive references
commentSchema.add({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  content: String,
  contentRich: String,
  replies: [commentSchema],
  votes: [voteSchema],
});

/*----- Exports --------------------------------------------------------------*/
export default mongoose.model('Font', fontSchema);
