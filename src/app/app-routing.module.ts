import { ItemDetailsComponent } from './pages/item-details/item-details.component';
import { WorkersComponent } from './pages/workers/workers.component';
import { ItemsComponent } from './pages/items/items.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'items', component: ItemsComponent },
  { path: 'items/:id', component: ItemDetailsComponent },
  { path: 'workers', component: WorkersComponent },
  { path: '', component: ItemsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
