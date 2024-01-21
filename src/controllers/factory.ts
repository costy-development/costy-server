import { API_Features } from "../lib";
import { Product } from "../models";
import { Request, Response, NextFunction } from "express";

export const getProductsFactory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const query = new API_Features(
    Product.find(),
    req.query as { [key: string]: string }
  );

  const products = await query.paginate().filterProducts().sort().getQuery();
  const { currentPage, pagesCount } = await query.countDocuments();

  res
    .status(200)
    .json({ data: products, currentPage, hasMore: currentPage < pagesCount });
};
