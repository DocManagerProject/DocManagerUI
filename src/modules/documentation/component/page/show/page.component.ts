import {Component, OnInit} from "@angular/core";
import {PageService} from "../../../service/page.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  id: number;
  name: string;
  url: string;
  sections: string[];

  constructor(
    private pageService: PageService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.pageService.getPage(params['url']).subscribe(page => {
        this.id = page.id;
        this.name = page.name;
        this.url = page.url;
        this.sections = page.sections.map(section => section.content);
      }, err => {
        this.router.navigate(['/error'], { skipLocationChange: true, replaceUrl: true });
      });
    });
  }
}
