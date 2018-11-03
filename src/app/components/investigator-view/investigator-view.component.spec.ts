import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestigatorViewComponent } from './investigator-view.component';

describe('InvestigatorViewComponent', () => {
  let component: InvestigatorViewComponent;
  let fixture: ComponentFixture<InvestigatorViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestigatorViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestigatorViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
