import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Header } from './layout/header/header';
import { Footer } from './layout/footer/footer';
import { Documentacao } from './pages/documentacao/documentacao';
import { Home } from './pages/home/home';
import { SobreOAutor } from './pages/sobre-o-autor/sobre-o-autor';
import { Tutoriais } from './pages/tutoriais/tutoriais';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet, Header, Footer, Documentacao, Home, SobreOAutor, Tutoriais],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Portal-de-Noticias');
}
