import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components pages
import { HomeComponent } from './shared/pages/home/home.component';
import { AccountComponent } from './shared/pages/account/account.component';

// Guards
import { CanActivaGuard } from './shared/guards/can-activa.guard';
import { CanDeactiveGuard } from './shared/guards/can-deactive.guard';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  {
    path: 'account',
    component: AccountComponent,
    canActivate: [CanActivaGuard],
    canDeactivate: [CanDeactiveGuard],
  },
  {
    path: 'core',
    loadChildren: () => import('./core/core.module').then((m) => m.CoreModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
