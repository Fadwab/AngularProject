import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TstComponent } from './admin.component';

describe('AdminComponent', () => {
  let component: TstComponent;
  let fixture: ComponentFixture<TstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});