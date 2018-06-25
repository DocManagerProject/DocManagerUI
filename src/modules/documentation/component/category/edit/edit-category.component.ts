import {Component, OnInit, ViewChild} from "@angular/core";
import {Category} from "../../../model/category";
import {ActivatedRoute, Router} from "@angular/router";
import {CategoryService} from "../../../service/category.service";
import {AlertContainerComponent} from "../../common/alert/container/alert-container.component";

@Component({
  selector: 'edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {

  category: Category;
  existingCategory: Category;

  @ViewChild("alertContainer")
  alertContainer: AlertContainerComponent;

  constructor(
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  onSubmit(): void {
    this.categoryService.editCategory(this.category, this.existingCategory).subscribe(category => {
      this.alertContainer.displaySuccess("Category successfully edited.", 4000);
    }, error => {
      this.alertContainer.displayError("Error while editing page.", 4000);
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['url']) {
        this.categoryService.getCategory(params['url']).subscribe(category => {
          this.category = category;
          this.existingCategory = JSON.parse(JSON.stringify(category));
        }, err => {
          this.router.navigate(['/error'], { skipLocationChange: true, replaceUrl: true });
        });
      } else {
        this.router.navigate(['/error'], { skipLocationChange: true, replaceUrl: true });
      }
    });
  }
}
