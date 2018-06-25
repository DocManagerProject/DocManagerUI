import {Component, ElementRef, OnInit, ViewChild} from "@angular/core";
import {PageService} from "../../../service/page.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Page} from "../../../model/page";
import {AlertContainerComponent} from "../../common/alert/container/alert-container.component";

@Component({
  selector: 'edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.css']
})
export class EditPageComponent implements OnInit {

  page: Page;
  existingPage: Page;
  mergedContent: string;

  @ViewChild("pageTitle")
  pageTitleInput: ElementRef;

  @ViewChild("alertContainer")
  alertContainer: AlertContainerComponent;

  constructor(
    private pageService: PageService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  onSubmit(): void {
    // TODO: implement splitting merged component into sections
    this.page.sections = [{
      id: 0,
      name: "main",
      content: this.mergedContent,
      index: 0,
      url: ""
    }];

    this.pageService.editPage(this.page, this.existingPage).subscribe(page => {
      this.alertContainer.displaySuccess("Page successfully edited.", 4000);
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['url']) {
        this.pageService.getPage(params['url']).subscribe(page => {
          this.page = page;
          this.existingPage = JSON.parse(JSON.stringify(page));
          this.mergedContent = page.sections.map(section => section.content).reduce((a,b) => a + b);
        }, err => {
          this.router.navigate(['/error'], { skipLocationChange: true, replaceUrl: true });
        });
      } else {
        this.router.navigate(['/error'], { skipLocationChange: true, replaceUrl: true });
      }
    });
  }
}
