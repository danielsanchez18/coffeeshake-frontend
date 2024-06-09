import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { PresentationComponent } from './pages/home/presentation/presentation.component';
import { MenuComponent } from './pages/menu/menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './pages/menu/product/product.component';
import { ProductDetailsComponent } from './pages/menu/product-details/product-details.component';
import { authInterceptorProviders } from './services/auth.interceptor';
import { ProfileComponent } from './pages/profile/profile.component';
import { ShoppingCartComponent } from './pages/profile/shopping-cart/shopping-cart.component';
import { AccountComponent } from './pages/profile/account/account.component';
import { DashboardAdminComponent } from './pages/dashboard-admin/dashboard-admin.component';
import { OrderComponent } from './pages/profile/order/order.component';
import { DashboardHomeComponent } from './pages/dashboard-admin/dashboard-home/dashboard-home.component';
import { AssignRoleComponent } from './pages/dashboard-admin/dashboard-workers/assign-role/assign-role.component';
import { ListWorkersComponent } from './pages/dashboard-admin/dashboard-workers/list-workers/list-workers.component';
import { DeleteWorkerComponent } from './pages/dashboard-admin/dashboard-workers/delete-worker/delete-worker.component';
import { ListOrdersComponent } from './pages/dashboard-admin/dashboard-orders/list-orders/list-orders.component';
import { AlterOrdersComponent } from './pages/dashboard-admin/dashboard-orders/alter-orders/alter-orders.component';
import { SearchOrdersComponent } from './pages/dashboard-admin/dashboard-orders/search-orders/search-orders.component';
import { DashboardRolesComponent } from './pages/dashboard-admin/dashboard-roles/dashboard-roles.component';
import { DashboardCategorysComponent } from './pages/dashboard-admin/dashboard-categorys/dashboard-categorys.component';
import { AddCategoryComponent } from './pages/dashboard-admin/dashboard-categorys/add-category/add-category.component';
import { DeleteCategoryComponent } from './pages/dashboard-admin/dashboard-categorys/delete-category/delete-category.component';
import { DashboardProductsComponent } from './pages/dashboard-admin/dashboard-products/dashboard-products.component';
import { AddProductComponent } from './pages/dashboard-admin/dashboard-products/add-product/add-product.component';
import { EditProductComponent } from './pages/dashboard-admin/dashboard-products/edit-product/edit-product.component';
import { DeleteProductComponent } from './pages/dashboard-admin/dashboard-products/delete-product/delete-product.component';
import { DetailsProductComponent } from './pages/dashboard-admin/dashboard-products/details-product/details-product.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    PresentationComponent,
    MenuComponent,
    ProductComponent,
    ProductDetailsComponent,
    ProfileComponent,
    ShoppingCartComponent,
    AccountComponent,
    DashboardAdminComponent,
    OrderComponent,
    DashboardHomeComponent,
    AssignRoleComponent,
    ListWorkersComponent,
    DeleteWorkerComponent,
    ListOrdersComponent,
    AlterOrdersComponent,
    SearchOrdersComponent,
    DashboardRolesComponent,
    DashboardCategorysComponent,
    AddCategoryComponent,
    DeleteCategoryComponent,
    DashboardProductsComponent,
    AddProductComponent,
    EditProductComponent,
    DeleteProductComponent,
    DetailsProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
