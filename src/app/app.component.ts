import { Component, HostListener, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(){}
  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyCJLkIRhCDBM1080T5HxTgkw7MfVlk0oJ8",
      authDomain: "portafolios-40fdb.firebaseapp.com",
    });
  }
  title = 'kevinAMM';
  mostrar=true;
  pad=false;
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    const screenWidth = window.innerWidth;
    if (screenWidth > 550) {
      this.mostrar=true;
      //this.pad=false;
    }
  }
  cerrar(){
    this.mostrar=true;
    //this.pad=false;
  }
  abrir(){
    this.mostrar=false;
    //this.pad=true;
  }
}
