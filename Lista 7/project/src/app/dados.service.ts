import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DadosService {
  private url = 'http://localhost:3000/dados';

  constructor(private http: HttpClient) { }

  enviarDados(dados: any) {
    return this.http.post(this.url, dados);
  }

  obterDados() {
    return this.http.get(this.url);
  }
}
