import { Component } from '@angular/core';

/**
 * Generated class for the PostCardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'post-card',
  templateUrl: 'post-card.html'
})
export class PostCardComponent {

  text: string;

  constructor() {
    console.log('Hello PostCardComponent Component');
    this.text = 'Hello World';
  }

  

}
