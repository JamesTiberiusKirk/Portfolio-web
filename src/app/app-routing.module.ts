import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPageComponent } from './pages/public/login-page/login-page.component';
import { HomePageComponent } from './pages/public/home-page/home-page.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';

import { AuthGuard } from './guards/auth.guard';
import { ProjectsComponent } from './pages/public/projects/projects.component';
import { AccountUpdateComponent } from './pages/admin/account-update/account-update.component';


const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'admin', canActivate:[ AuthGuard ], component: DashboardComponent},
  { path: 'admin/update', canActivate:[ AuthGuard ], component: AccountUpdateComponent},
  { path: 'projects', component: ProjectsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
