import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Products';
  selectedItemId!: number;

  onSelectedItemChanged(itemId: number) {
    this.selectedItemId = itemId;
  }
}
