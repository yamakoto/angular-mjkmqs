import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;

  // shareメソッド引数を追加
  share(productName: string) {
    window.alert('The product [' + productName +'] has been shared!');
  }

  // onNotifyメソッド
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style licens  e that
can be found in the LICENSE file at http://angular.io/license
*/