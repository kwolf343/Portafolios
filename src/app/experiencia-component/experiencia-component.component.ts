import { Component, OnInit } from '@angular/core';
import { ExperienciaService } from '../experiencia.services';
import { experiencia } from '../models/experiencia.models';

@Component({
  selector: 'app-experiencia-component',
  templateUrl: './experiencia-component.component.html',
  styleUrls: ['./experiencia-component.component.css']
})
export class ExperienciaComponentComponent implements OnInit{

  experiencias:experiencia[];

  constructor(private ExperienciaService:ExperienciaService){}

  ngOnInit(): void {
    this.ExperienciaService.obtenerExperiencias().subscribe(misExperiencias=>{
        try{
          this.experiencias=Object.values(misExperiencias);
          this.ExperienciaService.setExperiencias(this.experiencias);
          console.log(this.experiencias);
        }catch{
          this.experiencias = [];
        }
      });
  }
  experiencia1: string = "enero 2021 - nov 2022";
  experiencia2: string = "junio 2022 - 2024";
}
