import mongoose from "mongoose";

const serviceSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    // provider: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "User",
    //   required: true,
    // },
    // shop: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "Shop",
    //   required: true,
    // },
    price: { type: Number, required: true },
    image: {
      type: String,
      required: true,
    },
    // category: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "Category",
    //   required: true
    // },
    // rating: { type: Number },
    // numReviews: { type: Number },
  },
  {
    timestamps: true,
  }
);

const Service = mongoose.model("Service", serviceSchema);

export default Service;
