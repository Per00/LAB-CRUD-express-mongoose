import express from " express";
import { AlbumModel } from "../models/album.model.js";

const albumRouter = express.Router();

albumRouter.post("/albums", async (req, res) => {
  try {
    const newAlbum = await AlbumModel.create({ ...req.body });

    return res.status(201).json(newAlbum);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

albumRouter.get("/albums", async (req, res) => {
  try {
    const albuns = await AlbumModel.find({});
    return res.status(201).json(albuns);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

albumRouter.get("/albums/:albumId", async (req, res) => {
  try {
    const { albumId } = req.params;

    const album = await AlbumModel.findOne({ _id: albumId });
    return res.status(201).json(album);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

albumRouter.put("/albums/:albumId", async (req, res) => {
  try {
    const { albumId } = req.params;
    const updateAlbum = await AlbumModel.findOneAndUpdate(
      { _id: albumId },
      { ...req.body },
      { new: true, runValidators: true }
    );
    return res.status(201).json(updateAlbum);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

albumRouter.delete("/albums/:albumId", async (req, res) => {
  try {
    const { albumId } = req.params;
    const del = await AlbumModel.deleteOne({ _id: albumId });
    return res.status(201).json(del);
  } catch (err) {
    console.log(err);
    return res.status(400).json(err);
  }
});

export { albumRouter };
