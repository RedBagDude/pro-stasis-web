import { Component, AfterViewInit, inject } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { refreshIcons } from '../../icons';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [],
  template: `
    <section class="py-24 border-t border-brand-border bg-brand-black" data-purpose="gallery-section">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center gap-2 mb-3">
          <span class="w-2.5 h-0.5 bg-brand-red"></span>
          <span class="text-xs font-tech tracking-widest text-brand-red uppercase font-semibold">{{ t().gallery.tag }}</span>
        </div>
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 class="text-3xl sm:text-5xl font-bold font-tech text-white uppercase tracking-tight">
              {{ t().gallery.title }}
            </h2>
            <p class="mt-2 text-neutral-400 text-sm">
              {{ t().gallery.desc }}
            </p>
          </div>
          <div class="mt-4 md:mt-0 flex items-center gap-2">
            <span class="text-xs font-mono text-neutral-400">{{ t().gallery.location }}</span>
          </div>
        </div>

        <!-- Technical Gallery Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div class="group relative aspect-square bg-[#0f1118] border border-brand-border rounded-lg overflow-hidden flex flex-col justify-end p-4">
            <div class="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-60 transition-opacity">
              <i class="w-24 h-24 text-neutral-600" data-lucide="microchip"></i>
            </div>
            <div class="relative z-10 bg-brand-black/90 p-3 rounded border border-brand-border">
              <span class="text-[9px] font-mono text-brand-red block">{{ t().gallery.item1Tag }}</span>
              <p class="text-xs font-tech font-bold text-white">{{ t().gallery.item1Title }}</p>
            </div>
          </div>

          <div class="group relative aspect-square bg-[#0f1118] border border-brand-border rounded-lg overflow-hidden flex flex-col justify-end p-4">
            <div class="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-60 transition-opacity">
              <i class="w-24 h-24 text-neutral-600" data-lucide="hand"></i>
            </div>
            <div class="relative z-10 bg-brand-black/90 p-3 rounded border border-brand-border">
              <span class="text-[9px] font-mono text-brand-red block">{{ t().gallery.item2Tag }}</span>
              <p class="text-xs font-tech font-bold text-white">{{ t().gallery.item2Title }}</p>
            </div>
          </div>

          <div class="group relative aspect-square bg-[#0f1118] border border-brand-border rounded-lg overflow-hidden flex flex-col justify-end p-4">
            <div class="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-60 transition-opacity">
              <i class="w-24 h-24 text-neutral-600" data-lucide="activity"></i>
            </div>
            <div class="relative z-10 bg-brand-black/90 p-3 rounded border border-brand-border">
              <span class="text-[9px] font-mono text-brand-red block">{{ t().gallery.item3Tag }}</span>
              <p class="text-xs font-tech font-bold text-white">{{ t().gallery.item3Title }}</p>
            </div>
          </div>

          <div class="group relative aspect-square bg-[#0f1118] border border-brand-border rounded-lg overflow-hidden flex flex-col justify-end p-4">
            <div class="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-60 transition-opacity">
              <i class="w-24 h-24 text-neutral-600" data-lucide="shield-check"></i>
            </div>
            <div class="relative z-10 bg-brand-black/90 p-3 rounded border border-brand-border">
              <span class="text-[9px] font-mono text-brand-red block">{{ t().gallery.item4Tag }}</span>
              <p class="text-xs font-tech font-bold text-white">{{ t().gallery.item4Title }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class GalleryComponent implements AfterViewInit {
  private ts = inject(TranslationService);
  t = this.ts.t;

  ngAfterViewInit() {
    refreshIcons();
  }
}
