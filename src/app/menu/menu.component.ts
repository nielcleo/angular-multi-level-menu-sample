import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Configuration, MultilevelNodes } from 'ng-material-multilevel-menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  appitems: MultilevelNodes[] = [];


config: Configuration = {
  rtlLayout: false,
  customTemplate: true,
  interfaceWithRoute: true,
}

  constructor(private http: HttpClient) { 
    this.loadMenuItems();
    console.log('constructor');
  }

  ngOnInit(): void {
  }

  getClass(item) {
    return {
        [item.faIcon]: true
    }
  }

  selectedItem($event) {
    console.log($event);
  }
  

  loadMenuItems() {
    var url = 'https://mocki.io/v1/0da0946d-c1a4-452f-b6fa-184b7a0915f3';

    this.http.get<MultilevelNodes[]>(url).subscribe(values => {
      console.log('values', values);
      this.appitems = values;
    });
  }
}
