import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-basics';
  titleTwo = 'Dinamic Title';
  number = 45;
  arr = [1, 2, 3];
  obj = {a: this.number = 1, b: {c: 'qwer'}};

  inputValue = '';
  /*imageReact = 'https://reactjs.org/logo-og.png';
  imageAngular = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png';*/
  /*constructor() {
    setTimeout(() => {
      console.log('Time is over - next LOGO is Angular');
      this.imageReact = this.imageAngular;
    }, 5000)
  }*/

  constructor() {
  }

  onInput(event:Event) {
    console.log('Event', event);
    this.inputValue = (<HTMLInputElement>event.target).value;
  }

  onClick() {
    let data: number = 1;
    console.log('Click', data = data +1)
  }

  onBlur(str: string) {
    this.inputValue = str;
  }
}
