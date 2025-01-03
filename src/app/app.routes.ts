import { Routes } from '@angular/router';
import { AccueilComponent} from './pages/accueil/accueil.component';
import { AproposComponent } from './pages/apropos/apropos.component';
import { BoutiqueComponent } from './pages/boutique/boutique.component';
import { ContactComponent } from './pages/contact/contact.component';
export const routes: Routes = [
    {
        path: '', redirectTo: 'accueil', pathMatch: 'full'

    },
    {
        path: 'accueil',
        component:AccueilComponent
    },
    {
        path: 'apropos',
        component:AproposComponent        
    },
    {
        path: 'boutique',
        component:BoutiqueComponent
    },
    {
        path: 'contact',
        component:ContactComponent
    },
];
