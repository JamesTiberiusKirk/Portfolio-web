import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './pages/public/login-page/login-page.component';


const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  {path: 'login' , component: LoginPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
