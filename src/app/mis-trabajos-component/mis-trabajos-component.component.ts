import { Component, OnInit } from '@angular/core';
import { PaginasService } from '../paginas.service';
import { pagina } from '../models/pagina.models';

@Component({
  selector: 'app-mis-trabajos-component',
  templateUrl: './mis-trabajos-component.component.html',
  styleUrls: ['./mis-trabajos-component.component.css']
})
export class MisTrabajosComponentComponent implements OnInit{
  paginas:pagina[];
  imagenes:string[]=['assets/csharp.png','assets/java.png','assets/angular.png','assets/android.png','assets/html.png','assets/react.png','assets/nodeJs.png'];

  constructor(private paginasService:PaginasService){}
  ngOnInit(): void {
    this.paginasService.obtenerPaginas().subscribe(misPaginas=>{
        try{
          this.paginas=Object.values(misPaginas);
          this.paginasService.setPaginas(this.paginas);
        }catch{
          this.paginas = [];
        }
      });
  }
}
