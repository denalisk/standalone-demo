import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DependencyService {
  constructor() {}

  public do(context: string) {
    console.log('Dependency Service invoked from', context);
  }
}
