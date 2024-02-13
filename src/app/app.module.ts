import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Añade esta importación
import { CookieService } from 'ngx-cookie-service';


import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { InicioComponentComponent } from './inicio-component/inicio-component.component';
import { CurriculumComponentComponent } from './curriculum-component/curriculum-component.component';

import { MisTrabajosComponentComponent } from './mis-trabajos-component/mis-trabajos-component.component';
import { ErrorPersonalizadoComponentComponent } from './error-personalizado-component/error-personalizado-component.component';
import { PerfilAcademicoComponentComponent } from './perfil-academico-component/perfil-academico-component.component';
import { HabilidadesComponentComponent } from './habilidades-component/habilidades-component.component';
import { TecnologiasComponentComponent } from './tecnologias-component/tecnologias-component.component';
import { RecursosComponentComponent } from './recursos-component/recursos-component.component';
import { ExperienciaComponentComponent } from './experiencia-component/experiencia-component.component';
import { ServicioAlertasService } from './servicio-alertas.service';
import { LoginComponentComponent } from './login-component/login-component.component';
import { HttpClientModule} from '@angular/common/http';
import { DataServices } from './data.services';
import { LoginGuardian } from './login-component/login-guardian';
import { LoginService } from './login-component/login.service';
import { GeneradorComponentComponent } from './generador-component/generador-component.component';
import { AvanceComponentComponent } from './avance-component/avance-component.component';
import { PaginasService } from './paginas.service';
import { TrabajoComponentComponent } from './trabajo-component/trabajo-component.component';
import { TecnologiasService } from './tecnologias.services';
import { FormExperienciaComponentComponent } from './form-experiencia-component/form-experiencia-component.component';
import { ExperienciaService } from './experiencia.services';

const appRoutes:Routes=[
  {path:'', component:InicioComponentComponent},
  {path:'curriculum', component:CurriculumComponentComponent,
    children:[
      {path:'',component:PerfilAcademicoComponentComponent},
      {path:'habilidades',component:HabilidadesComponentComponent},
      {path:'experiencia',component:ExperienciaComponentComponent},
      {path:'tecnologias',component:TecnologiasComponentComponent},
      {path:'recursos',component:RecursosComponentComponent}
    ]
  },
  {path:'trabajos', component:MisTrabajosComponentComponent},
  {path:'trabajo/:id', component:TrabajoComponentComponent},
  {path:'avance', component:AvanceComponentComponent,canActivate:[LoginGuardian]},
  {path:'login', component:LoginComponentComponent},
  {path:'generador', component:GeneradorComponentComponent,canActivate:[LoginGuardian]},
  {path:'experiencia', component:FormExperienciaComponentComponent,canActivate:[LoginGuardian]},
  {path:'**', component:ErrorPersonalizadoComponentComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    InicioComponentComponent,
    CurriculumComponentComponent,
    PerfilAcademicoComponentComponent,
    HabilidadesComponentComponent,
    ExperienciaComponentComponent,
    TecnologiasComponentComponent,
    RecursosComponentComponent,
    MisTrabajosComponentComponent,
    ErrorPersonalizadoComponentComponent,
    LoginComponentComponent,
    GeneradorComponentComponent,
    AvanceComponentComponent,
    TrabajoComponentComponent,
    FormExperienciaComponentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [ServicioAlertasService,DataServices,CookieService,LoginGuardian,LoginService,PaginasService,TecnologiasService,ExperienciaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
