import { Component, OnInit } from '@angular/core';
//import {HttpClient} from '@angular/common/http'

//import the resto service
import { RestoService } from '../resto.service';

@Component({
  selector: 'app-list-resto',
  templateUrl: './list-resto.component.html',
  styleUrls: ['./list-resto.component.css'],
})
export class ListRestoComponent implements OnInit {
  collection = [];
  constructor(private resto: RestoService) {}

  ngOnInit(): void {
    //we then subscribe to the store
    this.resto.getList().subscribe((results: []) => {
      // console.log(results);
      this.collection = results;
    });
  }
}
