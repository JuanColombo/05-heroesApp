import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';
import { Auth } from '../../../auth/interfaces/auth.interdace';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router : Router, private authService : AuthService) { }
  
  get auth(){
    return this.authService.auth;
  }
  ngOnInit(): void {
  }

  logout(){
    this.router.navigate(['./auth'])
   }

}
