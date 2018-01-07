import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grade',
  templateUrl: './grade.component.html',
  styleUrls: ['./grade.component.css']
})
export class GradeComponent implements OnInit {

  private a = [];
  private month = 1;

  constructor() { }

  ngOnInit() {
    this.a = new Array(new Date(2018, this.month, 0).getDate());
    console.log(new Date(2018, this.month, 0).getDate());
    console.log(this.a);
  }
}
