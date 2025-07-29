import { CategoryInterface } from "./category.mode";

export interface ProductInterface {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  creationAt: string;
  category: CategoryInterface
}
