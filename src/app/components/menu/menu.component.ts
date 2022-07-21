import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class MenuComponent implements OnInit {
  text: String = 'Confort  <strong class="demo">350 DA</strong>';

  @ViewChild('myText') myText1: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  optain(event) {
    console.log(event.target.innerHTML);
    if (event.target.classList.contains('demo'))
      this.text = event.target.parentElement.innerHTML;
    else this.text = event.target.innerHTML;
    event.preventDefault();
  }
}
