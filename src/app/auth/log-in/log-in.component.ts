import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
})
export class LogInComponent implements OnInit {
  constructor(private _router: Router) {}

  loginUser(data: any) {
    console.log(data);
    if (data.valid) {
      localStorage.setItem('Email', JSON.stringify(data.controls.email.value));
      alert('You have logged in successfully');
      this._router.navigate(['']);
    } else {
      alert('Not valid email address, Please Register first');
    }
  }
  ngOnInit(): void {}
}
