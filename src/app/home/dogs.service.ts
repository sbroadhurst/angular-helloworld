import { Injectable } from '@angular/core';
import { DogInfo } from './dog-interface';

@Injectable({
  providedIn: 'root',
})
export class DogsService {
  dogData: DogInfo[] = [
    {
      name: 'Shiba Inu',
      breed: 'Dog Breed',
      description:
        'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
      avatarImage: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
      mainImage: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    },
    {
      name: 'Golden Retriever',
      breed: 'Dog Breed',
      description:
        'The Golden Retriever is a sturdy, muscular dog of medium size, famous for the dense, lustrous coat of gold that gives the breed its name. The broad head, with its friendly and intelligent eyes, short ears, and straight muzzle, is a breed hallmark.',
      avatarImage:
        'https://1.bp.blogspot.com/-hVF5RI-2rZY/TiiAL3wfJkI/AAAAAAAAC9Y/cEYTgkz67Ro/s1600/sgr11722.jpg',
      mainImage:
        'https://welovedoodles.com/wp-content/uploads/2021/01/Golden-Retrievers-New-York-300x240.jpg',
    },
    {
      name: 'American Pitbull',
      breed: 'Dog Breed',
      description:
        'The American Pitbull is a medium-sized, intelligent, short-haired dog, of a solid build, whose early ancestors came from the British Isles. When compared with the English Staffordshire Bull Terrier, the American Pit Bull Terrier is larger by margins of 6–8 inches (15–20 cm) in height and 25–35 pounds (11–16 kg) in weight.',
      avatarImage:
        'https://s.abcnews.com/images/Lifestyle/pit-bull-ht-jpo-05-171012_4x5_992.jpg',
      mainImage:
        'https://i.pinimg.com/originals/cc/ef/b7/ccefb7809f72e6439bc16c490b84277f.jpg',
    },
    {
      name: 'German Shepard',
      breed: 'Dog Breed',
      description:
        'The German shepherd dog is a herding breed known for its courage, loyalty and guarding instincts. This breed makes an excellent guard dog, police dog, military dog, guide dog for the blind and search and rescue dog. For many families, the German shepherd is also a treasured family pet.',
      avatarImage:
        'https://i.pinimg.com/736x/d2/69/d8/d269d8d35769bf265c6288ce5a0b2d3b.jpg',
      mainImage: 'https://www.pedigreedatabase.com/pictures/2549253.jpg',
    },
  ];

  getDogData(): DogInfo[] {
    return this.dogData;
  }

  constructor() {}
}
