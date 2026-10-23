import { Component, AfterViewInit, inject } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { refreshIcons } from '../../icons';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  template: `
    <section class="py-24 border-t border-brand-border bg-[#08090d]" data-purpose="about-section" id="empresa">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Section Tag -->
        <div class="flex items-center gap-2 mb-3">
          <span class="w-2.5 h-0.5 bg-brand-red"></span>
          <span class="text-xs font-tech tracking-widest text-brand-red uppercase font-semibold">{{ t().about.tag }}</span>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          <div class="lg:col-span-7 space-y-6">
            <h2 class="text-3xl sm:text-5xl font-bold font-tech text-white uppercase tracking-tight">
              {{ t().about.title }}
            </h2>
            <p class="text-neutral-400 text-base sm:text-lg leading-relaxed">
              {{ t().about.desc }}
            </p>

            <!-- 3 Pillars -->
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
              <div class="p-5 bg-brand-card/70 border border-brand-border rounded-xl">
                <div class="w-9 h-9 rounded-lg bg-brand-red/10 border border-brand-red/30 flex items-center justify-center text-brand-red mb-3">
                  <i class="w-5 h-5" data-lucide="lightbulb"></i>
                </div>
                <h4 class="text-xs font-tech font-bold uppercase text-white tracking-wider">{{ t().about.p1Title }}</h4>
                <p class="text-[11px] font-mono text-neutral-400 mt-1">{{ t().about.p1Desc }}</p>
              </div>
              <div class="p-5 bg-brand-card/70 border border-brand-border rounded-xl">
                <div class="w-9 h-9 rounded-lg bg-brand-red/10 border border-brand-red/30 flex items-center justify-center text-brand-red mb-3">
                  <i class="w-5 h-5" data-lucide="heart"></i>
                </div>
                <h4 class="text-xs font-tech font-bold uppercase text-white tracking-wider">{{ t().about.p2Title }}</h4>
                <p class="text-[11px] font-mono text-neutral-400 mt-1">{{ t().about.p2Desc }}</p>
              </div>
              <div class="p-5 bg-brand-card/70 border border-brand-border rounded-xl">
                <div class="w-9 h-9 rounded-lg bg-brand-red/10 border border-brand-red/30 flex items-center justify-center text-brand-red mb-3">
                  <i class="w-5 h-5" data-lucide="recycle"></i>
                </div>
                <h4 class="text-xs font-tech font-bold uppercase text-white tracking-wider">{{ t().about.p3Title }}</h4>
                <p class="text-[11px] font-mono text-neutral-400 mt-1">{{ t().about.p3Desc }}</p>
              </div>
            </div>
          </div>

          <!-- Right Badge: Canarias Origin -->
          <div class="lg:col-span-5 bg-brand-card/50 border border-brand-border rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden shadow-2xl">
            <div class="absolute -right-8 -bottom-8 w-44 h-44 bg-brand-red/10 rounded-full blur-3xl"></div>
            <div>
              <span class="text-[10px] font-mono text-brand-red tracking-widest uppercase font-semibold">{{ t().about.badgeOrigin }}</span>
              <h3 class="text-2xl font-tech font-bold text-white uppercase mt-2">{{ t().about.originTitle }}</h3>
              <p class="text-xs font-normal text-neutral-400 leading-relaxed mt-3">
                {{ t().about.originDesc }}
              </p>
            </div>
            <div class="pt-8 flex items-center justify-between border-t border-brand-border/60 mt-6">
              <div class="flex items-center gap-2">
                <i class="w-4 h-4 text-brand-red" data-lucide="map-pin"></i>
                <span class="text-xs font-mono text-neutral-300">{{ t().about.originLocation }}</span>
              </div>
              <span class="text-[11px] font-mono text-neutral-500">{{ t().about.originRegion }}</span>
            </div>
          </div>
        </div>

        <!-- Nuestro Equipo Section -->
        <div class="border-t border-brand-border pt-16" data-purpose="team-section">
          <div class="flex items-center gap-2 mb-3">
            <span class="w-2.5 h-0.5 bg-brand-red"></span>
            <span class="text-xs font-tech tracking-widest text-brand-red uppercase font-semibold">{{ t().about.teamTag }}</span>
          </div>
          <div class="max-w-2xl mb-12">
            <h3 class="text-3xl sm:text-4xl font-bold font-tech text-white uppercase tracking-tight">
              {{ t().about.teamTitle }}
            </h3>
            <p class="text-neutral-400 text-sm mt-2">
              {{ t().about.teamSubtitle }}
            </p>
          </div>

          <!-- 4 Team Members Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <!-- Member 1: Yahia -->
            <div class="bg-brand-card border border-brand-border rounded-2xl overflow-hidden group hover:border-brand-red/60 transition-all duration-300 flex flex-col shadow-xl">
              <div class="w-full aspect-[3/4] bg-black relative overflow-hidden flex items-center justify-center border-b border-brand-border/60">
                <img 
                  src="assets/images/team_1.webp" loading="lazy" decoding="async"
                  alt="Yahia"
                  class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div class="absolute bottom-3 left-3 bg-brand-black/90 px-2.5 py-1 rounded border border-brand-border backdrop-blur">
                  <span class="text-[10px] font-mono text-brand-red font-bold">{{ t().about.member1Badge }}</span>
                </div>
              </div>
              <div class="p-5">
                <h4 class="text-base font-tech font-bold text-white tracking-wide">{{ t().about.member1Name }}</h4>
                <p class="text-xs font-mono text-brand-red uppercase mt-0.5">{{ t().about.member1Role }}</p>
                <p class="text-xs text-neutral-400 mt-2 leading-relaxed">
                  {{ t().about.member1Desc }}
                </p>
              </div>
            </div>

            <!-- Member 2: Jonathan -->
            <div class="bg-brand-card border border-brand-border rounded-2xl overflow-hidden group hover:border-brand-red/60 transition-all duration-300 flex flex-col shadow-xl">
              <div class="w-full aspect-[3/4] bg-black relative overflow-hidden flex items-center justify-center border-b border-brand-border/60">
                <img 
                  src="assets/images/team_2.webp" loading="lazy" decoding="async"
                  alt="Jonathan"
                  class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div class="absolute bottom-3 left-3 bg-brand-black/90 px-2.5 py-1 rounded border border-brand-border backdrop-blur">
                  <span class="text-[10px] font-mono text-brand-red font-bold">{{ t().about.member2Badge }}</span>
                </div>
              </div>
              <div class="p-5">
                <h4 class="text-base font-tech font-bold text-white tracking-wide">{{ t().about.member2Name }}</h4>
                <p class="text-xs font-mono text-brand-red uppercase mt-0.5">{{ t().about.member2Role }}</p>
                <p class="text-xs text-neutral-400 mt-2 leading-relaxed">
                  {{ t().about.member2Desc }}
                </p>
              </div>
            </div>

            <!-- Member 3: Iván -->
            <div class="bg-brand-card border border-brand-border rounded-2xl overflow-hidden group hover:border-brand-red/60 transition-all duration-300 flex flex-col shadow-xl">
              <div class="w-full aspect-[3/4] bg-black relative overflow-hidden flex items-center justify-center border-b border-brand-border/60">
                <img 
                  src="assets/images/team_4.webp" loading="lazy" decoding="async"
                  alt="Iván"
                  class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div class="absolute bottom-3 left-3 bg-brand-black/90 px-2.5 py-1 rounded border border-brand-border backdrop-blur">
                  <span class="text-[10px] font-mono text-brand-red font-bold">{{ t().about.member3Badge }}</span>
                </div>
              </div>
              <div class="p-5">
                <h4 class="text-base font-tech font-bold text-white tracking-wide">{{ t().about.member3Name }}</h4>
                <p class="text-xs font-mono text-brand-red uppercase mt-0.5">{{ t().about.member3Role }}</p>
                <p class="text-xs text-neutral-400 mt-2 leading-relaxed">
                  {{ t().about.member3Desc }}
                </p>
              </div>
            </div>

            <!-- Member 4: Hassaan -->
            <div class="bg-brand-card border border-brand-border rounded-2xl overflow-hidden group hover:border-brand-red/60 transition-all duration-300 flex flex-col shadow-xl">
              <div class="w-full aspect-[3/4] bg-black relative overflow-hidden flex items-center justify-center border-b border-brand-border/60">
                <img 
                  src="assets/images/team_3.webp" loading="lazy" decoding="async"
                  alt="Hassaan"
                  class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div class="absolute bottom-3 left-3 bg-brand-black/90 px-2.5 py-1 rounded border border-brand-border backdrop-blur">
                  <span class="text-[10px] font-mono text-brand-red font-bold">{{ t().about.member4Badge }}</span>
                </div>
              </div>
              <div class="p-5">
                <h4 class="text-base font-tech font-bold text-white tracking-wide">{{ t().about.member4Name }}</h4>
                <p class="text-xs font-mono text-brand-red uppercase mt-0.5">{{ t().about.member4Role }}</p>
                <p class="text-xs text-neutral-400 mt-2 leading-relaxed">
                  {{ t().about.member4Desc }}
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  `
})
export class AboutComponent implements AfterViewInit {
  private ts = inject(TranslationService);
  t = this.ts.t;

  ngAfterViewInit() {
    refreshIcons();
  }
}
