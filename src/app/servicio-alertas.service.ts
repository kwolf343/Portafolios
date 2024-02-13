import { Injectable} from '@angular/core';
/*
  SERVICIO DE ALERTAS PERSONALIZADAS
  AUTOR: KEVIN ANTONIO MAGAÑA MONROY
  FECHA DE CREACIÓN: 1 NOVIEMBRE 2023
  LISTA ICONOS: https://icons.getbootstrap.com/
  ESTILOS CSS: <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css">
  Instrucciones:
  1 - Agregar ESTILOS CSS en la cabecera del proyecto
  2 - Click en el icono deseado
  3 - Copiar el "Icon font" similar a esto -> <i class="bi bi-check-lg"></i>
  4 - Copiar el nombre de la clase de la derecha -> "bi-check-lg"
  5 - Al llamar la alerta, en el parametro "logo" colocar el icono deseado -> logo:'bi-check-lg'
  6 - El parametro cantBotones es 1 para alerta "OK" 2 es para alerta "SI/NO", devolverá true o false

  Ejemplo de uso:
  mensaje({
        cantBotones: 2,
        titulo: 'Título de la alerta',
        mensaje: 'Mensaje de la alerta',
        logo: 'bi-exclamation-circle-fill',
        animacion: 'animacion',
        colorLogo:'rgb(250,206,168)',
        colorBoton:'rgb(112,102,224)',
        colorBoton2:'red'
      }).then((result) => {
        if (result) {
          // El usuario hizo clic en SI
          alert('SI');
        } else {
          // El usuario hizo clic en NO o OK
          alert('NO');
        }
      });
*/
@Injectable({
  providedIn: 'root'
})

