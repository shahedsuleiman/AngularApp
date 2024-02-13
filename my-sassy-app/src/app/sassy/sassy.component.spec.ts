import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SassyComponent } from './sassy.component';

describe('SassyComponent', () => {
  let component: SassyComponent;
  let fixture: ComponentFixture<SassyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SassyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SassyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
