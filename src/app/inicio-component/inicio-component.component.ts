import { Component, OnInit } from '@angular/core';
import { ServicioAlertasService } from '../servicio-alertas.service';

@Component({
  selector: 'app-inicio-component',
  templateUrl: './inicio-component.component.html',
  styleUrls: ['./inicio-component.component.css']
})
export class InicioComponentComponent implements OnInit{
  interval: any;
  transform=["translateX(+100%)","translateX(0%)","translateX(-100%)"];
  transition=["2s","2s","2s"];
  pos=0;
  valor=0;
  timeLeft: number = 2;
  sliderActivo=true;
  listaIconos=['bi-exclamation','bi-exclamation-circle','bi-exclamation-circle-fill','bi-exclamation-diamond',
  'bi-exclamation-diamond-fill','bi-exclamation-octagon','bi-exclamation-octagon-fill','bi-exclamation-square',
  'bi-info-square-fill','bi-exclamation-triangle','bi-exclamation-triangle-fill','bi-question-lg','bi-question-circle',
  'bi-question-diamond','bi-question-diamond-fill','bi-question-circle-fill','bi-bell','bi-bell-fill','bi-check',
  'bi-check-all','bi-check-circle','bi-check-circle-fill','bi-check-lg','bi-check-square','bi-check-square-fill',];
  cantBtns=1;
  icono='bi-bell-fill';
  titulo="";
  mensaje="";
  colorLogo="#34CFD0";
  colorSi="#7066E0";
  colorNo="#900C3F";
  constructor(private ALERTA:ServicioAlertasService){}
  ngOnInit(): void {
    this.startTimer();
  }
  retroceder(){
    this.timeLeft=1;
    if(this.pos==0){
      this.transition=["2s","2s","0s"];
      this.transform=["translateX(-100%)","translateX(100%)","translateX(0%)"];
      this.transform=["translateX(0%)","translateX(-100%)","translateX(+100%)"];
      this.pos=1;
    }else if(this.pos==1){
      this.transition=["2s","0s","2s"];
      this.transform=["translateX(-100%)","translateX(100%)","translateX(0%)"];
      this.pos=2;
    }else{
      this.transition=["0s","2s","2s"];
      this.transform=["translateX(100%)","translateX(0%)","translateX(-100%)"];
      this.pos=0;
    }
  }
  avanzar(){
    this.timeLeft=1;
    if(this.pos==0){
      this.transition=["0s","2s","2s"];
      this.transform=["translateX(-100%)","translateX(100%)","translateX(0%)"];
      this.pos=2;
    }else if(this.pos==2){
      this.transition=["2s","0s","2s"];
      this.transform=["translateX(0%)","translateX(-100%)","translateX(100%)"];
      this.pos=1;
    }else{
      this.transition=["2s","2s","0s"];
      this.transform=["translateX(100%)","translateX(0%)","translateX(-100%)"];
      this.pos=0;
    }
  }
  Btn(cant:number){
    this.cantBtns=cant;
  }
  setIcono(clase:string){
    this.icono=clase;
  }
  cambioColor(event: any,opc:number) {
    switch(opc){
      case 1:
          this.colorLogo = event.target.value;
        break;
      case 2:
          this.colorSi = event.target.value;
        break;
      case 3:
          this.colorNo = event.target.value;
        break;
    }
  }
  Lanzar(){
      this.ALERTA.mensaje({
        cantBotones: this.cantBtns,
        titulo: this.titulo,
        mensaje: this.mensaje,
        logo: this.icono,
        colorLogo:this.colorLogo,
        colorBoton:this.colorSi,
        colorBoton2:this.colorNo
      });
  }
  cambiar(pos:number){
    if(this.pos==0){
      if(pos==1)this.retroceder();
      else if(pos==2)this.avanzar();
    }
    if(this.pos==1){
      if(pos==0)this.avanzar();
      if(pos==2)this.retroceder();
    }
    if(this.pos==2){
      if(pos==0)this.retroceder();
      if(pos==1)this.avanzar();
    }
  }
  startTimer() {
      this.interval = setInterval(() => {
        this.timeLeft++;
        if(this.timeLeft%6==0){
          this.retroceder();
        }
      },1000)
    }

    pauseTimer() {
      clearInterval(this.interval);
    }
    pausar(){
      this.sliderActivo=!this.sliderActivo;
      if(this.sliderActivo)this.startTimer();
      else this.pauseTimer();
    }
}
