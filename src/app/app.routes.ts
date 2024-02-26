import { Routes } from '@angular/router';
import { ClientComponent } from './layouts/client/client.component';
import { LoginComponent } from './pages/client/login/login.component';
import { SignupComponent } from './pages/client/signup/signup.component';
import { AdminComponent } from './layouts/admin/admin.component';
import { ProductsComponent } from './pages/admin/products/products.component';
import { ProductFormComponent } from './pages/admin/product-form/product-form.component';
import { canActivate } from './guards/can-access-admin.guard';

export const routes: Routes = [
  {
    path: '',
    component: ClientComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
    ],
  },
  {
    path: 'admin',
    canActivate: [canActivate],
    component: AdminComponent,
    children: [
      { path: '', redirectTo: 'products', pathMatch: 'full' },
      { path: 'products', component: ProductsComponent },
      { path: 'products/add', component: ProductFormComponent },
      { path: 'products/update/:id', component: ProductFormComponent },
    ],
  },
];
