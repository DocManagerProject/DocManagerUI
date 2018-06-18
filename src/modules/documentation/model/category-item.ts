import {CategoryItemType} from "./category-item-type";
import {Category} from "./category";
import {Page} from "./page";
import {CategoryItemState} from "./category-item-state";

export class CategoryItem {
  id: number;
  category: Category;
  contentType: CategoryItemType;
  contentPage: Page;
  contentCategory: Category;
  index: number;
  state: CategoryItemState;
}
