import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MailsService } from 'src/app/services/mails/mails.service';

@Component({
  selector: 'app-apartment',
  templateUrl: './apartment.component.html',
  styleUrls: ['./apartment.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class ApartmentComponent implements OnInit {

  civilities: any = [ "Mr", "Mme"];
  rooms: any = [ 
    "T1",
    "T1 bis", 
    "T2", 
    "T2 bis", 
    "T3", 
    "T4"];

    towns: any = ['Douala', 'Yaoundé'];

    extras  = [
      { id: 0, name: 'Climatisation' },
      { id: 1, name: 'TV' },
      { id: 2, name: 'Penderie' },
      { id: 3, name: 'Eau Chaude' },
      { id: 4, name: 'Chambre avec balcon' }
    ];

    minDate = new Date();

    apartForm: FormGroup;
    isApartFormSubmitted = false;

    constructor(private fb :FormBuilder, private mailService: MailsService) { 
   
      this.apartForm = this.fb.group({
        town: ['',[Validators.required]],
        dateDeb: ['',[Validators.required]],
        dateFin: ['',[Validators.required]],
        type: [null,[Validators.required]],
        extras: new FormArray([]),
        civility: [null, Validators.required],
        firstname: ["", Validators.required],
        lastname:["", Validators.required],
        email: ["", [Validators.required, Validators.email]],
        phone: [""],
      });
  }

  ngOnInit(): void {

    this.initMinDate();

  }

  

   //Initialize the the minimal date of calendar
   initMinDate(){
     
    this.minDate = new Date(this.minDate.setDate((new Date()).getDate()));
    
   }

  // convenient getter for easy access to form fields
  get f() { return this.apartForm.controls; }


   //Resetting the form's value
  onReset() {
    this.isApartFormSubmitted = false;
    this.apartForm.reset();
  }

  //Handling submition of contact form
  onSubmitApartForm(){

    this.isApartFormSubmitted = true;

    // stop here if form is invalid
    if (this.apartForm.invalid) {
      return;
    }

   

    this.mailService.sendApartMail(this.apartForm.value)

    .subscribe(resp =>{
        console.log(resp);
    });
  }

  onChangeCheckox(name: string, e: any){

    const extras = (this.f.extras as FormArray);

    if (e.target.checked) {
      extras.push(new FormControl(name));
    } else {
      const index = extras.controls.findIndex(x => x.value === name);
      extras.removeAt(index);
    }
  }
}
