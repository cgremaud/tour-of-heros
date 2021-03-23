import { NgModule } from '@angular/core';
//this imports the routermodule and routes to give routing functionality to the app. CommonModule was no longer necessary so was deleted. 
import { RouterModule, Routes } from '@angular/router';
//we import HeroesComponent so the routing has somewhere to go
import { HeroesComponent } from './heroes/heroes.component';
//this configures routes. Routes tell the router which VIEW to display when user clicks or goes to URL. 
//routes is an array of objects that each have a path and a component. The path is a string in the URL, the component is what gets 
//navigated to when that url is entered/clicked. So localhost:4200/heroes shows the heroescomponent?
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  //so the /:id tells it to 
  { path: 'detail/:id', component: HeroDetailComponent }
];

@NgModule({
  //the @ decorator functions add metadata. This also initializes the router and starts it listening for url changes. So the RouterModule.forRoot(routes) adds the RouterModule to this module and configures it by passing in the routes array. It's forRoot because the router needs to work at the root level of the app. 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }