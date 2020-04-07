import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermOtherCreateComponent } from './term-other-create.component';

describe('TermOtherCreateComponent', () => {
  let component: TermOtherCreateComponent;
  let fixture: ComponentFixture<TermOtherCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermOtherCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermOtherCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
