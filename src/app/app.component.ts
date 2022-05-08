import { StripeComponent } from './stripe/stripe.component';
import { MatDialog } from '@angular/material/dialog';
import { Component } from '@angular/core';
 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'stripe';

  constructor(private dialogRef : MatDialog){}
  openDialog(){
    this.dialogRef.open(StripeComponent,{
      data: {
        name: 'samurai'
      }
    })
  }
}
