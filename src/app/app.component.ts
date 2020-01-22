import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular';
  ngOnInit() {
    AOS.init({
    duration: 400,
    once: true
    });
  }
}
