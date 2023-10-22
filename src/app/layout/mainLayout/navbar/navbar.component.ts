import { Component, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  @Output() sideNavtoggled = new EventEmitter<boolean>();
  isMenuCollapsed: boolean = false;

  toogleSideBar(): void {
    this.isMenuCollapsed = !this.isMenuCollapsed;
    this.sideNavtoggled.emit(this.isMenuCollapsed);
  }
}
