
import { NgxSpinnerService } from 'ngx-spinner';
import { WithdrawService } from 'src/app/services/financy/withdraw.service';
import { AlertService } from 'src/app/services/alert/alert.service';
import { LoadingService } from 'src/app/services/loading/loading.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';




constructor(
  private spinner: NgxSpinnerService,
  private withdraw: WithdrawService,
  private alert: AlertService,
  private loading: LoadingService,
  private auth: AuthService,
  private router: Router) { }

ngOnInit() {
  this.spinner.show();
  setTimeout(() => {
    this.spinner.hide();
  }, 3000);

  this.auth.verifyLogin().subscribe(res => {
    if (!res.success) {
      this.auth.logout();
      this.router.navigate(['/login'])
    }
    else {

    }
  })
}