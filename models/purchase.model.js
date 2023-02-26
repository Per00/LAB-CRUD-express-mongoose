import { Schema, model } from "mongoose";

const purchaseSchema = new Schema({
  shippingAdress: { type: String },
  album: [{ type: Schema.Types.ObjectId, ref: "Album" }],
});

export const PurchaseModel = model("Purchase", purchaseSchema);
