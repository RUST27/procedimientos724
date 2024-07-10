import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { DocumentosComponent } from './documentos/documentos.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'documentos', component: DocumentosComponent },
  // Puedes agregar más rutas aquí para otros componentes
  // { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
