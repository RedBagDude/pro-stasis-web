import { Component, AfterViewInit, inject } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { refreshIcons } from '../../icons';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  template: `
    <section class="relative min-h-screen pt-28 pb-16 flex flex-col justify-between overflow-hidden bg-brand-black" data-purpose="hero-section" id="inicio">
      <!-- Ambient Glows -->
      <div class="absolute top-1/4 left-1/4 -translate-x-1/2 w-96 h-96 bg-brand-red/15 blur-[140px] pointer-events-none rounded-full"></div>
      <div class="absolute -top-10 right-0 w-[550px] h-[550px] bg-red-950/20 blur-[180px] pointer-events-none rounded-full"></div>
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 flex-1 flex flex-col justify-center">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto">
          
          <!-- Left Column: Copy & CTAs -->
          <div class="lg:col-span-6 space-y-6">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded bg-red-950/50 border border-brand-red/40">
              <span class="w-2 h-2 rounded-full bg-brand-red animate-pulse"></span>
              <span class="text-[11px] font-mono tracking-widest uppercase text-red-400">{{ t().hero.badge }}</span>
            </div>
            
            <h1 class="text-4xl sm:text-6xl xl:text-7xl font-bold font-tech tracking-tight text-white uppercase leading-[1.05]">
              {{ t().hero.title1 }} <br/>
              {{ t().hero.title2 }} <br/>
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-red via-red-500 to-white">{{ t().hero.title3 }}</span>
            </h1>
            
            <p class="text-base sm:text-lg text-neutral-400 max-w-xl font-normal leading-relaxed">
              {{ t().hero.subtitle }}
            </p>
            
            <!-- Buttons -->
            <div class="flex flex-wrap items-center gap-4 pt-2">
              <a class="inline-flex items-center gap-2 px-7 py-3.5 bg-brand-red hover:bg-brand-redHover text-white font-tech font-semibold text-xs tracking-wider uppercase rounded transition-all duration-200 glow-red shadow-lg" href="#tecnologia">
                <span>{{ t().hero.btnTech }}</span>
                <i class="w-4 h-4" data-lucide="arrow-right"></i>
              </a>
              <a href="#contacto" class="inline-flex items-center gap-2 px-6 py-3.5 bg-brand-card hover:bg-neutral-800 text-neutral-200 border border-brand-border rounded font-tech text-xs tracking-wider uppercase transition-colors">
                <i class="w-4 h-4 text-brand-red" data-lucide="play-circle"></i>
                <span>{{ t().hero.btnVideo }}</span>
              </a>
            </div>
          </div>

          <!-- Right Column: Visual 3D Bionic Hand Render -->
          <div class="lg:col-span-6 relative flex items-center justify-center">
            <div class="relative w-full max-w-lg aspect-square rounded-2xl border border-brand-border bg-gradient-to-b from-[#11131c] to-[#07080c] p-3 overflow-hidden shadow-2xl group">
              
              <!-- HUD Top Bar -->
              <div class="absolute top-4 left-6 right-6 z-20 flex items-center justify-between border-b border-white/10 pb-2">
                <span class="text-[10px] font-mono text-brand-red tracking-widest uppercase flex items-center gap-1.5">
                  <span class="w-1.5 h-1.5 bg-brand-red rounded-full animate-ping"></span>
                  {{ t().hero.hudStatus }}
                </span>
                <span class="text-[10px] font-mono text-neutral-400">{{ t().hero.hudSensors }}</span>
              </div>

              <!-- High Res 3D Bionic Hand Image -->
              <div class="w-full h-full rounded-xl overflow-hidden relative flex items-center justify-center">
                <img 
                  src="assets/images/hero_hand.webp" fetchpriority="high" decoding="async"
                  alt="Mano Robótica Biónica Pro-Stasis" 
                  class="w-full h-full object-cover object-center scale-105 group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-[#07080c] via-transparent to-transparent opacity-80"></div>
                <div class="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/30"></div>
              </div>

              <!-- HUD Bottom Info Overlay -->
              <div class="absolute bottom-4 left-6 right-6 z-20 border-t border-white/10 pt-2 flex items-center justify-between text-[11px] font-mono text-neutral-300">
                <span class="flex items-center gap-1.5">
                  <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  {{ t().hero.hudEmg }}
                </span>
                <span class="text-brand-red font-semibold">{{ t().hero.hudGrips }}</span>
              </div>

            </div>
          </div>

        </div>

        <!-- Metric Cards 01 / 02 / 03 -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 border-t border-brand-border/80 mt-12">
          <div class="p-5 bg-brand-card/70 border border-brand-border hover:border-brand-red/50 rounded-xl flex items-center gap-4 transition-colors">
            <span class="text-3xl font-bold font-tech text-brand-red">01</span>
            <div>
              <div class="text-sm font-tech font-bold text-white uppercase tracking-wide">{{ t().hero.metric01Title }}</div>
              <div class="text-xs font-mono text-neutral-400">{{ t().hero.metric01Desc }}</div>
            </div>
          </div>
          <div class="p-5 bg-brand-card/70 border border-brand-border hover:border-brand-red/50 rounded-xl flex items-center gap-4 transition-colors">
            <span class="text-3xl font-bold font-tech text-brand-red">02</span>
            <div>
              <div class="text-sm font-tech font-bold text-white uppercase tracking-wide">{{ t().hero.metric02Title }}</div>
              <div class="text-xs font-mono text-neutral-400">{{ t().hero.metric02Desc }}</div>
            </div>
          </div>
          <div class="p-5 bg-brand-card/70 border border-brand-border hover:border-brand-red/50 rounded-xl flex items-center gap-4 transition-colors">
            <span class="text-3xl font-bold font-tech text-brand-red">03</span>
            <div>
              <div class="text-sm font-tech font-bold text-white uppercase tracking-wide">{{ t().hero.metric03Title }}</div>
              <div class="text-xs font-mono text-neutral-400">{{ t().hero.metric03Desc }}</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  `
})
export class HeroComponent implements AfterViewInit {
  private ts = inject(TranslationService);
  t = this.ts.t;

  ngAfterViewInit() {
    refreshIcons();
  }
}
