import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'toggle-button',
  templateUrl: './toggle-button.component.html',
  styleUrls: ['./toggle-button.component.css'],
})
export class ToggleButtonComponent implements OnInit {
  text: String = 'Course';
  @ViewChild('myText1') myText1: ElementRef;
  @ViewChild('myText2') myText2: ElementRef;
  constructor() {}

  ngOnInit(): void {}

  toggle() {
    this.text == 'Course'
      ? (this.text = this.myText2.nativeElement.innerHTML)
      : (this.text = this.myText1.nativeElement.innerHTML);
  }
}
