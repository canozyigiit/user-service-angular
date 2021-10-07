import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators,FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private formbuilder: FormBuilder,
    private authService: AuthService,
    private toastrService: ToastrService,
    private router:Router,
  ) {}

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm() {
    this.loginForm = this.formbuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  login() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      let loginModel = Object.assign({}, this.loginForm.value);

      this.authService.login(loginModel).subscribe((response) => {
        this.toastrService.info("Giriş yapıldı");
        console.log(response)
        localStorage.setItem("access_token",response.access_token)
        localStorage.setItem("refresh_token",response.refresh_token)
        localStorage.setItem("user",response.name)

        this.router.navigate(['/users'])
        
      },responseError=>{
        this.toastrService.error("Kullanıcı adı veya şifre yanlış.")
      })
      }
    }
  }
