import { Injectable } from '@angular/core';

@Injectable()
export class ModuleServiceService {

  constructor() { }

  makeDo(context: string) {
    console.log('Module Service doing things, context is', context);
  }
}
