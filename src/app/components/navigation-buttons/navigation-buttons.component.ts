import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navigation-buttons',
  imports: [],
  templateUrl: './navigation-buttons.component.html',
  styleUrl: './navigation-buttons.component.scss'
})
export class NavigationButtonsComponent {
  @Output() prev = new EventEmitter<void>();
  @Output() next = new EventEmitter<void>();  

}
