import {Component, OnInit} from "@angular/core";
import {CategoryItem} from "../../model/categoryItem";
import {CategoryService} from "../../service/category.service";
import {ActivatedRoute, Router} from "@angular/router";
import {CategoryItemType} from "../../model/categoryItemType";

@Component({
  selector: 'category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  id: number;
  title: string;
  categoryItems: CategoryItem[];

  constructor(
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.categoryService.getCategory(params["url"]).subscribe(category => {
        this.categoryService.getCategoryItems(category.id).subscribe(categoryItems => {
          this.id = category.id;
          this.title = category.name;
          this.categoryItems = categoryItems;
        }, err => {
          this.router.navigate(['/error'], { skipLocationChange: true, replaceUrl: true });
        });
      }, err => {
        this.router.navigate(['/error'], { skipLocationChange: true, replaceUrl: true });
      });
    });
  }

  getCategoryItemUrl(contentItem: CategoryItem): string {
    switch (CategoryItemType[contentItem.contentType.toString()]) {
      case CategoryItemType.PAGE:
        return "page/" + contentItem.contentPage.url;
      case CategoryItemType.CATEGORY:
        return "category/" + contentItem.contentCategory.url;
    }
    return null;
  }

  getCategoryItemName(contentItem: CategoryItem): string {
    switch (CategoryItemType[contentItem.contentType.toString()]) {
      case CategoryItemType.PAGE:
        return contentItem.contentPage.name;
      case CategoryItemType.CATEGORY:
        return contentItem.contentCategory.name;
    }
    return null;
  }
}
