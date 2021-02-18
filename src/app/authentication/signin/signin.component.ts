import { AuthService } from './../../shared/security/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Role } from './../../shared/security/role';
import { TokenStorageService } from 'src/app/shared/security/token-storage.service';
import { AuthLoginInfo } from 'src/app/shared/security/login-info';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  private loginInfo: AuthLoginInfo;
  loginForm: FormGroup;
  
  submitted = false;
  error = '';
  hide = true;
  formBuilder: any;
  constructor(private router:Router,private authService: AuthService, private tokenStorage: TokenStorageService) { }
  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getAuthorities();
    }
    window.sessionStorage.clear();
    this.loginForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
   });
   
  }
  
  get f() {
    return this.loginForm.controls;
  }
  onSubmit() {
    console.log(this.loginForm.controls);
    console.log(this.f.username.value);
 
    this.loginInfo = new AuthLoginInfo(
      
      this.f.username.value,
      this.f.password.value);
    
      this.authService.attemptAuth(this.loginInfo).subscribe(
        data => {
          
          this.tokenStorage.saveToken(data.accessToken);
          this.tokenStorage.saveUsername(data.username);
          this.tokenStorage.saveAuthorities(data.authorities);
   
          this.isLoginFailed = false;
          this.isLoggedIn = true;
          this.roles = this.tokenStorage.getAuthorities();
           const role = this.roles[0]
           if (role === "ROLE_ADMIN") {

            localStorage.setItem('STATE', 'true');
            localStorage.setItem('ROLE', "Admin")
            localStorage.setItem('USERIMG', "assets/images/user/doctor1.jpg")
            
            this.router.navigate(['/admin/dashboard/main']);
            //this.router.navigate(['/admin/patients/edit-patient']);

          } else if (role === "ROLE_DOCTOR") {
            localStorage.setItem('STATE', 'true');
            localStorage.setItem('ROLE', "Doctor")
            localStorage.setItem('USERIMG', "assets/images/user/doctor1.jpg")
            this.router.navigate(['/doctor/dashboard']);
          }
          
          
        },
        error => {
          console.log(error);
          this.errorMessage = error.error.message;
          this.isLoginFailed = true;
        }
      );
    }
  
  reloadPage() {
    window.location.reload();
  }
}

