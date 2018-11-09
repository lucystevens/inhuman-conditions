import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomService {

  constructor() { }

  /**
   * Shuffles an array of objects randomly using the Durstenfeld
   * shuffle, a computer-optimized version of Fisher-Yates.
   * @param array The array to shuffle
   */
  shuffleArray(array: any[]): void {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

  /**
   * Generates a set of distinct random numbers.
   * It should be noted that if the quantity of numbers required
   * is larger than the range of possible numbers then this will never return.
   * @param min The minimum number to generate (inclusive)
   * @param max The maximum number to generate (exclusive)
   * @param quantity The quantity of random numbers to generate.
   */
  getRandomNumbers(min: number, max: number, quantity: number) : number[] {
    let numbers = [];
    while(numbers.length < quantity){
      let rand = this.getRandomNumber(min, max);
      if(numbers.indexOf(rand) < 0){
        numbers.push(rand);
      }
    }
    return numbers;
  }

  /**
   * Gets a single random number
   * @param min The minimum number to generate (inclusive)
   * @param max The maximum number to generate (exclusive) 
   */
  getRandomNumber(min: number, max: number) : number{
    let range = max - min;
    let rand = Math.floor(Math.random() * range);
    return rand + min;
  }
}
