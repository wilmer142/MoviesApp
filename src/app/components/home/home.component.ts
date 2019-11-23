import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cartelera:any;
  populares:any;
  popularesNinos:any;

  constructor(public peliculasService:PeliculasService) { 
    this.peliculasService.getCartelera()
      .subscribe( (data:any) => this.cartelera = data);

    this.peliculasService.getPopulares()
      .subscribe( (data:any) => this.populares = data);

    this.peliculasService.getPopularesNinos()
      .subscribe( (data:any) => this.popularesNinos = data);
  }

  ngOnInit() {
  }

}
