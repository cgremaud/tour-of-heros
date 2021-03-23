
//need to import the input module here in order to take the selectedHero as input from the heroes component. 
import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  //the @Input calls the Input module to get the value for hero. ? makes it optional. It's of type Hero
  @Input() hero?: Hero;

  constructor() { }

  ngOnInit() {
  }

}
