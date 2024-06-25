import { MatInputModule } from '@angular/material/input';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BackendService } from '../service/backend.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common'; 
@Component({
  selector: 'app-email',
  standalone: true,
  imports: [MatInputModule,FormsModule,MatFormFieldModule,MatProgressSpinnerModule,CommonModule],
  templateUrl: './email.component.html',
  styleUrl: './email.component.css'
})
export class EmailComponent implements OnInit {
  data = {} as emaildata;
flag: boolean = true;

  constructor(private emailService: BackendService, private snak:MatSnackBar) { }
    ngOnInit(): void {}

  

  doSubmitForm(){
    console.log("Form Submitted");

    if(this.data.to==''|| this.data.subject==''|| this.data.message==''){
      this.snak.open("fields can not be empty !!","OK"); 
      return;
    }
    this.flag = true;
    this.emailService.sendEmail(this.data).subscribe((res:any) => {
  
        console.log(res);
        this.flag = false;
        this.snak.open("Email sent successfully!!"," OK");
      
    },
    (err) => {
      console.log(err);
      this.flag = false;
      this.snak.open("fields can not be empty !!","OK");
    });
  
  }

}
export interface emaildata {
  to: string;
  subject: string;
  message: string;
}

