import { Component } from '@angular/core';
import { FooterComponent } from '../../menu/footer/footer.component';
import { HeaderComponent } from '../../menu/header/header.component';

@Component({
  selector: 'app-apropos',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './apropos.component.html',
  styleUrl: './apropos.component.css'
})
export class AproposComponent {

}
