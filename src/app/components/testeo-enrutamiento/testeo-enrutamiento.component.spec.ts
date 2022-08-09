import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteoEnrutamientoComponent } from './testeo-enrutamiento.component';

describe('TesteoEnrutamientoComponent', () => {
  let component: TesteoEnrutamientoComponent;
  let fixture: ComponentFixture<TesteoEnrutamientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TesteoEnrutamientoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TesteoEnrutamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
