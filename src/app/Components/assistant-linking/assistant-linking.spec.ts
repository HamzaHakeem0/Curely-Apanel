import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistantLinking } from './assistant-linking';

describe('AssistantLinking', () => {
  let component: AssistantLinking;
  let fixture: ComponentFixture<AssistantLinking>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssistantLinking]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssistantLinking);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
