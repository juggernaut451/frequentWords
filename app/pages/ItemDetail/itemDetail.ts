import {Component} from '@angular/core';
import {NavParams} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/ItemDetail/itemDetail.html',
})
export class ItemDetailPage {

  private title;
  private description;

  constructor(private navParams: NavParams) {

    this.title = this.navParams.get('item').title;
    this.description = this.navParams.get('item').description;

  }

}
