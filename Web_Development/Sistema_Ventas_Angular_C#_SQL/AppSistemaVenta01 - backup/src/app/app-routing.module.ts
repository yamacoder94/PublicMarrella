import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { DashBoardComponent } from './Components/layout/Pages/dash-board/dash-board.component';


//Aca le decimos con que pagina iniciar ?
const routes: Routes = [
  {path:'',component:LoginComponent,pathMatch:"full"},
  {path:'login',component:LoginComponent,pathMatch:"full"},
  
  {path:'pages',loadChildren:() => import("./Components/layout/layout.module").then(m => m.LayoutModule)},//esto trae todas las paginas
  {path:'**',redirectTo:'login',pathMatch:"full"} // en caso que la url no exista , lo redirige a login

  //Se llama a layout.Module por que este trae consigo las librerias de layoutrouting

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
