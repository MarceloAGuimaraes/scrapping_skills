import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckPunctuationFormComponent } from './check-punctuation-form.component';

describe('CheckPunctuationFormComponent', () => {
  let component: CheckPunctuationFormComponent;
  let fixture: ComponentFixture<CheckPunctuationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckPunctuationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckPunctuationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
