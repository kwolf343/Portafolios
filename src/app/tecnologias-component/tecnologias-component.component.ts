import { Component, OnInit } from '@angular/core';
import { TecnologiasService } from '../tecnologias.services';
import { tecnologia } from '../models/tecnologia.models';

@Component({
  selector: 'app-tecnologias-component',
  templateUrl: './tecnologias-component.component.html',
  styleUrls: ['./tecnologias-component.component.css']
})
export class TecnologiasComponentComponent implements OnInit{

  tecnologias:tecnologia[];
  imagenes:string[]=['assets/html.png','assets/css.png','assets/angular.png','assets/android.png','assets/react.png','assets/nodeJs.png','assets/javascript.png','assets/typescript.png','assets/csharp.png','assets/java.png','assets/sql.png','assets/mysql.png','assets/firebase.png'];
  lista: number[] = [95,75,70,15,65,60,65,60,95,90,15,80];
  opcion=0;
  barra: string = '95%';
  color: string = '#428bca';
  tec: any;

  constructor(private TecnologiaService:TecnologiasService){}
  ngOnInit(): void {
    this.TecnologiaService.obtenerTecnologias().subscribe(misTecnologias=>{
        try{
          this.tecnologias=Object.values(misTecnologias);
          this.TecnologiaService.setTecnologias(this.tecnologias);
          console.log(this.tecnologias);
        }catch{
          this.tecnologias = [];
        }
      });
  }

  cambiar(num:number){
    this.opcion=num;
    this.barra = this.tecnologias[num].porcentaje+"%";
  }
}