export class ServicioAlertasService {
  constructor() { }
  private agregarEstilos(estilos: { colorLogo: string, colorBoton: string, colorBoton2: string}){
    const { colorLogo, colorBoton,colorBoton2} = estilos;
    /////////////////////////////////////////////////////////////
    //Creando las clases y estilos css
    var styleSheet = document.createElement("style");
    document.head.appendChild(styleSheet);
    if(styleSheet.sheet!=null){
      styleSheet.sheet.insertRule(`
      .Alert_Service_window1 {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0; 
        left: 0;
        display:flex;
        align-items:center;
        justify-content:center;
        padding-bottom:5%;
      }
      `, 0);
      styleSheet.sheet.insertRule(`
      .Alert_Service_window1_dentro{
        background:white;
        width: 30%;
        box-shadow: 0 0 0 100vmax rgba(0,0,0, .3);
        display:flex;
        align-items:center;
        flex-direction:column;
        justify-content: space-around;
        padding: 2.5% 5%;
        border-radius: 5px;
        transition: .4s;
      }
      `, 0);
      styleSheet.sheet.insertRule(`
      @media screen and (max-width: 550px) {
        .Alert_Service_window1_dentro {
          width: 75%;
        }
      }
      `, 2);
      styleSheet.sheet.insertRule(`
      @media screen and (max-width: 800px) {
        .Alert_Service_window1_dentro {
          width: 50%;
        }
      }
      `, 2);
      styleSheet.sheet.insertRule(`
      @media screen and (max-width: 550px) {
        .Alert_Service_window1_dentro {
          width: 100%;
        }
      }
      `, 2);
      styleSheet.sheet.insertRule(`
      .Alert_Service_window1_dentro>i{
        font-size:450%;
        margin-bottom: 15px%;
        color:${colorLogo};
        transition: 1s;
      }
      `, 0);
      styleSheet.sheet.insertRule(`
      .Alert_Service_window1_dentro>h2{
        color:black;
        margin: 15px 0;
      }
      `, 0);
      styleSheet.sheet.insertRule(`
      .Alert_Service_window1_dentro>p{
        color:gray;
        text-align:center;
      }
      `, 0);
      styleSheet.sheet.insertRule(`
      .Alert_Service_window1_dentro_btn1{
        background:${colorBoton};
      }
      `, 0);
      styleSheet.sheet.insertRule(`
      .Alert_Service_window1_dentro_btn2{
        background:${colorBoton2};
      }
      `, 0);
      styleSheet.sheet.insertRule(`
      .Alert_Service_window1_dentro>div>button{
        border:2px solid;
        border-radius: 5px;
        color: white;
        font-size: 1rem;
        padding: 0.5rem 1.5rem;
        cursor: pointer;
        transition: .3s;
        margin-top:20px;
      }
      `, 0);
      styleSheet.sheet.insertRule(`
      .Alert_Service_window1_dentro>button:active{
        transform: scale(0.9);
      }
      `, 0);
      styleSheet.sheet.insertRule(`
      .Alert_Service_window1_efecto{
        transform: scale(1.1);
      }
      `, 0);
      styleSheet.sheet.insertRule(`
      .Alert_Service_window1_efecto>i{
        scale: 1.15;
      }
      `, 0);
      styleSheet.sheet.insertRule(`
      .Alert_Service_window2_btn1{
        background:${colorBoton};
      }
      `, 0);
      styleSheet.sheet.insertRule(`
      .Alert_Service_window2_btn2{
        background:${colorBoton2};
      }
      `, 0);
    }
  }
  mensaje(parametros: { cantBotones: number, titulo: string, mensaje: string, logo: string, colorLogo: string, colorBoton: string, colorBoton2: string }) {
    return new Promise((resolve) => {
      const { cantBotones, titulo, mensaje, logo, colorLogo, colorBoton, colorBoton2 } = parametros;
      this.agregarEstilos({ colorLogo: colorLogo, colorBoton: colorBoton, colorBoton2: colorBoton2 });
      /////////////////////////////////////////////////////////////
      //Creando elementos
      const contenedor = document.querySelector("body");
      const contenedorPrincipal = document.createElement("DIV");
      const contenedorCentral = document.createElement("DIV");
      const contenedorBotones = document.createElement("DIV");
      const Logo = document.createElement("I");
      const Titulo = document.createElement("H2");
      const Mensaje = document.createElement("P");
      const Boton = document.createElement("BUTTON");
      const BotonSI = document.createElement("BUTTON");
      const BotonNO = document.createElement("BUTTON");  
      /////////////////////////////////////////////////////////////
      //Agregando clases en elementos
      contenedorPrincipal.classList.add("Alert_Service_window1");
      contenedorCentral.classList.add("Alert_Service_window1_dentro");
      Boton.classList.add("Alert_Service_window1_dentro_btn1");
      BotonSI.classList.add("Alert_Service_window1_dentro_btn1");
      BotonNO.classList.add("Alert_Service_window1_dentro_btn2");
      /////////////////////////////////////////////////////////////
      //Preparando elementos
      //contenedorCentral.innerHTML="este es un nuevo item de lista";
      Logo.classList.add("bi");
      Logo.classList.add(logo);
      Titulo.innerHTML=titulo;
      Mensaje.innerHTML=mensaje;
      Boton.innerHTML="OK";
      BotonSI.innerHTML="SI";
      BotonNO.innerHTML="NO";
      /////////////////////////////////////////////////////////////
      //Insertando elementos
      contenedorCentral.appendChild(Logo);
      contenedorCentral.appendChild(Titulo);
      contenedorCentral.appendChild(Mensaje);
      contenedorCentral.appendChild(contenedorBotones);
      if(cantBotones==1)contenedorBotones.appendChild(Boton);
      else{
        contenedorBotones.appendChild(BotonSI);
        contenedorBotones.appendChild(BotonNO);
      }
      contenedorPrincipal.appendChild(contenedorCentral);
      if(contenedor!=null){
        contenedor.appendChild(contenedorPrincipal);
      }
      setTimeout(function() {
        contenedorCentral.classList.add("Alert_Service_window1_efecto");
      }, 100);
      // Eventos: si es botón SI/NO, resuelve con true o false; si es botón OK, resuelve con true
      Boton.addEventListener('click', () => {
        if (contenedorPrincipal.parentElement) contenedorPrincipal.parentElement.removeChild(contenedorPrincipal);
        resolve(true); // Resuelve con true cuando se hace clic en OK
      });
      BotonSI.addEventListener('click', () => {
        if (contenedorPrincipal.parentElement) contenedorPrincipal.parentElement.removeChild(contenedorPrincipal);
        resolve(true); // Resuelve con true cuando se hace clic en SI
      });
      BotonNO.addEventListener('click', () => {
        if (contenedorPrincipal.parentElement) {
          contenedorPrincipal.parentElement.removeChild(contenedorPrincipal);
          resolve(false); // Resuelve con false cuando se hace clic en NO
        }
      });
    });
  }
}
