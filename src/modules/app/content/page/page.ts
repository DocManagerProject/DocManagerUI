import {Component} from "@angular/core";
import {Category} from "../category/category";

@Component({
  selector: 'page',
  templateUrl: './page.html',
  styleUrls: ['./page.css']
})
export class Page {
  id: number;
  title: string = 'Test title';
  category: Category = {
    id: 1,
    title: "Category title",
    pages:  [
      'page1',
      'page2',
      'page3',
      'page4',
      'page5',
      'page6',
      'page7',
      'page8',
      'page9'
    ]
  };
  paragraphs: string[] = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper enim vitae nulla volutpat, posuere tincidunt metus sagittis. Curabitur imperdiet, lorem in sollicitudin euismod, libero purus efficitur odio, a tincidunt dolor turpis eget leo. Vivamus varius risus ac velit sagittis, in condimentum metus sagittis. <a href="#">Aliquam</a> condimentum suscipit congue. Donec leo lorem, molestie dapibus magna feugiat, pulvinar condimentum quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla feugiat in nisi non pellentesque. Pellentesque magna nulla, efficitur in pellentesque sit amet, mattis nec purus. In hac habitasse platea dictumst. Phasellus tempor diam eleifend auctor hendrerit. Integer ut ligula sit amet tellus laoreet dictum. In a ultrices mauris. Aliquam tincidunt leo in magna egestas, vel ultricies neque condimentum. Nulla risus tellus, cursus id pretium quis, ultrices suscipit libero. Cras varius sem eu nibh congue, sit amet vehicula augue aliquam.\n' +
    '\n',
    'Integer feugiat consequat dolor. <a href="#">Fusce ac orci</a> et orci vulputate rutrum vel in tortor. Praesent laoreet eget tellus ac porttitor. In massa tortor, facilisis congue erat vel, dapibus gravida lacus. Aenean eleifend urna sed eleifend placerat. Suspendisse semper, nulla in convallis fringilla, diam ante faucibus nisl, et egestas leo lacus aliquam tortor. Vestibulum sagittis eget mi in euismod. Ut pharetra diam quis magna fermentum, nec fermentum ante suscipit.\n' +
    '\n',
    'Cras eget sem sed tortor tristique pharetra. Morbi mi augue, mattis et accumsan non, vulputate sit amet tellus. Duis leo enim, aliquam vel tellus id, faucibus elementum neque. Donec malesuada consectetur urna in fringilla. Suspendisse sollicitudin luctus arcu, elementum posuere orci iaculis ut. Pellentesque fermentum fringilla tellus, ac vulputate turpis pulvinar consequat. <a href="#">Sed iaculis</a> nisl vehicula blandit porta.\n' +
    '\n',
    'Vestibulum non sollicitudin lacus. Sed tempor nunc non mauris aliquam sodales. Nunc id urna at <a href="#">lorem mattis</a> maximus. Cras mi felis, ullamcorper eu tristique id, viverra in tellus. Nulla quis quam risus. Fusce ac sodales sem, at sagittis ligula. Vestibulum quis nisl venenatis, venenatis ex id, accumsan mi. Vestibulum pulvinar, lorem a accumsan rutrum, ex justo luctus magna, nec dapibus turpis velit ut orci. Nulla sit amet gravida urna. Vivamus porttitor arcu nulla, in <a href="#">vulputate</a> ex sagittis eget. Suspendisse a massa cursus ipsum facilisis congue eu eget arcu.\n' +
    '\n',
    'Mauris lectus tellus, mattis eu dignissim in, semper a nisi. Aliquam <a href="#">iaculis iaculis nunc</a>. Proin mollis, risus id hendrerit convallis, sem sem cursus eros, ut pulvinar nisl libero mollis quam. Suspendisse cursus risus in sem rhoncus, non ultricies ante placerat. Aliquam tempor velit urna, vel volutpat velit fermentum sit amet. Nullam leo neque, congue a ultricies a, aliquam sit amet nisi. Integer eros lacus, hendrerit eu sapien et, posuere molestie odio. Proin risus arcu, pellentesque a erat ac, tincidunt facilisis arcu. Donec pretium ultrices ante, non maximus dui euismod quis.'
    ];
}
