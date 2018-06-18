export class DashboardItem {
  id: number;
  name: string;
  posRow: number;
  posCol: number;
  rowSpan: number;
  colSpan: number;
  iconUrl: string;
  link: string;

  static prepareDashboardItem(): DashboardItem {
    return {
      id: 1,
      name: 'exampleDashboardItem',
      posRow: 1,
      posCol: 1,
      rowSpan: 1,
      colSpan: 1,
      iconUrl: 'https://qvartz.com/wp-content/uploads/Placeholder-icon-blue-300x250.png?x42197',
      link: 'category/1'
    };
  }
}
