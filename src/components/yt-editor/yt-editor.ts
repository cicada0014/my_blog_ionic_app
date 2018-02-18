import { Component, Input, ViewChild, ElementRef, ComponentFactoryResolver, ViewContainerRef, HostListener, Host } from '@angular/core';
import { Keyboard } from '@ionic-native/keyboard';
/**
 * Generated class for the YtEditorComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'yt-editor',
  templateUrl: 'yt-editor.html'
})
export class YtEditorComponent {

  @Input() data: string;
  @ViewChild('editBody') editBody: ElementRef;
  @ViewChild('showBody') showBody: ElementRef;
  @Input() parentVCR: ViewContainerRef;
  // @HostListener('copy', ['$event']) enterKeyDownEvent($event: KeyboardEvent) {
  //   console.log("tt")
  //   let p = document.createElement('p');
  //   p.innerHTML = ' \u00a0 '
  //   this.editBody.nativeElement.appendChild(p)
  //   p.focus()
  // }

  // console.log($event)
  // if ($event.keyCode == 13) {
  // let p = document.createElement('p');
  //   let s = window.getSelection()
  //   let r = document.createRange();
  //   p.innerHTML = '\u00a0'
  //   s.removeAllRanges()
  //   r.selectNodeContents(p)
  //   s.addRange(r)
  //   this.editBody.nativeElement.appendChild(p)
  //   setTimeout(() => {
  //     p.focus();
  //   }, 0);

  // }

  public isContentEditable: boolean = true;
  public editorOptions: any = {
    maxLines: 1000,
    printMargin: false,
    wrap: true,
  };

  public fontSize: number = 1;

  constructor(
    private vcr: ViewContainerRef,
    private factoryResolver: ComponentFactoryResolver,
    public keyboard: Keyboard

  ) {

  }


  onChange($event) {

  }


  fontSizing($event) {
    console.log($event)
    document.execCommand('fontsize', false, $event)

  }


  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log("ttt")
    this.keyboard.show()
  }

  // 아이오닉 훅을 공부해야겟다

  ngAfterViewInit() {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.editBody.nativeElement.setAttribute('contenteditable', this.isContentEditable)
    this.editBody.nativeElement.innerHTML = this.data
    // if (this.isContentEditable) {
    // } else {
    //   this.showBody.nativeElement.innerHTML = this.data
    // }
  }

  focusingEditor() {
    this.editBody.nativeElement.focus()
  }

  test($event) {

    let a = window.getSelection().baseNode.attributes.getNamedItem('class')

    console.log(a.value += ' test')

    console.log($event)
  }
}
