import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Hero, HeroesService } from '../../services/heroes.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  providers: [HeroesService]
})
export class HeroComponent {
  hero: Hero = new Hero();

  constructor(private activatedRoute: ActivatedRoute,
    private heroService: HeroesService) {
    this.activatedRoute.params.subscribe(params => {
      let heroId = params['id'];
      this.hero = heroService.getHeroById(Number(heroId));
    });
  }
}
