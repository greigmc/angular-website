import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ServicesComponent } from './pages/services/services.component';
import { ServeComponent } from './pages/serve/serve.component';
import { CompanyComponent } from './pages/company/company.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'services', component: ServicesComponent},
  { path: 'serve', component: ServeComponent},
  { path: 'company', component: CompanyComponent},
  { path: 'contact', component: ContactComponent },
];
