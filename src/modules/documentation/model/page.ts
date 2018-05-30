import {Solution} from "./solution";
import {PageSection} from "./pageSection";

export class Page {
  id: number;
  solution: Solution;
  name: string;
  createDate: Date;
  url: string;
  sections: PageSection[]
}
