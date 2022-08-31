import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParentServiceService {

  private parentState: string;

  constructor(@Inject('INJECTED_STRING') injectedState: string) {
    this.parentState = injectedState;
  }

  makeDo(context: string) {
    console.log('Parent Service doing things, context is', context, 'state is ', this.parentState);
  }

  parentInvoke(): string {
    return this.parentState;
  }

  parentUpdate(newState: string): void {
    this.parentState = newState;
  }
}
