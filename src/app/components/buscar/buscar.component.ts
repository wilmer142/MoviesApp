import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  buscar:string = "";

  constructor(public peliculasService:PeliculasService) { }

  ngOnInit() {
  }

  buscarPelicula(){
    if (this.buscar.length === 0) {
      return;
    }

    this.peliculasService.buscarPelicula(this.buscar)
      .subscribe()
  }

}
