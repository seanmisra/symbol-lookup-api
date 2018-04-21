import { Component, OnInit } from '@angular/core';

declare var require: any; 
var symbols = require('../symbols.json')

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

  cusipList: {name: string, entity: string }[]= []
  validValue: boolean = false; 
  entityValue: string = "";
  symbolText: string = ""; 

  constructor() { }

  ngOnInit() {
    for (let symbol of symbols) {
      this.cusipList.push({
        name: symbol.Name,
        entity: symbol.Entity
      }); 
    }
    console.log(this.cusipList); 
  }

  checkSymbol() {
    for (let obj of this.cusipList) {
      if (this.symbolText === obj.name) {
        this.validValue = true;
        this.entityValue = obj.entity;
        return; 
      }
    }
    this.validValue = false; 
  }

}
