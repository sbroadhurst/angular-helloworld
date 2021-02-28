import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  slides = [
    {
      image:
        'https://preview.redd.it/owpxdd1a2zj61.jpg?width=960&crop=smart&auto=webp&s=b3582f9c9916b3e65ac19617197731e8a3973ae6',
    },
    {
      image:
        'https://preview.redd.it/7ppvb8uyrjj61.jpg?width=960&crop=smart&auto=webp&s=a90ba07aac235f776b6ee29980c434aa542e2f05',
    },
    {
      image:
        'https://preview.redd.it/c9n5jt9oa9j61.png?width=960&crop=smart&auto=webp&s=2de1a03ad0ffbf607733991ae7e98003e2badbf9',
    },
    {
      image:
        'https://external-preview.redd.it/NvYlvqSeRhtUnrQTK4yzMppgKMoe_9RqZHnLVAZ5V3I.jpg?width=960&crop=smart&auto=webp&s=695144309883a2046443b11669ddc646a7e8021d',
    },
    {
      image: 'https://wallpaperaccess.com/full/856954.jpg',
    },
    {
      image:
        'https://external-preview.redd.it/GOkP8onbuyjGmN9Rc8Que5mw21CdSw6OuXpAKUuE6-4.jpg?width=960&crop=smart&auto=webp&s=baada9754b52c3be1dbf59e8d9b2502ce8ff9f8d',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
