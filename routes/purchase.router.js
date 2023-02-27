import express from " express";
import express from " express";
import { PurchaseModel } from "../models/purchase.model.js";

const purchaseRouter = express.Router();

purchaseRouter.post("/purchase", async (req, res) => {
  try {
    const newPurchase = await PurchaseModel.create({ ...req.body });

    return res.status(201).json(newPurchase);
  } catch (err) {
    console.log(err);
    return res.status(400).json(err);
  }
});

purchaseRouter.get("/purchase/:purchaseId", async (req, res) => {
  try {
    const { purchaseId } = req.params;
    const purchase = await PurchaseModel.findOne({ _id: purchaseId });
    return res.status(200).json(purchase);
  } catch (err) {
    console.log(err);
    return res.status(400).json(err);
  }
});

export { purchaseRouter };
