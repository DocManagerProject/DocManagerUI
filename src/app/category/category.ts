import {Component} from "@angular/core";

@Component({
  selector: 'category',
  templateUrl: './category.html',
  styleUrls: ['./category.css']
})
export class Category {
  title: string = "Category title";
  pages: string[] = [
    'page1',
    'page2',
    'page3',
    'page4',
    'page5',
    'page6',
    'page7',
    'page8',
    'page9',
  ];
}
