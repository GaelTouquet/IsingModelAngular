import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsingModelComponent } from './ising-model.component';

describe('IsingModelComponent', () => {
  let component: IsingModelComponent;
  let fixture: ComponentFixture<IsingModelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IsingModelComponent]
    });
    fixture = TestBed.createComponent(IsingModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
