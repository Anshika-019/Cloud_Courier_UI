import { Component, Inject } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule, MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(@Inject(MatSnackBar) private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }
  btnClick(){
    this.snackBar.open('Email sent successfully', 'Close', {
      duration: 3000
    });
  }
}
