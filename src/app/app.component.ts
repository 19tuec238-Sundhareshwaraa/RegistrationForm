import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myproject';

  countryList=[
    { "countryname" : "India"},
    { "countryname" : "USA"},
    { "countryname" : "England"},
    { "countryname" : "Australia"},
    { "countryname" : "China"},
    { "countryname" : "Europe"},

  ];

  onSubmit(myForm: NgForm){
    console.log(myForm);
    myForm.reset();
  }
}
