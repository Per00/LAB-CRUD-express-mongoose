import { Schema, model } from "mongoose";

const albumSchema = new Schema({
  performer: { type: String },
  title: { type: String },
  cost: { type: Number },
});

export const AlbumModel = model("Album", albumSchema);
