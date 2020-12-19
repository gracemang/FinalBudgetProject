import { Injectable } from '@angular/core';

@Injectable()
export class helperComponent {

  elements: any[];
  constructor() { }

   get data(): any{
    return this.elements;
  }

   set data(val: any){
    this.elements = val;
    console.log(this.elements);
  }

}
