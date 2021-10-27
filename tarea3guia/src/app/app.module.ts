import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { DetalleNoticiaComponent } from './componentes/detalle-noticia/detalle-noticia.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { InicioScreenComponent } from './screens/inicio-screen/inicio-screen.component';
import { NoticiasScreenComponent } from './screens/noticias-screen/noticias-screen.component';
import { ServicioclienteScreenComponent } from './screens/serviciocliente-screen/serviciocliente-screen.component';
import { FormularioComponent } from './formulario/formulario/formulario.component';
import { FooterComponent } from './footer/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    DetalleNoticiaComponent,
    NavbarComponent,
    InicioScreenComponent,
    NoticiasScreenComponent,
    ServicioclienteScreenComponent,
    FormularioComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
