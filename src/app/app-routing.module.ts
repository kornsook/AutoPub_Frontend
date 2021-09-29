import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { MainComponent } from './main/main.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminPublicationComponent } from './admin-publication/admin-publication.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminUserComponent } from './admin-user/admin-user.component';
import { AdminBlacklistComponent } from './admin-blacklist/admin-blacklist.component';

const routes: Routes = [
        { path: 'admin/blacklist', component: AdminBlacklistComponent },
        { path: 'admin/user', component: AdminUserComponent },
        { path: 'admin/dashboard', component: AdminDashboardComponent },
        { path: 'admin/publication', component: AdminPublicationComponent },
        { path: 'admin/login', component: AdminLoginComponent },
        { path: 'admin', component: AdminComponent },
        { path: '', component: MainComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
