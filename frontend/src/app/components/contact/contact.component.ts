import { Component, AfterViewInit, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService, ContactPayload } from '../../services/api.service';
import { TranslationService } from '../../services/translation.service';
import { refreshIcons } from '../../icons';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  template: `
    <section class="py-24 border-t border-brand-border bg-[#07080b] relative overflow-hidden" data-purpose="contact-section" id="contacto">
      
      <!-- Planet Earth Background with glowing red horizon -->
      <div class="absolute inset-0 z-0 opacity-25 pointer-events-none">
        <img 
          src="assets/images/earth_contact.webp" loading="lazy" decoding="async"
          alt="Vista orbital Tierra con halo rojo tecnológico" 
          class="w-full h-full object-cover object-center"
        />
        <div class="absolute inset-0 bg-gradient-to-b from-[#07080b] via-transparent to-[#07080b]"></div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <!-- Left: Contact Details -->
          <div class="lg:col-span-5 space-y-6">
            <div class="flex items-center gap-2 mb-2">
              <span class="w-2.5 h-0.5 bg-brand-red"></span>
              <span class="text-xs font-tech tracking-widest text-brand-red uppercase font-semibold">{{ t().contact.tag }}</span>
            </div>
            
            <h2 class="text-3xl sm:text-5xl font-bold font-tech text-white uppercase tracking-tight">
              {{ t().contact.title1 }} <br/>
              <span class="text-brand-red">{{ t().contact.title2 }}</span>
            </h2>
            
            <p class="text-neutral-400 text-sm leading-relaxed max-w-sm">
              {{ t().contact.desc }}
            </p>

            <div class="space-y-4 pt-4">
              <div class="flex items-center gap-3">
                <div class="w-9 h-9 rounded-lg bg-brand-red/10 border border-brand-red/30 flex items-center justify-center text-brand-red">
                  <i class="w-4 h-4" data-lucide="mail"></i>
                </div>
                <span class="text-xs font-mono text-neutral-200">{{ t().contact.email }}</span>
              </div>
              <div class="flex items-center gap-3">
                <div class="w-9 h-9 rounded-lg bg-brand-red/10 border border-brand-red/30 flex items-center justify-center text-brand-red">
                  <i class="w-4 h-4" data-lucide="map-pin"></i>
                </div>
                <span class="text-xs font-mono text-neutral-200">{{ t().contact.location }}</span>
              </div>
              <div class="flex items-center gap-3">
                <div class="w-9 h-9 rounded-lg bg-brand-red/10 border border-brand-red/30 flex items-center justify-center text-brand-red">
                  <i class="w-4 h-4" data-lucide="globe-2"></i>
                </div>
                <span class="text-xs font-mono text-neutral-200">{{ t().contact.availability }}</span>
              </div>
            </div>

            <!-- Local storage status badge -->
            <div class="p-4 bg-brand-card/70 border border-brand-border rounded-xl backdrop-blur">
              <div class="flex items-center justify-between text-[11px] font-mono">
                <span class="text-neutral-400">{{ t().contact.storageTitle }}</span>
                <span class="flex items-center gap-1.5 text-emerald-400 font-semibold">
                  <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  {{ t().contact.storageStatus }}
                </span>
              </div>
            </div>
          </div>

          <!-- Right: Contact Form -->
          <div class="lg:col-span-7 bg-brand-card/85 backdrop-blur-md border border-brand-border rounded-2xl p-6 sm:p-8 shadow-2xl">
            <form (ngSubmit)="onSubmit()" class="space-y-5">
              
              <div>
                <label class="block text-xs font-mono uppercase text-neutral-300 mb-1.5" for="nombre">{{ t().contact.labelName }}</label>
                <input 
                  [(ngModel)]="formData.name" 
                  name="name" 
                  required 
                  class="w-full bg-[#090a10]/90 border border-brand-border rounded-lg px-4 py-3 text-xs font-mono text-white placeholder-neutral-600 focus:outline-none focus:border-brand-red transition-colors" 
                  id="nombre" 
                  [placeholder]="t().contact.placeholderName" 
                  type="text"/>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs font-mono uppercase text-neutral-300 mb-1.5" for="organizacion">{{ t().contact.labelOrg }}</label>
                  <input 
                    [(ngModel)]="formData.role" 
                    name="role" 
                    class="w-full bg-[#090a10]/90 border border-brand-border rounded-lg px-4 py-3 text-xs font-mono text-white placeholder-neutral-600 focus:outline-none focus:border-brand-red transition-colors" 
                    id="organizacion" 
                    [placeholder]="t().contact.placeholderOrg" 
                    type="text"/>
                </div>
                <div>
                  <label class="block text-xs font-mono uppercase text-neutral-300 mb-1.5" for="phone">{{ t().contact.labelPhone }}</label>
                  <input 
                    [(ngModel)]="formData.phone" 
                    name="phone" 
                    class="w-full bg-[#090a10]/90 border border-brand-border rounded-lg px-4 py-3 text-xs font-mono text-white placeholder-neutral-600 focus:outline-none focus:border-brand-red transition-colors" 
                    id="phone" 
                    [placeholder]="t().contact.placeholderPhone" 
                    type="tel"/>
                </div>
              </div>

              <div>
                <label class="block text-xs font-mono uppercase text-neutral-300 mb-1.5" for="email">{{ t().contact.labelEmail }}</label>
                <input 
                  [(ngModel)]="formData.email" 
                  name="email" 
                  required 
                  class="w-full bg-[#090a10]/90 border border-brand-border rounded-lg px-4 py-3 text-xs font-mono text-white placeholder-neutral-600 focus:outline-none focus:border-brand-red transition-colors" 
                  id="email" 
                  [placeholder]="t().contact.placeholderEmail" 
                  type="email"/>
              </div>

              <div>
                <label class="block text-xs font-mono uppercase text-neutral-300 mb-1.5" for="mensaje">{{ t().contact.labelMessage }}</label>
                <textarea 
                  [(ngModel)]="formData.message" 
                  name="message" 
                  required 
                  rows="4"
                  class="w-full bg-[#090a10]/90 border border-brand-border rounded-lg px-4 py-3 text-xs font-mono text-white placeholder-neutral-600 focus:outline-none focus:border-brand-red transition-colors" 
                  id="mensaje" 
                  [placeholder]="t().contact.placeholderMessage"></textarea>
              </div>

              <div class="flex flex-col sm:flex-row items-center gap-4 pt-2">
                <button 
                  [disabled]="loading() || !formData.name || !formData.email || !formData.message"
                  class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-brand-red hover:bg-brand-redHover disabled:opacity-50 disabled:cursor-not-allowed text-white font-tech font-semibold text-xs tracking-wider uppercase rounded-lg transition-colors shadow-lg cursor-pointer" 
                  type="submit">
                  @if (loading()) {
                    <span class="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin"></span>
                    <span>{{ t().contact.btnSending }}</span>
                  } @else {
                    <span>{{ t().contact.btnSend }}</span>
                    <i class="w-4 h-4" data-lucide="arrow-right"></i>
                  }
                </button>
              </div>

              @if (successMessage()) {
                <div class="p-4 bg-emerald-950/60 border border-emerald-500/50 rounded-xl text-emerald-400 text-xs font-mono mt-4 flex items-start gap-3 backdrop-blur">
                  <i class="w-4 h-4 mt-0.5 text-emerald-400 shrink-0" data-lucide="check-circle"></i>
                  <div>
                    <p class="font-bold">{{ successMessage() }}</p>
                    @if (ticketId()) {
                      <p class="text-neutral-400 mt-1 text-[11px]">{{ t().contact.ticketPrefix }} <span class="text-white font-semibold">{{ ticketId() }}</span></p>
                    }
                  </div>
                </div>
              }

              @if (errorMessage()) {
                <div class="p-4 bg-red-950/60 border border-brand-red/50 rounded-xl text-red-400 text-xs font-mono mt-4 flex items-start gap-3 backdrop-blur">
                  <i class="w-4 h-4 mt-0.5 text-brand-red shrink-0" data-lucide="alert-circle"></i>
                  <span>{{ errorMessage() }}</span>
                </div>
              }

            </form>
          </div>

        </div>
      </div>
    </section>
  `
})
export class ContactComponent implements AfterViewInit {
  private api = inject(ApiService);
  private ts = inject(TranslationService);

  t = this.ts.t;

  formData: ContactPayload = {
    name: '',
    email: '',
    phone: '',
    role: '',
    message: ''
  };

  loading = signal<boolean>(false);
  successMessage = signal<string | null>(null);
  errorMessage = signal<string | null>(null);
  ticketId = signal<string | null>(null);

  ngAfterViewInit() {
    refreshIcons();
  }

  onSubmit() {
    if (!this.formData.name || !this.formData.email || !this.formData.message) {
      this.errorMessage.set(this.t().contact.validationError);
      return;
    }

    this.loading.set(true);
    this.errorMessage.set(null);
    this.successMessage.set(null);

    this.api.sendContact(this.formData).subscribe({
      next: (res) => {
        this.loading.set(false);
        this.successMessage.set(res.message);
        this.ticketId.set(res.ticketId || null);
        this.formData = {
          name: '',
          email: '',
          phone: '',
          role: '',
          message: ''
        };
        refreshIcons();
      },
      error: (err) => {
        this.loading.set(false);
        if (err.error && err.error.error) {
          this.errorMessage.set(err.error.error);
        } else {
          this.errorMessage.set(this.t().contact.serverOfflineError);
        }
        refreshIcons();
      }
    });
  }
}
