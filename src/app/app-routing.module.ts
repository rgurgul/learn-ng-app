import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './pages/components/auth/auth.component';
import { ItemComponent } from './pages/components/item/item.component';
import { ItemsComponent } from './pages/components/items/items.component';
import { RegisterComponent } from './pages/components/register/register.component';
import { WorkersComponent } from './pages/components/workers/workers.component';
import { ItemResolver } from './pages/services/item.resolver';

const routes: Routes = [
  {
    path: 'items', component: ItemsComponent, children: [
      { path: ':id', resolve: { item: ItemResolver }, component: ItemComponent }
    ]
  },
  { path: 'workers', component: WorkersComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'auth', component: AuthComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
