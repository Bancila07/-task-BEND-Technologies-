import {Component} from '@angular/core';
// @ts-ignore
import item from '../app/new things (1).json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'json-file-read-angular';
  public itemList: { id: number, areaId: number, joinedWith: number, sku: string, defaultSku: string, status: string, countActive: number }[] = item;
}
