import { Component } from '@angular/core';

/**
 * Generated class for the EditorComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'youngtae-editor',
  templateUrl: 'youngtae-editor.html'
})
export class YoungtaeEditorComponent {

  text: string;

  constructor() {
    console.log('Hello EditorComponent Component');
    this.text = 'Hello World';
  }

}
