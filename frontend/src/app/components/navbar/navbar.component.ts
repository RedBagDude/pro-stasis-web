import { Component, AfterViewInit, inject, signal } from '@angular/core';
import { TranslationService, Language } from '../../services/translation.service';
import { refreshIcons } from '../../icons';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  template: `
    <header class="fixed top-0 left-0 w-full z-50 bg-[#070709]/85 backdrop-blur-md border-b border-brand-border" data-purpose="site-navigation">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        <!-- Brand Logo -->
        <a class="flex items-center gap-3 group" href="#inicio">
          <div class="flex flex-col">
            <div class="flex items-center gap-1.5">
              <span class="text-2xl font-tech font-bold tracking-wider text-white">PRO<span class="text-brand-red">-</span>STASIS</span>
              <span class="w-2 h-2 rounded-full bg-brand-red animate-pulse"></span>
            </div>
            <span class="text-[9px] tracking-[0.3em] font-tech text-neutral-400 font-medium">ROBOTICS</span>
          </div>
        </a>

        <!-- Desktop Nav Links -->
        <nav class="hidden md:flex items-center gap-8 text-xs font-tech tracking-wider uppercase text-neutral-400">
          <a class="hover:text-white transition-colors duration-200" href="#inicio">{{ t().navbar.home }}</a>
          <a class="hover:text-white transition-colors duration-200" href="#tecnologia">{{ t().navbar.technology }}</a>
          <a class="hover:text-white transition-colors duration-200" href="#productos">{{ t().navbar.products }}</a>
          <a class="hover:text-white transition-colors duration-200" href="#empresa">{{ t().navbar.about }}</a>
          <a class="hover:text-white transition-colors duration-200" href="#impacto">{{ t().navbar.impact }}</a>
          <a class="hover:text-white transition-colors duration-200" href="#roadmap">{{ t().navbar.roadmap }}</a>
          <a class="hover:text-white transition-colors duration-200" href="#contacto">{{ t().navbar.contact }}</a>
        </nav>

        <!-- Right Action & Language Selector Dropdown -->
        <div class="flex items-center gap-4">
          
          <!-- Dropdown Container -->
          <div class="relative">
            <!-- Dropdown Trigger Button -->
            <button 
              (click)="toggleDropdown()" 
              class="flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded bg-brand-card hover:bg-neutral-800 border border-brand-border hover:border-brand-red text-neutral-200 transition-all cursor-pointer shadow-sm group" 
              [class.border-brand-red]="isDropdownOpen()"
              type="button"
              aria-haspopup="true"
              [attr.aria-expanded]="isDropdownOpen()"
              title="Seleccionar idioma / Select language">
              <span class="font-bold text-brand-red group-hover:text-white">{{ currentLang().toUpperCase() }}</span>
              <span class="inline-flex text-neutral-400 group-hover:text-white transition-transform duration-200"
                    [class.rotate-180]="isDropdownOpen()">
                <i class="w-3.5 h-3.5" data-lucide="chevron-down"></i>
              </span>
            </button>

            <!-- Dropdown Menu Box -->
            @if (isDropdownOpen()) {
              <!-- Click-outside invisible backdrop -->
              <div (click)="closeDropdown()" class="fixed inset-0 z-40 bg-transparent"></div>

              <div class="absolute right-0 mt-2 w-40 rounded-xl bg-[#0f1118]/95 backdrop-blur-md border border-brand-border shadow-2xl py-1.5 z-50 overflow-hidden">
                
                <!-- Option 1: Español -->
                <button 
                  (click)="selectLanguage('es')"
                  [class.text-brand-red]="currentLang() === 'es'"
                  [class.bg-white/5]="currentLang() === 'es'"
                  class="w-full px-3.5 py-2.5 text-left text-xs font-mono flex items-center justify-between hover:bg-brand-red/10 hover:text-white transition-colors cursor-pointer text-neutral-300">
                  <span class="flex items-center gap-2">
                    <span class="text-sm">🇪🇸</span>
                    <span [class.font-bold]="currentLang() === 'es'">Español (ES)</span>
                  </span>
                  @if (currentLang() === 'es') {
                    <span class="text-brand-red font-bold text-xs">✓</span>
                  }
                </button>

                <!-- Divider -->
                <div class="h-[1px] bg-brand-border/60 my-1 mx-2"></div>

                <!-- Option 2: English -->
                <button 
                  (click)="selectLanguage('en')"
                  [class.text-brand-red]="currentLang() === 'en'"
                  [class.bg-white/5]="currentLang() === 'en'"
                  class="w-full px-3.5 py-2.5 text-left text-xs font-mono flex items-center justify-between hover:bg-brand-red/10 hover:text-white transition-colors cursor-pointer text-neutral-300">
                  <span class="flex items-center gap-2">
                    <span class="text-sm">🇬🇧</span>
                    <span [class.font-bold]="currentLang() === 'en'">English (EN)</span>
                  </span>
                  @if (currentLang() === 'en') {
                    <span class="text-brand-red font-bold text-xs">✓</span>
                  }
                </button>
              </div>
            }
          </div>
          
          <!-- Contact CTA Button -->
          <a class="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-tech font-medium tracking-wide bg-brand-red hover:bg-brand-redHover text-white rounded transition-colors shadow-sm" href="#contacto">
            {{ t().navbar.contactBtn }}
          </a>
        </div>

      </div>
    </header>
  `
})
export class NavbarComponent implements AfterViewInit {
  private ts = inject(TranslationService);

  currentLang = this.ts.currentLang;
  t = this.ts.t;
  isDropdownOpen = signal<boolean>(false);

  ngAfterViewInit() {
    refreshIcons();
  }

  toggleDropdown() {
    this.isDropdownOpen.update(v => !v);
    refreshIcons();
  }

  closeDropdown() {
    this.isDropdownOpen.set(false);
  }

  selectLanguage(lang: Language) {
    this.ts.setLanguage(lang);
    this.isDropdownOpen.set(false);
    refreshIcons();
  }
}
