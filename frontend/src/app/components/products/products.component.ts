import { Component, AfterViewInit, inject, signal, computed } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { refreshIcons } from '../../icons';

export interface GripItem {
  id: string;
  name: string;
  description: string;
  force: string;
  speed: string;
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  template: `
    <section class="py-24 border-t border-brand-border bg-brand-black relative" data-purpose="prototype-section" id="prototipo">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Section Tag -->
        <div class="flex items-center gap-2 mb-3">
          <span class="w-2.5 h-0.5 bg-brand-red"></span>
          <span class="text-xs font-tech tracking-widest text-brand-red uppercase font-semibold">{{ t().prototype.tag }}</span>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-28">
          <!-- Left Column: Hand Info -->
          <div class="lg:col-span-6 space-y-6">
            <h2 class="text-3xl sm:text-5xl font-bold font-tech text-white uppercase tracking-tight">
              {{ t().prototype.title }}
            </h2>
            <p class="text-neutral-300 text-sm sm:text-base leading-relaxed">
              {{ t().prototype.description }}
            </p>
            <p class="text-neutral-400 text-xs sm:text-sm leading-relaxed">
              {{ t().prototype.subdesc }}
            </p>

            <!-- Nota de Transparencia del PDF -->
            <div class="p-4 bg-amber-500/10 border border-amber-500/30 rounded-lg text-amber-200 text-xs sm:text-sm leading-relaxed flex items-start gap-3">
              <i class="w-5 h-5 text-amber-400 shrink-0 mt-0.5" data-lucide="alert-circle"></i>
              <div>
                <strong class="font-semibold text-amber-300 block mb-1">Nota de transparencia técnica:</strong>
                <span>{{ t().prototype.transparencyNote }}</span>
              </div>
            </div>

            <!-- Product Badges & Specifications Grid (Componentes Confirmados) -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div class="p-3 bg-brand-card/80 border border-brand-border rounded flex items-start gap-2.5">
                <i class="w-4 h-4 text-brand-red shrink-0 mt-0.5" data-lucide="cpu"></i>
                <div>
                  <span class="text-xs font-mono font-semibold text-neutral-200 block">{{ t().prototype.component1 }}</span>
                  <span class="text-[11px] font-mono text-neutral-400 block">{{ t().prototype.component1Sub }}</span>
                </div>
              </div>
              <div class="p-3 bg-brand-card/80 border border-brand-border rounded flex items-start gap-2.5">
                <i class="w-4 h-4 text-brand-red shrink-0 mt-0.5" data-lucide="settings"></i>
                <div>
                  <span class="text-xs font-mono font-semibold text-neutral-200 block">{{ t().prototype.component2 }}</span>
                  <span class="text-[11px] font-mono text-neutral-400 block">{{ t().prototype.component2Sub }}</span>
                </div>
              </div>
              <div class="p-3 bg-brand-card/80 border border-brand-border rounded flex items-start gap-2.5">
                <i class="w-4 h-4 text-brand-red shrink-0 mt-0.5" data-lucide="compass"></i>
                <div>
                  <span class="text-xs font-mono font-semibold text-neutral-200 block">{{ t().prototype.component3 }}</span>
                  <span class="text-[11px] font-mono text-neutral-400 block">{{ t().prototype.component3Sub }}</span>
                </div>
              </div>
              <div class="p-3 bg-brand-card/80 border border-brand-border rounded flex items-start gap-2.5">
                <i class="w-4 h-4 text-brand-red shrink-0 mt-0.5" data-lucide="printer"></i>
                <div>
                  <span class="text-xs font-mono font-semibold text-neutral-200 block">{{ t().prototype.component4 }}</span>
                  <span class="text-[11px] font-mono text-neutral-400 block">{{ t().prototype.component4Sub }}</span>
                </div>
              </div>
              <div class="p-3 bg-brand-card/80 border border-brand-border rounded flex items-start gap-2.5">
                <i class="w-4 h-4 text-brand-red shrink-0 mt-0.5" data-lucide="hand"></i>
                <div>
                  <span class="text-xs font-mono font-semibold text-neutral-200 block">{{ t().prototype.component5 }}</span>
                  <span class="text-[11px] font-mono text-neutral-400 block">{{ t().prototype.component5Sub }}</span>
                </div>
              </div>
              <div class="p-3 bg-brand-card/80 border border-brand-border rounded flex items-start gap-2.5">
                <i class="w-4 h-4 text-brand-red shrink-0 mt-0.5" data-lucide="flask-conical"></i>
                <div>
                  <span class="text-xs font-mono font-semibold text-neutral-200 block">{{ t().prototype.component6 }}</span>
                  <span class="text-[11px] font-mono text-neutral-400 block">{{ t().prototype.component6Sub }}</span>
                </div>
              </div>
            </div>

            <!-- CTA -->
            <div class="pt-4">
              <a class="inline-flex items-center gap-2 px-6 py-3 bg-brand-red hover:bg-brand-redHover text-white font-tech font-semibold text-xs tracking-wider uppercase rounded transition-colors shadow-lg" href="#tecnologia">
                <span>{{ t().prototype.btnDetails }}</span>
                <i class="w-4 h-4" data-lucide="arrow-right"></i>
              </a>
            </div>
          </div>

          <!-- Right Column: Interactive Hand Grips Viewer -->
          <div class="lg:col-span-6 bg-[#0e1017] border border-brand-border rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl">
            <div class="flex items-center justify-between border-b border-brand-border/60 pb-3 mb-6">
              <span class="text-[10px] font-mono tracking-widest text-brand-red uppercase">{{ t().prototype.gripEngineTitle }}</span>
              <span class="text-[10px] font-mono text-neutral-400">{{ t().prototype.gripEngineSub }}</span>
            </div>

            <!-- Visual Display of Selected Grip -->
            <div class="min-h-[290px] py-6 px-4 flex flex-col items-center justify-center relative bg-gradient-to-b from-black/50 to-transparent rounded-lg border border-brand-border/40 transition-all duration-300">
              <div class="relative w-32 h-32 flex items-center justify-center">
                <svg class="w-full h-full text-white transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="42" stroke="#252733" stroke-dasharray="2 2" stroke-width="1.5"></circle>
                  
                  @if (selectedGrip().id === 'precision' || selectedGrip().id === 'point') {
                    <path d="M40 75 L45 55 L50 35 L48 20" stroke="#ff2a2a" stroke-linecap="round" stroke-width="3"></path>
                    <path d="M50 75 L52 50 L52 28 L50 18" stroke="white" stroke-linecap="round" stroke-width="2.5"></path>
                    <path d="M60 75 L58 60 L62 50 L64 45" stroke="#4a4c58" stroke-linecap="round" stroke-width="2"></path>
                    <path d="M32 65 L40 50 L46 36" stroke="#ff2a2a" stroke-linecap="round" stroke-width="3"></path>
                  } @else if (selectedGrip().id === 'cylindrical' || selectedGrip().id === 'hook') {
                    <path d="M40 75 L42 55 L48 40 L55 35" stroke="#ff2a2a" stroke-linecap="round" stroke-width="3"></path>
                    <path d="M50 75 L52 55 L58 42 L64 38" stroke="white" stroke-linecap="round" stroke-width="2.5"></path>
                    <path d="M60 75 L62 55 L68 45 L74 40" stroke="white" stroke-linecap="round" stroke-width="2.5"></path>
                    <path d="M30 65 L35 50 L45 45" stroke="#ff2a2a" stroke-linecap="round" stroke-width="3"></path>
                  } @else {
                    <path d="M40 75 L45 55 L50 40 L50 25" stroke="#ff2a2a" stroke-linecap="round" stroke-width="3"></path>
                    <path d="M50 75 L50 55 L55 35 L60 20" stroke="white" stroke-linecap="round" stroke-width="2.5"></path>
                    <path d="M60 75 L55 55 L65 42 L72 30" stroke="white" stroke-linecap="round" stroke-width="2.5"></path>
                    <path d="M30 65 L36 50 L42 42" stroke="#ff2a2a" stroke-linecap="round" stroke-width="3"></path>
                  }
                  
                  <circle cx="50" cy="75" fill="#ff2a2a" r="5"></circle>
                  <circle cx="50" cy="40" fill="#fff" r="2.5"></circle>
                </svg>
              </div>
              
              <div class="text-center mt-3">
                <span class="text-base font-tech font-bold text-white uppercase tracking-wider">{{ selectedGrip().name }}</span>
                <p class="text-[11px] font-mono text-neutral-400 mt-1 max-w-sm">{{ selectedGrip().description }}</p>
                <div class="flex items-center justify-center gap-4 mt-2.5 text-[10px] font-mono text-neutral-300">
                  <span class="text-brand-red font-semibold">{{ t().prototype.forceLabel }}: {{ selectedGrip().force }}</span>
                  <span>•</span>
                  <span>{{ t().prototype.timeLabel }}: {{ selectedGrip().speed }}</span>
                </div>
              </div>
            </div>

            <!-- Grip Selector Buttons with red border on active -->
            <div class="grid grid-cols-3 sm:grid-cols-6 gap-2 mt-6 pt-4 border-t border-brand-border/60" data-purpose="grip-selector">
              @for (grip of grips(); track grip.id) {
                <button 
                  (click)="selectGrip(grip.id)" 
                  [class.border-brand-red]="selectedGrip().id === grip.id"
                  [class.bg-brand-red/10]="selectedGrip().id === grip.id"
                  [class.text-brand-red]="selectedGrip().id === grip.id"
                  class="p-2.5 bg-brand-card hover:border-brand-red border border-brand-border rounded text-center transition-all cursor-pointer group" 
                  type="button">
                  <span class="text-[10px] font-mono font-semibold text-neutral-200 group-hover:text-white block truncate">
                    {{ grip.name }}
                  </span>
                  <span class="text-[9px] font-mono text-neutral-500 block">{{ grip.force }}</span>
                </button>
              }
            </div>
          </div>
        </div>

        <!-- LÍNEAS DE INVESTIGACIÓN FUTURA • CONCEPTO -->
        <div class="border-t border-brand-border/80 pt-20" id="futuro">
          <div class="flex items-center gap-2 mb-3">
            <span class="w-2.5 h-0.5 bg-brand-red"></span>
            <span class="text-xs font-tech tracking-widest text-brand-red uppercase font-semibold">{{ t().prototype.tag02 }}</span>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <!-- Left Copy: Details -->
            <div class="lg:col-span-6 space-y-6">
              <h2 class="text-3xl sm:text-5xl font-bold font-tech text-white uppercase tracking-tight">
                {{ t().prototype.titleFuture }}
              </h2>
              <p class="text-neutral-400 text-sm sm:text-base leading-relaxed">
                {{ t().prototype.descFuture }}
              </p>
              
              <!-- Feature Bullet List -->
              <div class="space-y-3.5 pt-2">
                <div class="flex items-center gap-3">
                  <div class="w-2 h-2 rounded-full bg-brand-red shrink-0"></div>
                  <span class="text-xs sm:text-sm font-mono text-neutral-200">{{ t().prototype.future1 }}</span>
                </div>
                <div class="flex items-center gap-3">
                  <div class="w-2 h-2 rounded-full bg-brand-red shrink-0"></div>
                  <span class="text-xs sm:text-sm font-mono text-neutral-200">{{ t().prototype.future2 }}</span>
                </div>
                <div class="flex items-center gap-3">
                  <div class="w-2 h-2 rounded-full bg-brand-red shrink-0"></div>
                  <span class="text-xs sm:text-sm font-mono text-neutral-200">{{ t().prototype.future3 }}</span>
                </div>
                <div class="flex items-center gap-3">
                  <div class="w-2 h-2 rounded-full bg-brand-red shrink-0"></div>
                  <span class="text-xs sm:text-sm font-mono text-neutral-200">{{ t().prototype.future4 }}</span>
                </div>
                <div class="flex items-center gap-3">
                  <div class="w-2 h-2 rounded-full bg-brand-red shrink-0"></div>
                  <span class="text-xs sm:text-sm font-mono text-neutral-200">{{ t().prototype.future5 }}</span>
                </div>
              </div>

              <!-- CTA -->
              <div class="pt-4">
                <a class="inline-flex items-center gap-2 px-7 py-3.5 bg-brand-red hover:bg-brand-redHover text-white font-tech font-semibold text-xs tracking-wider uppercase rounded transition-colors shadow-lg" href="#colabora">
                  <span>{{ t().prototype.btnFuture }}</span>
                  <i class="w-4 h-4" data-lucide="arrow-right"></i>
                </a>
              </div>
            </div>

            <!-- Right Visual: Concept Image -->
            <div class="lg:col-span-6 bg-[#0e1017] border border-brand-border rounded-2xl p-4 sm:p-6 relative shadow-2xl group">
              <div class="flex items-center justify-between border-b border-brand-border/60 pb-3 mb-4">
                <span class="text-[10px] font-mono tracking-widest text-brand-red uppercase">CONCEPTO ASISTIVO &bull; EXPLORATORIO</span>
                <span class="px-2 py-0.5 rounded text-[9px] font-mono bg-red-950/60 text-red-400 border border-brand-red/40 font-semibold">{{ t().prototype.futurePhase }}</span>
              </div>

              <div class="relative h-[480px] sm:h-[520px] w-full rounded-xl overflow-hidden flex items-center justify-center bg-black p-2">
                <img 
                  src="assets/images/exoskeleton_leg.webp" loading="lazy" decoding="async"
                  alt="Concepto de investigación futura asistiva"
                  class="w-full h-full object-contain object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              <div class="grid grid-cols-3 gap-3 border-t border-brand-border/60 pt-4 text-center mt-2">
                <div>
                  <p class="text-[9px] font-mono text-neutral-500 uppercase">{{ t().prototype.stat1Title }}</p>
                  <p class="text-xs font-tech font-bold text-white">{{ t().prototype.stat1Value }}</p>
                </div>
                <div>
                  <p class="text-[9px] font-mono text-neutral-500 uppercase">{{ t().prototype.stat2Title }}</p>
                  <p class="text-xs font-tech font-bold text-brand-red">{{ t().prototype.stat2Value }}</p>
                </div>
                <div>
                  <p class="text-[9px] font-mono text-neutral-500 uppercase">{{ t().prototype.stat3Title }}</p>
                  <p class="text-xs font-tech font-bold text-white">{{ t().prototype.stat3Value }}</p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  `
})
export class ProductsComponent implements AfterViewInit {
  private ts = inject(TranslationService);

  t = this.ts.t;

  // Los modos de agarre vienen del backend (content_es.json / content_en.json → prototype.grips)
  grips = computed<GripItem[]>(() => this.t().prototype.grips);

  // Guardamos solo el id, así al cambiar de idioma el agarre seleccionado se mantiene
  private selectedId = signal<string>('precision');
  selectedGrip = computed<GripItem>(() => this.grips().find((g: GripItem) => g.id === this.selectedId()) ?? this.grips()[0]);

  ngAfterViewInit() {
    refreshIcons();
  }

  selectGrip(id: string) {
    this.selectedId.set(id);
  }
}
