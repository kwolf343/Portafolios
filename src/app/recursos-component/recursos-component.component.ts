import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recursos-component',
  templateUrl: './recursos-component.component.html',
  styleUrls: ['./recursos-component.component.css']
})
export class RecursosComponentComponent {
  constructor(private router: Router) {}
  goToSection(sectionId: string) {
    this.router.navigate(['/plantillas'], { fragment: sectionId });
  }
}
