/**
 * Created by juggernaut on 17/9/16.
 */
import {Component} from '@angular/core';
import {ViewController, NavController} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/addItem/addItem.html',
})

export class AddItemPage {

  private title = "";
  private counter = 0;

  constructor(private nav: NavController, private view: ViewController) {

  }

  saveItem(){

    let newItem = {
      title: this.title,
      counter: this.counter
    };

    this.view.dismiss(newItem);

  }

  close(){
    this.view.dismiss();
  }

}
