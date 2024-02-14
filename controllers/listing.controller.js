import Listing from "../models/Listing.model.js";

export const createlising = async (req, res) => {
  try {
    await Listing.create(req.body);
    res.json("Listing created successfully");
  } catch (e) {
    console.log(e);
  }
};
export const getlisting = async (req, res) => {
  try {
    await Listing.create(req.body);
    res.json("Listing created successfully");
  } catch (e) {
    console.log(e);
  }
};
export const updatelisting = async (req, res) => {
  try {
    await Listing.create(req.body);
    res.json("Listing created successfully");
  } catch (e) {
    console.log(e);
  }
};
export const deletelisting = async (req, res) => {
  try {
    await Listing.create(req.body);
    res.json("Listing created successfully");
  } catch (e) {
    console.log(e);
  }
};