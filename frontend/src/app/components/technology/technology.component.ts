import { Component, AfterViewInit, inject } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { refreshIcons } from '../../icons';

@Component({
  selector: 'app-technology',
  standalone: true,
  imports: [],
  template: `
    <section class="py-24 border-t border-brand-border relative bg-gradient-to-b from-brand-black to-brand-dark/40" data-purpose="technology-section" id="tecnologia">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Section Tag -->
        <div class="flex items-center gap-2 mb-3">
          <span class="w-2.5 h-0.5 bg-brand-red"></span>
          <span class="text-xs font-tech tracking-widest text-brand-red uppercase font-semibold">{{ t().technology.tag }}</span>
        </div>

        <!-- Section Title & Subtitle -->
        <div class="max-w-3xl mb-16">
          <h2 class="text-3xl sm:text-5xl font-bold font-tech text-white uppercase tracking-tight">
            {{ t().technology.title }}
          </h2>
          <p class="mt-4 text-neutral-400 text-sm sm:text-base leading-relaxed">
            {{ t().technology.description }}
          </p>
        </div>

        <!-- Feature Matrix & Architecture Diagram -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <!-- Left Features List -->
          <div class="lg:col-span-6 space-y-4">
            
            <div class="p-5 rounded-lg bg-brand-card/50 border border-brand-border hover:border-brand-red/40 transition-colors group">
              <div class="flex items-start gap-4">
                <div class="p-2.5 rounded bg-brand-red/10 border border-brand-red/30 text-brand-red group-hover:bg-brand-red group-hover:text-white transition-colors">
                  <i class="w-5 h-5" data-lucide="printer"></i>
                </div>
                <div>
                  <h4 class="text-sm font-tech font-bold uppercase text-white tracking-wide">{{ t().technology.f1Title }}</h4>
                  <p class="text-xs text-neutral-400 mt-1 leading-relaxed">{{ t().technology.f1Desc }}</p>
                </div>
              </div>
            </div>

            <div class="p-5 rounded-lg bg-brand-card/50 border border-brand-border hover:border-brand-red/40 transition-colors group">
              <div class="flex items-start gap-4">
                <div class="p-2.5 rounded bg-brand-red/10 border border-brand-red/30 text-brand-red group-hover:bg-brand-red group-hover:text-white transition-colors">
                  <i class="w-5 h-5" data-lucide="settings"></i>
                </div>
                <div>
                  <h4 class="text-sm font-tech font-bold uppercase text-white tracking-wide">{{ t().technology.f2Title }}</h4>
                  <p class="text-xs text-neutral-400 mt-1 leading-relaxed">{{ t().technology.f2Desc }}</p>
                </div>
              </div>
            </div>

            <div class="p-5 rounded-lg bg-brand-card/50 border border-brand-border hover:border-brand-red/40 transition-colors group">
              <div class="flex items-start gap-4">
                <div class="p-2.5 rounded bg-brand-red/10 border border-brand-red/30 text-brand-red group-hover:bg-brand-red group-hover:text-white transition-colors">
                  <i class="w-5 h-5" data-lucide="cpu"></i>
                </div>
                <div>
                  <h4 class="text-sm font-tech font-bold uppercase text-white tracking-wide">{{ t().technology.f3Title }}</h4>
                  <p class="text-xs text-neutral-400 mt-1 leading-relaxed">{{ t().technology.f3Desc }}</p>
                </div>
              </div>
            </div>

            <div class="p-5 rounded-lg bg-brand-card/50 border border-brand-border hover:border-brand-red/40 transition-colors group">
              <div class="flex items-start gap-4">
                <div class="p-2.5 rounded bg-brand-red/10 border border-brand-red/30 text-brand-red group-hover:bg-brand-red group-hover:text-white transition-colors">
                  <i class="w-5 h-5" data-lucide="compass"></i>
                </div>
                <div>
                  <h4 class="text-sm font-tech font-bold uppercase text-white tracking-wide">{{ t().technology.f4Title }}</h4>
                  <p class="text-xs text-neutral-400 mt-1 leading-relaxed">{{ t().technology.f4Desc }}</p>
                </div>
              </div>
            </div>

            <div class="p-5 rounded-lg bg-brand-card/50 border border-brand-border hover:border-brand-red/40 transition-colors group">
              <div class="flex items-start gap-4">
                <div class="p-2.5 rounded bg-brand-red/10 border border-brand-red/30 text-brand-red group-hover:bg-brand-red group-hover:text-white transition-colors">
                  <i class="w-5 h-5" data-lucide="layers"></i>
                </div>
                <div>
                  <h4 class="text-sm font-tech font-bold uppercase text-white tracking-wide">{{ t().technology.f5Title }}</h4>
                  <p class="text-xs text-neutral-400 mt-1 leading-relaxed">{{ t().technology.f5Desc }}</p>
                </div>
              </div>
            </div>

          </div>

          <!-- Right Visual: Render + Architecture Diagram (Page 6) -->
          <div class="lg:col-span-6 space-y-6">
            <div class="relative w-full bg-[#0a0b10] border border-brand-border rounded-2xl overflow-hidden shadow-2xl p-2 group">
              <div class="relative aspect-[3/4] w-full rounded-xl overflow-hidden flex items-center justify-center bg-black">
                <img 
                  src="assets/images/tech_arm.webp" loading="lazy" decoding="async"
                  alt="Esquema Biomecatrónico de Sensores y Tendones"
                  class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none"></div>
                
                <!-- Technical Badges -->
                <div class="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-white/90 bg-black/60 backdrop-blur px-4 py-2 rounded-lg border border-white/10">
                  <span class="flex items-center gap-1.5 text-brand-red">
                    <span class="w-2 h-2 rounded-full bg-brand-red animate-pulse"></span>
                    {{ t().technology.hudSync }}
                  </span>
                  <span class="text-neutral-400">{{ t().technology.hudLatency }}</span>
                </div>
              </div>
            </div>

            <!-- Diagrama fiel al sistema real (PDF Página 6) -->
            <div class="p-5 rounded-xl bg-brand-card/60 border border-brand-border">
              <div class="text-[10px] font-mono tracking-widest text-brand-red uppercase mb-3 text-center font-semibold">ARQUITECTURA DEL SISTEMA REAL</div>
              <div class="grid grid-cols-3 gap-2 text-center items-center">
                <div class="p-3 bg-black/60 rounded border border-brand-border/80">
                  <div class="text-[9px] font-mono text-neutral-400 uppercase">Controlador</div>
                  <div class="text-xs font-tech font-bold text-white mt-0.5">XIAO ESP32-C6</div>
                </div>
                <div class="p-3 bg-black/60 rounded border border-brand-border/80">
                  <div class="text-[9px] font-mono text-neutral-400 uppercase">Actuadores</div>
                  <div class="text-xs font-tech font-bold text-white mt-0.5">Servomotores</div>
                </div>
                <div class="p-3 bg-black/60 rounded border border-brand-border/80">
                  <div class="text-[9px] font-mono text-neutral-400 uppercase">Respuesta</div>
                  <div class="text-xs font-tech font-bold text-white mt-0.5">Movimiento Mano</div>
                </div>
              </div>
              <div class="mt-3 pt-3 border-t border-brand-border/50 flex items-center justify-center gap-2 text-[11px] font-mono text-neutral-300">
                <i class="w-4 h-4 text-brand-red shrink-0" data-lucide="compass"></i>
                <span>Fuente de datos inerciales: Sensor MPU6050 (Acelerómetro + Giroscopio)</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  `
})
export class TechnologyComponent implements AfterViewInit {
  private ts = inject(TranslationService);
  t = this.ts.t;

  ngAfterViewInit() {
    refreshIcons();
  }
}
