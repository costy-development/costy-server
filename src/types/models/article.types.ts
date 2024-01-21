import { Document, Types as MongooseTypes, Model } from "mongoose";

type ArticleT = Document & {
  slug: string;
  title: string;
  body: string;
};

type ArticleMethodsT = {};

type ArticleModelT = Model<ArticleT, {}, ArticleMethodsT>;

export type { ArticleT, ArticleMethodsT, ArticleModelT };
