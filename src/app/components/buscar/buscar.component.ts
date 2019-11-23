import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  buscar:string = "";

  constructor(public peliculasService:PeliculasService,
              public router:ActivatedRoute) {
    this.router.params.subscribe(params => {
      if (params['texto']) {
        this.buscar = params['texto'];
        this.buscarPelicula();
      }
    })
  }

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
