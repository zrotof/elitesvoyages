import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { finalize } from 'rxjs/operators';
import { MailsService } from '../services/mails/mails.service';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss'],
  providers:[MessageService, DialogService]
})
export class NewsletterComponent implements OnInit {

  newsletterForm: FormGroup
  isNewsletterFormSubmitted = false;
  isnewsletterFormSubmittedAndNotErrorOnClientSide = false;

  constructor(
    private fb :FormBuilder,
    private mailService: MailsService,
    private messageService: MessageService,
    private primengConfig: PrimeNGConfig,
    public dialogService: DialogService) {

    this.newsletterForm = this.fb.group({
      email: ["", [Validators.required]],
    })
  };

  ngOnInit(): void {
  }

  // convenient getter for easy access to form fields
  get f() { return this.newsletterForm.controls; }


  onReset() {
    this.isNewsletterFormSubmitted = false;
    this.newsletterForm.reset();
  }

  onSubmitNewsletterForm(){

    this.isNewsletterFormSubmitted = true;

    // stop here if form is invalid
    if (this.newsletterForm.invalid) {
      return;
    }

    this.isnewsletterFormSubmittedAndNotErrorOnClientSide = true;

    this.mailService.addCustomerToNewsletter(JSON.stringify(this.newsletterForm.value)).pipe(finalize(() => this.isnewsletterFormSubmittedAndNotErrorOnClientSide = false),
    ).subscribe((resp: any) =>{
      
      if(resp['message'] === "success"){
        this.messageService.add({severity:'success', detail: "Nousvous avons bien ajouté à notre newsletter."});
        this.onReset();
      }

      else{
        this.messageService.add({severity:'error',detail: "Erreur lors de l'envoi, re-essayez plus tard."});
      }
    });
  }

}
