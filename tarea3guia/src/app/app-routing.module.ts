import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InicioComponent} from './componentes/inicio/inicio.component';
import {DetalleNoticiaComponent} from './componentes/detalle-noticia/detalle-noticia.component';
import { InicioScreenComponent } from './screens/inicio-screen/inicio-screen.component';
import { NoticiasScreenComponent } from './screens/noticias-screen/noticias-screen.component';
import { ServicioclienteScreenComponent } from './screens/serviciocliente-screen/serviciocliente-screen.component';

const routes: Routes = [
  {path:"",component:InicioComponent},
  {path:"detalleNoticia/:id",component:DetalleNoticiaComponent},
  {path:"detalleNoticia",component:DetalleNoticiaComponent},
  {path:'', redirectTo: '/inicio', pathMatch:'full'},
  {path:'inicio', component: InicioComponent},
  {path:'noticias', component: NoticiasScreenComponent},
  {path:'serviciocliente', component:ServicioclienteScreenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
