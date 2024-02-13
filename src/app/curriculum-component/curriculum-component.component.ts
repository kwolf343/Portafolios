import { Component, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-curriculum-component',
  templateUrl: './curriculum-component.component.html',
  styleUrls: ['./curriculum-component.component.css']
})

export class CurriculumComponentComponent implements OnInit{
  constructor(private router:Router, private renderer: Renderer2, private el: ElementRef){}
  ngOnInit(): void {
    const footer = this.el.nativeElement.querySelector('.footer');
    if (footer) {
      this.renderer.setStyle(footer, 'display', 'none');
    }
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    const screenWidth = window.innerWidth;
    if (screenWidth > 800) {
      this.bajo = false;
    }
  }
  bajo=false;
  nombre="Kevin Antonio Magaña Monroy";
  carrera="Programador";
  correo="kammonroy@gmail.com";
  numero="+503 79440351";
  aparecer = "none";
  mostrar(){
    if(this.aparecer == "none"){
      this.aparecer = "block"
    }else{
      this.aparecer = "none"
    }
  }
  bajar(){
    this.bajo=!this.bajo;
  }
  redireccionar(url:string){
    this.router.navigate([url]);
    this.bajo = false;
  }
}
