import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Hero, HeroesService } from '../../services/heroes.service';
import { HeroCardComponent } from '../hero-card/hero-card.component';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [RouterModule, HeroCardComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
  providers: [HeroesService]
})
export class SearchComponent implements OnInit {
  heroes: Hero[] = [];
  pattern: string = '';
  constructor(private activatedRoute: ActivatedRoute, private heroesService: HeroesService) {

  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      let pattern = params['pattern'];
      this.heroes = this.heroesService.searchHeroe(pattern);
      this.pattern = pattern;
    })
  }
}
