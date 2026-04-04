import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelFooter } from './model-footer';

describe('ModelFooter', () => {
  let component: ModelFooter;
  let fixture: ComponentFixture<ModelFooter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModelFooter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelFooter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
