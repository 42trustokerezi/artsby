import { Schema, model, models } from "mongoose";

const ArtSchema = new Schema({
  serial: {
    type: String,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  img: {
    type: String,
    required: true,
  },
  artist: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  collection:{
    type: Schema.Types.ObjectId,
    ref: 'Collection'
  },
  createdAt: {type: Date,
    default: new Date.now
  }
}, {timestamps: true});

const Art = models.Art || model('Art', ArtSchema);
export default Art;
