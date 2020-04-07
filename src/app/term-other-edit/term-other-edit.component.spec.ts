import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermOtherEditComponent } from './term-other-edit.component';

describe('TermOtherEditComponent', () => {
  let component: TermOtherEditComponent;
  let fixture: ComponentFixture<TermOtherEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermOtherEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermOtherEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
