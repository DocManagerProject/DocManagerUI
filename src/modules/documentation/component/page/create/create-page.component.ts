import {Component, ElementRef, OnInit, ViewChild} from "@angular/core";
import {PageService} from "../../../service/page.service";
import {ActivatedRoute, Router} from "@angular/router";
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

  @ViewChild("pageTitle")
  pageTitleInput: ElementRef;

  @ViewChild("alertContainer")
  alertContainer: AlertContainerComponent;

  constructor(
    private pageService: PageService,
    private route: ActivatedRoute,
    private storageManager: StorageManager,
    private router: Router
  ) { }

  onSubmit(): void {
    this.pageService.addPage(this.page).subscribe(page => {
      this.alertContainer.displaySuccess("Page successfully created.", 4000);
      setTimeout(() => {
        this.router.navigate(["page/" + this.page.url]);
      }, 1000);
    }, error => {
      this.alertContainer.displayError("Error while creating page.", 4000);
    });
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
      content: "",
      createDate: null,
      url: ""
    }
  }
}
