import { AuthInterceptor } from './shared/utils/auth.interceptor';
import { SearchPipe } from './shared/pipes/search.pipe';
import { ErrorsComponent } from './shared/components/errors/errors.component';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemsComponent } from './pages/items/items.component';
import { WorkersComponent } from './pages/workers/workers.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { GridComponent } from './components/grid/grid.component';
import { SearchComponent } from './components/search/search.component';
import { ItemDetailsComponent } from './pages/item-details/item-details.component';
import { AuthComponent } from './components/auth/auth.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddItemComponent } from './components/add-item/add-item.component';
import { RegisterComponent } from './pages/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorsComponent,
    SearchPipe,
    ItemsComponent,
    WorkersComponent,
    GridComponent,
    SearchComponent,
    ItemDetailsComponent,
    AuthComponent,
    AddItemComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
