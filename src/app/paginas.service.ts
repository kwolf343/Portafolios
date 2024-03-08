import { Injectable } from "@angular/core";
import { pagina } from "./models/pagina.models";
import { DataServices } from "./data.services";
import { Router } from "@angular/router";
import { ServicioAlertasService } from "./servicio-alertas.service";

@Injectable()
export class PaginasService{
    pag:pagina[]=[];
    constructor(private dataService:DataServices, private router:Router, private ALERTA:ServicioAlertasService){}

    setPaginas(misPaginas:pagina[]){
        this.pag=misPaginas;
    }
    
    agregarPagina(p:pagina){
        const paginas = this.pag;
        this.pag.push(p);
        this.dataService.guardarPagina(this.pag).subscribe(resultado=>{
            if(resultado){
                this.ALERTA.mensaje({
                    cantBotones: 1,
                    titulo: 'Exito!',
                    mensaje: 'Pagina guardada correctamente',
                    logo: 'bi-check-circle-fill',
                    colorLogo:'rgb(1,214,54)',
                    colorBoton:'rgb(2,94,144)',
                    colorBoton2:''
                  }).then((result) => {
                    this.router.navigate(['/trabajos']);
                  })
            }else{
                this.pag = paginas;
                this.ALERTA.mensaje({
                    cantBotones: 1,
                    titulo: 'Error!',
                    mensaje: 'Ocurrio un error al intentar guardar la pagina',
                    logo: 'bi-exclamation-circle-fill',
                    colorLogo:'rgb(167,14,21)',
                    colorBoton:'rgb(2,94,144)',
                    colorBoton2:''
                  });
            }
        });
    }
    obtenerPaginas(){
        return this.dataService.cargarPaginas();
    }
}