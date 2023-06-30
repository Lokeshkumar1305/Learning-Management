import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentRegistrationComponent } from './pages/student-registration/student-registration.component';
const routes: Routes = [
  
  {path:'student-registration',component:StudentRegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents=[StudentRegistrationComponent]
