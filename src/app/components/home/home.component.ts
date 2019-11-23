import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cartelera:any;

  constructor(public peliculasService:PeliculasService) { 
    this.peliculasService.getCartelera()
      .subscribe( (data:any) => {
        this.cartelera = data;
        console.log(this.cartelera);
      })
  }

  ngOnInit() {
  }

}
