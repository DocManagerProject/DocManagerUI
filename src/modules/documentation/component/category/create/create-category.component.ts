import {Component, OnInit, ViewChild} from "@angular/core";
import {CategoryService} from "../../../service/category.service";
import {Category} from "../../../model/category";
import {ActivatedRoute} from "@angular/router";
import {StorageManager} from "../../../../app/service/storage-manager.service";
import {AlertContainerComponent} from "../../common/alert/container/alert-container.component";

@Component({
  selector: 'create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {

  category: Category;

  @ViewChild("alertContainer")
  alertContainer: AlertContainerComponent;

  constructor(
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private storageManager: StorageManager
  ) { }

  onSubmit(): void {
    this.categoryService.addCategory(this.category);
    this.alertContainer.displaySuccess("Category successfully created.", 4000);
  }

  ngOnInit(): void {
    this.category = {
      id: 0,
      solution: {
        id: this.storageManager.getSolutionId(),
        name: "",
        createDate: null,
        state: null
    },
    name: "",
    createDate: null,
    url: ""
    }
  }
}
