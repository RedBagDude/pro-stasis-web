import { Component, AfterViewInit, inject } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { refreshIcons } from '../../icons';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `
    <footer class="border-t border-brand-border bg-[#050507] py-12" data-purpose="site-footer">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-brand-border/60">
          <!-- Brand & Slogan -->
          <div class="flex items-center gap-3">
            <span class="text-xl font-tech font-bold tracking-wider text-white">PRO<span class="text-brand-red">-</span>STASIS</span>
            <span class="text-neutral-500 font-mono text-xs">/</span>
            <span class="text-xs font-tech tracking-[0.2em] text-neutral-400 uppercase">{{ t().footer.slogan }}</span>
          </div>

          <!-- Social Icons -->
          <div class="flex items-center gap-4 text-neutral-400">
            <a aria-label="LinkedIn" class="p-2 rounded hover:text-brand-red hover:bg-brand-card transition-colors" href="#">
              <i class="w-4 h-4" data-lucide="globe"></i>
            </a>
            <a aria-label="YouTube" class="p-2 rounded hover:text-brand-red hover:bg-brand-card transition-colors" href="#">
              <i class="w-4 h-4" data-lucide="video"></i>
            </a>
            <a aria-label="Instagram" class="p-2 rounded hover:text-brand-red hover:bg-brand-card transition-colors" href="#">
              <i class="w-4 h-4" data-lucide="camera"></i>
            </a>
          </div>
        </div>

        <!-- Copyright & Legal -->
        <div class="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 text-[11px] font-mono text-neutral-500">
          <p>{{ t().footer.copyright }}</p>
          <div class="flex items-center gap-6">
            <a class="hover:text-neutral-300 transition-colors" href="#">{{ t().footer.legal }}</a>
            <a class="hover:text-neutral-300 transition-colors" href="#">{{ t().footer.privacy }}</a>
            <a class="hover:text-neutral-300 transition-colors" href="#">{{ t().footer.cookies }}</a>
          </div>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent implements AfterViewInit {
  private ts = inject(TranslationService);
  t = this.ts.t;

  ngAfterViewInit() {
    refreshIcons();
  }
}
