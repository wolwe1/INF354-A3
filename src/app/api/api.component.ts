import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss']
})
export class ApiComponent implements OnInit {

  employees : Object;

  constructor(private data : DataService) { }

  ngOnInit() {
    this.data.getEmployees().subscribe(data =>{
      this.employees = data
      console.log(this.employees);
    }
      
    );

  }

}