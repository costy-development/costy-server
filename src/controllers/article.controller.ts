import { Async, AppError, API_Features } from "../lib";
import { Article } from "../models";

export const createArticle = Async(async (req, res, next) => {
  const { title, body } = req.body;

  await new Article({ title, body }).save();

  res.status(201).json("New article is  added");
});

export const updateArticle = Async(async (req, res, next) => {
  const { slug } = req.params;
  const { title, body } = req.body;

  const article = await Article.findOne({ slug });

  if (!article) return next(new AppError(404, "article does not exists"));

  article.title = title;
  article.body = body;

  await article.save();

  res.status(201).json("article is updated");
});

export const deleteArticle = Async(async (req, res, next) => {
  const { slug } = req.params;

  const article = await Article.findOneAndDelete({ slug });

  if (!article) return next(new AppError(404, "article does not exists"));

  res.status(204).json("article is deleted");
});

export const getArticle = Async(async (req, res, next) => {
  const { slug } = req.params;

  const article = await Article.findOne({ slug });

  if (!article) return next(new AppError(404, "article does not exists"));

  res.status(200).json(article);
});

export const getAllArticles = Async(async (req, res, next) => {
  const query = new API_Features(
    Article.find(),
    req.query as { [key: string]: string }
  );

  const articles = await query.paginate().filterArticles().sort().getQuery();
  const { currentPage, pagesCount } = await query.countDocuments();

  res
    .status(200)
    .json({ data: articles, currentPage, hasMore: currentPage < pagesCount });
});
