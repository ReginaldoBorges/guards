import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components pages
import { HomeComponent } from './shared/home/home.component';
import { AccountComponent } from './shared/account/account.component';

// Guards
import { CanActivaGuard } from './shared/guards/can-activa.guard';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  {
    path: 'account',
    component: AccountComponent,
    canActivate: [CanActivaGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
