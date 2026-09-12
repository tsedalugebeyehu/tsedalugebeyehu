import { Component, HostListener, signal } from '@angular/core';

import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  mobileOpen = signal(false);

  blogOpen = signal(false);
  exerciseOpen = signal(false);

  toggleMobile(): void {
    this.mobileOpen.update((value) => !value);
  }

  toggleBlog(): void {
    this.blogOpen.update((value) => !value);
    this.exerciseOpen.set(false);
  }

  toggleExercise(): void {
    this.exerciseOpen.update((value) => !value);
    this.blogOpen.set(false);
  }

  closeMenus(): void {
    this.mobileOpen.set(false);
    this.blogOpen.set(false);
    this.exerciseOpen.set(false);
  }

  @HostListener('document:click', ['$event'])
  documentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;

    if (!target.closest('.nav-dropdown')) {
      this.blogOpen.set(false);
      this.exerciseOpen.set(false);
    }
  }
}
