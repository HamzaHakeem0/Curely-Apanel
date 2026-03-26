import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatintHistory } from './patint-history';

describe('PatintHistory', () => {
  let component: PatintHistory;
  let fixture: ComponentFixture<PatintHistory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatintHistory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatintHistory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
