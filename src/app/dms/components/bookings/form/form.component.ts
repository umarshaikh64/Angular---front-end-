import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ModalDirective } from "ngx-bootstrap/modal";
import {MockBookingService} from '../services/mock-booking.service';
import {CustomerList} from '../../../services/customers/customer-entity';
import {MockCustomersService} from '../../../services/customers/mock-customers.service';

/**
 * For submit the booking form
 * @class
 */
@Component({
  selector: 'app-booking-form-submit',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit{
  @ViewChild("successModal") successModal: ModalDirective;
  @ViewChild("dangerModal") dangerModal: ModalDirective;
  @ViewChild("foundModal") foundModal: ModalDirective;
  alertBody: string;
  alertHeader: string;
  formBooking : FormGroup;
  curDate =  new Date(Date.now()).toLocaleDateString();
  customers: CustomerList;

  constructor(
    private fb: FormBuilder,
    private bookingService: MockBookingService,
    private apiCustomers: MockCustomersService,
  ) {}

  ngOnInit(): void {
    this.apiCustomers.getList(0).subscribe((response) => {
      this.customers = response;
      console.log(response)
    });
    this.formBooking = this.fb.group({
      status: "Draft",
      customer: new FormControl(''),
      booking_reason: new FormControl(''),
      branch: new FormControl(''),
      date_of_delivery: new FormControl(''),
      date_of_collection: new FormControl(''),
      demo_duration : new FormControl(''),
      department: new FormControl(''),
      contact_name: new FormControl(''),
      contact_number: new FormControl(''),
      remarks:new FormControl(''),
    });
  }
  onSave(): void {
    this.bookingService.saveBooking({
      status: "Draft",
      customer: this.formBooking.get("customer").value + "",
      curDate: this.curDate,
      booking_reason: this.formBooking.get("booking_reason").value + "",
      branch: this.formBooking.get("branch").value + "",
      date_of_delivery: this.formBooking.get("date_of_delivery").value + "",
      date_of_collection: this.formBooking.get("date_of_collection").value + "",
      demo_duration : this.formBooking.get("demo_duration").value + "",
      department: this.formBooking.get("department").value + "",
      contact_name: this.formBooking.get("contact_name").value + "",
      contact_number: this.formBooking.get("contact_number").value + "",
      remarks: this.formBooking.get("remarks").value + ""
    }).subscribe((res) => {
        if (res.id) {
          this.alertBody = "Booking saved successfully.";
          this.successModal.show();
          setTimeout(() => {
            this.successModal.hide();
          }, 2000);
          this.formBooking.reset();
        }
      },
      err => {
        console.log(err);
          this.alertBody = "The booking can't save";
          this.dangerModal.show();
          setTimeout(() => {
            this.dangerModal.hide();
          }, 2000);
      });
  }
}
