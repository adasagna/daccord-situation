import { Component } from '@angular/core';
import { HeaderComponent } from '../../menu/header/header.component';
import { FooterComponent } from '../../menu/footer/footer.component';

@Component({
  selector: 'app-panier',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './panier.component.html',
  styleUrl: './panier.component.css'
})
export class PanierComponent {

}
