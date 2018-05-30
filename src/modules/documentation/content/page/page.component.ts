import {Component, OnInit} from "@angular/core";
import {PageService} from "../../service/pageService";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  id: number;
  name: string;
  sections: string[];

  constructor(
    private pageService: PageService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.pageService.getPage(+params['id']).subscribe(page => {
        this.id = page.id;
        this.name = page.name;
        this.sections = page.sections.map(section => section.content);
      });
    });
  }
}
