import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  loading: boolean = false;
  status: string = "";
  success: boolean = false;
  failed: boolean = false;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
  }

  // Form initialization and validation
  contactForm: FormGroup = this.formBuilder.group({
    email: ['', { validators: [Validators.required, Validators.email], updateOn: "change" }],
    subject: ['', { validators: [Validators.required], updateOn: "change" }],
    message: ['', { validators: [Validators.required], updateOn: "change" }],
  })


  // async
  submit() {
    // If form is invalid don't submit
    if (this.contactForm.invalid) {
      // this.failed = true
      return
    }

    // Loading
    this.loading = true

    let payload = {
      emailAddress: this.contactForm.value.email,
      message: this.contactForm.value.message,
      subject: this.contactForm.value.subject,
    }

    // Post email to dheyved1@gmail.com
    this.http.post('https://formspree.io/f/xyyonogr', payload).subscribe(
      (response) => this.success = true,
      (error) => this.failed = true
    )

    // Stop loading
    this.loading = false

    // Set Timeout
    setTimeout(() => {
      this.success = false;
      this.failed = false
    }, 3000);

    // Reset Form
    this.contactForm.reset();
  }

}
