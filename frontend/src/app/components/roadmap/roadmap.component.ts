import { Component, AfterViewInit, inject } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { refreshIcons } from '../../icons';

@Component({
  selector: 'app-roadmap',
  standalone: true,
  imports: [],
  template: `
    <section class="py-24 border-t border-brand-border bg-gradient-to-b from-brand-black via-[#090a0f] to-brand-black" data-purpose="roadmap-section" id="roadmap">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center gap-2 mb-3">
          <span class="w-2.5 h-0.5 bg-brand-red"></span>
          <span class="text-xs font-tech tracking-widest text-brand-red uppercase font-semibold">{{ t().roadmap.tag }}</span>
        </div>
        <div class="max-w-3xl mb-16">
          <h2 class="text-3xl sm:text-5xl font-bold font-tech text-white uppercase tracking-tight">
            {{ t().roadmap.title }}
          </h2>
          <p class="mt-4 text-neutral-400 text-sm sm:text-base leading-relaxed">
            {{ t().roadmap.desc }}
          </p>
        </div>

        <!-- Roadmap Timeline Grid -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          <!-- Phase 1 -->
          <div class="p-6 bg-brand-card border border-brand-red/60 rounded-xl relative flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-4">
                <span class="text-[10px] font-mono tracking-widest text-brand-red uppercase font-bold">{{ t().roadmap.p1Badge }}</span>
                <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-brand-red/20 text-brand-red">{{ t().roadmap.p1Date }}</span>
              </div>
              <h4 class="text-lg font-tech font-bold text-white uppercase">{{ t().roadmap.p1Title }}</h4>
              <p class="text-xs text-neutral-400 mt-2 leading-relaxed">
                {{ t().roadmap.p1Desc }}
              </p>
            </div>
            <div class="mt-6 pt-4 border-t border-brand-border text-xs font-mono text-brand-red flex items-center gap-1.5">
              <i class="w-4 h-4" data-lucide="check-circle"></i>
              <span>{{ t().roadmap.p1Status }}</span>
            </div>
          </div>

          <!-- Phase 2 -->
          <div class="p-6 bg-brand-card border border-brand-border hover:border-brand-red/50 rounded-xl relative flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-4">
                <span class="text-[10px] font-mono tracking-widest text-neutral-400 uppercase font-bold">{{ t().roadmap.p2Badge }}</span>
                <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-800 text-neutral-300">{{ t().roadmap.p2Date }}</span>
              </div>
              <h4 class="text-lg font-tech font-bold text-white uppercase">{{ t().roadmap.p2Title }}</h4>
              <p class="text-xs text-neutral-400 mt-2 leading-relaxed">
                {{ t().roadmap.p2Desc }}
              </p>
            </div>
            <div class="mt-6 pt-4 border-t border-brand-border text-xs font-mono text-neutral-400 flex items-center gap-1.5">
              <span class="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
              <span>{{ t().roadmap.p2Status }}</span>
            </div>
          </div>

          <!-- Phase 3 -->
          <div class="p-6 bg-brand-card border border-brand-border hover:border-brand-red/50 rounded-xl relative flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-4">
                <span class="text-[10px] font-mono tracking-widest text-neutral-400 uppercase font-bold">{{ t().roadmap.p3Badge }}</span>
                <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-800 text-neutral-300">{{ t().roadmap.p3Date }}</span>
              </div>
              <h4 class="text-lg font-tech font-bold text-white uppercase">{{ t().roadmap.p3Title }}</h4>
              <p class="text-xs text-neutral-400 mt-2 leading-relaxed">
                {{ t().roadmap.p3Desc }}
              </p>
            </div>
            <div class="mt-6 pt-4 border-t border-brand-border text-xs font-mono text-neutral-500 flex items-center gap-1.5">
              <i class="w-4 h-4" data-lucide="clock"></i>
              <span>{{ t().roadmap.p3Status }}</span>
            </div>
          </div>

          <!-- Phase 4 -->
          <div class="p-6 bg-brand-card border border-brand-border hover:border-brand-red/50 rounded-xl relative flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-4">
                <span class="text-[10px] font-mono tracking-widest text-neutral-400 uppercase font-bold">{{ t().roadmap.p4Badge }}</span>
                <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-800 text-neutral-300">{{ t().roadmap.p4Date }}</span>
              </div>
              <h4 class="text-lg font-tech font-bold text-white uppercase">{{ t().roadmap.p4Title }}</h4>
              <p class="text-xs text-neutral-400 mt-2 leading-relaxed">
                {{ t().roadmap.p4Desc }}
              </p>
            </div>
            <div class="mt-6 pt-4 border-t border-brand-border text-xs font-mono text-neutral-500 flex items-center gap-1.5">
              <i class="w-4 h-4" data-lucide="target"></i>
              <span>{{ t().roadmap.p4Status }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class RoadmapComponent implements AfterViewInit {
  private ts = inject(TranslationService);
  t = this.ts.t;

  ngAfterViewInit() {
    refreshIcons();
  }
}
