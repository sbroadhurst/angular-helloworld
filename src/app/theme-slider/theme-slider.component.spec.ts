import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeSliderComponent } from './theme-slider.component';

describe('ThemeSliderComponent', () => {
  let component: ThemeSliderComponent;
  let fixture: ComponentFixture<ThemeSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemeSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
