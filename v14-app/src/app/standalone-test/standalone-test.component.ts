import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-standalone-test',
  templateUrl: './standalone-test.component.html',
  styleUrls: ['./standalone-test.component.less']
})
export class StandaloneTestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
