import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { JwtHelperService, JwtModule} from '@auth0/angular-jwt'

import { 
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,
  MatTableModule,
  MatIconModule
} from '@angular/material';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { AuthService } from './services/auth.service';
import { ProductsService } from './services/products.service';
import { ProductIndexComponent } from './components/product/product-index/product-index.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ProductDetailComponent } from './components/product/product-detail/product-detail.component';
import { ProductEditComponent } from './components/product/product-edit/product-edit.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
import { ContactProfileService } from './services/contactprofile.service';
import { ContactProfileIndexComponent } from './components/contactprofile/contactprofile-index/contactprofile-index.component';
import { CreateContactComponent } from './components/contactprofile/create-contact/create-contact.component';
import { CartService } from './services/cart.service';
import { CartIndexComponent } from './components/cart/cart-index/cart-index.component';
import { AboutService } from './services/about.service';
import { AboutIndexComponent } from './components/about/about-index/about-index.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HomeComponent } from './components/home/home.component';


const routes =[
  {path: 'register', component: RegistrationComponent },
  {path: 'login', component: LoginComponent},
  {path: '', component: HomeComponent},
  {path: 'contactInfo', component: CreateContactComponent },
  {path: 'about', component: AboutIndexComponent },
  {path: 'contactUs', component: ContactUsComponent },
  {path: 'products', component: ProductIndexComponent },//why i have 2 of this in my routes
  {path: 'contact', component: ContactProfileIndexComponent},
  {path: 'cart', component: CartIndexComponent },
  {path: 'products', children: 
    [
      { path: '', component: ProductIndexComponent },//like here?
      { path: 'create', component: ProductCreateComponent },
      { path: 'details/:id', component: ProductDetailComponent },
      { path: 'edit/:id', component: ProductEditComponent},
      { path: 'delete/:id', component: ProductDeleteComponent}
    ]
  },
];

export function tokenGetter() {
  return localStorage.getItem('id_token');
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegistrationComponent,
    LoginComponent,
    ProductIndexComponent,
    ProductCreateComponent,
    ProductDetailComponent,
    ProductEditComponent,
    ProductDeleteComponent,
    ContactProfileIndexComponent,
    CreateContactComponent,
    CartIndexComponent,
    AboutIndexComponent,
    FooterComponent,
    ContactUsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter
      }
    })
  ],
  providers: [
    AuthService,
    ProductsService,
    ContactProfileService,
    CartService,
    AboutService,
    JwtHelperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
