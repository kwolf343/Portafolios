import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { pagina } from '../models/pagina.models';
import { PaginasService } from '../paginas.service';

@Component({
  selector: 'app-trabajo-component',
  templateUrl: './trabajo-component.component.html',
  styleUrls: ['./trabajo-component.component.css']
})
export class TrabajoComponentComponent implements OnInit{
  indice:number;
  paginas:pagina[]=[];
  imagenes:string[]=['assets/csharp.png','assets/java.png','assets/angular.png','assets/android.png','assets/html.png','assets/react.png','assets/nodeJs.png'];
  imgTec:string[]=['assets/html.png','assets/css.png','assets/javascript.png','assets/typescript.png','assets/sql.png','assets/mysql.png','assets/firebase.png','assets/java.png','assets/react.png'];
  mostrarContenido: boolean = false;
  constructor(private route:ActivatedRoute, private router:Router, private paginasService:PaginasService){}
  ngOnInit(): void {
    try {
      const idParam = this.route.snapshot.params['id'];
      if (!isNaN(Number(idParam))) {
        this.indice = Number(idParam);
      } else {
        this.indice=0;
      }
    } catch {
      this.indice=0;
    }
    this.paginasService.obtenerPaginas().subscribe(misPaginas=>{
      try{
        this.paginas=Object.values(misPaginas);
        this.paginasService.setPaginas(this.paginas);
      }catch{
        this.paginas = [];
      }
      if(this.paginas.length<this.indice || this.indice<0){
        this.indice=0;
        this.router.navigate(['/trabajo/0']);
      }
    });
  }
  enlace(){
    window.location.href = this.paginas[this.indice].url;
  }
}
