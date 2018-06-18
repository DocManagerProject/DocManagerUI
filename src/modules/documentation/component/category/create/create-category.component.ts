import {Component, OnInit} from "@angular/core";
import {CategoryService} from "../../../service/category.service";
import {Category} from "../../../model/category";
import {ActivatedRoute} from "@angular/router";
import {StorageManager} from "../../../../app/service/storage-manager.service";

@Component({
  selector: 'create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {

  category: Category;

  constructor(
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private storageManager: StorageManager
  ) { }

  onSubmit(): void {
    this.categoryService.addCategory(this.category);
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
