import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QpageComponent } from './qpage.component';

describe('QpageComponent', () => {
  let component: QpageComponent;
  let fixture: ComponentFixture<QpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
