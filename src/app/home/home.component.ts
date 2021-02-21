import { Component, OnInit } from '@angular/core';
import { DogsService } from './dogs.service';
import { DogInfo } from './dog-interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [DogsService],
})
export class HomeComponent implements OnInit {
  dogData: DogInfo[] = [];

  getDogData() {
    this.dogData = this.dogService.getDogData();
  }

  constructor(private dogService: DogsService) {}

  ngOnInit(): void {
    this.getDogData();
  }
}
