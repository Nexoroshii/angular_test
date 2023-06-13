import { Component } from '@angular/core';

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.css'],
})
export class IconButtonComponent {
  currentIcon: string = '';

  showRandomIcon() {
    this.currentIcon = 'fa fa-spinner fa-spin'; // Показываем иконку спиннера во время задержки
    setTimeout(() => {
      const icons = [
        'fa fa-star',
        'fa fa-heart',
        'fa fa-thumbs-up',
        'fa fa-bell',
      ]; // Список иконок, которые будут отображаться случайно
      const randomIndex = Math.floor(Math.random() * icons.length);
      this.currentIcon = icons[randomIndex];
    }, 3000);
  }
}
