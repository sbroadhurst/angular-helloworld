import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../theme/theme.service';

@Component({
  selector: 'app-theme-slider',
  templateUrl: './theme-slider.component.html',
  styleUrls: ['./theme-slider.component.css'],
})
export class ThemeSliderComponent implements OnInit {
  constructor(private themeService: ThemeService) {}

  toggle() {
    const active = this.themeService.getActiveTheme();
    if (active.name === 'light') {
      this.themeService.setTheme('dark');
    } else {
      this.themeService.setTheme('light');
    }
  }

  ngOnInit(): void {}
}
