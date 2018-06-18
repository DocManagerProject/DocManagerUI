import {Component, OnInit} from "@angular/core";
import {Category} from "../../../model/category";
import {ActivatedRoute, Router} from "@angular/router";
import {CategoryService} from "../../../service/category.service";

@Component({
  selector: 'edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {

  category: Category;

  constructor(
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  onSubmit(): void {
    this.categoryService.addCategory(this.category);
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['url']) {
        this.categoryService.getCategory(params['url']).subscribe(category => {
          this.category = category;
        }, err => {
          this.router.navigate(['/error'], { skipLocationChange: true, replaceUrl: true });
        });
      } else {
        this.router.navigate(['/error'], { skipLocationChange: true, replaceUrl: true });
      }
    });
  }
}
