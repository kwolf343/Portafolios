import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LoginService } from "./login-component/login.service";
import { pagina } from "./models/pagina.models";
import { Observable } from 'rxjs';
import { tecnologia } from "./models/tecnologia.models";
import { experiencia } from "./models/experiencia.models";

@Injectable()
export class DataServices{
    constructor(private HttpClient:HttpClient, private loginService:LoginService){}
    cargarPaginas(){
        return this.HttpClient.get('https://portafolios-40fdb-default-rtdb.firebaseio.com/datosPaginas.json');
    }
    cargarTecnologias(){
        return this.HttpClient.get('https://portafolios-40fdb-default-rtdb.firebaseio.com/datosTecnologias.json');
    }
    cargarExperiencias(){
        return this.HttpClient.get('https://portafolios-40fdb-default-rtdb.firebaseio.com/datosExperiencias.json');
    }
    guardarPagina(pag: pagina[]): Observable<boolean> {
        const token = this.loginService.getIdToken();
        return new Observable<boolean>((observer) => {
            this.HttpClient.put('https://portafolios-40fdb-default-rtdb.firebaseio.com/datosPaginas.json?auth=' + token, pag).subscribe({
                next: (response) => {
                    console.log('Se han guardado las páginas ' + response);
                    observer.next(true);
                    observer.complete();
                },
                error: (error) => {
                    console.log('Error' + error);
                    observer.next(false);
                    observer.complete();
                },
            });
        });
    }
    guardarTecnologia(tencologia: tecnologia[]): Observable<boolean> {
        const token = this.loginService.getIdToken();
        return new Observable<boolean>((observer) => {
            this.HttpClient.put('https://portafolios-40fdb-default-rtdb.firebaseio.com/datosTecnologias.json?auth=' + token, tencologia).subscribe({
                next: (response) => {
                    console.log('Se han guardado las páginas ' + response);
                    observer.next(true);
                    observer.complete();
                },
                error: (error) => {
                    console.log('Error' + error);
                    observer.next(false);
                    observer.complete();
                },
            });
        });
    }
    guardarExperiencia(experiencia: experiencia[]): Observable<boolean> {
        const token = this.loginService.getIdToken();
        return new Observable<boolean>((observer) => {
            this.HttpClient.put('https://portafolios-40fdb-default-rtdb.firebaseio.com/datosExperiencias.json?auth=' + token, experiencia).subscribe({
                next: (response) => {
                    console.log('Se han guardado las experiencias ' + response);
                    observer.next(true);
                    observer.complete();
                },
                error: (error) => {
                    console.log('Error' + error);
                    observer.next(false);
                    observer.complete();
                },
            });
        });
    }
}