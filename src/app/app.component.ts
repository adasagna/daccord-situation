import { Component } from '@angular/core';
import { RouterLinkActive, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './menu/header/header.component';
import { FooterComponent } from './menu/footer/footer.component';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,FooterComponent,CommonModule, RouterLinkActive,SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'e-commerce';
}
