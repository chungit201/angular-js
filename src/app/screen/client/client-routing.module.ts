import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client.component';
import { MessengerComponent } from '../messenger/messenger.component';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { ActiveEmailComponent } from '../login/active-email/active-email.component';
import { LoginComponent } from '../login/login.component';
import { MainComponent } from '../main/main.component';

const routes: Routes = [
  {
    path: '',
    component: ClientComponent,
    children: [
      { path: '', component: MainComponent },
      { path: 'messenger', component: MessengerComponent },
      { path: 'register', component: SignUpComponent },
      { path: 'login', component: LoginComponent },
    ],
  },
  { path: 'active-email', component: ActiveEmailComponent },
  // { path: 'profile', component:  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientRoutingModule {}
