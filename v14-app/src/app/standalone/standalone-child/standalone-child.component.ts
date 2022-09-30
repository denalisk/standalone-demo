import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-standalone-child',
  templateUrl: './standalone-child.component.html',
  styleUrls: ['./standalone-child.component.css'],
})
export class StandaloneChildComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
