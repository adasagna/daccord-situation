import { Component } from '@angular/core';
import { HeaderComponent } from '../../menu/header/header.component';
import { FooterComponent } from '../../menu/footer/footer.component';

@Component({
  selector: 'app-boutique',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './boutique.component.html',
  styleUrl: './boutique.component.css'
})
export class BoutiqueComponent {

}
