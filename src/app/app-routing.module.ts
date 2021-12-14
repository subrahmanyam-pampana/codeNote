import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CodsComponent } from './cods/cods.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { NotesComponent } from './notes/notes.component';

const routes: Routes = [
  {path:"codes",component:CodsComponent},
  {path:"notes",component:NotesComponent},
  {path:"login",component:LoginPageComponent},
  {path:"",component:CodsComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
