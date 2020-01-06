import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

// @Component()デコレーターに注目してください。 
// これは、次のクラスがコンポーネントであることを示しています。
// テンプレート、スタイル、セレクターなど、コンポーネントに関するメタデータを提供
@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {

  // @Input()デコレーターを使ってproductという名前のプロパティを定義します。
  // @Inputデコレーターはプロパティ値がコンポーネントの親（この場合は商品リストコンポーネント）から
  // 渡されることを示します
  @Input () product;
  constructor() { }


  ngOnInit() {
  }

}