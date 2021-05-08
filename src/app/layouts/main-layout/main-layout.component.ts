import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var app: any;
@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  constructor(
    public _router: Router
  ) { }

  ngOnInit() {
  }
}
