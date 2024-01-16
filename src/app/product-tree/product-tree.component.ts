import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../product.model';


@Component({
  selector: 'app-product-tree',
  templateUrl: './product-tree.component.html',
  styleUrls: ['./product-tree.component.scss']
})
export class ProductTreeComponent implements OnInit {
  dataSource: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('/api/Products/').subscribe((data: any) => {
      console.log('LOG data', data)
      this.dataSource = this.organizeData(data);
      console.log('LOG item', this.dataSource)
    });
  }

  organizeData(data: any[]): any[] {
    const organizedData: any[] = [];

    const groups = new Map<number, any[]>();
    data.forEach(item => {

      const groupId = item.productGroupId;
      if (!groups.has(groupId)) {
        groups.set(groupId, []);
      }
      if (groups.has(groupId)) {
        groups.get(groupId)!.push(item);
      }
    });

    groups.forEach((items, groupId) => {
      const groupData = {
        ProductGroupId: groupId,
        GroupName: items[0].GroupName,
        items: items
      };
      organizedData.push(groupData);
    });

    return organizedData;
  }
}
