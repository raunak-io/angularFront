import { HomePageComponent } from './components/mainDisplay/home-page/home-page.component';

import { UserPortalComponent } from './components/userSection/current user/user portal/user-portal.component';
import { UserSettingsComponent } from './components/userSection/current user/user settings/user-settings.component';
import { NotFoundComponent } from './components/mainDisplay/not-found/not-found.component';

import { AdminProductCrudOperationsUpdateOnlyComponent } from './components/admin-section/admin-product-crud-operations-update-only/admin-product-crud-operations-update-only.component';
import { AdminProductCrudOperationsComponent } from './components/admin-section/admin-product-crud-operations/admin-product-crud-operations.component';
import { AdminPanelComponent } from './components/admin-section/admin-panel/admin-panel.component';

import { UserCartPageComponent } from './components/userSection/current user/user-cart-page/user-cart-page.component';
import { UserUpdateMeComponent } from './components/userSection/current user/user-update-me/user-update-me.component';
import { UserChangePasswordComponent } from './components/userSection/current user/user-change-password/user-change-password.component';
import { UserForgotPasswordComponent } from './components/userSection/user-forgot-password/user-forgot-password.component';
import { UserLoginComponent } from './components/userSection/user-login/user-login.component';
import { UserSignupComponent } from './components/userSection/user-signup/user-signup.component';

import { GetAllProductsComponent } from './components/mainDisplay/get-all-products/get-all-products.component';
import { ProductByIdComponent } from './components/mainDisplay/product-by-id/product-by-id.component';
import { TopRatedPrductsComponent } from './components/mainDisplay/top-rated-prducts/top-rated-prducts.component';
import { AboutUsComponent } from './components/mainDisplay/about-us/about-us.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './utils/auth.guard';
import { AdminGuard } from './utils/admin.guard';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'product/:id',
    component: ProductByIdComponent,
  },
  {
    path: 'top-rated-products/:id',
    component: ProductByIdComponent,
  },
  {
    path: 'products',
    component: GetAllProductsComponent,
  },
  {
    path: 'top-rated-products',
    component: TopRatedPrductsComponent,
  },
  {
    path: 'AboutUs',
    component: AboutUsComponent,
  },
  // user
  {
    path: 'user-signup',
    component: UserSignupComponent,
  },
  {
    path: 'user-login',
    component: UserLoginComponent,
  },
  {
    path: 'user-forgot-password',
    component: UserForgotPasswordComponent,
  },
  {
    path: 'user-change-password',
    component: UserChangePasswordComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'user-update-me',
    component: UserUpdateMeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'user-cart-page',
    component: UserCartPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'user-settings',
    component: UserSettingsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'user-portal',
    component: UserPortalComponent,
    canActivate: [AuthGuard],
  },
  // admin
  {
    path: 'admin-panel',
    component: AdminPanelComponent,
    canActivate: [AuthGuard, AdminGuard],
  },
  {
    path: 'admin-product-crud-operations',
    component: AdminProductCrudOperationsComponent,
    canActivate: [AuthGuard, AdminGuard],
  },
  {
    path: 'admin-product-crud-operations-update-only',
    component: AdminProductCrudOperationsUpdateOnlyComponent,
    canActivate: [AuthGuard, AdminGuard],
  },

  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard, AdminGuard], //
})
export class AppRoutingModule {}
