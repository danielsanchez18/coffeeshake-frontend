import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { User } from '../../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  loginData = {
    'username' : '',
    'password' : ''
  }

  constructor(private loginService : LoginService, private router : Router) { }

  ngOnInit(): void { }

  formSubmit() {
    if (! this.loginData.username.trim()) {
          alert('El nombre de usuario es requerido')
          return;
    }

    if (! this.loginData.password.trim()) {
          alert('La contraseña es requerida')
          return;
    }

    this.loginService.generateToken(this.loginData).subscribe(
      (data : any) => {
        this.loginService.loginUser(data.token);
        this.loginService.getCurrentUser().subscribe((user : any) => {
          this.loginService.setUser(user);
          // console.log(user)

          if (this.loginService.getUserRole() == 'administrador') {
            console.log('soy trabajador')
            this.router.navigate(['dashboard/home']);
            this.loginService.loginStatusSubject.next(true);
          }
          else if(this.loginService.getUserRole() == 'cliente'){
            this.router.navigate(['home']);
            this.loginService.loginStatusSubject.next(true);
          }
          else {
            this.loginService.logout();
          }
        })
      }, (error) => {
        console.log(error);
        alert('Datos inválidos');
      }
    )
  }
}
