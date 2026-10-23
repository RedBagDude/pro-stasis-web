import { Component, AfterViewInit, inject } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { refreshIcons } from '../../icons';

@Component({
  selector: 'app-collaboration',
  standalone: true,
  imports: [],
  template: `
    <section class="py-24 border-t border-brand-border bg-brand-dark/40" data-purpose="collaboration-section" id="colaboracion">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <!-- Left: Copy & Alliances -->
          <div class="lg:col-span-6 space-y-6">
            <div class="flex items-center gap-2 mb-2">
              <span class="w-2.5 h-0.5 bg-brand-red"></span>
              <span class="text-xs font-tech tracking-widest text-brand-red uppercase font-semibold">{{ t().collaboration.tag }}</span>
            </div>
            
            <h2 class="text-3xl sm:text-5xl font-bold font-tech text-white uppercase tracking-tight">
              {{ t().collaboration.title }}
            </h2>
            <p class="text-neutral-400 text-sm sm:text-base leading-relaxed">
              {{ t().collaboration.desc }}
            </p>

            <!-- Collaboration Pillars Cards -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div class="p-4 bg-brand-card border border-brand-border rounded-xl flex items-center gap-3">
                <div class="p-2.5 bg-brand-red/10 text-brand-red rounded-lg border border-brand-red/30">
                  <i class="w-4 h-4" data-lucide="network"></i>
                </div>
                <span class="text-xs font-mono text-neutral-200">{{ t().collaboration.card1 }}</span>
              </div>
              <div class="p-4 bg-brand-card border border-brand-border rounded-xl flex items-center gap-3">
                <div class="p-2.5 bg-brand-red/10 text-brand-red rounded-lg border border-brand-red/30">
                  <i class="w-4 h-4" data-lucide="stethoscope"></i>
                </div>
                <span class="text-xs font-mono text-neutral-200">{{ t().collaboration.card2 }}</span>
              </div>
              <div class="p-4 bg-brand-card border border-brand-border rounded-xl flex items-center gap-3">
                <div class="p-2.5 bg-brand-red/10 text-brand-red rounded-lg border border-brand-red/30">
                  <i class="w-4 h-4" data-lucide="graduation-cap"></i>
                </div>
                <span class="text-xs font-mono text-neutral-200">{{ t().collaboration.card3 }}</span>
              </div>
              <div class="p-4 bg-brand-card border border-brand-border rounded-xl flex items-center gap-3">
                <div class="p-2.5 bg-brand-red/10 text-brand-red rounded-lg border border-brand-red/30">
                  <i class="w-4 h-4" data-lucide="printer"></i>
                </div>
                <span class="text-xs font-mono text-neutral-200">{{ t().collaboration.card4 }}</span>
              </div>
            </div>

            <div class="pt-4">
              <a class="inline-flex items-center gap-2 px-7 py-3.5 bg-brand-red hover:bg-brand-redHover text-white font-tech font-semibold text-xs tracking-wider uppercase rounded transition-colors shadow-lg" href="#contacto">
                <span>{{ t().collaboration.btnCollab }}</span>
                <i class="w-4 h-4" data-lucide="arrow-right"></i>
              </a>
            </div>
          </div>

          <!-- Right: European Network Cyber Map -->
          <div class="lg:col-span-6 bg-brand-card border border-brand-border rounded-2xl p-4 sm:p-6 shadow-2xl relative group overflow-hidden">
            <div class="flex items-center justify-between border-b border-brand-border/60 pb-3 mb-4">
              <div>
                <span class="text-[10px] font-mono text-brand-red tracking-widest uppercase font-semibold">{{ t().collaboration.badgeEu }}</span>
                <h4 class="text-xs font-tech font-bold text-white uppercase mt-0.5">{{ t().collaboration.euTitle }}</h4>
              </div>
              <div class="px-2.5 py-1 rounded bg-blue-950/80 border border-blue-500/30 text-[10px] font-mono text-blue-300 flex items-center gap-1.5">
                <span class="text-amber-400">&starf;</span>
                {{ t().collaboration.euTag }}
              </div>
            </div>

            <!-- Map Graphic Container -->
            <div class="relative aspect-video w-full rounded-xl overflow-hidden border border-brand-border/60 bg-black">
              <img 
                src="assets/images/europe_map.webp" loading="lazy" decoding="async"
                alt="Red de colaboración europea Pro-Stasis"
                class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              <!-- Canary Island Pin Callout -->
              <div class="absolute bottom-3 left-3 bg-brand-black/90 px-3 py-1.5 rounded-lg border border-brand-red/50 text-[10px] font-mono backdrop-blur flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-brand-red animate-ping"></span>
                <span class="text-white font-bold">{{ t().collaboration.euLab }}</span>
              </div>
            </div>

            <p class="text-[11px] font-mono text-neutral-400 mt-4 leading-relaxed">
              {{ t().collaboration.euFooter }}
            </p>
          </div>

        </div>
      </div>
    </section>
  `
})
export class CollaborationComponent implements AfterViewInit {
  private ts = inject(TranslationService);
  t = this.ts.t;

  ngAfterViewInit() {
    refreshIcons();
  }
}
