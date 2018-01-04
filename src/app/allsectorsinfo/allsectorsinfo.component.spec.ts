import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllsectorsinfoComponent } from './allsectorsinfo.component';

describe('AllsectorsinfoComponent', () => {
  let component: AllsectorsinfoComponent;
  let fixture: ComponentFixture<AllsectorsinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllsectorsinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllsectorsinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
