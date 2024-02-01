import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Hero } from '../../services/heroes.service';

@Component({
  selector: 'app-hero-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './hero-card.component.html',
  styleUrl: './hero-card.component.scss'
})
export class HeroCardComponent {
  @Input() hero: Hero = new Hero();

  @Output() selectedHero: EventEmitter<Hero>;
  constructor(private router: Router){
    this.selectedHero = new EventEmitter();
  }
  seeHeroe() {
    // this.selectedHero.emit(this.hero);
    this.router.navigate(['/hero', this.hero.id]);
  }
}
