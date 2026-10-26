import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of, throwError } from 'rxjs';

export interface ProductSpecs {
  weight?: string;
  batteryLife?: string;
  material?: string;
  dof?: string;
  gripForce?: string;
  actuators?: string;
  supportCapacity?: string;
  samplingRate?: string;
  channels?: string;
  latency?: string;
  encryption?: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  specs: ProductSpecs;
  features: string[];
}

export interface Grip {
  id: string;
  name: string;
  icon: string;
  description: string;
  force: string;
  speed: string;
  recommendedUse: string;
  fingersActive: string[];
}

export interface ContactPayload {
  name: string;
  email: string;
  phone?: string;
  role?: string;
  reason?: string;
  message: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  count?: number;
}

export interface ContactResponse {
  success: boolean;
  message: string;
  ticketId?: string;
  error?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private http = inject(HttpClient);
  // En producción (tu dominio hosting con PHP) usa '/api', y en tu PC local usa 'http://localhost:3000/api'
  private readonly baseUrl = (typeof window !== 'undefined' && window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1')
    ? '/api'
    : 'http://localhost:3000/api';

  getContent(lang: string = 'es'): Observable<{ success: boolean; data: any }> {
    return this.http.get<{ success: boolean; data: any }>(`${this.baseUrl}/content?lang=${lang}`);
  }

  getHealth(): Observable<any> {
    return this.http.get(`${this.baseUrl}/health`);
  }

  getProducts(): Observable<ApiResponse<Product[]>> {
    return this.http.get<ApiResponse<Product[]>>(`${this.baseUrl}/products`);
  }

  getGrips(): Observable<ApiResponse<Grip[]>> {
    return this.http.get<ApiResponse<Grip[]>>(`${this.baseUrl}/grips`);
  }

  sendContact(payload: ContactPayload): Observable<ContactResponse> {
    return this.http.post<ContactResponse>(`${this.baseUrl}/contact`, payload).pipe(
      catchError(err => {
        // En entorno local (si no tienes un servidor backend activo en tu máquina)
        if (typeof window !== 'undefined' && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')) {
          const localTicket = 'MSG-LOCAL-' + Math.random().toString(36).substring(2, 8).toUpperCase();
          const localMessages = JSON.parse(localStorage.getItem('pro_stasis_local_messages') || '[]');
          localMessages.unshift({ ...payload, id: localTicket, createdAt: new Date().toISOString() });
          localStorage.setItem('pro_stasis_local_messages', JSON.stringify(localMessages, null, 2));

          return of({
            success: true,
            message: '¡Mensaje enviado y registrado con éxito en local!',
            ticketId: localTicket
          });
        }
        return throwError(() => err);
      })
    );
  }
}
