import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { UserModel } from 'src/app/model/user-model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  private user: UserModel[] = [];
  public errors?: string;

  userForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.maxLength(50),
      Validators.pattern(`^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$`),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(7),
      Validators.maxLength(100),
    ]),
  });
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {}

  public login(): void | boolean {
    if (this.userForm.invalid) {
      return false;
    }
    this.user = [
      {
        email: this.userForm.value.email,
        password: this.userForm.value.password,
      },
    ];
    this.userService.signIn(this.user).subscribe(
      (data: any) => {
        this.userService
          .updateProfile(data.user._id, [{ activeStatus: true }])
          .subscribe((data: any) => {
            this.userService.setActive(data.activeStatus);
          });
        this.userService.setToken(data.token);
        this.userService.setID(data.user._id);
        this.router.navigate(['/']);
      },
      (err: any) => {
        let { error } = err;
        this.errors = error.error;
      }
    );
  }

  // validateEmail(email: string) {
  //   const re =
  //     /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //   return re.test(String(email).toLowerCase());
  // }

  get email() {
    return this.userForm.controls;
  }
  get password() {
    return this.userForm.controls;
  }
}
