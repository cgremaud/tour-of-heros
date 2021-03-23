import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'
import { HEROES } from '../mock-heroes'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  //this line says "we have an optional selectedHero property that's type Hero"
  selectedHero?: Hero;

  heroes = HEROES;

  constructor() { }

  ngOnInit() {
  }

  onSelect(hero: Hero): void {
    //this function is called when you click on the li element and takes the hero of the li element and sets it equal to selectedHero
    this.selectedHero = hero;
  }
}
