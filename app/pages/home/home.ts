
import { Component } from '@angular/core';
import {NavController, ModalController} from 'ionic-angular';
import { AddItemPage} from '../addItem/addItem';
import {Data} from './../../providers/data/data'
import {ItemDetailPage} from "../ItemDetail/itemDetail";

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  private items = [];
  constructor(public navCtrl: NavController, private modalCtrl: ModalController, private dataService: Data) {
      this.reloadPage();
  }

  reloadPage(){
      this.dataService.getData().then(
          data => {
              this.items = [];
              if (data.res.rows.length > 0) {
                  for (var i = 0; i < data.res.rows.length; i++) {
                      let item = data.res.rows.item(i);
                      this.items.push(item);
                  }

              }
          });
  }

  addItem(){
    let addModal = this.modalCtrl.create(AddItemPage);
    addModal.onDidDismiss((item) => {
      if (item){
        console.log(JSON.stringify(item));
        this.saveItem(item);
      }
    });
    addModal.present();
  }

  saveItem(item){
    this.dataService.save(item).then(() => {
        console.log(this.items);

        this.reloadPage();
      });
  }

  viewItem(item){
    this.navCtrl.push(ItemDetailPage, {
      item: item
    });
  }

  updateItem(item){
      this.dataService.updateCounter(item).then(() => {
          this.reloadPage();
      })
  }

  removeItem(item){
      this.dataService.removeItem(item).then(() => {
          this.reloadPage();
      })
  }
  reset(){
        this.dataService.reset().then(() => {
            this.reloadPage();
        })
  }
}
