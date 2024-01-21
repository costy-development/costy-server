import { Schema, model } from "mongoose";
import {
  ProductT,
  ProductMethodsT,
  ProductModelT,
} from "../types/models/product.types";

const ProductSchema = new Schema<ProductT, ProductModelT, ProductMethodsT>(
  {
    title: {
      ka: {
        type: String,
      },
      en: {
        type: String,
      },
    },
    description: {
      ka: {
        type: String,
      },
      en: {
        type: String,
      },
    },
    price: {
      type: Number,
      required: [true, "Please enter the product price"],
    },
  },
  { timestamps: true }
);

const Product = model<ProductT, ProductModelT>("Product", ProductSchema);

export default Product;
