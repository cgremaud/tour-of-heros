import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  //this line says "we have an optional selectedHero property that's type Hero"
  selectedHero?: Hero;

  heroes: Hero[] = [];
  //this line instantiates a private instance of heroservice when it initializes a HeroesComponent.  
  constructor(private heroService: HeroService) { }

  ngOnInit() { 
    //this calls the getHeroes method when the HeroesComponent is init'd
    this.getHeroes()
  }

  onSelect(hero: Hero): void {
    //this function is called when you click on the li element and takes the hero of the li element and sets it equal to selectedHero
    this.selectedHero = hero;
  }

  getHeroes(): void {
    //.subscribe seems to work a lot like .then() but it's happening in here instead of in the same scope as the fetch/http request
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
    
  }

}
