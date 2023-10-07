// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

// Components
import { RegisterPageComponent } from './pages/register-page/register-page.component';

// Modules
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [RegisterPageComponent],
  imports: [AuthRoutingModule, ReactiveFormsModule, CommonModule],
})
export class AuthModule {}
