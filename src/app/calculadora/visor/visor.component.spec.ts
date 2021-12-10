import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VISORComponent } from './visor.component';

describe('VISORComponent', () => {
  let component: VISORComponent;
  let fixture: ComponentFixture<VISORComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VISORComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VISORComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
