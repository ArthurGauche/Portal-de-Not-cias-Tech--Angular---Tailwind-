import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Documentacao } from './pages/documentacao/documentacao';
import { SobreOAutor } from './pages/sobre-o-autor/sobre-o-autor';
import { Tutoriais } from './pages/tutoriais/tutoriais';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'documentacao', component: Documentacao },
    { path: 'home', component: Home },
    { path: 'sobre-o-autor', component: SobreOAutor },
    { path: 'tutoriais', component: Tutoriais }
];
