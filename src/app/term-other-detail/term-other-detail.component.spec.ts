import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermOtherDetailComponent } from './term-other-detail.component';

describe('TermOtherDetailComponent', () => {
  let component: TermOtherDetailComponent;
  let fixture: ComponentFixture<TermOtherDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermOtherDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermOtherDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
