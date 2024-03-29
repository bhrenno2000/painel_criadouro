import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { UserService } from '../services/user/user.service';
import { Title } from '@angular/platform-browser';
import { AuthService } from '../services/auth/auth.service';
declare var $: any;

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  public config: PerfectScrollbarConfigInterface = {};
  dateService: any;
  user: any;

  constructor(public router: Router,
    private dataService: UserService,
    private auth: AuthService
  ) {
  }

  public innerWidth: any;
  public defaultSidebar: any;
  public showMobileMenu = null;
  public expandLogo = false;
  public sidebartype = 'full';

  Logo() {
    this.expandLogo = !this.expandLogo;
  }

  ngOnInit() {


    //Dados Usuario
    this.auth.verifyLogin().subscribe(date => {
      this.user = date.data
      console.log(this.user)
    })

    if (this.router.url === '/') {
      this.router.navigate(['/home']);
    }
    this.defaultSidebar = this.sidebartype;
    this.handleSidebar();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.handleSidebar();
  }

  handleSidebar() {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth < 1170) {
      this.sidebartype = 'mini-sidebar';
    } else {
      this.sidebartype = this.defaultSidebar;
    }
  }

  toggleSidebarType() {
    switch (this.sidebartype) {
      case 'full':
        this.sidebartype = 'mini-sidebar';
        break;

      case 'mini-sidebar':
        this.sidebartype = 'full';
        break;

      default:
    }
  }

  showMenu() {
    this.showMobileMenu = this.showMobileMenu === true ? false : true;
  }

}
