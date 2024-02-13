import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { pagina } from '../models/pagina.models';
import { PaginasService } from '../paginas.service';

@Component({
  selector: 'app-generador-component',
  templateUrl: './generador-component.component.html',
  styleUrls: ['./generador-component.component.css']
})
export class GeneradorComponentComponent implements OnInit{
  cuadroDescripcion:string;
  selectedLenguajes: number[] = [];
  selectedOption: string = 'web';
  paginas:pagina[];
  constructor(private PaginaService:PaginasService){}

  ngOnInit(): void {
    this.PaginaService.obtenerPaginas().subscribe(misPaginas=>{
        try{
          this.paginas=Object.values(misPaginas);
          this.PaginaService.setPaginas(this.paginas);
        }catch{
          this.paginas = [];
        }
      });
  }
 
  Cargar(form:NgForm){
    const titulo = form.value.titulo;
    const descripcionC = form.value.descripcionC;
    const idLenguaje = form.value.lenguaje;
    const urlWeb = form.value.url1;
    const urlImg1 = form.value.urlImg1;
    const urlImg2 = form.value.urlImg2;
    const urlImg3 = form.value.urlImg3;
    let entorno=1;
    if(this.selectedOption!="web"){
      entorno=2;
    }
    let miPagina = new pagina(idLenguaje, titulo, descripcionC, this.cuadroDescripcion, this.selectedLenguajes, entorno, urlImg1, urlImg2, urlImg3, urlWeb);
    this.PaginaService.agregarPagina(miPagina);
  }
  onCheckboxChange(event: any) {
    const value = event.target.value;
    if (event.target.checked) {
      this.selectedLenguajes.push(value);
    } else {
      const index = this.selectedLenguajes.indexOf(value);
      if (index !== -1) {
        this.selectedLenguajes.splice(index, 1);
      }
    }
  }
}
