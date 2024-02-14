import mongoose from "mongoose";

const listingSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    userRef: {
      type: String,
    },
    imageURLs: {
      type: Array,
    },
    price: {
      type: Number,
      required: true,
    },
    discountprice: {
      type: String,
    },
    furnished: {
      type: String,
      required: true,
    },
    property_type: {
      type: String,
      required: true,
    },
    option_type: {
      type: String,
      required: true,
    },
    bathrooms: {
      type: Number,
      required: true,
    },
    bedrooms: {
      type: Number,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    created_at: {
      type: Date,
    },
    updated_at: {
      type: Date,
    },
    is_deleted: {
      type: Date,
    },
    deleted_at: {
      type: Date,
    },
  },
  { timestamps: true }
);

const Listing = mongoose.model("Listing", listingSchema);

export default Listing;
