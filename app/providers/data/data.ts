import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Storage, SqlStorage} from 'ionic-angular'
/*
  Generated class for the Data provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Data {
  private storage;
  private data = [];
    constructor() {
      console.log("constructor hit");
    this.storage = new Storage(SqlStorage);
    this.storage.query('CREATE TABLE IF NOT EXISTS frequent (title TEXT, counter INT)').then(() => {console.log("querry")});
    }

  getData(){
      return this.storage.query('SELECT * FROM frequent');
  }

  save(data){
      let sql = 'INSERT INTO frequent (title, counter) VALUES (?,?)';
      return this.storage.query(sql, [data.title, data.counter]);
  }

    updateCounter(data){
        let counter = data.counter +1;
        let sql = 'UPDATE frequent SET counter = \"' + counter + '\" WHERE title = \"' + data.title + '\"';
        return this.storage.query(sql);
    }

    removeItem(data){
        let sql = 'DELETE FROM frequent WHERE title = \"' + data.title + '\"';
        return this.storage.query(sql);
    }

    reset(){
        let sql = 'UPDATE frequent SET counter = 0';
        return this.storage.query(sql);
    }
}

