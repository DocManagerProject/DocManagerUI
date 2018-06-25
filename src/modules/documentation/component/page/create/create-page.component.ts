import {Component, ElementRef, OnInit, ViewChild} from "@angular/core";
import {PageService} from "../../../service/page.service";
import {ActivatedRoute} from "@angular/router";
import {Page} from "../../../model/page";
import {StorageManager} from "../../../../app/service/storage-manager.service";
import {AlertContainerComponent} from "../../common/alert/container/alert-container.component";

@Component({
  selector: 'create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.css']
})
export class CreatePageComponent implements OnInit {

  page: Page;
  mergedContent: string;

  @ViewChild("pageTitle")
  pageTitleInput: ElementRef;

  @ViewChild("alertContainer")
  alertContainer: AlertContainerComponent;

  constructor(
    private pageService: PageService,
    private route: ActivatedRoute,
    private storageManager: StorageManager
  ) { }

  onSubmit(): void {
    // TODO: implement splitting merged content into sections
    this.page.sections = [{
      id: 0,
      name: "main",
      content: this.mergedContent,
      index: 0,
      url: ""
    }];

    this.pageService.addPage(this.page);
    this.alertContainer.displaySuccess("Page successfully created.", 4000);
  }

  ngOnInit(): void {
    this.page = {
      id: 0,
      solution: {
        id: this.storageManager.getSolutionId(),
        name: "",
        createDate: null,
        state: null
      },
      name: "",
      createDate: null,
      url: "",
      sections: []
    }
  }
}
