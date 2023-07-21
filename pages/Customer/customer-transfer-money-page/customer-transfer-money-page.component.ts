import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';
import { AlertService } from 'src/app/services/alert.service';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-transfer-money-page',
  templateUrl: './customer-transfer-money-page.component.html',
  styleUrls: ['./customer-transfer-money-page.component.scss']
})
export class CustomerTransferMoneyPageComponent {
  rateList: any[] = [];
  bankDetails: any = {
    accountHolderName: '',
    accountNumber: 0,
  };
  
  constructor(
    private customer: CustomerService,
    private admin: AdminService,
    private alert: AlertService

  ) { }

  ngOnInit() {
    this.admin.getRates().subscribe((res: any) => {
      this.rateList = res || [];
    });

    this.customer.getMyBank().subscribe((res: any) => {
      if (!res.data) {
        this.alert.error("Your bank not added please add first")
      } else
        this.bankDetails = res?.data;

    });
  }

  onSubmit(ngForm: NgForm) {
    const credentials = ngForm.form.value;
    credentials.transactionDate = new Date().toISOString();
    this.customer.sendMoney(credentials);
    ngForm.resetForm();

  }
}

// import { Component } from '@angular/core';
// import { NgForm } from '@angular/forms';
// import { AdminService } from 'src/app/services/admin.service';
// import { AlertService } from 'src/app/services/alert.service';
// import { CustomerService } from 'src/app/services/customer.service';

// @Component({
//   selector: 'app-customer-transfer-money-page',
//   templateUrl: './customer-transfer-money-page.component.html',
//   styleUrls: ['./customer-transfer-money-page.component.scss']
// })
// export class CustomerTransferMoneyPageComponent {
//   rateList: any[] = []; // Add rateList property
//   bankDetails: any = {
//     accountHolderName: '',
//     accountNumber: 0,
//   };

//   showReview: boolean = false;

//   constructor(
//     private customer: CustomerService,
//     private admin: AdminService,
//     private alert: AlertService
//   ) { }

//   ngOnInit() {
//     this.admin.getRates().subscribe((res: any) => {
//       this.rateList = res || [];
//     });

//     this.customer.getMyBank().subscribe((res: any) => {
//       if (!res.data) {
//         this.alert.error("Your bank not added please add first")
//       } else
//         this.bankDetails = res?.data;
//     });
//   }

//   onFormSubmit() {
//     // Step 1: Money Transfer Form Submitted
//     // Show the review section
//     this.showReview = true;
//   }

//   onReviewEdit() {
//     this.showReview = false;
//   }

//   onSubmit(ngForm: NgForm) {
    
//     const credentials = ngForm.form.value;
//     credentials.transactionDate = new Date().toISOString();
//     this.customer.sendMoney(credentials);
//     this.showReview = false; 
//     ngForm.resetForm();
//   }
// }

// import { Component } from '@angular/core';
// import { NgForm } from '@angular/forms';
// import { AdminService } from 'src/app/services/admin.service';
// import { AlertService } from 'src/app/services/alert.service';
// import { CustomerService } from 'src/app/services/customer.service';

// @Component({
//   selector: 'app-customer-transfer-money-page',
//   templateUrl: './customer-transfer-money-page.component.html',
//   styleUrls: ['./customer-transfer-money-page.component.scss']
// })
// export class CustomerTransferMoneyPageComponent {
//   rateList: any[] = [];

//   bankDetails: any = { 
//   accountHolderName: '',
//   accountNumber: 0,
//   };

//   transferDetails: any = {
//     receiverName :'',
//    receiverAccNo :0,
//    sendingCurrency:'',
//    receivingCurrency :'',
//    fromCountry :'',
//    toCountry :'',
//    sendingAmount :0,
//   };

//   showReview: boolean = false;
//   reviewCompleted: boolean = false;

//   constructor(
//     private customer: CustomerService,
//     private admin: AdminService,
//     private alert: AlertService
//   ) { }

//   ngOnInit() {
//     this.admin.getRates().subscribe((res: any) => {
//       this.rateList = res || [];
//     });

//     this.customer.getMyBank().subscribe((res: any) => {
//       if (!res.data) {
//         this.alert.error("Your bank not added please add first")
//       } else
//         this.bankDetails = res?.data;
//     });
//   }

//   onSubmit(ngForm: NgForm) {
//     if (this.reviewCompleted) {
//       this.customer.sendMoney(this.transferDetails);
//       ngForm.resetForm();
//       this.showReview = false;
//       this.reviewCompleted = false;
//     } else {
//       this.showReview = true;
//       this.transferDetails = ngForm.form.value;
//     }
//   }

//   onReview() {
//     this.showReview = true;
//     this.reviewCompleted = true;
//   }

//   onEdit() {
//     this.showReview = false;
//     this.reviewCompleted = false;
//   }
// }





