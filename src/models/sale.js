import mongoose, { Schema, ObjectId } from "mongoose";
const ProductSchema = new Schema(
  {
    code: {
      type: String,
      require: true,
    },
    status: {
      type: String,
      require: true,
    },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } },
);

export default mongoose.model("Sale", ProductSchema);
