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

@NgModule({
  declarations: [
    AppComponent,
    ErrorsComponent,
    SearchPipe,
    MainComponent,
    ItemsComponent,
    WorkersComponent,
    RegisterComponent,
    AuthComponent
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
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
