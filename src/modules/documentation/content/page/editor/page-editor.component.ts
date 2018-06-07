import {Component, ElementRef, OnInit, ViewChild} from "@angular/core";
import {PageService} from "../../../service/pageService";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'page-editor',
  templateUrl: './page-editor.component.html',
  styleUrls: ['./page-editor.component.css']
})
export class PageEditorComponent implements OnInit {

  id: number;
  title: string;
  content: string;

  @ViewChild('pageTitle')
  pageTitleInput: ElementRef;

  constructor(
    private pageService: PageService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (!isNaN(+params['id'])) {
        this.pageService.getPage(+params['id']).subscribe(page => {
          this.id = page.id;
          this.title = page.name;
          this.content = page.sections.map(section => section.content).reduce((a,b) => a + b);
        });
      }
    });
  }
}
