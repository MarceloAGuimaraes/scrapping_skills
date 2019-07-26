import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckPunctuationComponent } from './check-punctuation.component';

describe('CheckPunctuationComponent', () => {
  let component: CheckPunctuationComponent;
  let fixture: ComponentFixture<CheckPunctuationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckPunctuationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckPunctuationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
