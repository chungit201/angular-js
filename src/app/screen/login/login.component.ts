import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { UserModel } from 'src/app/model/user-model';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  private user: UserModel[] = [];

  userForm = new FormGroup({
    email: new FormControl(null),
    password: new FormControl(''),
  });
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {}

  public login(): void {
    this.user = [
      {
        email: this.userForm.value.email,
        password: this.userForm.value.password,
      },
    ];
    this.userService.signIn(this.user).subscribe((data: any) => {
      this.userService.setToken(data.token);
      this.userService.setID(data.user._id);
      this.router.navigate(['/']);
    });
  }
}
