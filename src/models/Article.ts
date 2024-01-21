import { Schema, model } from "mongoose";
import slugify from "slugify";

import {
  ArticleT,
  ArticleModelT,
  ArticleMethodsT,
} from "../types/models/article.types";

const ArticleSchema = new Schema<ArticleT, ArticleModelT, ArticleMethodsT>(
  {
    slug: {
      type: String,
      unique: true,
    },
    title: {
      type: String,
      unique: true,
    },
    body: {
      type: String,
    },
  },
  { timestamps: true }
);

ArticleSchema.pre("save", async function (next) {
  if (!this.isModified("title")) return next();

  this.slug = slugify(this.title, { lower: true, locale: "en", trim: true });

  next();
});

const Article = model<ArticleT, ArticleModelT>("Article", ArticleSchema);

export default Article;
