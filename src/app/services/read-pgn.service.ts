import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { firstValueFrom } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ReadPgnService {

  constructor(
    private http: HttpClient
  ) { }


  async loadPgnFile(): Promise<string> {
    try {
      const pgn = await firstValueFrom(
        this.http.get('assets/chess.pgn', { responseType: 'text' })
      );
      return pgn;
    } catch (error) {
      console.error('Error cargando el archivo PGN:', error);
      throw error;
    }
  }

}
