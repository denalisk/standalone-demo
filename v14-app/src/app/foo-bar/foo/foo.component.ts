import { Component, OnInit } from '@angular/core';
import { ConsumerService } from '../../consumer.service';

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.css'],
})
export class FooComponent implements OnInit {
  constructor(private consumerService: ConsumerService) {
    this.consumerService.do('FooComponent');
  }

  ngOnInit() {}
}
