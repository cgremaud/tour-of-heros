
//need to import the input module here in order to take the selectedHero as input from the heroes component. 
import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  //the @Input calls the Input module to get the value for hero. ? makes it optional. It's of type Hero
  @Input() hero?: Hero;

  //ActivatedRoute holds the info about what route created this instance of HeroDetail (instance is created every time URL is called?). HeroService gets data from server (mock-heroes atm) and this component will use it to fetch the hero by id from the ActivatedRoute. location interacts with browser. Will use it for navigating back to where you came from. 
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getHero()
  }

  getHero(): void {
    //route.snapshot is a instance of the url that led here, after the component is created so "/detail/id". paramMap is all of the  extracted from the url (indicated by : in the path in routes[]), .get('id') gets the param id. + converts it to a num because route params are always strings.  hero type id property is always a num. 
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

}
