import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { UserModel } from 'src/app/model/user-model';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  private user: UserModel[] = [];

  userForm = new FormGroup({
    name: new FormControl(null),
    email: new FormControl(null),
    birthday: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
  });
  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  public register(): void {
    this.user = [
      {
        name: this.userForm.value.name,
        email: this.userForm.value.email,
        birthday: this.userForm.value.birthday,
        password: this.userForm.value.password,
      },
    ];
    this.userService.register(this.user).subscribe((data: UserModel[]) => {
      const { emailToken }: any = data;
      this.setTokenSignUp(emailToken);
    });
  }

  private setTokenSignUp(token: any): void {
    localStorage.setItem('emailToken', token);
  }
}
