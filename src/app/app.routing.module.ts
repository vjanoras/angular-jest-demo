import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomersRoutingModule } from './customers/customers.routing.module';
import { HelloComponent } from "./exercise2/hello.component";
const routes: Routes = [
  {
    path: '',
    redirectTo: '/customers',
    pathMatch: 'full'
  },
  {
    path: 'customers',
    loadChildren: 'app/customers/customers.routing.module#CustomersRoutingModule'
  },
  
  { path: 'hello', component: HelloComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
