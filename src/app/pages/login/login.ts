import { Component } from '@angular/core';
import {ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { AuthService } from '../../services/auth';
import { NzMessageService } from 'ng-zorro-antd/message';
@Component({
  selector: 'app-login',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzCardModule,
  ],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

   loginForm: FormGroup;
   loading = false;
    constructor(private fb: FormBuilder, private router: Router,  private authService: AuthService, private message: NzMessageService) {
    this.loginForm = this.fb.group({
      badgeNumber: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

   onSubmit(): void {
    if (this.loginForm.valid) {
      // TODO: call auth service
     const { badgeNumber, password } = this.loginForm.value;
     this.loading = true;
     
     
     this.authService.login(badgeNumber, password).subscribe({
        next: (res) => {
          this.message.success(res.message || 'Login successful!');
          localStorage.setItem('user', JSON.stringify(res.user));
          this.router.navigate(['/dashboard']);
        },
        error: () => {
          this.message.error('Invalid badge number or password');
        },
        complete: () => {
          this.loading = false;
        }
      });



    }
  }

}
