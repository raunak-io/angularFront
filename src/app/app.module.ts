import { ErrorComponent } from './components/error/error.component';
import { NavbarComponent } from './components/mainDisplay/navbar/navbar.component';
import { AboutUsComponent } from './components/mainDisplay/about-us/about-us.component';
import { NotFoundComponent } from './components/mainDisplay/not-found/not-found.component';

import { UsersService } from './services/users.service';
import { ProductsService } from './services/products.service';
import { RatingsService } from './services/ratings.service';
import { AuthService } from './services/auth.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/mainDisplay/home-page/home-page.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';

import { TopRatedPrductsComponent } from './components/mainDisplay/top-rated-prducts/top-rated-prducts.component';
import { GetAllProductsComponent } from './components/mainDisplay/get-all-products/get-all-products.component';
import { RatingsComponent } from './components/mainDisplay/ratings/ratings.component';
import { ProductByIdComponent } from './components/mainDisplay/product-by-id/product-by-id.component';
import { FooterComponent } from './components/mainDisplay/footer/footer.component';

import { AdminPanelComponent } from './components/admin-section/admin-panel/admin-panel.component';
import { AdminProductCrudOperationsComponent } from './components/admin-section/admin-product-crud-operations/admin-product-crud-operations.component';
import { AdminProductCrudOperationsUpdateOnlyComponent } from './components/admin-section/admin-product-crud-operations-update-only/admin-product-crud-operations-update-only.component';

import { UserSignupComponent } from './components/userSection/user-signup/user-signup.component';
import { UserLoginComponent } from './components/userSection/user-login/user-login.component';
import { UserPortalComponent } from './components/userSection/current user/user portal/user-portal.component';
import { UserForgotPasswordComponent } from './components/userSection/user-forgot-password/user-forgot-password.component';
import { UserChangePasswordComponent } from './components/userSection/current user/user-change-password/user-change-password.component';
import { UserUpdateMeComponent } from './components/userSection/current user/user-update-me/user-update-me.component';
import { UserCartPageComponent } from './components/userSection/current user/user-cart-page/user-cart-page.component';
import { UserSettingsComponent } from './components/userSection/current user/user settings/user-settings.component';

import {
  ErrorStateMatcher,
  ShowOnDirtyErrorStateMatcher,
} from '@angular/material/core';
import { AuthInterceptor } from './utils/auth-interceptor';
import { ErrorInterceptor } from './utils/error-interceptor';
import { ImageSliderComponent } from './components/mainDisplay/image slider/image-slider.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    TopRatedPrductsComponent,
    GetAllProductsComponent,
    RatingsComponent,
    AdminPanelComponent,
    AdminProductCrudOperationsComponent,
    UserSignupComponent,
    UserLoginComponent,
    UserForgotPasswordComponent,
    UserChangePasswordComponent,
    UserUpdateMeComponent,
    UserCartPageComponent,
    FooterComponent,
    AdminProductCrudOperationsUpdateOnlyComponent,
    ProductByIdComponent,
    NotFoundComponent,
    AboutUsComponent,
    NavbarComponent,
    UserPortalComponent,
    UserSettingsComponent,
    ErrorComponent,
    ImageSliderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatIconModule,
    MatPaginatorModule,
    MatExpansionModule,
    MatButtonModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatDialogModule,
  ],

  providers: [
    ProductsService,
    UsersService,
    RatingsService,
    AuthService,
    { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
  entryComponents: [ErrorComponent],
})
export class AppModule {}
