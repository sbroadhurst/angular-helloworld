import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RecordsService {
  info1: string[] = ['Adam Taylor', 'E134', '123@abc.com'];
  info2: string[] = ['John Tay', 'E132', '134@abc.com'];
  info3: string[] = ['Mark Lor', 'E135', '156@abc.com'];

  getInfo1(): string[] {
    return this.info1;
  }

  getInfo2(): string[] {
    return this.info2;
  }

  getInfo3(): string[] {
    return this.info3;
  }

  addInfo(info: any) {
    this.info1.push(info);
    this.info2.push(info);
    this.info3.push(info);
    return this.info1;
  }

  constructor() {}
}
