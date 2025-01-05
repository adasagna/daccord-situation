import { Routes } from '@angular/router';
import { AccueilComponent} from './pages/accueil/accueil.component';
import { AproposComponent } from './pages/apropos/apropos.component';
import { BoutiqueComponent } from './pages/boutique/boutique.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PanierComponent } from './pages/panier/panier.component';
import { AcceueildashbordComponent } from './admin/acceueildashbord/acceueildashbord.component';
import { GestionCommandesComponent } from './admin/gestion-commandes/gestion-commandes.component';
import { GestionCommentairesComponent } from './admin/gestion-commentaires/gestion-commentaires.component';
import { GestionStockComponent } from './admin/gestion-stock/gestion-stock.component';
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
    {
        path: 'panier',
        component: PanierComponent
    },
    {
        path: 'gestion-commentaires',
        component: GestionCommentairesComponent
    },
    {
        path: 'gestionèstock',
        component: GestionStockComponent
    },
    {
        path: 'acceueildashbord',
        component: AcceueildashbordComponent
    },
    {
        path: 'gestion-commandes',
        component: GestionCommandesComponent
    },
];
