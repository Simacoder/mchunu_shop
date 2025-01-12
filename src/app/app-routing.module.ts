import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  // Login route
  { path: 'login', component: LoginComponent },

  // AuthGuard-protected routes
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    children: [
      { path: 'products', component: ProductListComponent },
      { path: 'users', component: UserListComponent },
      { path: '', redirectTo: 'products', pathMatch: 'full' }, // Default redirect for protected routes
    ],
  },

  // Default redirect to login
  { path: '', redirectTo: '/login', pathMatch: 'full' },

  // Wildcard route for undefined paths
  { path: '**', redirectTo: '/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
