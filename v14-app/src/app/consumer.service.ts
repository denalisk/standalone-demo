import { Injectable } from '@angular/core';
import { DependencyService } from './dependency.service';

@Injectable({ providedIn: 'root' })
export class ConsumerService {
  constructor(private dependencyService: DependencyService) {}

  public do(context: string) {
    console.log('Consumer Service invoked from', context);
    this.dependencyService.do('ConsumerService');
  }
}
