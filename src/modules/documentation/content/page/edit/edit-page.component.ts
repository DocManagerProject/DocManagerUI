import {Component, ElementRef, OnInit, ViewChild} from "@angular/core";
import {PageService} from "../../../service/pageService";
import {ActivatedRoute, Router} from "@angular/router";
import {Page} from "../../../model/page";

@Component({
  selector: 'edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.css']
})
export class EditPageComponent implements OnInit {

  page: Page;
  mergedContent: string;

  @ViewChild('pageTitle')
  pageTitleInput: ElementRef;

  constructor(
    private pageService: PageService,
    private route: ActivatedRoute,
    private router: Router
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
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['url']) {
        this.pageService.getPage(params['url']).subscribe(page => {
          this.page = page;
          this.mergedContent = page.sections.map(section => section.content).reduce((a,b) => a + b);
        });
      } else {
        this.router.navigate(['/error'], { skipLocationChange: true, replaceUrl: true });
      }
    });
  }
}
