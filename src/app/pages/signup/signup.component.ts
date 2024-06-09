import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit{

  formSignup : FormGroup;
  user !: User;

  constructor(private form : FormBuilder, private userService : UserService) {
    this.formSignup = this.form.group({
      username : '',
      password : '',
      names : '',
      lastnames : '',
      phone : '',
      address : ''
      // añadir validaciones
    })
  }

  ngOnInit(): void { }

  submit () {
    this.user = this.formSignup.value;
    console.log(this.user);

    this.userService.registerUser(this.user).subscribe(
      (data) => {
        console.log(data);
        alert("Usuario guardado con éxito.");
      }, (error) => {
        console.log(error);
        alert("Ha ocurrido un error en el sistema.");
      }
    )
  }
}
