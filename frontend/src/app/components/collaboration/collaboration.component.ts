import { Component, AfterViewInit, inject } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { refreshIcons } from '../../icons';

@Component({
  selector: 'app-collaboration',
  standalone: true,
  imports: [],
  template: `
    <section class="py-24 border-t border-brand-border bg-brand-dark/40" data-purpose="eye-section" id="eye">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- PROYECTO EYE (PDF Página 9) -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-28">
          
          <!-- Left: Copy & Details -->
          <div class="lg:col-span-7 space-y-6">
            <div class="flex items-center gap-2 mb-2">
              <span class="w-2.5 h-0.5 bg-brand-red"></span>
              <span class="text-xs font-tech tracking-widest text-brand-red uppercase font-semibold">{{ t().eye.tag }}</span>
            </div>
            
            <h2 class="text-3xl sm:text-5xl font-bold font-tech text-white uppercase tracking-tight">
              {{ t().eye.title }}
            </h2>
            <div class="text-xs font-mono text-brand-red font-semibold uppercase tracking-wider">
              {{ t().eye.subtitle }}
            </div>

            <p class="text-neutral-300 text-sm sm:text-base leading-relaxed">
              {{ t().eye.desc1 }}
            </p>
            <p class="text-neutral-400 text-xs sm:text-sm leading-relaxed">
              {{ t().eye.desc2 }}
            </p>

            <!-- Learning Goals -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div class="p-3.5 bg-brand-card/80 border border-brand-border rounded-xl flex items-center gap-3">
                <i class="w-4 h-4 text-brand-red shrink-0" data-lucide="settings"></i>
                <span class="text-xs font-mono text-neutral-200">{{ t().eye.goal1 }}</span>
              </div>
              <div class="p-3.5 bg-brand-card/80 border border-brand-border rounded-xl flex items-center gap-3">
                <i class="w-4 h-4 text-brand-red shrink-0" data-lucide="cpu"></i>
                <span class="text-xs font-mono text-neutral-200">{{ t().eye.goal2 }}</span>
              </div>
              <div class="p-3.5 bg-brand-card/80 border border-brand-border rounded-xl flex items-center gap-3">
                <i class="w-4 h-4 text-brand-red shrink-0" data-lucide="flask-conical"></i>
                <span class="text-xs font-mono text-neutral-200">{{ t().eye.goal3 }}</span>
              </div>
              <div class="p-3.5 bg-brand-card/80 border border-brand-border rounded-xl flex items-center gap-3">
                <i class="w-4 h-4 text-brand-red shrink-0" data-lucide="file-text"></i>
                <span class="text-xs font-mono text-neutral-200">{{ t().eye.goal4 }}</span>
              </div>
            </div>

            <!-- Caution/Transparency note regarding status -->
            <div class="p-4 bg-brand-card border border-brand-border/80 rounded-lg flex items-center gap-3 text-xs font-mono text-neutral-400">
              <span class="px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/30 text-amber-400 font-bold shrink-0">{{ t().eye.statusBadge }}</span>
              <span>{{ t().eye.statusText }}</span>
            </div>
          </div>

          <!-- Right: Visual Info Card -->
          <div class="lg:col-span-5 bg-brand-card border border-brand-border rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
            <div class="absolute -right-12 -top-12 w-48 h-48 bg-brand-red/10 rounded-full blur-3xl"></div>
            <div class="flex items-center justify-between border-b border-brand-border/60 pb-4 mb-6">
              <div>
                <span class="text-[10px] font-mono text-brand-red tracking-widest uppercase font-semibold">COLABORACIÓN INTERNACIONAL</span>
                <h4 class="text-base font-tech font-bold text-white uppercase mt-0.5">Estancia Técnica Prevista</h4>
              </div>
              <div class="px-2.5 py-1 rounded bg-amber-950/60 border border-amber-500/40 text-[10px] font-mono text-amber-300 font-bold">
                Wuhan, China
              </div>
            </div>

            <div class="relative aspect-video w-full rounded-xl overflow-hidden border border-brand-border/60 bg-black mb-6">
              <img 
                src="assets/images/europe_map.webp" loading="lazy" decoding="async"
                alt="Proyección internacional Pro-Stasis"
                class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div class="absolute bottom-3 left-3 bg-brand-black/90 px-3 py-1.5 rounded-lg border border-brand-border text-[10px] font-mono backdrop-blur flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-brand-red animate-ping"></span>
                <span class="text-white font-bold">Aprendizaje técnico y prototipado</span>
              </div>
            </div>

            <div class="space-y-2 text-xs font-mono text-neutral-400">
              <div class="flex justify-between py-1.5 border-b border-brand-border/40">
                <span class="text-neutral-500 uppercase">Marco de trabajo:</span>
                <span class="text-neutral-200">Erasmus for Young Entrepreneurs</span>
              </div>
              <div class="flex justify-between py-1.5 border-b border-brand-border/40">
                <span class="text-neutral-500 uppercase">Destino en planificación:</span>
                <span class="text-neutral-200">Wuhan, China</span>
              </div>
              <div class="flex justify-between py-1.5">
                <span class="text-neutral-500 uppercase">Propósito principal:</span>
                <span class="text-brand-red">Transferencia y validación</span>
              </div>
            </div>
          </div>

        </div>

        <!-- COLABORA CON PRO-STASIS (PDF Página 10) -->
        <div class="border-t border-brand-border/80 pt-20" id="colabora">
          <span id="colaboracion" class="sr-only"></span>
          <div class="flex items-center gap-2 mb-2">
            <span class="w-2.5 h-0.5 bg-brand-red"></span>
            <span class="text-xs font-tech tracking-widest text-brand-red uppercase font-semibold">{{ t().collaboration.tag }}</span>
          </div>

          <div class="max-w-3xl mb-12">
            <h2 class="text-3xl sm:text-5xl font-bold font-tech text-white uppercase tracking-tight">
              {{ t().collaboration.title }}
            </h2>
            <p class="text-neutral-400 text-sm sm:text-base leading-relaxed mt-4">
              {{ t().collaboration.desc }}
            </p>
          </div>

          <!-- Perfiles de Colaboración (5 Perfiles del PDF) -->
          <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-10">
            <div class="p-5 bg-brand-card border border-brand-border hover:border-brand-red/50 rounded-xl transition-colors">
              <div class="w-8 h-8 rounded bg-brand-red/10 text-brand-red border border-brand-red/30 flex items-center justify-center mb-3">
                <i class="w-4 h-4" data-lucide="cpu"></i>
              </div>
              <h5 class="text-xs font-mono font-bold text-white mb-2">Robótica y Mecatrónica</h5>
              <p class="text-[11px] font-mono text-neutral-400 leading-relaxed">{{ t().collaboration.card1 }}</p>
            </div>

            <div class="p-5 bg-brand-card border border-brand-border hover:border-brand-red/50 rounded-xl transition-colors">
              <div class="w-8 h-8 rounded bg-brand-red/10 text-brand-red border border-brand-red/30 flex items-center justify-center mb-3">
                <i class="w-4 h-4" data-lucide="stethoscope"></i>
              </div>
              <h5 class="text-xs font-mono font-bold text-white mb-2">Prótesis y Ortesis</h5>
              <p class="text-[11px] font-mono text-neutral-400 leading-relaxed">{{ t().collaboration.card2 }}</p>
            </div>

            <div class="p-5 bg-brand-card border border-brand-border hover:border-brand-red/50 rounded-xl transition-colors">
              <div class="w-8 h-8 rounded bg-brand-red/10 text-brand-red border border-brand-red/30 flex items-center justify-center mb-3">
                <i class="w-4 h-4" data-lucide="layers"></i>
              </div>
              <h5 class="text-xs font-mono font-bold text-white mb-2">Componentes y Sensores</h5>
              <p class="text-[11px] font-mono text-neutral-400 leading-relaxed">{{ t().collaboration.card3 }}</p>
            </div>

            <div class="p-5 bg-brand-card border border-brand-border hover:border-brand-red/50 rounded-xl transition-colors">
              <div class="w-8 h-8 rounded bg-brand-red/10 text-brand-red border border-brand-red/30 flex items-center justify-center mb-3">
                <i class="w-4 h-4" data-lucide="printer"></i>
              </div>
              <h5 class="text-xs font-mono font-bold text-white mb-2">Fabricación e Impresión 3D</h5>
              <p class="text-[11px] font-mono text-neutral-400 leading-relaxed">{{ t().collaboration.card4 }}</p>
            </div>

            <div class="p-5 bg-brand-card border border-brand-border hover:border-brand-red/50 rounded-xl transition-colors">
              <div class="w-8 h-8 rounded bg-brand-red/10 text-brand-red border border-brand-red/30 flex items-center justify-center mb-3">
                <i class="w-4 h-4" data-lucide="terminal"></i>
              </div>
              <h5 class="text-xs font-mono font-bold text-white mb-2">Software y Evaluación</h5>
              <p class="text-[11px] font-mono text-neutral-400 leading-relaxed">{{ t().collaboration.card5 }}</p>
            </div>
          </div>

          <!-- Call to Action Banner (PDF Página 10) -->
          <div class="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-brand-card via-brand-card to-brand-red/10 border border-brand-border flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div class="max-w-2xl">
              <p class="text-sm sm:text-base font-tech font-bold text-white tracking-wide">
                {{ t().collaboration.callToAction }}
              </p>
            </div>
            <a class="shrink-0 inline-flex items-center gap-2 px-7 py-3.5 bg-brand-red hover:bg-brand-redHover text-white font-tech font-semibold text-xs tracking-wider uppercase rounded transition-colors shadow-lg" href="#contacto">
              <span>{{ t().collaboration.btnCollab }}</span>
              <i class="w-4 h-4" data-lucide="arrow-right"></i>
            </a>
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
