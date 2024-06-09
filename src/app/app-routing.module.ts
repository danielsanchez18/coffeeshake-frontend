import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { MenuComponent } from './pages/menu/menu.component';
import { ProductComponent } from './pages/menu/product/product.component';
import { ProductDetailsComponent } from './pages/menu/product-details/product-details.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ShoppingCartComponent } from './pages/profile/shopping-cart/shopping-cart.component';
import { OrderComponent } from './pages/profile/order/order.component';
import { AccountComponent } from './pages/profile/account/account.component';
import { DashboardAdminComponent } from './pages/dashboard-admin/dashboard-admin.component';
import { DashboardHomeComponent } from './pages/dashboard-admin/dashboard-home/dashboard-home.component';
import { AdminGuard } from './services/admin.guard';
import { DashboardRolesComponent } from './pages/dashboard-admin/dashboard-roles/dashboard-roles.component';
import { DashboardCategorysComponent } from './pages/dashboard-admin/dashboard-categorys/dashboard-categorys.component';
import { DashboardProductsComponent } from './pages/dashboard-admin/dashboard-products/dashboard-products.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'menu', component: MenuComponent, children:[
    {path: ':nameCategory', component: ProductComponent},
  ]},
  { path: 'product-detail/:idProduct', component: ProductDetailsComponent },
  { path: 'profile', component: ProfileComponent, children: [
    { path: 'shopping-cart', component: ShoppingCartComponent },
    { path: 'orders', component: OrderComponent },
    { path: 'account', component: AccountComponent },
  ]},
  { path: 'dashboard', component: DashboardAdminComponent,children: [
    { path: 'home', component: DashboardHomeComponent },
    { path: 'roles', component: DashboardRolesComponent},
    { path: 'categorys', component: DashboardCategorysComponent},
    { path: 'products', component: DashboardProductsComponent},
  ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
