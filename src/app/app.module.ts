import { SearchPipe } from './shared/pipes/search.pipe';
import { ErrorsComponent } from './shared/components/errors/errors.component';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './core/components/main/main.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ItemsComponent } from './pages/components/items/items.component';
import { WorkersComponent } from './pages/components/workers/workers.component';
import { RegisterComponent } from './pages/components/register/register.component';
import { AuthComponent } from './pages/components/auth/auth.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { GridComponent } from './shared/components/grid/grid.component';
import { SearchComponent } from './shared/components/search/search.component';
import { MaterialModule } from './material.module';
import { ItemComponent } from './pages/components/item/item.component';
import { FormsModule } from '@angular/forms';
import { AuthInterceptor } from './shared/utils/auth.interceptor';
import { AddItemComponent } from './pages/components/add-item/add-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorsComponent,
    SearchPipe,
    MainComponent,
    ItemsComponent,
    WorkersComponent,
    RegisterComponent,
    AuthComponent,
    GridComponent,
    SearchComponent,
    ItemComponent,
    AddItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    MaterialModule,
    FormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
