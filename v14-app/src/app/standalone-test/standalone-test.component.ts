import { Component, OnInit } from '@angular/core';
import { ParentServiceService } from '../parent-service.service';
import { RootServiceService } from '../root-service.service';

@Component({
  standalone: true,
  selector: 'app-standalone-test',
  templateUrl: './standalone-test.component.html',
  styleUrls: ['./standalone-test.component.less']
})
export class StandaloneTestComponent implements OnInit {

  constructor(private parentService: ParentServiceService, private rootService: RootServiceService) { }

  ngOnInit(): void {
    this.parentService.makeDo('StandaloneTestComponent');
    this.rootService.makeDo('StandaloneTestComponent');
  }
}
