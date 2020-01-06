import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { Title } from '@angular/platform-browser';
import { PlanService } from 'src/app/services/plan/plan.service';
import { TransactionService } from 'src/app/services/transaction/transaction.service';
import { ExtractService } from 'src/app/services/extract/extract.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(
    private title: Title,
    private router: Router,
    private authSrv: AuthService,
    private userSrv: UserService,
    private transactionSrv: TransactionService,
    private planSrv: PlanService,
    private extractSrv: ExtractService,
    private spinner: NgxSpinnerService
  ) {
    this.spinner.show();
    // setTimeout(() => {
    //   this.spinner.hide();
    // }, 3000);
  }

  ngOnInit() {

    this.title.setTitle('Login | Criatório Z7');

    // Verify Login
    this.authSrv.verifyLogin()
      .subscribe(res => {
        if (!res.success) {
          this.authSrv.logout();
          this.router.navigate(['/login']);
        }
        else {

        }
      });
  }
}
