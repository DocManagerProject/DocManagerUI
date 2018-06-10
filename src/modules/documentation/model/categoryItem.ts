import {CategoryItemType} from "./categoryItemType";
import {Category} from "./category";
import {Page} from "./page";
import {CategoryItemState} from "./categoryItemState";

export class CategoryItem {
  id: number;
  category: Category;
  contentType: CategoryItemType;
  contentPage: Page;
  contentCategory: Category;
  index: number;
  state: CategoryItemState;
}
