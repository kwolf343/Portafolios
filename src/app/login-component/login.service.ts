import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { CookieService } from "ngx-cookie-service";
import { ServicioAlertasService } from '../servicio-alertas.service';

@Injectable()
export class LoginService{
    constructor(private ALERTA:ServicioAlertasService, private router:Router, private cookies:CookieService){}
    token:string;
    email:string;
    codigoError:string="";
    login(email:string, password:string){
        firebase.auth().signInWithEmailAndPassword(email,password).then(
            response=>{
                firebase.auth().currentUser?.getIdToken().then(
                    token=>{
                        this.token=token;
                        this.cookies.set("token",token);
                        this.cookies.set("mail",email);
                        this.router.navigate(['/generador']);
                    }
                )
            }
        ).catch(
            error=>{
                if(error.code == "auth/wrong-password"||error.code=="auth/user-not-found"){
                    this.codigoError="Correo o contraseña incorrecta";
                }else if(error.code == "auth/invalid-email"){
                    this.codigoError="Email inválido";
                }
                else{
                    this.codigoError=error.code;
                }

                this.ALERTA.mensaje({
                    cantBotones: 1,
                    titulo: "Error",
                    mensaje: this.codigoError,
                    logo: "bi-exclamation-circle-fill",
                    colorLogo:"red",
                    colorBoton:"blue",
                    colorBoton2:""
                });
            }
        );
    }
    registrar(email:string, password:string){
        firebase.auth().createUserWithEmailAndPassword(email,password).then(
            response=>{
                firebase.auth().currentUser?.getIdToken().then(
                    token=>{
                        this.token=token;
                        this.cookies.set("token",token);
                        this.cookies.set("mail",email);
                        this.router.navigate(['/']);   
                    }
                )
            }
        ).catch(
            error=>{
                if(error.code == "auth/email-already-in-use"){
                    this.codigoError="Este email ya a sido registrado anteriormente";
                }else if(error.code == "auth/invalid-email"){
                    this.codigoError="Email inválido";
                }else if(error.code=="auth/weak-password"){
                    this.codigoError="La cadena debe tener mas de 5 carácteres";
                }
                else{
                    this.codigoError=error.code;
                }
                this.ALERTA.mensaje({
                    cantBotones: 1,
                    titulo: "Error",
                    mensaje: this.codigoError,
                    logo: "bi-exclamation-circle-fill",
                    colorLogo:"red",
                    colorBoton:"red",
                    colorBoton2:""
                });
            }
        );
    }

    getEmail(){
        return this.cookies.get("mail");
    }

    getIdToken(){
        return this.cookies.get("token");
    }

    estaLogueado(){
        return this.cookies.get("token");
    }
    getCodigoError(){
        return this.codigoError;
    }

    logout(){
        firebase.auth().signOut().then(()=>{
            this.token='';
            this.email='';
            this.cookies.set("token",this.token);
            this.cookies.set("mail",this.email);
            this.router.navigate(['/']);
            window.location.reload();
        });
    }
}
