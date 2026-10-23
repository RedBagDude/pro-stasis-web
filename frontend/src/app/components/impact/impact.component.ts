import { Component, AfterViewInit, inject } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { refreshIcons } from '../../icons';

@Component({
  selector: 'app-impact',
  standalone: true,
  imports: [],
  template: `
    <section class="py-24 border-t border-brand-border bg-brand-black" data-purpose="impact-section" id="impacto">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center gap-2 mb-3">
          <span class="w-2.5 h-0.5 bg-brand-red"></span>
          <span class="text-xs font-tech tracking-widest text-brand-red uppercase font-semibold">{{ t().impact.tag }}</span>
        </div>
        <div class="max-w-3xl mb-16">
          <h2 class="text-3xl sm:text-5xl font-bold font-tech text-white uppercase tracking-tight">
            {{ t().impact.title }}
          </h2>
          <p class="mt-4 text-neutral-400 text-sm sm:text-base leading-relaxed">
            {{ t().impact.desc }}
          </p>
        </div>

        <!-- Impact Metrics / Values -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="p-6 bg-brand-card/60 border border-brand-border rounded-xl hover:border-brand-red/50 transition-colors">
            <div class="w-10 h-10 rounded bg-brand-red/10 border border-brand-red/30 flex items-center justify-center text-brand-red mb-4">
              <i class="w-5 h-5" data-lucide="user-check"></i>
            </div>
            <h4 class="text-base font-tech font-bold text-white uppercase">{{ t().impact.c1Title }}</h4>
            <p class="text-xs text-neutral-400 mt-2 leading-relaxed">
              {{ t().impact.c1Desc }}
            </p>
          </div>

          <div class="p-6 bg-brand-card/60 border border-brand-border rounded-xl hover:border-brand-red/50 transition-colors">
            <div class="w-10 h-10 rounded bg-brand-red/10 border border-brand-red/30 flex items-center justify-center text-brand-red mb-4">
              <i class="w-5 h-5" data-lucide="dollar-sign"></i>
            </div>
            <h4 class="text-base font-tech font-bold text-white uppercase">{{ t().impact.c2Title }}</h4>
            <p class="text-xs text-neutral-400 mt-2 leading-relaxed">
              {{ t().impact.c2Desc }}
            </p>
          </div>

          <div class="p-6 bg-brand-card/60 border border-brand-border rounded-xl hover:border-brand-red/50 transition-colors">
            <div class="w-10 h-10 rounded bg-brand-red/10 border border-brand-red/30 flex items-center justify-center text-brand-red mb-4">
              <i class="w-5 h-5" data-lucide="leaf"></i>
            </div>
            <h4 class="text-base font-tech font-bold text-white uppercase">{{ t().impact.c3Title }}</h4>
            <p class="text-xs text-neutral-400 mt-2 leading-relaxed">
              {{ t().impact.c3Desc }}
            </p>
          </div>

          <div class="p-6 bg-brand-card/60 border border-brand-border rounded-xl hover:border-brand-red/50 transition-colors">
            <div class="w-10 h-10 rounded bg-brand-red/10 border border-brand-red/30 flex items-center justify-center text-brand-red mb-4">
              <i class="w-5 h-5" data-lucide="activity"></i>
            </div>
            <h4 class="text-base font-tech font-bold text-white uppercase">{{ t().impact.c4Title }}</h4>
            <p class="text-xs text-neutral-400 mt-2 leading-relaxed">
              {{ t().impact.c4Desc }}
            </p>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ImpactComponent implements AfterViewInit {
  private ts = inject(TranslationService);
  t = this.ts.t;

  ngAfterViewInit() {
    refreshIcons();
  }
}
