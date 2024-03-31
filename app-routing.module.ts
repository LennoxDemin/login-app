import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FileuploadComponent } from './components/fileupload/fileupload.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';

const routes: Routes = [
   {path: '', redirectTo:'signup', pathMatch:'full'},
  {path: 'login', component : LoginComponent},
  {path: 'home', component : HomeComponent},
  {path: 'signup', component : RegisterComponent},
  {path: 'verify-email', component : VerifyEmailComponent},
  {path: 'forgot-password', component : ForgotPasswordComponent},
  {path : 'file-upload', component:FileuploadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
