import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiListComponent } from './api/api-list/api-list.component';
import { ContactFormComponent } from './contact/contact-form/contact-form.component';

const routes: Routes = [
  {path: '', redirectTo: 'api', pathMatch: 'full'},
  {path: 'apis', component: ApiListComponent},
  {path: 'contact', component: ContactFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
