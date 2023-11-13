import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  addNumbers(a: number, b: number): number {
    return a + b;
  }

  addStrings(str1: string, str2: string): string {
    return str1 + str2;
  }

  constructor() { }
}
