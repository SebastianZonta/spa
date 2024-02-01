import { Component, OnInit } from '@angular/core';
import { Hero, HeroesService } from '../../services/heroes.service';
import { Router, RouterModule } from '@angular/router';
import { HeroCardComponent } from '../hero-card/hero-card.component';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [RouterModule, HeroCardComponent],
  providers: [HeroesService],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss'
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroesService: HeroesService,
    private router: Router) {

  }
  ngOnInit(): void {
    this.heroes = this.heroesService.getHeroes();
  }

  seeHeroe(hero: Hero) {
    this.router.navigate(['/hero', hero.id]);
  }
}
