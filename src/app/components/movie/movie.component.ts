import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  pelicula:any;
  regresarA:string;

  constructor(private router:ActivatedRoute, 
              private peliculaService:PeliculasService) {
    this.router.params.subscribe( params => {
      this.regresarA = params['page'];
      this.peliculaService.getPelicula(params['id'])
        .subscribe( pelicula => this.pelicula = pelicula)
    });
  }

  ngOnInit() {
  }

}
