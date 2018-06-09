import {Component, ElementRef, OnInit, ViewChild} from "@angular/core";
import {PageService} from "../../../service/pageService";
import {ActivatedRoute} from "@angular/router";
import {Page} from "../../../model/page";
import {StorageManager} from "../../../../app/service/storageManager.service";

@Component({
  selector: 'page-editor',
  templateUrl: './page-editor.component.html',
  styleUrls: ['./page-editor.component.css']
})
export class PageEditorComponent implements OnInit {

  page: Page;
  mergedContent: string;

  @ViewChild('pageTitle')
  pageTitleInput: ElementRef;

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
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['url']) {
        this.pageService.getPage(params['url']).subscribe(page => {
          this.page = page;
          this.mergedContent = page.sections.map(section => section.content).reduce((a,b) => a + b);
        });
      } else {
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
    });
  }
}
