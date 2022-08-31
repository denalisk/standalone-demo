import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandaloneChildComponent } from './standalone-child.component';

describe('StandaloneChildComponent', () => {
  let component: StandaloneChildComponent;
  let fixture: ComponentFixture<StandaloneChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StandaloneChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StandaloneChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
