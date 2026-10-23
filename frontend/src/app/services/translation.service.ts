import { Injectable, signal, computed, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TRANSLATIONS, Language, TranslationSchema } from '../data';

export type { Language, TranslationSchema };

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private http = inject(HttpClient);
  private readonly baseUrl = (typeof window !== 'undefined' && window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1')
    ? '/api'
    : 'http://localhost:3000/api';

  currentLang = signal<Language>('es');
  
  // Almacén reactivo de datos: se actualiza con la respuesta del backend
  private dynamicTranslations = signal<Record<Language, TranslationSchema>>(TRANSLATIONS);

  t = computed(() => this.dynamicTranslations()[this.currentLang()]);

  constructor() {
    this.fetchContentFromBackend(this.currentLang());
  }

  fetchContentFromBackend(lang: Language): void {
    this.http.get<{ success: boolean; data: TranslationSchema }>(`${this.baseUrl}/content?lang=${lang}`)
      .subscribe({
        next: (res) => {
          if (res && res.success && res.data) {
            this.dynamicTranslations.update(current => ({
              ...current,
              [lang]: res.data
            }));
          }
        },
        error: () => {
          // Si el backend no está disponible o estamos en desarrollo offline, mantiene el contenido local
        }
      });
  }

  toggleLanguage(): void {
    const nextLang: Language = this.currentLang() === 'es' ? 'en' : 'es';
    this.setLanguage(nextLang);
  }

  setLanguage(lang: Language): void {
    this.currentLang.set(lang);
    this.fetchContentFromBackend(lang);
  }
}
