import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooComponent } from './foo/foo.component';
import { BarComponent } from './bar/bar.component';
import { StandaloneChildComponent } from '../standalone/standalone-child/standalone-child.component';

@NgModule({
  imports: [CommonModule, StandaloneChildComponent],
  declarations: [BarComponent, FooComponent],
  exports: [FooComponent],
})
export class FooBarModule {}
