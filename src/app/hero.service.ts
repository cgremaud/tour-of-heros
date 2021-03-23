import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
//@Injectable marks this as participating in the dependency injection system
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Observable<Hero[]> {
    //observables are like promises? I think? of(HEROES) returns an Observable array of heroes (Observable<Hero[]>), that EMITS a single value, the array of HEROES
    const heroes = of(HEROES);
    return heroes;
  }
}
