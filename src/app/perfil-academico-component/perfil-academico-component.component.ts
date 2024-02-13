import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil-academico-component',
  templateUrl: './perfil-academico-component.component.html',
  styleUrls: ['./perfil-academico-component.component.css']
})
export class PerfilAcademicoComponentComponent {
  cursos= [false, false, false, false];
  perfil=`Tengo gran capacidad de adaptación a nuevas tecnologías, desarrollo en entorno web y escritorio con creatividad para la solución de problemas.`;
  
  cambio(num:number){
    const estado = this.cursos[num];
    this.cursos= [false, false, false, false];
    
    if(!estado){
      this.cursos[num] = true;
    }
    
  }
}
