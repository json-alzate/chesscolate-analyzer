import { Component } from '@angular/core';

import { ReadPgnService } from '../../services/read-pgn.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export default class HomeComponent {

  constructor(private readPgnService: ReadPgnService) { }

  async readFile() {

    try {
      const pgnText = await this.readPgnService.loadPgnFile();

      const partidas: any[] = [];
      const juegos = pgnText.split(/\n\n(?=\[Event)/); // Divide las partidas en bloques

      juegos.forEach((juego) => {
        partidas.push(juego);
      });

      console.log(partidas[0]);

    } catch (error) {
      console.error('Error al cargar el PGN:', error);
    }
  }

  /*
    Se calcula en que columna se avanza mas un peon
  */
  columnPawnAdvanced(games: any[]) {

    for (const game of games) {

    }

  }




}
