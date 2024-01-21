import { Document, Types as MongooseTypes, Model } from "mongoose";

type ProductT = Document & {
  title: {
    ka: string;
    en: string;
  };
  price: number;
  description: {
    ka?: string;
    en?: string;
  };
};

type ProductMethodsT = {};

type ProductModelT = Model<ProductT, {}, ProductMethodsT>;

export type { ProductT, ProductMethodsT, ProductModelT };
