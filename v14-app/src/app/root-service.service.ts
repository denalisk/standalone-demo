import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RootServiceService {

  constructor() { }
  makeDo(context: string) {
    console.log('Root Service doing things, context is', context);
  }
}
