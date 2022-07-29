import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor(private regForm: FormBuilder) {}
  addressData: FormGroup = {} as FormGroup;

  RegisterForm = this.regForm.group({
    name: [null, [Validators.required, Validators.maxLength(20)]],
    email: [
      null,
      [
        Validators.required,
        Validators.email,
        Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/),
      ],
    ],
    userName: [null, [Validators.required, Validators.pattern(/^[^\s]+$/)]],
    password: [
      null,
      [
        Validators.required,
        Validators.pattern(
          /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/
        ),
      ],
    ],
    confirmPass: [
      null,
      [
        Validators.required,
        Validators.pattern(
          /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/
        ),
      ],
    ],
    address: this.regForm.array([]),
  });
  submitForm() {
    console.log(this.RegisterForm.value);
  }

  generateAddress(): FormGroup {
    return (this.addressData = this.regForm.group({
      address: [
        null,
        [Validators.required, Validators.pattern(/^[a-z0-9]+$/i)],
      ],
      street: [null, [Validators.required, Validators.pattern(/^[a-z0-9]+$/i)]],
      country: [null, [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]],
      city: [null, [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]],
    }));
  }
  addAddress() {
    this.myAddress.push(this.generateAddress());
    console.log(this.myAddress);
  }
  removeAddress(index: number) {
    this.myAddress.removeAt(index);
  }

  get myAddress(): FormArray {
    return this.RegisterForm.get('address') as FormArray;
  }
  ngOnInit(): void {}
}
