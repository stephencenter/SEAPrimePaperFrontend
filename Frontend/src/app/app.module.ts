import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { 
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,
  MatTableModule
} from '@angular/material';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { AuthService } from './services/auth.service';
import { ProductsService } from './services/products.service';
import { ProductIndexComponent } from './components/product/product-index/product-index.component';

import { ProductsService } from './services/products.service';
import { ProductIndexComponent } from './components/product/product-index/product-index.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';


const routes =[
  {path: 'register', component: RegistrationComponent },
  {path: 'login', component: LoginComponent},
  {path: 'products', component: ProductIndexComponent },
  { 
    path: 'products', children: [
    { path: '', component: ProductIndexComponent },
    { path: 'create', component: ProductCreateComponent },
    // { path: 'details', component: ProductDetailsComponent }
  ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegistrationComponent,
    LoginComponent,
    ProductIndexComponent,
    ProductCreateComponent
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
  ],
  providers: [
    AuthService,
    ProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
