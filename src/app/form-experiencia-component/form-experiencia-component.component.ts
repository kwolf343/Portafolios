import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ExperienciaService } from '../experiencia.services';
import { experiencia } from '../models/experiencia.models';

@Component({
  selector: 'app-form-experiencia-component',
  templateUrl: './form-experiencia-component.component.html',
  styleUrls: ['../avance-component/avance-component.component.css']
})
export class FormExperienciaComponentComponent implements OnInit{
  experiencias:experiencia[];
  constructor(private ExperienciaService:ExperienciaService){}
  ngOnInit(): void {
    this.ExperienciaService.obtenerExperiencias().subscribe(misExperiencias=>{
        try{
          this.experiencias=Object.values(misExperiencias);
          this.ExperienciaService.setExperiencias(this.experiencias);
        }catch{
          this.experiencias = [];
        }
      });
  }

  guardar(form:NgForm){
    const empresa = form.value.empresa;
    const tiempo = form.value.tiempo;
    let miExperiencia = new experiencia(empresa,tiempo);
    this.ExperienciaService.agregarExperiencia(miExperiencia);
  }

}
