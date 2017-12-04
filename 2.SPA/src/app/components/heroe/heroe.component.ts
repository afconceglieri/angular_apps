import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { Heroe} from '../../services/heroes.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
})
export class HeroeComponent {

  heroe: Heroe;

  constructor( private acivateRoute: ActivatedRoute,
               private _heroesService: HeroesService
  ) {
    this.acivateRoute.params.subscribe(params => {
      console.log( params['id'] );
      this.heroe = this._heroesService.getHeroe( params['id'] );
    });
  }

}
