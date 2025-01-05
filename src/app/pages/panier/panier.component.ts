import { Component } from '@angular/core';
import { HeaderComponent } from '../../menu/header/header.component';
import { FooterComponent } from '../../menu/footer/footer.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-panier',
  standalone: true,
  imports: [HeaderComponent, FooterComponent,RouterLink],
  templateUrl: './panier.component.html',
  styleUrl: './panier.component.css'
})
export class PanierComponent {

}
