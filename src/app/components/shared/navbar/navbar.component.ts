import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  imports: [RouterModule]
})
export class NavbarComponent {
  constructor(private router: Router){

  }

  searchHero(heroName: string){
    console.log(heroName);

    this.router.navigate(['search', heroName]);
  }
}
