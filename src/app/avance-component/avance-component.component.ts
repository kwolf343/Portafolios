import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TecnologiasService } from '../tecnologias.services';
import { tecnologia } from '../models/tecnologia.models';


@Component({
  selector: 'app-avance-component',
  templateUrl: './avance-component.component.html',
  styleUrls: ['./avance-component.component.css']
})
export class AvanceComponentComponent implements OnInit{
  tecnologias:tecnologia[];
  constructor(private TecnologiaService:TecnologiasService){}
  ngOnInit(): void {
    this.TecnologiaService.obtenerTecnologias().subscribe(misTecnologias=>{
        try{
          this.tecnologias=Object.values(misTecnologias);
          this.TecnologiaService.setTecnologias(this.tecnologias);
        }catch{
          this.tecnologias = [];
        }
      });
  }
  actualizar(form:NgForm){
    const idLenguaje = form.value.lenguaje;
    const porcentaje: number = parseFloat(form.value.porcentaje);
    let miTecnologia = new tecnologia(idLenguaje, porcentaje);
    this.tecnologias[idLenguaje]=miTecnologia;
    this.TecnologiaService.actualizarTecnologia(miTecnologia);
  }
}
