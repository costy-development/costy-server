import { Product } from "../../models";
import { Async, AppError } from "../../lib";
import { getProductsFactory } from "../factory";

export const getProducts = Async(getProductsFactory);

export const addProduct = Async(async (req, res, next) => {
  const { title, description, price } = req.body;

  const product = await new Product({
    title: {
      ka: title.ka,
      en: title.en,
    },
    description: {
      ka: description.ka,
      en: description.en,
    },
    price,
  }).save();

  res.status(201).json(product);
});

export const updateProduct = Async(async (req, res, next) => {
  const { title, description, price } = req.body;
  const { productId } = req.params;

  const product = await Product.findByIdAndUpdate(productId, {
    $set: {
      title: {
        ka: title.ka,
        en: title.en,
      },
      description: {
        ka: description.ka,
        en: description.en,
      },
      price,
    },
  });

  if (!product) return next(new AppError(404, "Product does not exists"));

  res.status(201).json(product);
});

export const deleteProduct = Async(async (req, res, next) => {
  const { productId } = req.params;

  const product = await Product.findByIdAndDelete(productId);

  if (!product) return next(new AppError(404, "Product does not exists"));

  res.status(204).json("Product Is Deleted");
});

export const getProduct = Async(async (req, res, next) => {
  const { productId } = req.params;

  const product = await Product.findById(productId);

  if (!product) return next(new AppError(404, "Product does not exists"));

  res.status(200).json(product);
});
