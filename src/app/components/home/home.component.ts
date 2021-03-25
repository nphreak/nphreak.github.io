import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  

  ngOnInit(): void {
    const options = {
      strings: ['Wake up, Neo...  ^2000<br>' +
      'The Matrix has you...^2000<br>' +
      'Follow the white rabbit.'],
      typeSpeed: 2,
      showCursor: true,
      cursorChar: '|'
    }

    const typed = new Typed('#typed-part', options)
  }

}
