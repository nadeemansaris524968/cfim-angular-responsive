import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  isToggled = false;

  constructor(private elRef: ElementRef) {}

  toggleHamburger() {
    this.isToggled = !this.isToggled;
  }

  @HostListener('document:click', ['$event'])
  @HostListener('document:touchstart', ['$event'])
  handleClickOutside(event: Event) {
    if (!this.elRef.nativeElement.contains(event.target) && this.isToggled) {
      this.toggleHamburger();
    }
  }
}
