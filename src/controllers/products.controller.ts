import { Async } from "../lib";
import { getProductsFactory } from "./factory";

export const getProducts = Async(getProductsFactory);
