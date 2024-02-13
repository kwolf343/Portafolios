import { Injectable } from "@angular/core";
import { DataServices } from "./data.services";
import { Router } from "@angular/router";
import { ServicioAlertasService } from "./servicio-alertas.service";
import { experiencia } from "./models/experiencia.models";

@Injectable()
export class ExperienciaService{
    exp:experiencia[]=[];
    constructor(private dataService:DataServices, private router:Router, private ALERTA:ServicioAlertasService){}

    setExperiencias(misExperiencias:experiencia[]){
        this.exp=misExperiencias;
    }
    agregarExperiencia(e:experiencia){
        const experiencias = this.exp;
        this.exp.push(e);
        this.dataService.guardarExperiencia(this.exp).subscribe(resultado=>{
            if(resultado){
                this.ALERTA.mensaje({
                    cantBotones: 1,
                    titulo: 'Exito!',
                    mensaje: 'Experiencia guardada correctamente',
                    logo: 'bi-check-circle-fill',
                    colorLogo:'rgb(1,214,54)',
                    colorBoton:'rgb(2,94,144)',
                    colorBoton2:''
                  }).then((result) => {
                    this.router.navigate(['/trabajos']);
                  })
            }else{
                this.exp = experiencias;
                this.ALERTA.mensaje({
                    cantBotones: 1,
                    titulo: 'Error!',
                    mensaje: 'Ocurrio un error al intentar guardar la experiencia',
                    logo: 'bi-exclamation-circle-fill',
                    colorLogo:'rgb(167,14,21)',
                    colorBoton:'rgb(2,94,144)',
                    colorBoton2:''
                  });
            }
        });
    }
    obtenerExperiencias(){
        return this.dataService.cargarExperiencias();
    }
}