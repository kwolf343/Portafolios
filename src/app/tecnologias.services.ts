import { Injectable } from "@angular/core";
import { tecnologia } from "./models/tecnologia.models";
import { DataServices } from "./data.services";
import { Router } from "@angular/router";
import { ServicioAlertasService } from "./servicio-alertas.service";

@Injectable()
export class TecnologiasService{
    tec:tecnologia[]=[];
    constructor(private dataService:DataServices, private router:Router, private ALERTA:ServicioAlertasService){}

    setTecnologias(misTecnologias:tecnologia[]){
        this.tec=misTecnologias;
    }
    actualizarTecnologia(t:tecnologia){
        const tecnologias = this.tec;
        this.tec[t.idLenguaje]=t;
        this.dataService.guardarTecnologia(this.tec).subscribe(resultado=>{
            if(resultado){
                this.ALERTA.mensaje({
                    cantBotones: 1,
                    titulo: 'Exito!',
                    mensaje: 'Tecnologia actualizada correctamente',
                    logo: 'bi-check-circle-fill',
                    colorLogo:'rgb(1,214,54)',
                    colorBoton:'rgb(2,94,144)',
                    colorBoton2:''
                  }).then((result) => {
                    this.router.navigate(['/curriculum/tecnologias']);
                  })
            }else{
                this.tec = tecnologias;
                this.ALERTA.mensaje({
                    cantBotones: 1,
                    titulo: 'Error!',
                    mensaje: 'Ocurrio un error al intentar guardar la tecnologia',
                    logo: 'bi-exclamation-circle-fill',
                    colorLogo:'rgb(167,14,21)',
                    colorBoton:'rgb(2,94,144)',
                    colorBoton2:''
                  });
            }
        });

    }
    obtenerTecnologias(){
        return this.dataService.cargarTecnologias();
    }
}