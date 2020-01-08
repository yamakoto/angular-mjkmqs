import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

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

  // @Output()デコレーターと EventEmitter() のインスタンスを使って、
  // notifyという名前のプロパティを定義します。 
  // これにより、notifyプロパティの値が変更されたときに製品アラートコンポーネントが
  // イベントを発行することが可能になります。
  // 参考：https://www.yoheim.net/blog.php?q=20170103　EventEmitterとは？
  @Output () notify = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

}

// そもそもデコレーター（Decolater）とは？
// 良記事：https://qiita.com/taqm/items/4bfd26dfa1f9610128bc
// https://mae.chab.in/archives/59845
