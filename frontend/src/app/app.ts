import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { TechnologyComponent } from './components/technology/technology.component';
import { ProductsComponent } from './components/products/products.component';
import { AboutComponent } from './components/about/about.component';
import { CollaborationComponent } from './components/collaboration/collaboration.component';
import { ImpactComponent } from './components/impact/impact.component';
import { RoadmapComponent } from './components/roadmap/roadmap.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HeroComponent,
    TechnologyComponent,
    ProductsComponent,
    AboutComponent,
    CollaborationComponent,
    ImpactComponent,
    RoadmapComponent,
    GalleryComponent,
    ContactComponent,
    FooterComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Pro-Stasis');
}
