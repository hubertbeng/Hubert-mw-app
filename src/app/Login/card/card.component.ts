import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, FontAwesomeModule, RouterModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private form: FormBuilder){ }

  ngOnInit(): void {
    if(this.loginForm){
    this.loginForm = this.form.group({
      Username: ['', Validators.required],
      Password: ['', Validators.required]
    });
  }}


}
