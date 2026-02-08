import mongoose, { Schema, Document, mongo } from "mongoose";

export interface IProduct extends Document {
  name: String;
  description: String;
  stock: Number;
  price: Number;
  imageUrl: String;
  category: mongoose.Types.ObjectId;
}

const productSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    stock: { type: Number, required: true },
    price: { type: Number, required: true },
    imageUrl: { type: String, required: true },
    category: {
      type: mongoose.Types.ObjectId,
      ref: "Category",
      required: true,
    },
  },
  { timestamps: true },
);

export default mongoose.model<IProduct>("Product", productSchema);
